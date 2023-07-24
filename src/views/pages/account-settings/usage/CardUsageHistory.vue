<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'

const { d, n } = useI18n()

const data = [
  {
    id: 'SPI-23-000001',
    name: 'SPI Credit Usage ',
    type: 'Debit',
    date: Date.now(),
    balance_start: 107,
    credit_debit: 1000,
    balance_end: 1107,
    note: 'Monthly Promo winner - Adj by D. Putnam',
  },
  {
    id: 'SPI-23-000001',
    name: 'SPI Credit Usage ',
    type: 'Debit',
    date: Date.now(),
    balance_start: 107,
    credit_debit: -2,
    balance_end: 1107,
    note: 'Monthly Promo winner - Adj by D. Putnam',
  },
  {
    id: 'SPI-23-000001',
    name: 'SPI Credit Usage ',
    type: 'Debit',
    date: Date.now(),
    balance_start: 107,
    credit_debit: 1000,
    balance_end: 1107,
    note: 'Monthly Promo winner - Adj by D. Putnam',
  },
  {
    id: 'SPI-23-000001',
    name: 'SPI Credit Usage ',
    type: 'Debit',
    date: Date.now(),
    balance_start: 107,
    credit_debit: 1000,
    balance_end: 1107,
    note: '',
  },
]

const headers = [
  { title: 'Transaction ID', sortable: true, key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Type', key: 'type' },
  { title: 'Date', key: 'date' },
  { title: 'Beginning Balance', key: 'balance_start' },
  { title: 'Credits/Debits', key: 'credit_debit' },
  { title: 'Ending Balance', key: 'balance_end' },
  { title: 'Notes', key: 'note' },
]

const selectHistory = ref('Credit Usage')
const date = ref('July, 2023')
</script>

<template>
  <div>
    <VCard title="Usage History">
      <VCardSubtitle>
        <VCol
          cols="12"
          lg="2"
          md="2"
          sm="12"
          style="padding-top: 0px;"
        >
          <AppSelect
            v-model="selectHistory"
            :items="['Credit Usage', 'Word Usage']"
            class="app-select-header"
            base-color="primary"
            color="primary"
            item-color="primary"
          />
        </VCol>
      </VCardSubtitle>

      <template #append>
        <AppDateTimePicker
          v-model="date"
          style="width: 180px;"
          append-inner-icon="tabler-chevron-down"
          density="compact"
          color="primary"
          class="text-primary"
          base-color="primary"
          :config="{ position: 'auto right', dateFormat: 'F, Y' }"
        />
      </template>

      <VCardText>
        <VDataTable
          :headers="headers"
          :items="data"
        >
          <template #item.workspace="{ item }">
            <span class="text-h6">{{ item.raw.workspace }}</span><br>
            <span class="text-p-small text-muted">{{
              item.raw.sub_title
            }}</span>
          </template>
          <template #item.balance_start="{ item }">
            <span class="text-bold text-h6"> {{ n(item.raw.balance_start) }}</span>
          </template>
          <template #item.balance_end="{ item }">
            <span class="text-bold text-h6"> {{ n(item.raw.balance_end) }} </span>
          </template>
          <template #item.credit_debit="{ item }">
            <span :class="item.raw.credit_debit > 0 ? 'text-success' : 'text-error' ">
              {{ n(item.raw.credit_debit) }}

            </span>
          </template>
          <template #item.date="{ item }">
            {{ d(item.raw.date) }}
          </template>
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>
