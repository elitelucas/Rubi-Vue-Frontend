<script setup lang="ts">
import VueHorizontal from 'vue-horizontal'
import type { RootModuleGroup } from './types'
import { hexToRgb } from '@/@layouts/utils'

interface Props {
  module: RootModuleGroup
}

defineProps<Props>()
</script>

<template>
  <VExpansionPanels>
    <VExpansionPanel
      elevation="0"
      expand-icon=""
      value
    >
      <VExpansionPanelTitle
        expand-icon=""
        class="module-expansion-panel-title"
        :style="`background-color: ${
          module.icon.includes('star')
            ? module.bgColor
            : 'rgb(var(--v-theme-solid-color-extra))'
        }`"
      >
        <VAvatar
          v-if="!module.color"
          :icon="module.icon"
          size="24"
          class="mr-2"
          style="color: #ececee"
        />
        <VAvatar
          v-else
          :icon="module.icon"
          size="24"
          class="mr-2"
          :style="`background-color: ${module.color}; border-radius: 23px;`"
        />
        <span
          class="text-h6"
          :style="`color: ${
            module.icon.includes('star')
              ? '#ececee'
              : 'rgb(var(--v-theme-text-color-body))'
          };`"
        >{{ module.title }}</span>
      </VExpansionPanelTitle>
      <VExpansionPanelText class="custom-text-div">
        <VCol>
          <VueHorizontal class="horizontal">
            <div
              v-for="option in module.features"
              :key="option.title"
              class="card-module-option bg-surface"
            >
              <div class="px-2 card-module-title-icon">
                <VIcon
                  :icon="option.icon"
                  size="70"
                  class="icon-action svg-strock-1"
                  style="stroke-width: 1px"
                />

                <VBtn
                  :to="option.to"
                  size="32"
                  icon="tabler-plus"
                  :color="`rgb(${hexToRgb(module.color)}, 0.3)`"
                  elevation="0"
                  :style="`color: (${module.color};border-radius: 0px; border-radius: 23px;cursor: pointer;color:${module.color};`"
                />
              </div>
              <span class="text-h5 px-2">{{ option.title }}</span>
              <span class="text-p px-2">{{ option.description }}</span>
            </div>
            <template #btn-prev>
              <VBtn
                icon="tabler-caret-left"
                color="none"
                variant="plain"
                class="ml-5"
              />
            </template>
            <template #btn-next>
              <VBtn
                icon="tabler-caret-right"
                color="none"
                variant="plain"
                class="ml-5"
              />
            </template>
          </VueHorizontal>
        </VCol>
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<style lang="scss" scoped>
.custom-text-div {
  & .header {
    background-color: rgb(var(--v-theme-grey-8));
    padding: 15px 18px;
  }
}

.card-module-option {
  width: 253.375px;
  height: 253.375px;
  border-radius: 20px;
  box-shadow: 0px 4px 16px 0px rgba(168, 170, 174, 0.45);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-left: 10px;

  .v-theme--dark & {
    box-shadow: 0px 4px 16px 0px rgba(15, 20, 34, 0.55);
  }

  & .card-module-title-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.horizontal {
  --count: 1;
  --gap: 50px;
  --margin: 24px;
  --fixed: 253.375px;
  height: 280px;
}

.horizontal > .v-hl-container {
  scroll-padding-left: 20px;
  scroll-padding-right: 16px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 2;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 3;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
  }
}
</style>
