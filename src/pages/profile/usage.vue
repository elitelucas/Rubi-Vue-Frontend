<script setup lang="ts">
import type { ChartJsCustomColors } from '@/@core/types'
import CardChartUsageValues from '@/views/pages/profile/usage/CardChartUsageValues.vue'
import CardCreditUsage from '@/views/pages/profile/usage/CardCreditUsage.vue'
import CardCreditUsageStatistics from '@/views/pages/profile/usage/CardCreditUsageStatistics.vue'

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
</script>

<template>
  <div>
    <HeaderProfile />
    <VCard>
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
              <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
                <VCardText>
                  <div class="mb-auto">
                    <h6 class="text-h5 text-no-wrap">
                      Last updates
                    </h6>
                    <span class="text-sm">Commercial networks</span>
                  </div>
                </VCardText>

                <template #append>
                  <div class="date-picker-wrapper">
                    <AppDateTimePicker
                      model-value="2022-06-09"
                      prepend-inner-icon="tabler-calendar"
                      density="compact"
                      :config="{ position: 'auto right' }"
                    />
                  </div>
                </template>
              </VCardItem>

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
