<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Content from '@/views/pages/save-content/Content.vue'
import Boosts from '@/views/pages/save-content/Boosts.vue'
import SPIResults from '@/views/pages/save-content/SPIResults.vue'

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Content', icon: 'tabler-user-circle', tab: 'content' },
  { title: 'Boosts', icon: 'tabler-chart-arcs', tab: 'boosts' },
  { title: 'SPI Results', icon: 'tabler-exchange', tab: 'spi-results' },
  { title: 'Add-ons', icon: 'tabler-circle-plus', tab: 'Add-ons' },
]

const selectedTab = computed(() => tabs.find(tab => tab.tab === activeTab.value))
</script>

<template>
  <div>
    <div class="breadcrumbs-header mt-5">
      <VRow class="row">
        <span class="text-h4 text-bold">Saved Content</span>&nbsp;&nbsp;<span
          v-if="selectedTab?.tab !== 'content'"
          class="text-h4"
        >/</span>&nbsp;&nbsp;<span
          v-if="selectedTab?.tab !== 'content'"
          class="text-h4 text-2 text-muted"
        >{{ selectedTab?.title }}</span>
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
        :to="{ name: 'save-content', params: { tab: item.tab } }"
        :disabled="item.title === 'Add-ons'"
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
      <!-- Content -->
      <VWindowItem value="content">
        <Content />
      </VWindowItem>
      <!-- Boosts -->
      <VWindowItem value="boosts">
        <Boosts />
      </VWindowItem>
      <!-- SPIResults -->
      <VWindowItem value="spi-results">
        <SPIResults />
      </VWindowItem>
    </vwindow>
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
name: save-content
</route>
