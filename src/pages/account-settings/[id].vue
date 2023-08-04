<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Account from '@/views/pages/account-settings/Account.vue'
import Collaborators from '@/views/pages/account-settings/Collaborators.vue'
import Personas from '@/views/pages/account-settings/Personas.vue'
import Usage from '@/views/pages/account-settings/Usage.vue'
import Workspaces from '@/views/pages/account-settings/Workspaces.vue'
import { useAccountSettingsTabs } from '@/store/accountSettingsTabs'

const route = useRoute()
const accountSettingsTabsStore = useAccountSettingsTabs()

const activeTab = ref(route.query.tab || 'account')

// tabs
const tabs = [
  { title: 'Account', icon: 'tabler-user-circle', tab: 'account' },
  { title: 'Usage', icon: 'tabler-chart-arcs', tab: 'usage' },
  { title: 'Workspaces', icon: 'tabler-layout-board-split', tab: 'workspaces' },
  { title: 'Collaborators', icon: 'tabler-users', tab: 'collaborators' },
  { title: 'Personas', icon: 'tabler-id', tab: 'personas' },
]

const selectedTab = computed(() => tabs.find(tab => tab.tab === activeTab.value))

watch(activeTab, _ => {
  accountSettingsTabsStore.setDefault(selectedTab.value!.title)
})

watch(() => route.fullPath, () => {
  setTimeout(() => activeTab.value = route.query.tab || 'account', 100)
})

onMounted(() => {
  setTimeout(() => activeTab.value = route.query.tab || 'account', 100)
})

const myAccountID = ref(route.params.id);

watch(
  () => route.params.id,
  (newID, oldID) => {   
    myAccountID.value = newID
  },
  { immediate: true } 
);
</script>

<template>
  <div>
    <div class="breadcrumbs-header mt-5">
      <VRow class="row">
        <span class="text-h4 text-muted">Account Settings</span>
        <span
          v-for="(item, index) in accountSettingsTabsStore.breadcrumbs"
          :key="item"
        >&nbsp;&nbsp;<span :class="(accountSettingsTabsStore.breadcrumbs.length - 1) === index ? `text-h4` : 'text-h4 text-muted'">/</span>&nbsp;&nbsp;
          <span :class="(accountSettingsTabsStore.breadcrumbs.length - 1) === index ? `text-h4 text-2` : 'text-h4 text-muted text-2'">{{ item }}</span>
        </span>
      </VRow>
    </div>
    <VTabs
      v-model="activeTab"

      class="v-tabs-pill my-2"
    >
      <VTab
        v-for="item in tabs"
        :key="item.tab"
        :value="item.tab"
        class="text-text-color-body"
        :disabled="item.title === 'Add-ons'"
        :class="[item.tab !== activeTab && 'text-secondary']"
        :to="{ name: 'account-settings', query: { tab: item.tab }, params: { id: $route.params.id } }"
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
      <!-- Account -->
      <VWindowItem value="account">
        <Account :account_id="myAccountID"/>
      </VWindowItem>

      <!-- Collaborators -->
      <VWindowItem value="collaborators">
        <Collaborators />
      </VWindowItem>

      <!-- Personas -->
      <VWindowItem value="personas">
        <Personas v-if="activeTab === 'personas'" />
      </VWindowItem>

      <!-- Usage -->
      <VWindowItem value="usage">
        <Usage />
      </VWindowItem>

      <!-- Personas -->
      <VWindowItem value="workspaces">
        <Workspaces :account_id="myAccountID"/>
      </VWindowItem>
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
name: account-settings
meta:
  layout: default
</route>
