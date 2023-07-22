<script setup lang="ts">
interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  isDialogVisible: boolean
  isEditMode?: boolean
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emit>()

const form = reactive({
  name: '',
  keywords: [],
  collaborator: '',
  search: null,
  items: [''],
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
        <AppLogo />
        <div class="my-3" />
        <VCardTitle class="text-h5 font-weight-medium mb-3">
          {{ isEditMode ? 'Edit' : 'Create New' }} Workspace
        </VCardTitle>
        <p class="mb-0">
          {{ isEditMode ? 'Edit' : 'A new' }} workspace segments your content, personas and collaborators.
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
              <VLabel
                class="mb-1 text-body-2 text-high-emphasis"
                text="Keywords"
              />
              <p class="text-caption">
                Type your keywords and hit the Enter key to save each one.
              </p>
              <AppCombobox
                v-model="form.keywords"
                multiple
                clear-icon="tabler-trash-x"
                chips
                closable-chips
              />
            </VCol>
            <VCol cols="12">
              <AppSelect
                v-model="form.collaborator"
                label="Add Collaborators"
                placeholder="Collaborator"
                :items="['NickName', 'NickName 2']"
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
                {{ isEditMode ? 'Save' : 'Submit' }}
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
