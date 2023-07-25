<script setup lang="ts">
import QuickStartWorkspace from './QuickStartWorkspace.vue'
import QuickStartPersona from './QuickStartPersona.vue'
import QuickStartPersonaViewer from './QuickStartPersonaViewer.vue'
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import logoPersonifyDark from '@images/components/modal-personify/personify-dark.png'
import logoPersonifyLight from '@images/components/modal-personify/personify-light.png'

interface Props {
  isDialogVisible: boolean
  isEditMode?: boolean
  step?: number
}

const props = withDefaults(defineProps<Props>(), {
  step: 0,
})

const emit = defineEmits<Emit>()

const logoVariant = useGenerateImageVariant(
  logoPersonifyLight,
  logoPersonifyDark,
)

interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
}

const steps = ref(props.step)

const loading = ref(false)

const texts = [
  'Jazz hands! RUBI is working magic!',
  'Sit back and relax, RUBI is working wonders.',
  'Shhhh. RUBI is brewing up something wild.',
  'Brace yourself for mind-blowing RUBI-rificness!',
  'Get ready to be amazed, RUBI style!',
  'Brace yourself for mind-blowing RUBI-rificness!',
  'Get ready to be amazed, RUBI-style!',
]

const loadingText = ref('')

let intervalID: any
let nextIndex = 0

const changeStep = (value: number) => {
  const stepValue = steps.value + value

  if (stepValue < 0)
    return
  if (stepValue > 2)
    return

  steps.value = stepValue
}

const createPerson = () => {
  loading.value = true

  setInterval(() => {
    loadingText.value = texts[nextIndex]
    nextIndex += 1
    if (nextIndex >= texts.length)
      nextIndex = 0
  }, 3998)

  setTimeout(() => {
    loading.value = false
    steps.value = 2
    document
      .getElementById('dialog-quick-start')
      ?.scrollIntoView({ behavior: 'smooth' })
  }, 15000)
}

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
  steps.value = props.step
}

watch(loading, value => {
  if (!value)
    clearInterval(intervalID)
})
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 750"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <VOverlay
      v-model="loading"
      contained
      class="align-center justify-center text-center"
      persistent
    >
      <LogoAnimated />
      <h5 class="text-h5 text-white text-animation">
        {{ loadingText }}
      </h5>
    </VOverlay>
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-8">
      <!-- 👉 Title -->
      <VCardItem
        id="dialog-quick-start"
        class="text-center"
      >
        <VRow
          class="mt-2"
          justify="center"
        >
          <VCol cols="12">
            <VRow justify="center">
              <img
                :src="logoVariant"
                width="260"
              >
            </VRow>
            <VRow justify="center">
              <p class="text-body-2 text-text-color-body">
                Rubi's unique approach to creating personas.
              </p>
            </VRow>
          </VCol>
        </VRow>
      </VCardItem>

      <VCardText class="pt-6">
        <VRow>
          <QuickStartWorkspace v-if="steps === 0" />
          <QuickStartPersona v-if="steps === 1" />
          <QuickStartPersonaViewer v-if="steps === 2" />
          <!-- 👉 Card actions -->
          <VCol
            v-if="steps !== 2"
            cols="12"
          >
            <VRow :justify="step === 0 ? 'space-between' : 'end'">
              <VBtn
                v-if="step === 0"
                class="ml-3"
                color="secondary"
                variant="tonal"
                prepend-icon="tabler-arrow-narrow-left"
                :disabled="steps === 0"
                @click="changeStep(-1)"
              >
                Previous
              </VBtn>
              <VBtn
                class="me-3"
                type="submit"
                append-icon="tabler-arrow-narrow-right"
                @click="steps === 1 ? createPerson() : changeStep(1)"
              >
                {{ steps === 1 ? "Create Persona" : "Next" }}
              </VBtn>
            </VRow>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.text-animation {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 4s steps(40) infinite;
  animation-delay: 2s;
}
</style>
