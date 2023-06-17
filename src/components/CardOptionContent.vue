<script setup lang="ts">
import { useTheme } from "vuetify/lib/framework.mjs";

const emit = defineEmits(["click"]);

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
  <v-expansion-panels>
    <v-expansion-panel :disabled="buttonMode" @click="emit('click')">
      <v-expansion-panel-title
        :expand-icon="buttonMode ? 'none' : 'tabler-chevron-up'"
      >
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
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text
        style="background-color: rgb(var(--v-theme-background-body))"
      >
        <slot />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
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
