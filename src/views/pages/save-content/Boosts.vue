<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'
import DialogBoost from './content/DialogBoost.vue'
import avatar from '@images/avatars/avatar-5.png'

const { d } = useI18n()

const data = [
  {
    avatar,
    creator: 'Edgar Jones',
    boost_name: 'Website Scraping of www.myflex.ai',
    run_date: Date.now(),
    output_type: 'PDF',
  },
]

const headers = [
  { title: 'CREATOR', sortable: true, key: 'creator' },
  { title: 'BOOSTS NAME', key: 'boost_name' },
  { title: 'RUNT DATE', key: 'run_date' },
  { title: 'OUTPUT TYPE', key: 'output_type' },
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
    <DialogBoost
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
            <span class="text-h6 ml-2">{{ item.raw.creator }}</span>
          </template>

          <template #item.run_date="{ item }">
            {{ d(item.raw.run_date) }}
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
