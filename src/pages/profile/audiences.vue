<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'
import DialogNewAudience from '@/views/pages/profile/audiences/DialogNewAudience.vue'

const i18n = useI18n()

const data = [
  {
    id: 1,
    description: 'AI Enthusiast',
    sub_title: '18-34 Male - $75K+',
    language: 'English',
    age: '18 - 34',
    level: 75000,
    identifier: 75000,
  },
  {
    id: 2,
    description: 'AI Enthusiast',
    sub_title: '18-34 Male - $75K+',
    language: 'English',
    age: '18 - 34',
    level: 75000,
    identifier: 75000,
  },
  {
    id: 3,
    description: 'AI Enthusiast',
    sub_title: '18-34 Male - $75K+',
    language: 'English',
    age: '18 - 34',
    level: 75000,
    identifier: 75000,
  },
]

const headers = [
  { title: 'Description'.toUpperCase(), key: 'description' },
  { title: 'Preferred Language'.toUpperCase(), key: 'language' },
  { title: 'Age DEMO'.toUpperCase(), key: 'age' },
  { title: 'Income Levels'.toUpperCase(), key: 'level' },
  { title: 'Main dentifier'.toUpperCase(), key: 'identifier' },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]

const selected = ref([])
const showDialogNewAudience = ref(false)
</script>

<template>
  <div>
    <HeaderProfile />
    <DialogNewAudience v-model:is-dialog-visible="showDialogNewAudience" />
    <VCard>
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            lg="2"
            md="2"
            sm="12"
          >
            <VBtn
              prepend-icon="tabler-plus"
              style="width: 100%"
              @click="showDialogNewAudience = true"
            >
              Create New Audience
            </VBtn>
          </VCol>
          <VSpacer />
          <VCol
            cols="12"
            lg="2"
            md="4"
            sm="12"
          >
            <AppTextField placeholder="Search Audiences" />
          </VCol>
          <VCol
            cols="12"
            lg="2"
            md="4"
            sm="12"
          >
            <AppSelect placeholder="Select Status" />
          </VCol>
        </VRow>
      </VCardText>
      <VCardText>
        <VDataTable
          v-model="selected"
          :headers="headers"
          :items="data"
          show-select
          item-value="id"
        >
          <template #item.description="{ item }">
            <span class="text-h6">{{ item.raw.description }}</span><br>
            <span class="text-p-small text-muted">{{
              item.raw.sub_title
            }}</span>
          </template>
          <template #item.level="{ item }">
            {{ i18n.n(item.raw.level, "currency") }}+
          </template>
          <template #item.identifier="{ item }">
            {{ i18n.n(item.raw.identifier, "currency") }}+
          </template>

          <template #item.actions>
            <VMenu>
              <template #activator>
                <VBtn
                  icon="mdi-dots-vertical"
                  variant="plain"
                />
              </template>

              <VList>
                <VListItem>
                  <VListItemTitle>Hi</VListItemTitle>
                  <VListItemTitle>Hi</VListItemTitle>
                  <VListItemTitle>Hi</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
            <VBtn
              icon="tabler-pencil"
              variant="plain"
            />
          </template>
          <template #bottom />
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>

<route lang="yaml">
name: audiences
meta:
  layout: default
  name: audiences
</route>
