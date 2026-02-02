<script setup lang="ts">
import { ref, computed } from 'vue';
import iconNodes from '../../../data/iconNodes';

const icons = computed(() => Object.keys(iconNodes));
</script>

<template>
  <div class="minimal-icons">
    <h1>Minimal Icons Test</h1>
    <p>Total Icons: {{ icons.length }}</p>
    <ul>
      <li v-for="name in icons.slice(0, 10)" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.minimal-icons {
  padding: 20px;
  border: 2px solid green;
}
</style>
