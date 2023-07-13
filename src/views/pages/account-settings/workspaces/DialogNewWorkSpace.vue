<script setup lang="ts">
import { VNodeRenderer } from '@/@layouts/components/VNodeRenderer'
import { config } from '@layouts/config'

interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  isDialogVisible: boolean
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emit>()

const form = reactive({
  name: '',
  keywords: [],
  collaborator: '',
  search: null,
  items: ['test'],
})

const formSubmit = () => {
  console.log('submit')
}

const removeKey = (key: string) => form.keywords = form.keywords.filter(item => item !== key)

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 580"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-8">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <VNodeRenderer :nodes="config.app.logo" />
        <div class="my-3" />
        <VCardTitle class="text-h5 font-weight-medium mb-3">
          Create New Workspace
        </VCardTitle>
        <p class="mb-0">
          A new workspace segments your content, personas and collaborators.
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12">
              <AppTextField
                v-model="form.name"
                label="Workspace Name"
                placeholder="Workspace Name"
              />
            </VCol>

            <VCol cols="12">
              <AppCombobox
                v-model="form.keywords"
                v-model:search="form.search"
                label="Keywords"
                placeholder="Keywords"
                :hide-no-data="false"
                :items="form.items"
                hide-selected
                multiple
                persistent-hint
                small-chips
              >
                <template #selection="{ item }">
                  <VChip @click="removeKey(item.title)">
                    <span>{{ item.title }}</span>
                    <VIcon
                      icon="tabler-x"
                      class="ml-2"
                    />
                  </VChip>
                </template>
                <template #no-data>
                  <VListItem>
                    <VListItemTitle>
                      No results matching "<strong>{{ form.search }}</strong>". Press <kbd>enter</kbd> to create a new one
                    </VListItemTitle>
                  </VListItem>
                </template>
              </AppCombobox>
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="form.collaborator"
                label="Add Collaborators"
                placeholder="Collaborator"
              />
            </VCol>

            <!-- 👉 Card actions -->
            <VCol
              cols="12"
              class="text-center"
            >
              <VBtn
                class="me-3"
                type="submit"
                @click="formSubmit"
              >
                Submit
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                @click="$emit('update:isDialogVisible', false)"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
