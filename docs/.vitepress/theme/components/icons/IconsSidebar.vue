<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  categories: Record<string, number>;
  totalIcons: number;
  selectedCategory: string;
  customizeColor: string;
  customizeStrokeWidth: number;
  customizeSize: number;
  showDescription: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:selectedCategory', value: string): void;
  (e: 'update:customizeColor', value: string): void;
  (e: 'update:customizeStrokeWidth', value: number): void;
  (e: 'update:customizeSize', value: number): void;
  (e: 'update:showDescription', value: boolean): void;
  (e: 'reset'): void;
}>();

const sortedCategories = computed(() => {
  return Object.keys(props.categories).sort();
});

function handleCategoryClick(category: string) {
  emit('update:selectedCategory', category);
}

function handleReset() {
  emit('reset');
}
</script>

<template>
  <aside class="sidebar">
    <div class="customizer">
      <div class="customizer-header">
        <span class="customizer-title">自定义</span>
        <button class="reset-btn" @click="handleReset" title="恢复默认">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"/><path d="M3 3v9h9"/></svg>
        </button>
      </div>
      
      <div class="control-group">
        <div class="control-label">
          <span>颜色</span>
          <span class="control-value">{{ customizeColor }}</span>
        </div>
        <input 
          type="color" 
          :value="customizeColor"
          @input="emit('update:customizeColor', ($event.target as HTMLInputElement).value)"
        >
      </div>

      <div class="control-group">
        <div class="control-label">
          <span>描边粗细</span>
          <span class="control-value">{{ customizeStrokeWidth }}px</span>
        </div>
        <input 
          type="range" 
          min="0.5" 
          max="3" 
          step="0.25" 
          :value="customizeStrokeWidth"
          @input="emit('update:customizeStrokeWidth', parseFloat(($event.target as HTMLInputElement).value))"
        >
      </div>

      <div class="control-group">
        <div class="control-label">
          <span>大小</span>
          <span class="control-value">{{ customizeSize }}px</span>
        </div>
        <input 
          type="range" 
          min="16" 
          max="48" 
          step="4" 
          :value="customizeSize"
          @input="emit('update:customizeSize', parseFloat(($event.target as HTMLInputElement).value))"
        >
      </div>
      
      <div class="toggle-group">
        <span class="toggle-label">显示描述</span>
        <label class="switch">
          <input 
            type="checkbox" 
            :checked="showDescription"
            @change="emit('update:showDescription', ($event.target as HTMLInputElement).checked)"
          >
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <div class="categories-section">
      <div class="categories-title">分类</div>
      <ul class="category-list">
        <li 
          class="category-item" 
          :class="{ active: selectedCategory === 'all' }"
          @click="handleCategoryClick('all')"
        >
          <span>所有图标</span>
          <span class="count">{{ totalIcons }}</span>
        </li>
        <li 
          v-for="cat in sortedCategories" 
          :key="cat"
          class="category-item"
          :class="{ active: selectedCategory === cat }"
          @click="handleCategoryClick(cat)"
        >
          <span>{{ cat }}</span>
          <span class="count">{{ categories[cat] }}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  position: sticky;
  top: 96px; /* Adjust based on header height */
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 16px;
}

/* Customizer */
.customizer {
  background: var(--vp-c-bg-alt);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.customizer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.customizer-title { 
  font-weight: 600; 
  font-size: 14px; 
  color: var(--vp-c-text-1);
}

.reset-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vp-c-text-2);
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.reset-btn:hover { 
  background: var(--vp-c-bg-soft); 
  color: var(--vp-c-text-1); 
}

.control-group { margin-bottom: 16px; }
.control-group:last-child { margin-bottom: 0; }

.control-label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.control-value { font-family: var(--vp-font-family-mono); }

input[type="range"] {
  width: 100%;
  accent-color: var(--vp-c-brand);
}

input[type="color"] {
  width: 100%;
  height: 36px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 2px;
  cursor: pointer;
  background-color: var(--vp-c-bg);
}

.toggle-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.toggle-label {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

/* Switch Component */
.switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--vp-c-bg-soft);
  transition: .4s;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

input:checked + .slider {
  background-color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

input:checked + .slider:before {
  transform: translateX(16px);
}

/* Categories */
.categories-section {
  flex: 1;
  overflow-y: auto;
}

.categories-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}

.category-list { 
  list-style: none; 
  padding: 0;
  margin: 0;
}

.category-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  margin-bottom: 2px;
}

.category-item:hover { 
  background: var(--vp-c-bg-alt); 
  color: var(--vp-c-text-1); 
}

.category-item.active { 
  background: var(--vp-c-brand-soft); 
  color: var(--vp-c-brand); 
}

.category-item .count { 
  font-size: 12px; 
  opacity: 0.7; 
  font-variant-numeric: tabular-nums;
}
</style>
