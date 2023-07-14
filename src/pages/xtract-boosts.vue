<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import DialogXtract from '@/views/pages/xtract-boosts/DialogXtract.vue'

const data = ref([
  {
    name: 'Website Scraper',
    category: 'SEO, Developer',
    credits: 1,
    used: Date.now(),
  },
])

const headers = [
  { title: 'BOOST NAME', sortable: true, key: 'name' },
  { title: 'CATEGORY', key: 'category' },
  { title: 'CREDITS', key: 'credits' },
  { title: 'LAST USED', key: 'used' },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]

const showDialogXtract = ref(false)
const showDialogXtractScraperMode = ref(false)
</script>

<template>
  <div>
    <DialogXtract
      v-model:is-dialog-visible="showDialogXtract"
      v-model:is-scraper-mode="showDialogXtractScraperMode"
    />
    <h4 class="text-h4 my-5">
      Xtract Boosts
    </h4>
    <VCard>
      <VCardText>
        <VRow justify="end">
          <VCol
            cols="12"
            lg="2"
            md="4"
            sm="12"
          >
            <AppTextField placeholder="Search Guests" />
          </VCol>
          <VCol
            cols="12"
            lg="2"
            md="4"
            sm="12"
          >
            <AppSelect
              placeholder="Seelct Category"
              :items="['Develop', 'Marketing', 'SEO', 'Social']"
            />
          </VCol>
        </VRow>
      </VCardText>
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
          <template #item.usage="{ item }">
            {{ $n(item.raw.usage) }} words
          </template>
          <template #item.used="{ item }">
            {{ $d(item.raw.used, 'datetime') }}
          </template>
          <template #item.actions>
            <VMenu>
              <template #activator="{ props }">
                <VBtn
                  icon="mdi-dots-vertical"
                  variant="plain"
                  color="black"
                  v-bind="props"
                />
              </template>

              <VList>
                <VListItem @click="showDialogXtractScraperMode = true;showDialogXtract = true">
                  <VListItemTitle>Run</VListItemTitle>
                </VListItem>
                <VListItem @click="showDialogXtract = true">
                  <VListItemTitle>Details</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </template>
          <template #bottom />
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>

<route lang="yaml">
name: xtract-boosts
</route>
