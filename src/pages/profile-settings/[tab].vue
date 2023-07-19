<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Profile from '@/views/pages/profile-settings/Profile.vue'
import Subscriptions from '@/views/pages/profile-settings/Subscriptions.vue'

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'General Info', icon: 'tabler-user-circle', tab: 'profile' },
  { title: 'Subscriptions', icon: 'tabler-chart-arcs', tab: 'subscriptions' },
  { title: 'Connections', icon: 'tabler-exchange', tab: 'none' },
  { title: 'Add-ons', icon: 'tabler-circle-plus', tab: 'none' },
]

const selectedTab = computed(() => tabs.find(tab => tab.tab === activeTab.value))
</script>

<template>
  <div>
    <div class="breadcrumbs-header mt-5">
      <VRow class="row">
        <span class="text-h4 text-muted">Profile Settings</span>&nbsp;&nbsp;<span class="text-h4">/</span>&nbsp;&nbsp;<span class="text-h4 text-2">{{ selectedTab?.title }}</span>
      </VRow>
    </div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill my-2"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        class="text-text-color-body"
        :to="{ name: 'profile-settings', params: { tab: item.tab } }"
        :disabled="item.tab === 'none'"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Profile -->
      <VWindowItem value="profile">
        <Profile />
      </VWindowItem>

      <!-- Subscriptions -->
      <VWindowItem value="subscriptions">
        <Subscriptions />
      </VWindowItem>

      <!-- Connections -->
      <!--
        <VWindowItem value="connections">
        <Connections />
        </VWindowItem>
      -->
    </VWindow>
  </div>
</template>

<style lang="scss" scoped>
@import "@styles/responsive.scss";
.breadcrumbs-header {
  padding: 26px 13px;

  & .row {
    font-weight: 600;

    & .text-2 {
      .v-theme--dark & {
        color: #cfd3ec !important;
      }
    }
  }
}

.btn-tabs {
  display: flex;
  gap: 10px;
  margin: 15px 0px;

  @include media-query("sm") {
    flex-direction: column;
  }

  @include media-query("md") {
    max-height: auto;
    overflow-y: inherit;
  }

  & .v-btn--variant-plain {
    .v-theme--light & {
      color: #434344 !important;
    }
    .v-theme--dark & {
      color: #b6bee3 !important;
    }
  }
}
</style>

<route lang="yaml">
name: profile-settings
meta:
  navActiveLink: pages-profile-settings-tab
</route>
