<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'
import DialogContentSaved from './content/DialogContentSaved.vue'
import avatar from '@images/avatars/avatar-5.png'

const { d, n } = useI18n()

const data = [
  {
    avatar,
    creator: 'Edgar Jones',
    content_name: 'Website Scraping of www.myflex.ai',
    saved_date: Date.now(),
    workspace: 'BitJar Labs',
  },
  {
    avatar,
    creator: 'Edgar Jones',
    content_name: 'Website Scraping of www.myflex.ai',
    saved_date: Date.now(),
    workspace: 'BitJar Labs',
  },
  {
    avatar,
    creator: 'Edgar Jones',
    content_name: 'Website Scraping of www.myflex.ai',
    saved_date: Date.now(),
    workspace: 'BitJar Labs',
  },
  {
    avatar,
    creator: 'Edgar Jones',
    content_name: 'Website Scraping of www.myflex.ai',
    saved_date: Date.now(),
    workspace: 'BitJar Labs',
  },

]

const headers = [
  { title: 'CREATOR', sortable: true, key: 'creator' },
  { title: 'CONTENT NAME', key: 'content_name' },
  { title: 'SAVED DATE', key: 'saved_date' },
  { title: 'WORKSPACE', key: 'workspace' },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]

const showDialogContentSaved = ref(false)
const content = ref('')
const content_name = ref('')

function showDialogContent(name: string, value: string) {
  content_name.value = name
  content.value = value
  showDialogContentSaved.value = true
}
</script>

<template>
  <div>
    <DialogContentSaved
      v-model:is-dialog-visible="showDialogContentSaved"
      :content="content"
      :content-name="content_name"
    />
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
          <template #item.usage="{ item }">
            {{ n(item.raw.usage) }} words
          </template>
          <template #item.saved_date="{ item }">
            {{ d(item.raw.saved_date, 'datetime') }}
          </template>
          <template #item.actions="{ item }">
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
                <VListItem @click="showDialogContent(item.raw.content_name, 'test test test test test test test test test test test test test test')">
                  <VListItemTitle>View</VListItemTitle>
                </VListItem>
                <VListItem>
                  <VListItemTitle>Download</VListItemTitle>
                </VListItem>
                <VListItem>
                  <VListItemTitle>Remove</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </template>
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>
