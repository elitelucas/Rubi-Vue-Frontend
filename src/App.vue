<script setup lang="ts">
import { useTheme } from 'vuetify'

import { useAuthStore } from './store/auth'
import { isUserLoggedIn } from './router/utils'
import ScrollToTop from '@core/components/ScrollToTop.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'

const authStore = useAuthStore()

const {
  syncInitialLoaderTheme,
  syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
  isAppRtl,
  handleSkinChanges,
} = useThemeConfig()

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()
syncConfigThemeWithVuetifyTheme()
handleSkinChanges()

const loading = ref(false)

async function handleloadUserInfo() {
  try {
    loading.value = true
    await authStore.handleMe()
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loading.value = false
  }
}
onMounted(async () => {
  if (isUserLoggedIn())
    await handleloadUserInfo()
})
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary,
      )}`"
    >
      <div
        v-if="loading"
        id="loading-bg"
      >
        <div class="loading-logo">
          <!-- SVG Logo -->
          <span> we are optimizing your experience, hang tight... </span>
        </div>
      </div>
      <RouterView />
      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
</template>
