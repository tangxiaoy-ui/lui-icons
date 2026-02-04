<script setup lang="ts">
export type IconNode = [elementName: string, attrs: Record<string, string>][];

const props = defineProps<{
  name?: string;
  tags?: string[];
  categories?: string[];
  iconNode: IconNode;
}>();

function renderNode(node: IconNode) {
  return node.map(([elementName, attrs]) => {
    return {
      type: elementName,
      attrs: attrs,
    };
  });
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <template
      v-for="[elementName, attrs] in iconNode"
      :key="elementName"
    >
      <component
        :is="elementName"
        v-bind="attrs"
      />
    </template>
  </svg>
</template>
