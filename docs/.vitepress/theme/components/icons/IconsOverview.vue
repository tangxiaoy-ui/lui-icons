<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted, watch } from 'vue';
import type { IconEntity } from '../../types';
import { useElementSize, useEventListener, useVirtualList } from '@vueuse/core';
import { useRoute } from 'vitepress';
import IconGrid from './IconGrid.vue';
import InputSearch from '../base/InputSearch.vue';
import useSearch from '../../composables/useSearch';
import useSearchInput from '../../composables/useSearchInput';
import useSearchShortcut from '../../utils/useSearchShortcut';
import StickyBar from './StickyBar.vue';
import useFetchTags from '../../composables/useFetchTags';
import useFetchCategories from '../../composables/useFetchCategories';
import chunkArray from '../../utils/chunkArray';
import CarbonAdOverlay from './CarbonAdOverlay.vue';
import useSearchPlaceholder from '../../utils/useSearchPlaceholder.ts';
import IconsSidebar from './IconsSidebar.vue';

const ICON_SIZE = 56;
const ICON_GRID_GAP = 8;

const props = defineProps<{
    icons: IconEntity[];
  }>();

// Customization State
const selectedCategory = ref('all');
const customizeColor = ref('#000000');
const customizeStrokeWidth = ref(2);
const customizeSize = ref(24);
const showDescription = ref(false);

const activeIconName = ref(null);

const { execute: fetchTags, data: tags } = useFetchTags();
const { execute: fetchCategories, data: categories } = useFetchCategories();

const overviewEl = ref<HTMLElement | null>(null);
const { width: containerWidth } = useElementSize(overviewEl);

// CSS Vars for customization
const cssVars = computed(() => ({
  '--customize-color': customizeColor.value,
  '--customize-strokeWidth': customizeStrokeWidth.value,
  '--customize-size': customizeSize.value,
}));

const columnSize = computed(() => {
  return Math.floor(containerWidth.value / (ICON_SIZE + ICON_GRID_GAP));
});

const initialGridItems = computed(() => {
  if (containerWidth.value === 0) return 120;
  const itemsPerRow = columnSize.value || 10;
  const visibleRows = Math.ceil(window.innerHeight / (ICON_SIZE + ICON_GRID_GAP));
  return Math.min(itemsPerRow * (visibleRows + 2), 200);
});

const mappedIcons = computed(() => {
  // If no icons provided, return empty
  if (!props.icons) return [];

  return props.icons.map((icon) => {
    const iconTags = tags.value?.[icon.name] ?? [];
    const iconCategories = categories.value?.[icon.name] ?? [];

    return {
      ...icon,
      tags: iconTags,
      categories: iconCategories,
    };
  });
});

// Calculate categories count based on ALL icons
const categoriesCount = computed(() => {
  const counts: Record<string, number> = {};
  mappedIcons.value.forEach(icon => {
    if (icon.categories) {
      icon.categories.forEach(cat => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    }
  });
  return counts;
});

// Filter by Category first
const categoryFilteredIcons = computed(() => {
  if (selectedCategory.value === 'all') {
    return mappedIcons.value;
  }
  return mappedIcons.value.filter(icon => {
    return icon.categories && icon.categories.includes(selectedCategory.value);
  });
});

const { searchInput, searchQuery, searchQueryDebounced } = useSearchInput();

const { shortcutText: kbdSearchShortcut } = useSearchShortcut(() => {
  searchInput.value?.focus();
});

// Search within Category Filtered results
const searchResults = useSearch(searchQueryDebounced, categoryFilteredIcons, [
  { name: 'name', weight: 3 },
  { name: 'aliases', weight: 3 },
  { name: 'tags', weight: 2 },
  { name: 'categories', weight: 1 },
]);

const searchPlaceholder = useSearchPlaceholder(searchQuery, searchResults);

const chunkedIcons = computed(() => {
  // Ensure columnSize is at least 1 to avoid division by zero or infinite loops
  const size = Math.max(1, columnSize.value);
  return chunkArray(searchResults.value, size);
});

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(chunkedIcons, {
  itemHeight: ICON_SIZE + ICON_GRID_GAP,
  overscan: 10,
});

onMounted(() => {
  containerProps.ref.value = document.documentElement;
  useEventListener(window, 'scroll', containerProps.onScroll);

  const route = useRoute();
  if (route.data?.relativePath && window.location.search.includes('focus')) {
    searchInput.value?.focus();
  }
  
  // Ensure data is fetched if not present (though our useFetchCategories uses local json now)
  if (tags.value == null) fetchTags();
  if (categories.value == null) fetchCategories();
});

function setActiveIconName(name: string) {
  activeIconName.value = name;
}

function onFocusSearchInput() {
  // No-op or fetch fresh data if needed
}

const NoResults = defineAsyncComponent(() => import('./NoResults.vue'));
const IconDetailOverlay = defineAsyncComponent(() => import('./IconDetailOverlay.vue'));

watch(searchQueryDebounced, () => {
  scrollTo(0);
});

watch(selectedCategory, () => {
  scrollTo(0);
});

function handleCloseDrawer() {
  setActiveIconName('');
  window.history.pushState({}, '', '/icons/');
}

function handleReset() {
  selectedCategory.value = 'all';
  customizeColor.value = '#000000';
  customizeStrokeWidth.value = 2;
  customizeSize.value = 24;
  showDescription.value = false;
}
</script>

<template>
  <div class="overview-wrapper" :style="cssVars">
    <!-- Sidebar -->
    <IconsSidebar 
      :categories="categoriesCount"
      :totalIcons="mappedIcons.length"
      v-model:selectedCategory="selectedCategory"
      v-model:customizeColor="customizeColor"
      v-model:customizeStrokeWidth="customizeStrokeWidth"
      v-model:customizeSize="customizeSize"
      v-model:showDescription="showDescription"
      @reset="handleReset"
      class="desktop-sidebar"
    />

    <div class="main-content">
      <div ref="overviewEl" class="overview-container">
        <!-- Debug Info (Hidden in Production) -->
        <!-- <div style="color: red; font-weight: bold;">Debug: {{ icons?.length }} icons loaded</div> -->

        <StickyBar>
          <InputSearch
            :placeholder="`Search ${categoryFilteredIcons.length} icons…`"
            v-model="searchQuery"
            ref="searchInput"
            :shortcut="kbdSearchShortcut"
            class="input-wrapper"
            @focus="onFocusSearchInput"
          />
        </StickyBar>

        <NoResults
          v-if="searchPlaceholder.isNoResults"
          :searchQuery="searchPlaceholder.query"
          :isBrandSearch="searchPlaceholder.isBrand"
          @clear="searchQuery = ''"
        />

        <div v-else-if="list.length === 0 && !searchPlaceholder.isNoResults" class="loading-state">
           <!-- Empty state or loading -->
           <div v-if="icons?.length === 0">No icons loaded. Please check data source.</div>
        </div>

        <div
          v-else
          v-bind="wrapperProps"
          class="icon-grid-wrapper"
        >
          <IconGrid
            v-for="{ index, data: iconsRow } in list"
            :key="index"
            overlayMode
            :icons="iconsRow"
            :activeIcon="activeIconName"
            @setActiveIcon="setActiveIconName"
            :customizable="true" 
          />
        </div>
      </div>
    </div>
  </div>

  <IconDetailOverlay
    :iconName="activeIconName"
    @close="handleCloseDrawer"
  />

  <CarbonAdOverlay :drawerOpen="!!activeIconName" />
</template>

<style scoped>
.overview-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
}

.desktop-sidebar {
  display: none;
}

@media (min-width: 960px) {
  .desktop-sidebar {
    display: flex;
    flex-shrink: 0;
  }
}

.main-content {
  flex: 1;
  min-width: 0;
  padding-bottom: 64px;
}

.overview-container {
  position: relative;
}

.icons {
  margin-bottom: 8px;
}

.icon-grid-wrapper {
  margin-top: 16px;
}

.input-wrapper {
  width: 100%;
}

.loading-state {
  padding: 32px;
  text-align: center;
  color: var(--vp-c-text-2);
}
</style>
