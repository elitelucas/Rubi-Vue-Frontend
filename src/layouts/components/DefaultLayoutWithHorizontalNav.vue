<script lang="ts" setup>
import { useTheme } from 'vuetify/lib/framework.mjs'
import navItems from '@/navigation/horizontal'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { themeConfig } from '@themeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import logoDark from '@images/logo-dark.svg?raw'
import { HorizontalNavLayout } from '@layouts'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { useModuleStore } from '@/store/module'
import { useAuthStore } from '@/store/auth'

const moduleStore = useModuleStore()
const authStore = useAuthStore()

const { appRouteTransition } = useThemeConfig()

const theme = useTheme()

const darkNode = h('div', {
  innerHTML: logoDark,
  style: 'line-height:0; color: rgb(var(--v-global-theme-primary))',
})
</script>

<template>
  <HorizontalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink
        to="/"
        class="app-logo d-flex align-center gap-x-3"
      >
        <VNodeRenderer
          :nodes="
            theme.global.current.value.dark ? darkNode : themeConfig.app.logo
          "
        />
      </RouterLink>
      <VCol lg="2">
        <AppSelect
          v-model="authStore.selected_worspace"
          :items="authStore.workspaces"
          item-title="nickname"
          item-value="id"
          class="app-select-header"
          base-color="primary"
          color="primary"
          item-color="primary"
        />
      </VCol>

      <VSpacer />

      <AppUserBalanceAccount />

      <NavbarThemeSwitcher class="me-2" />

      <IconBtn
        class="me-2"
        @click="() => moduleStore.setModal(true)"
      >
        <VIcon
          size="26"
          class="cursor-pointer"
          icon="tabler-layout-grid-add"
        />
      </IconBtn>
      <UserProfile />
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </HorizontalNavLayout>
</template>

<style scoped>
.app-select-header {
  margin-left: 10px;
}
</style>
