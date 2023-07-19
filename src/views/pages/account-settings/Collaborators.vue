<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'
import DialogNewContributor from '@/views/pages/account-settings/contributors/DialogNewContributor.vue'

const { d, n } = useI18n()

const showDialogNewContribuitor = ref(false)

const data = [
  {
    workspace: 'BitJar Labs',
    sub_title: 'Software Development',
    contributors: 5,
    joined_date: Date.now(),
    usage: 1210,
  },
  {
    workspace: 'BitJar Labs',
    sub_title: 'Software Development',
    contributors: 5,
    joined_date: Date.now(),
    usage: 1210,
  },
  {
    workspace: 'BitJar Labs',
    sub_title: 'Software Development',
    contributors: 5,
    joined_date: Date.now(),
    usage: 1210,
  },
]

const headers = [
  { title: 'GUESS', sortable: true, key: 'workspace' },
  { title: 'WORKSPACES', key: 'contributors' },
  { title: 'JOINED DATE', key: 'joined_date' },
  { title: 'USAGE', key: 'usage' },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]

const editMode = ref(false)
</script>

<template>
  <div>
    <DialogNewContributor
      v-model:is-dialog-visible="showDialogNewContribuitor"
      :is-edit-mode="editMode"
    />
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
              @click="editMode = false;showDialogNewContribuitor = true"
            >
              Invite New Collaborator
            </VBtn>
          </VCol>
          <VSpacer />
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
            <AppSelect placeholder="Select Status" />
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
            {{ n(item.raw.usage) }} words
          </template>
          <template #item.joined_date="{ item }">
            {{ d(item.raw.joined_date) }}
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
                <VListItem @click="editMode = true;showDialogNewContribuitor = true">
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>
                <VListItem>
                  <VListItemTitle>Deactivate</VListItemTitle>
                </VListItem>
                <VListItem>
                  <VListItemTitle>Remove</VListItemTitle>
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
name: collaborators
meta:
  layout: default
  name: collaborators
</route>
