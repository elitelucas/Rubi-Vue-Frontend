<script setup lang="ts">
import type { ChartJsCustomColors } from '@/@core/types'
import CardChartUsageValues from '@/views/pages/account-settings/usage/CardChartUsageValues.vue'
import CardCreditUsage from '@/views/pages/account-settings/usage/CardCreditUsage.vue'
import CardCreditUsageStatistics from '@/views/pages/account-settings/usage/CardCreditUsageStatistics.vue'

const colors: ChartJsCustomColors = {
  white: '#fff',
  yellow: '#ffe802',
  primary: '#836af9',
  areaChartBlue: '#2c9aff',
  barChartYellow: '#ffcf5c',
  polarChartGrey: '#4f5d70',
  polarChartInfo: '#299aff',
  lineChartYellow: '#d4e157',
  polarChartGreen: '#28dac6',
  lineChartPrimary: '#9e69fd',
  lineChartWarning: '#ff9800',
  horizontalBarInfo: '#26c6da',
  polarChartWarning: '#ff8131',
  scatterChartGreen: '#28c76f',
  warningShade: '#ffbd1f',
  areaChartBlueLight: '#84d0ff',
  areaChartGreyLight: '#edf1f4',
  scatterChartWarning: '#ff9f43',
}

const workspace = ref('BitJar Labs Workspace')
const date = ref('This week')
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            lg="2"
            md="3"
            sm="12"
          >
            <AppSelect
              v-model="workspace"
              :items="['BitJar Labs Workspace', 'BitJar Labs Workspace2']"
              class="app-select-header"
              base-color="primary"
              color="primary"
              item-color="primary"
            />
          </VCol>
        </VRow>
      </VCardText>
      <VCardText>
        <VRow class="match-height">
          <VCol
            cols="12"
            md="12"
            lg="4"
          >
            <CardCreditUsage />
          </VCol>
          <VCol
            cols="12"
            md="12"
            lg="8"
          >
            <CardCreditUsageStatistics class="h-100" />
          </VCol>
          <VCol cols="12">
            <VCard>
              <VCardText>
                <VRow justify="space-between">
                  <VCol
                    cols="12"
                    lg="4"
                    md="4"
                    sm="12"
                  >
                    <div class="mb-auto">
                      <h6 class="text-h5 text-no-wrap">
                        Word Usage
                      </h6>
                      <span class="text-sm">Includes Collaborators</span>
                    </div>
                  </VCol>
                  <VCol
                    cols="12"
                    lg="4"
                    md="4"
                    sm="12"
                  >
                    <VRow justify="center">
                      <VCol
                        cols="12"
                        lg="3"
                        md="3"
                        sm="12"
                        class="text-center"
                      >
                        <span class="text-p-medium">12,827</span><br><VAvatar
                          size="10"
                          style="background-color: #48B5FF;"
                          class="mr-1"
                        /><span class="text-p">Module Usage</span>
                      </VCol>
                      <VCol
                        cols="12"
                        lg="3"
                        md="3"
                        sm="12"
                        class="text-center"
                      >
                        <span class="text-p-medium">35,548</span><br><VAvatar
                          size="10"
                          style="background-color: #00CFE8;"
                          class="mr-1"
                        /><span class="text-p">Chat Usage</span>
                      </VCol>
                    </VRow>
                  </VCol>
                  <VCol
                    cols="12"
                    lg="4"
                    md="4"
                    sm="12"
                    class="d-flex justify-lg-end justify-sm-center"
                  >
                    <div class="date-picker-wrapper">
                      <AppSelect
                        v-model="date"
                        style="width: 180px;"
                        append-inner-icon="tabler-chevron-down"
                        density="compact"
                        color="primary"
                        class="text-primary"
                        base-color="primary"
                        :items="['This week', 'This month', 'This year']"
                      />
                    </div>
                  </VCol>
                </VRow>
              </VCardText>

              <VCardText>
                <CardChartUsageValues :colors="colors" />
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.date-picker-wrapper {
  inline-size: 10.5rem;
}

.flatpickr-input {
  color: red !important;
}
</style>

<route lang="yaml">
name: usage
meta:
  layout: default
  name: usage
</route>
