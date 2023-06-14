<script setup lang="ts">
interface Props {
  message?: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 400,
})
</script>

<template>
  <div class="loading-logo">
    <img
      src="/images/gif/logo_loading.gif"
      :width="props.size"
    >
    <span v-if="props.message">
      {{ props.message }}
    </span>
  </div>
</template>
