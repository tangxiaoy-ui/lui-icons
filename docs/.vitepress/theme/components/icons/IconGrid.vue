<script setup lang="ts">
import type { IconEntity } from '../../types';
import IconItem from './IconItem.vue';

const emit = defineEmits(['setActiveIcon']);

defineProps<{
  icons: IconEntity[];
  activeIcon?: string;
  overlayMode?: boolean;
  hideIcons?: boolean;
  showDescription?: boolean;
}>();

function setActiveIcon(name: string) {
  emit('setActiveIcon', name);
}
</script>

<template>
  <div
    class="icons"
    :class="{ 'show-description': showDescription }"
  >
    <div
      class="icon"
      v-for="icon in icons"
      :key="icon.name"
    >
      <IconItem
        :iconNode="icon.iconNode"
        :name="icon.name"
        :externalLibrary="icon.externalLibrary"
        :categories="icon.categories"
        :tags="icon.tags"
        @setActiveIcon="setActiveIcon"
        :active="activeIcon === icon.name"
        customizable
        :overlayMode="overlayMode"
        :hideIcon="hideIcons"
        :showDescription="showDescription"
      />
    </div>
  </div>
</template>

<style>
.icons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
  gap: 8px;
  width: 100%;
}

.icons.show-description {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.icon {
  aspect-ratio: 1/1;
  position: relative;
}

.icons.show-description .icon {
  aspect-ratio: auto;
  width: 100%;
  height: 104px;
}
</style>
