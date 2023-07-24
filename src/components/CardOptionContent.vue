<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs'

const props = defineProps({
  iconImg: String,
  title: String,
  subTitle: String,
  showArrow: Boolean,
  paddingIcon: Number,
  hasBorder: Boolean,
  bgIconColorLight: String,
  bgIconColorDark: String,
  buttonMode: Boolean,
})

const emit = defineEmits(['click'])

const theme = useTheme()

const bg = computed(() => {
  if (theme.global.current.value.dark && props.bgIconColorDark)
    return props.bgIconColorDark
  if (!theme.global.current.value.dark && props.bgIconColorLight)
    return props.bgIconColorLight

  return null
})
</script>

<template>
  <VExpansionPanels>
    <VExpansionPanel
      :disabled="buttonMode"
      :style="buttonMode ? `cursor: pointer !important` : ''"
      elevation="0"
      @click="emit('click')"
    >
      <VExpansionPanelTitle :expand-icon="buttonMode ? 'none' : 'tabler-chevron-up'">
        <div class="card-option-content">
          <img
            :src="props.iconImg"
            :style="`padding: ${props.paddingIcon || 0}px; ${
              hasBorder ? '' : 'border: none !important;'
            } ${bg ? `background-color:${bg};` : ''}`"
          >
          <div>
            <span class="text-h5">{{ props.title }}</span>
            <span class="text-p text-text-color-body">{{ props.subTitle }}</span>
          </div>
        </div>
      </VExpansionPanelTitle>
      <VExpansionPanelText style="background-color: rgb(var(--v-theme-background-body))">
        <slot />
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<style scoped lang="scss">
@import "@styles/responsive.scss";

.card-option-content {
  height: 75px;
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

    & .text-h3 {
      @include media-query("sm") {
        font-size: 20px !important;
      }
    }

    & .text-p-medium {
      color: rgba(
        var(--v-theme-on-background),
        var(--v-high-emphasis-opacity)
      ) !important;

      @include media-query("sm") {
        font-size: 10px;
      }
    }
  }

  & img {
    height: 50px;
    width: 50px;
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
