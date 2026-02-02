<script setup lang="ts">
import { IconEntity } from '../../types';
import iconNodes from '../../../data/iconNodes';
import IconsOverview from './IconsOverview.vue'
import useIconsWithExternalLibs from '../../composables/useIconsWithExternalLibs'

const iconsData: IconEntity[] = Object.entries(iconNodes).map(([name, iconNode]) => ({
  name,
  iconNode,
  tags: [],
  categories: [],
  contributors: [],
} as unknown as IconEntity));
const icons = useIconsWithExternalLibs(iconsData)
</script>

<template>
  <div class="icons-page">
    <IconsOverview :icons="icons" />
  </div>
</template>

<style scoped>
.icons-page {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 24px;
}

@media (min-width: 960px) {
  .icons-page {
    padding: 32px;
  }
}
</style>
