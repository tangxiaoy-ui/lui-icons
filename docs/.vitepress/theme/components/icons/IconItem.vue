<script setup lang="ts">
import { computed } from 'vue';
import createLUIIcon from 'lui-icon-vue-next/src/createLUIIcon';
import { useMediaQuery } from '@vueuse/core';
import { useRouter } from 'vitepress';
import getSVGIcon from '../../utils/getSVGIcon';
import useConfetti from '../../composables/useConfetti';
import Tooltip from '../base/Tooltip.vue';
import { diamond } from '../../../data/iconNodes';

const downloadText = 'Download!';
const copiedText = 'Copied!';

export type IconNode = [elementName: string, attrs: Record<string, string>][];

const props = defineProps<{
  name: string;
  iconNode: IconNode;
  active: boolean;
  externalLibrary?: string;
  customizable?: boolean;
  overlayMode?: boolean;
  hideIcon?: boolean;
  showDescription?: boolean;
  categories?: string[];
  tags?: string[];
}>();

const emit = defineEmits(['setActiveIcon']);

const { go } = useRouter();
const showOverlay = useMediaQuery('(min-width: 860px)');
const { animate, confetti, confettiText } = useConfetti();

const icon = computed(() => {
  if (!props.name || !props.iconNode) return null;
  return createLUIIcon(props.name, props.iconNode);
});

const href = computed(() =>
  props.externalLibrary ? `/icons/${props.externalLibrary}/${props.name}` : `/icons/${props.name}`,
);

async function navigateToIcon(event) {
  if (event.shiftKey) {
    event.preventDefault();
    const svgString = getSVGIcon(event.target.firstChild, {
      class: `lucide lucide-${props.name}`,
    });

    await navigator.clipboard.writeText(svgString);

    confettiText.value = copiedText;
    confetti();
    return;
  }

  if (props.overlayMode && showOverlay.value) {
    event.preventDefault();

    window.history.pushState(
      {},
      '',
      props.externalLibrary
        ? `/icons/${props.externalLibrary}/${props.name}`
        : `/icons/${props.name}`,
    );
    emit(
      'setActiveIcon',
      props.externalLibrary ? `${props.externalLibrary}:${props.name}` : props.name,
    );
  } else {
    event.preventDefault();
    go(
      props.externalLibrary
        ? `/icons/${props.externalLibrary}/${props.name}`
        : `/icons/${props.name}`,
    );
  }
}

const DiamondIcon = createLUIIcon('Diamond', diamond as any);
</script>

<template>
  <Tooltip
    :title="name"
    :disabled="showDescription"
  >
    <a
      class="icon-button confetti-button vp-raw"
      @click="navigateToIcon"
      :class="{ active, animate, 'with-description': showDescription }"
      :aria-label="name"
      :data-confetti-text="confettiText"
      ref="ref"
    >
      <KeepAlive>
        <component
          v-if="!hideIcon"
          :is="icon"
          class="lucide-icon"
          :class="{
            customizable,
          }"
        />
      </KeepAlive>
      <div
        v-if="externalLibrary"
        class="floating-diamond"
        aria-hidden="true"
      >
        <DiamondIcon
          fill="currentColor"
          :size="8"
        />
      </div>
      <div
        v-if="showDescription"
        class="icon-info"
      >
        <span class="icon-name">{{ name }}</span>
        <div class="icon-desc">
          <div
            v-if="categories && categories.length"
            class="desc-item"
            :title="`Category: ${categories.join(', ')}`"
          >
            <strong>Category:</strong> {{ categories.join(', ') }}
          </div>
          <div
            v-if="tags && tags.length"
            class="desc-item"
            :title="`Tags: ${tags.join(', ')}`"
          >
            <strong>Tags:</strong> {{ tags.join(', ') }}
          </div>
        </div>
      </div>
    </a>
  </Tooltip>
</template>

<style src="./confetti.css" />

<style scoped>
.icon-button {
  position: relative;
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  border-radius: 6px;
  background-color: var(--vp-c-bg-alt);
  display: inline-flex;
  width: 56px;
  height: 56px;
  font-size: 24px;
  color: var(--vp-c-text-1);
}

.floating-diamond {
  position: absolute;
  top: 4px;
  right: 4px;
  color: var(--vp-c-brand);
}

.confetti-button:before,
.confetti-button:after {
  z-index: 100;
}

.confetti-button:before {
  line-height: 80px;
}

.icon-button:active {
  transition:
    color 0.1s,
    border-color 0.1s,
    background-color 0.1s;
}

.icon-button.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.icon-button.big {
  border-radius: 24px;
  padding: 0 24px;
  line-height: 46px;
  font-size: 16px;
}

.icon-button:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.icon-button:active {
  border-color: var(--vp-button-alt-active-border);
  color: var(--vp-button-alt-active-text);
  background-color: var(--vp-button-alt-active-bg);
}

.icon-button.active {
  border-color: var(--vp-c-brand);
}

.lucide-icon {
  margin: auto;
  pointer-events: none;
}
.lucide-icon.customizable {
  will-change: width, height;
  width: calc(var(--customize-size, 12) * 1px);
  height: calc(var(--customize-size, 12) * 1px);
  max-width: 3rem;
  max-height: 3rem;
}

/* Override fill color for fill-based icons */
.lucide-icon.customizable :deep(path),
.lucide-icon.customizable :deep(circle),
.lucide-icon.customizable :deep(rect),
.lucide-icon.customizable :deep(polygon),
.lucide-icon.customizable :deep(ellipse) {
  fill: var(--customize-color, currentColor);
}

/* With description mode */
.icon-button.with-description {
  width: 100%; /* Force full width in grid cell */
  height: 100%; /* Fill height */
  min-width: 56px;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
}

.icon-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  overflow: hidden; /* Prevent overflow */
}

.icon-name {
  font-size: 10px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
}

.icon-desc {
  font-size: 10px;
  color: var(--vp-c-text-3);
  text-align: left;
  width: 100%;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 4px;
  margin-top: 2px;
}

.desc-item {
  margin-bottom: 2px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.desc-item strong {
  font-weight: 600;
  color: var(--vp-c-text-2);
}
</style>
