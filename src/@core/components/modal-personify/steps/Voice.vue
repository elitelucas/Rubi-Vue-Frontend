<script setup lang="ts">
import { usePersonifyModalStore } from '@/store/modal/personify'

defineProps({
  fromPanel: Boolean,
})

defineEmits(['onSave', 'onClear'])

const modalStore = usePersonifyModalStore()
const representText = ref('')
const analizyOptions = ['Informal', 'Friendly', 'Enthusiastic', 'Persuasive']

const analizyOption = ref(analizyOptions)
</script>

<template>
  <h5 class="text-h5">
    Voice
  </h5>
  <p class="text-p mt-5">
    Your persona voice refers to the unique style or personality of a piece of
    writing. It's the distinct character or personality your writing exhibits,
    which should be consistent across all communications. Voice is what makes
    your writing sound like you, or in a business context, makes the writing
    representative of the brand or organization.
  </p>
  <h6 class="text-h6">
    Simulate your persona voice from a website
  </h6>
  <span class="text-p-small text-grey-500">
    Enter a URL you would like Rubi to scan and create a voice.
  </span>
  <VRow no-gutters>
    <VCol cols="10">
      <AppTextField placeholder="Enter URL" />
    </VCol>
    <VCol cols="2">
      <button class="div-btn-append">
        Xtract
      </button>
    </VCol>
  </VRow>
  <h6 class="text-h6 mt-5">
    Simulate your persona voice from an influencer
  </h6>
  <span class="text-p-small text-grey-500">
    Enter the Instagram handle of your favorite influencer.
  </span>
  <VRow no-gutters>
    <VCol cols="10">
      <AppTextField placeholder="Enter URL" />
    </VCol>
    <VCol cols="2">
      <button class="div-btn-append">
        Xtract
      </button>
    </VCol>
  </VRow>
  <VRow
    no-gutters
    class="mt-5"
    align="center"
  >
    <VCol cols="10">
      <span class="text-h6">Type or paste text that represents you or the persona.</span>
    </VCol>
    <VCol cols="2">
      <span class="text-counter">{{ representText.length }}/2,000</span>
    </VCol>
  </VRow>
  <VRow
    no-gutters
    class="mt-2"
  >
    <VCol cols="12">
      <AppTextarea
        v-model="representText"
        maxlength="2000"
      />
    </VCol>
  </VRow>
  <VRow
    no-gutters
    class="mt-2"
    justify="end"
  >
    <VBtn size="small">
      Analyze
    </VBtn>
  </VRow>
  <AppSelect
    v-model="analizyOption"
    :items="analizyOptions"
    :menu-props="{ maxHeight: '400' }"
    label="Rubi analyzed the voice and found these characteristics:"
    multiple
    persistent-hint
  />
  <p class="mt-2 text-text-color-heading">
    Personify is usually spot on, but if you aren’t satisfied yet, enter a new
    URL, handle, or text and analyze it again!
  </p>

  <VCol v-if="fromPanel">
    <VRow justify="space-between">
      <VBtn
        variant="tonal"
        color="secondary"
        @click="$emit('onClear')"
      >
        Clear
      </VBtn>
      <VBtn @click="$emit('onSave')">
        Save
      </VBtn>
    </VRow>
  </VCol>

  <VCol v-else>
    <VRow justify="space-between">
      <VBtn
        variant="tonal"
        color="secondary"
        prepend-icon="tabler-arrow-left"
        :disabled="modalStore.firstStep"
        @click="modalStore.setStep('voice')"
      >
        Previous
      </VBtn>
      <VBtn
        append-icon="tabler-arrow-right"
        @click="modalStore.setStep('tone')"
      >
        Next
      </VBtn>
    </VRow>
  </VCol>
</template>

<style lang="scss" scoped>
.div-btn-append {
  background-color: #4b4b4b;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(var(--v-theme-rubi-red));
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  cursor: pointer;
  border-radius: 0px 4px 4px 0px;

  .v-theme--dark & {
    background-color: #d7d8de;
  }
}

.text-counter {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  text-align: end;
  color: #d7d8de;
  display: flex;
  justify-content: end;

  .v-theme--dark & {
    color: #4b4b4b;
  }
}
</style>
