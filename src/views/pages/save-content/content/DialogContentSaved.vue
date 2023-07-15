<script setup lang="ts">
interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  isDialogVisible: boolean
  contentName?: string
  content?: string
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emit>()
const { copy } = useClipboard()

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const copyLabel = ref('Copy')

const copyToClipBoard = () => {
  copy(props.content!)
  copyLabel.value = 'Copied'
  setTimeout(() => copyLabel.value = 'Copy', 1000)
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
      <VCardText>
        <h3 class="title">
          CONTENT RESULTS
        </h3>
      </VCardText>
      <VCardText>
        <VRow>
          <VCol cols="12">
            <AppTextField
              label="Content Name"
              placeholder="Website Scraping of www.myflex.ai"
              :value="contentName"
            />
          </VCol>
          <VCol>
            <VRow
              justify="end"
              class="mt-10 content-m"
            >
              <VBtn
                class="vertical-button"
                prepend-icon="tabler-copy"
                variant="text"
                color="text-color-body"
                size="small"
                @click="copyToClipBoard"
              >
                {{ copyLabel }}
              </VBtn>

              <VBtn
                class="vertical-button"
                prepend-icon="tabler-archive"
                variant="text"
                color="text-color-body"
                size="small"
              >
                Save
              </VBtn>
            </VRow>
            <AppTextarea
              label="Results"
              bg-color="background-card"
              class="content-m mb-10"
              :value="content"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
  .title {
    color: rgb(var(--v-theme-rubi-red));
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 175% */
  }
</style>
