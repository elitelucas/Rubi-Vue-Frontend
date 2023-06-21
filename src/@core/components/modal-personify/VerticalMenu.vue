<script setup lang="ts">
import VerticalMenuItem from "./VerticalMenuItem.vue";
defineProps({
  items: Array,
  step: String,
});
</script>

<template>
  <VRow>
    <VCol cols="12" lg="12">
      <VerticalMenuItem
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :sub-title="item.subtitle"
        :icon="item.icon"
        :selected="item.title.toLowerCase() == step"
      />
    </VCol>
  </VRow>
</template>
