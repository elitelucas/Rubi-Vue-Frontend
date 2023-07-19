<script setup lang="ts">
import type { RootModuleGroup } from '@/@core/components/modules/types'

const modules: RootModuleGroup[] = [
  {
    title: 'Featured Modules',
    icon: 'tabler-star',
    color: '#1DA1F2',
    bgColor: '#1DA1F2',
    show: true,
    features: [
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Advanced Real Estate Listing',
        icon: 'tabler-map',
        to: { name: 'content-create' },
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
    ],
  },
  {
    title: 'Communications Modules',
    icon: 'tabler-none',
    color: '#6D54DC',
    bgColor: '#D7D8DE',
    show: true,
    features: [
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
      {
        title: 'Announcement Email',
        icon: 'tabler-mail',
        description:
              'Engaging design, clear message, and compelling call to action. Grab attention and drive action!',
      },
    ],

  },
]
</script>

<template>
  <div class="mt-10">
    <VCard>
      <VCardText>
        <VCol class="px-8">
          <VRow
            align="center"
            class="px-2"
          >
            <div class="box-icon-title">
              <VIcon
                size="31"
                icon="tabler-apps"
                color="text-color-body p-5"
              />
            </div>
            <span class="text-h4 ml-2">Modules</span>
          </VRow>
          <VDivider class="my-8" />
        </VCol>

        <ModuleGroup
          v-for="moduleItem in modules"
          :key="moduleItem.title"
          :module="moduleItem"
          class="mb-2"
        />
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.box-icon-title {
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  /* Light/Solid Color/Extra/Dark */
  border: 1px solid #4b4b4b;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<route lang="yaml">
name: modules
meta:
  layout: default
</route>
