<script setup lang="ts">
import { ref } from 'vue';
import IconsSidebar from './IconsSidebar.vue';
import InputSearch from '../base/InputSearch.vue';

// Mock data for Sidebar
const categories = {
  'communication': 10,
  'ui': 20,
  'files': 15
};
const totalIcons = 45;
const selectedCategory = ref('all');
const customizeColor = ref('#000000');
const customizeStrokeWidth = ref(2);
const customizeSize = ref(24);
const showDescription = ref(false);

// Mock state for InputSearch
const searchQuery = ref('');

function handleReset() {
  selectedCategory.value = 'all';
  customizeColor.value = '#000000';
  customizeStrokeWidth.value = 2;
  customizeSize.value = 24;
  showDescription.value = false;
}
</script>

<template>
  <div class="debug-step2">
    <h1>Step 2: Sidebar & Input Check</h1>
    
    <div class="layout-test">
      <div class="sidebar-wrapper">
        <h2>Sidebar</h2>
        <IconsSidebar 
          :categories="categories"
          :totalIcons="totalIcons"
          v-model:selectedCategory="selectedCategory"
          v-model:customizeColor="customizeColor"
          v-model:customizeStrokeWidth="customizeStrokeWidth"
          v-model:customizeSize="customizeSize"
          v-model:showDescription="showDescription"
          @reset="handleReset"
        />
      </div>

      <div class="content-wrapper">
        <h2>Input Search</h2>
        <InputSearch
          v-model="searchQuery"
          placeholder="Search icons..."
        />
        
        <div class="debug-output">
          <h3>Current State:</h3>
          <p>Selected Category: {{ selectedCategory }}</p>
          <p>Color: {{ customizeColor }}</p>
          <p>Stroke: {{ customizeStrokeWidth }}</p>
          <p>Size: {{ customizeSize }}</p>
          <p>Show Desc: {{ showDescription }}</p>
          <p>Search Query: {{ searchQuery }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.debug-step2 {
  padding: 20px;
}

.layout-test {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
}

.sidebar-wrapper {
  width: 280px;
  border-right: 1px solid #eee;
  padding-right: 20px;
}

.content-wrapper {
  flex: 1;
}

.debug-output {
  margin-top: 30px;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
}
</style>
