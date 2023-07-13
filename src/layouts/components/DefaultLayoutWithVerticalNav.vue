<script lang="ts" setup>
import navItems from '@/navigation/vertical'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'
import { useModuleStore } from '@/store/module'

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig()
const { width: windowWidth } = useWindowSize()
const workspace = ref('BitJar Labs Workspace')
const moduleStore = useModuleStore()
</script>

<template>
  <PanelModule />
  <VerticalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          id="vertical-nav-toggle-btn"
          class="ms-n3"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            size="26"
            icon="tabler-menu-2"
          />
        </IconBtn>

        <NavbarThemeSwitcher />

        <VSpacer />
        <AppUserBalanceAccount />
        <VSpacer />

        <UserProfile />
      </div>
    </template>
    <div class="d-flex">
      <AppSelect
        v-model="workspace"
        :items="['BitJar Labs Workspace', 'BitJar Labs Workspace2']"
        class="app-select-header mb-4"
        base-color="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))"
        color="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))"
        item-color="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))"
      />
      <IconBtn @click="() => moduleStore.setModal(true)">
        <VIcon
          size="26"
          class="cursor-pointer"
          icon="tabler-layout-grid-add"
        />
      </IconBtn>
    </div>

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
  </VerticalNavLayout>
</template>
