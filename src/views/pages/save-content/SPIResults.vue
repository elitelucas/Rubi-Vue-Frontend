<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'

const { d, n } = useI18n()

const data = [
  {
    scan_title: 'Facebook Ad- Campaign 12-2',
    ai_score: 27,
    plagiarism: true,
    flesch_kincaid: 41.7,
    forcast: 13.7,
    gunning_fog: 11.7,
    dale_chall: 11.7,
    date_scan: Date.now(),
  },
  {
    scan_title: 'Facebook Ad- Campaign 12-2',
    ai_score: 27,
    plagiarism: true,
    flesch_kincaid: 41.7,
    forcast: 13.7,
    gunning_fog: 11.7,
    dale_chall: 11.7,
    date_scan: Date.now(),
  },
  {
    scan_title: 'Facebook Ad- Campaign 12-2',
    ai_score: 27,
    plagiarism: true,
    flesch_kincaid: 41.7,
    forcast: 13.7,
    gunning_fog: 11.7,
    dale_chall: 11.7,
    date_scan: Date.now(),
  },
]

const headers = [
  { title: 'SCAN TITLE', sortable: true, key: 'scan_title' },
  { title: 'AI SCORE', key: 'ai_score' },
  { title: 'PLAGIARISM', key: 'plagiarism' },
  { title: 'FLESCH KINCAID', key: 'flesch_kincaid' },
  { title: 'FORCAST', key: 'forcast' },
  { title: 'GUNNING FOG', key: 'gunning_fog' },
  { title: 'DALE_CHALL', key: 'dale_chall' },
  { title: 'DATE OF SCAN', key: 'date_scan' },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <VRow justify="end">
          <VCol
            cols="12"
            lg="2"
            md="4"
            sm="12"
          >
            <AppTextField placeholder="Search Saved Content" />
          </VCol>
        </VRow>
      </VCardText>
      <VCardText>
        <VDataTable
          :headers="headers"
          :items="data"
        >
          <template #item.creator="{ item }">
            <VAvatar
              :image="item.raw.avatar"
              :size="32"
            />
            <span class="text-h6 ml-2">{{ item.raw.workspace }}</span>
          </template>
          <template #item.ai_score="{ item }">
            {{ n(item.raw.ai_score) }}%
          </template>
          <template #item.plagiarism="{ item }">
            <VIcon
              v-if="item.raw.plagiarism"
              icon="tabler-check"
            />
            <VIcon
              v-else
              icon="tabler-x"
            />
          </template>
          <template #item.flesch_kincaid="{ item }">
            {{ n(item.raw.flesch_kincaid) }}
          </template>
          <template #item.forcast="{ item }">
            {{ n(item.raw.forcast) }}
          </template>
          <template #item.gunning_fog="{ item }">
            {{ n(item.raw.gunning_fog) }}
          </template>
          <template #item.dale_chall="{ item }">
            {{ n(item.raw.dale_chall) }}
          </template>
          <template #item.date_scan="{ item }">
            {{ d(item.raw.date_scan, 'datetime') }}
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
                <VListItem>
                  <VListItemTitle>Remove</VListItemTitle>
                </VListItem>
                <VListItem>
                  <VListItemTitle>Download</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </template>
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>
