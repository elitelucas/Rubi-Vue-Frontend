<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs'
import logoDark from '@images/logo-dark.svg?raw'
import { themeConfig } from '@themeConfig'
import { VNodeRenderer } from '@/@layouts/components/VNodeRenderer'

const theme = useTheme()

const darkNode = h('div', {
  innerHTML: logoDark,
  style: 'line-height:0; color: rgb(var(--v-global-theme-primary))',
})
</script>

<template>
  <VNodeRenderer
    :nodes="
      theme.global.current.value.dark ? darkNode : themeConfig.app.logo
    "
  />
</template>
