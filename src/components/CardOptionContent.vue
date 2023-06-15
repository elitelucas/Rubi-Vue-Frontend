<script setup lang="ts">
import { useTheme } from "vuetify/lib/framework.mjs";

const props = defineProps({
  iconImg: String,
  title: String,
  subTitle: String,
  showArrow: Boolean,
  paddingIcon: Number,
  hasBorder: Boolean,
  toggle: Boolean,
  bgIconColorLight: String,
  bgIconColorDark: String,
});

const theme = useTheme();

const bg = computed(() => {
  if (theme.global.current.value.dark && props.bgIconColorDark)
    return props.bgIconColorDark;
  if (!theme.global.current.value.dark && props.bgIconColorLight)
    return props.bgIconColorLight;

  return null;
});
</script>

<template>
  <div class="card-option-content">
    <img
      :src="props.iconImg"
      :style="`padding: ${props.paddingIcon || 0}px; ${
        hasBorder ? '' : 'border: none !important;'
      } ${bg ? `background-color:${bg};` : ''}`"
    />
    <div>
      <span class="text-h3">{{ props.title }}</span>
      <span class="text-p-medium">{{ props.subTitle }}</span>
    </div>
    <VSpacer />
    <div v-if="showArrow" style="padding-right: 38px">
      <VIcon :icon="toggle ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@styles/responsive.scss";

.card-option-content {
  height: 144px;
  background-color: rgb(var(--v-theme-background-card));
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 67px;

  @include media-query("sm") {
    padding-left: 5px;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: -2px;

    & .text-p-medium {
      color: rgba(
        var(--v-theme-on-background),
        var(--v-high-emphasis-opacity)
      ) !important;
    }
  }

  & img {
    height: 79px;
    width: 79px;
    border-radius: 6px;
    border: 1px solid #4b4b4b;

    @include media-query("sm") {
      height: 40px;
      width: 40px;
    }

    .v-theme--dark & {
      border-color: white;
    }
  }
}
</style>
