<script setup lang="ts">
interface Props {
  message?: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 400,
})

const lottieContainer = ref<HTMLDivElement>()

onMounted(() => {
  window.lottie.loadAnimation({
    container: lottieContainer.value,
    path: '/images/lotties/logo.json',
    renderer: 'svg', // Specify the renderer type (e.g., svg, canvas, html)
    loop: true, // Set whether the animation should loop
    autoplay: true, // Set whether the animation should play automatically
  })
})
</script>

<template>
  <div class="app-logo-animated">
    <div
      ref="lottieContainer"
      :width="props.size"
      class="lottie"
      :style="`--logo-animation-size: ${size}px`"
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
