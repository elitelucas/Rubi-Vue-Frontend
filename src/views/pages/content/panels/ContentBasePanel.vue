<script setup lang="ts">
import { computed } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

const props = defineProps({
  title: String,
  icon: String,
  modelValue: Boolean,
});
const emits = defineEmits(["update:modelValue"]);

const modalValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <VNavigationDrawer
    v-model="modalValue"
    temporary
    border="0"
    location="end"
    width="600"
    :scrim="false"
    class="app-customizer"
  >
    <!-- 👉 Header -->
    <div
      class="customizer-heading d-flex align-center justify-space-between"
      style="gap: 10px"
    >
      <VIcon
        size="60"
        :icon="icon"
        color="text-color-body"
        class="svg-strock-1"
      />
      <span class="text-display-4">{{ title }}</span>
      <VSpacer />
      <IconBtn class="me-2">
        <VIcon
          size="20"
          class="cursor-pointer"
          icon="tabler-x"
          color="text-color-body"
          @click="modalValue = false"
        />
      </IconBtn>
    </div>
    <VDivider />
    <!-- 👉 body -->
    <div class="px-5 pt-5 pb-5">
      <slot />
    </div>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped></style>
