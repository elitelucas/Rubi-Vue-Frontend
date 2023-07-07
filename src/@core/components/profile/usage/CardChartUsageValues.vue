<script setup lang="ts">
import { useTheme } from 'vuetify'
import type { ChartJsCustomColors } from './types'
import { getLineAreaChartConfig } from '@core/libs/chartjs/chartjsConfig'
import LineChart from '@core/libs/chartjs/components/LineChart'

interface Props {
  colors: ChartJsCustomColors
}

const props = defineProps<Props>()

const vuetifyTheme = useTheme()

const data = {
  labels: [
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    '12/12',
    '13/12',
    '14/12',
    '15/12',
    '16/12',
    '17/12',
    '18/12',
    '19/12',
    '20/12',
    '',
  ],
  datasets: [
    {
      fill: true,
      tension: 0,
      label: 'Module Usage',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointStyle: 'circle',
      backgroundColor: props.colors.areaChartBlue,
      pointHoverBorderWidth: 5,
      borderColor: 'transparent',
      pointHoverBorderColor: props.colors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: props.colors.areaChartBlue,
      data: [40, 55, 45, 80, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
    },
    {
      fill: true,
      tension: 0,
      label: 'Chat Usage',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointStyle: 'circle',
      pointHoverBorderWidth: 5,
      borderColor: 'transparent',
      backgroundColor: props.colors.areaChartBlueLight,
      pointHoverBorderColor: props.colors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: props.colors.areaChartBlueLight,
      data: [
        70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275,
      ],
    },
  ],
}

const chartConfig = computed(() =>
  getLineAreaChartConfig(vuetifyTheme.current.value),
)
</script>

<template>
  <LineChart
    :chart-options="chartConfig"
    :height="400"
    :chart-data="data"
  />
</template>
