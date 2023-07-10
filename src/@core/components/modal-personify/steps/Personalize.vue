<script setup lang="ts">
import { usePersonifyModalStore } from '@/store/modal/personify'

const modalStore = usePersonifyModalStore()
const analizyOption = ref([])
const langs = ['English', 'French', 'Portuguese', 'Spanish', 'Mandarin']
const uploader = ref()
</script>

<template>
  <h5 class="text-h5">
    PERSONALIZE
  </h5>
  <p class="text-p mt-5">
    Just like an expert tailor, Rubi's Personify tool has diligently stitched
    together the intricate details of your persona. It's picked up on the voice,
    tone, and audience you've defined, and tailored a persona that truly
    embodies your vision. Now, your character is ready to step into the
    spotlight. All that remains is to bestow upon them a fitting name and a
    distinctive face. It's time to add that final touch of personalization,
    transforming this crafted persona from an idea into a living, breathing
    representation of your brand. Unveil their identity and let your persona
    take flight with Rubi's Personify!
  </p>
  <h6 class="text-h6">
    Let's play the name game!
  </h6>
  <span class="text-p-small text-grey-500">
    Pick a name that truly embodies the essence of your freshly minted persona,
    giving it the perfect identity!
  </span>
  <AppTextField />
  <div class="mt-5" />
  <h6 class="text-h6">
    Select your languages.
  </h6>
  <span class="text-p-small text-grey-500">
    Feel free to pick all the languages you want to have at your disposal for
    this persona.
  </span>
  <AppSelect
    v-model="analizyOption"
    :items="langs"
    :menu-props="{ maxHeight: '400' }"
    multiple
    persistent-hint
  />
  <div class="mt-5" />

  <VFileInput
    ref="uploader"
    label="Put a face to it!"
    class="d-none"
    prepend-icon="tabler-camera"
    accept="image/*"
  />

  <div
    class="file-upload-area"
    @click="uploader.click()"
  >
    <VBtn
      icon="tabler-upload"
      rounded="sm"
      variant="tonal"
      color="secondary"
    />
    <div class="file-upload-labels">
      <span class="text-p-bold text-p-small-bold">Upload Photo</span>
      <span class="text-p-small-light">Put a face to it!</span>
    </div>
  </div>

  <div class="mt-5" />

  <VCol>
    <VRow justify="space-between">
      <VBtn
        variant="tonal"
        color="secondary"
        prepend-icon="tabler-arrow-left"
        :disabled="modalStore.firstStep"
        @click="modalStore.previous()"
      >
        Previous
      </VBtn>
      <VBtn
        append-icon="tabler-arrow-right"
        @click="modalStore.next()"
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

.file-upload-area {
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px dashed rgb(var(--v-theme-solid-color-extra-divider));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  & .file-upload-labels {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
