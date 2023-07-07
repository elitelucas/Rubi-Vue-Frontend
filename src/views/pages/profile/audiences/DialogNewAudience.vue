<script setup lang="ts">
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
  gender: '',
  age: [18, 24],
  income: '',
  language: '',
  marital: '',
  primary: false,
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
        <VIcon
          icon="tabler-speakerphone"
          size="54"
          class="svg-strock-1"
          color="rubi-red"
        />
        <div class="my-3" />
        <VCardTitle class="text-h3 font-weight-medium mb-3">
          Create a New Audience
        </VCardTitle>
        <p class="mb-0">
          Set parameters for your Ideal Customer
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12">
              <AppTextField
                v-model="form.name"
                label="Audience Name"
                placeholder="18-24 Adult Females"
              />
            </VCol>

            <VCol cols="12">
              <AppSelect
                v-model="form.gender"
                label="Gender"
                placeholder="gender"
              />
            </VCol>

            <VCol cols="12">
              <VRangeSlider
                v-model="form.age"
                show-ticks="always"
                max="100"
                thumb-label="always"
                label="Age Range"
              />
            </VCol>

            <VCol cols="12">
              <AppSelect
                v-model="form.income"
                label="Income Level"
                placeholder="Income Level"
              />
            </VCol>

            <VCol cols="12">
              <AppSelect
                v-model="form.language"
                label="Language"
                placeholder="Language"
              />
            </VCol>

            <VCol cols="12">
              <AppSelect
                v-model="form.marital"
                label="Marital Status"
                placeholder="Marital Status"
              />
            </VCol>

            <VCol cols="12">
              <VSwitch
                v-model="form.primary"
                label="Use as a Primary Audience"
              />
            </VCol>

            <VCol
              cols="12"
              class="text-center"
            >
              <VBtn
                class="me-3"
                type="submit"
                @click="formSubmit"
              >
                Save
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                @click="$emit('update:isDialogVisible', false)"
              >
                Clear
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
