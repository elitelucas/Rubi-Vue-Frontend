<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'

interface Props {
  message?: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 400,
})
</script>

<template>
  <div class="app-logo-animated">
    <Vue3Lottie
      animation-link="/images/lotties/logo.json"
      :height="size"
      :width="size"
      :renderer-settings="{
        scaleMode: 'noScale',
      }"
    />
    <span v-if="props.message">
      {{ props.message }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
 .app-logo-animated {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 }
</style>
