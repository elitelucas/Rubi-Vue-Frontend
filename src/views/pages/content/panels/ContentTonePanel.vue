<script setup lang="ts">
import { computed } from "vue";
import ToneStep from "@/@core/components/modal-personify/steps/Tone.vue";
import ContentBasePanel from "./ContentBasePanel.vue";
const props = defineProps({
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
  <ContentBasePanel
    v-model="modalValue"
    title="Edit Tone"
    icon="tabler-access-point"
  >
    <ToneStep from-panel @on-save="modalValue = false" />
  </ContentBasePanel>
</template>

<style lang="scss" scoped></style>
