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
  first_name: '',
  last_name: '',
  email: '',
  contact: '',
  workspace: '',
})

const formSubmit = () => {
  console.log('submit')
}

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
          {{ isEditMode ? 'Edit' : 'Invite New' }} Collaborator
        </VCardTitle>
        <p class="mb-0">
          You send the invite, we’ll take care of the rest.
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="form.first_name"
                label="First Name"
                placeholder="John"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="form.last_name"
                label="Last Name"
                placeholder="Doe"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="form.email"
                type="email"
                label="Email"
                placeholder="example@email.com"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="form.contact"
                label="Contact"
                placeholder="723-348-2344"
              />
            </VCol>
            <VCol cols="12">
              <AppSelect
                v-model="form.workspace"
                label="Invite to Workspace"
                :items="['AAO Workspace']"
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
                {{ isEditMode ? 'Save' : 'Send Invite' }}
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
