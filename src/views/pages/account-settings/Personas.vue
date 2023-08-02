<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'
import DialogQuickStart from '../quick-start/DialogQuickStart.vue'
import QuickStartPersonaViewer from '../quick-start/QuickStartPersonaViewer.vue'
import avatar from '@images/avatars/avatar-10.png'
import { useAccountSettingsTabs } from '@/store/accountSettingsTabs'

const accountSettingsTabsStore = useAccountSettingsTabs()

const i18n = useI18n()

const data = [
  {
    id: 1,
    name: 'AI Enthusiast',
    sub_title: '18-34 Male - $75K+',
    status: false,
    language: 'English',
    age: '18 - 34',
    level: 75000,
    tone: 'Entusiastic',
  },
  {
    id: 1,
    name: 'AI Enthusiast',
    sub_title: '18-34 Male - $75K+',
    status: true,
    language: 'English',
    age: '18 - 34',
    level: 75000,
    tone: 'Entusiastic',
  },
]

const headers = [
  { title: 'Name'.toUpperCase(), key: 'name' },
  { title: 'STATUS', key: 'status' },
  { title: 'Preferred Language'.toUpperCase(), key: 'language' },
  { title: 'Age DEMO'.toUpperCase(), key: 'age' },
  { title: 'Income Levels'.toUpperCase(), key: 'level' },
  { title: 'Primary Tone'.toUpperCase(), key: 'tone' },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]

const selected = ref([])

const showDialogQuickStart = ref(false)
const showDetails = ref(false)
</script>

<template>
  <div>
    <DialogQuickStart
      v-model:is-dialog-visible="showDialogQuickStart"
      :step="1"
    />
    <VCard v-if="!showDetails">
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
              @click="showDialogQuickStart = true"
            >
              Create New Persona
            </VBtn>
          </VCol>
          <VSpacer />
          <VCol
            cols="12"
            lg="2"
            md="4"
            sm="12"
          >
            <AppTextField placeholder="Search Personas" />
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
          <template #item.name="{ item }">
            <span class="text-h6">{{ item.raw.name }}</span><br>
            <span class="text-p-small text-muted">{{
              item.raw.sub_title
            }}</span>
          </template>
          <template #item.status="{ item }">
            <VChip
              :color="item.raw.status ? 'success' : 'error'"
              rounded="sm"
              variant="flat"
            >
              {{ item.raw.status ? 'Active' : 'Inactive' }}
            </VChip>
          </template>
          <template #item.level="{ item }">
            {{ i18n.n(item.raw.level, "currency") }}+
          </template>

          <template #item.actions>
            <VMenu>
              <template #activator=" { props }">
                <VBtn
                  icon="mdi-dots-vertical"
                  variant="plain"
                  v-bind="props"
                />
              </template>

              <VList>
                <VListItem>
                  <VListItemTitle>Deactivate</VListItemTitle>
                </VListItem>
                <VListItem @click="showDetails = true;accountSettingsTabsStore.add('Persona Details')">
                  <VListItemTitle>Edit</VListItemTitle>
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

    <!-- Persona Detail  -->
    <VCard v-else>
      <VCardText>
        <VBtn
          prepend-icon="tabler-focus-2"
          @click="showDialogQuickStart = true"
        >
          Recalibrate This Persona
        </VBtn>
      </VCardText>
      <VCardText>
        <QuickStartPersonaViewer
          lg="3"
          profile-lg="2"
          :avatar="avatar"
        />
      </VCardText>
    </VCard>
  </div>
</template>

<route lang="yaml">
name: personas
meta:
  layout: default
  name: personas
</route>
