<script setup lang="ts">
import { usePersonifyModalStore } from "@/store/modal/personify";
const modalStore = usePersonifyModalStore();
const representText = ref("");
const analizyOptions = ["Informal", "Friendly", "Enthusiastic", "Persuasive"];
const analizyOption = ref(analizyOptions);
const termsAccepted = ref("");
const showTerms = ref(true);

const props = defineProps({
  fromPanel: Boolean,
});

defineEmits(["onSave", "onClear"]);

function nextStepTerms() {
  if (termsAccepted.value == "yes") {
    modalStore.next();
    return;
  }

  showTerms.value = false;
}

function backStepTerms() {
  showTerms.value = true;
}

onMounted(() => {
  if (props.fromPanel) {
    showTerms.value = false;
  }
});
</script>

<template>
  <h5 class="text-h5">Tone</h5>
  <div v-if="showTerms">
    <p class="text-p mt-5">
      Hey there! We've got some cool news for you. Rubi has been hard at work
      with its awesome Personify system and cooked up a bunch of tone
      suggestions just for you. Personify really gets into the nitty-gritty of
      your brand, picking up the vibes that make you unique. It then spins these
      into a variety of tone styles you can use. So, gear up to discover new
      ways to jazz up your content and really connect with your audience!
    </p>

    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      label=""
      multiple
      persistent-hint
      class="my-5"
    />

    <VRadioGroup v-model="termsAccepted">
      <VRadio value="yes">
        <template #label> These tones are great </template>
      </VRadio>

      <VRadio value="no">
        <template #label> Let me create my own tone </template>
      </VRadio>
    </VRadioGroup>
    <VCol class="mt-5">
      <VRow justify="space-between">
        <VBtn
          variant="tonal"
          color="secondary"
          prepend-icon="tabler-arrow-left"
          @click="modalStore.setStep('voice')"
          :disabled="modalStore.firstStep"
        >
          Previous
        </VBtn>
        <VBtn
          append-icon="tabler-arrow-right"
          @click="nextStepTerms"
          :disabled="!termsAccepted.length"
        >
          Next
        </VBtn>
      </VRow>
    </VCol>
  </div>
  <div v-else>
    <p class="text-p mt-5">
      Tone is the attitude or emotion a piece of writing conveys. Tone can and
      should vary depending on the situation, context, or the audience's needs.
      For instance, the tone of a serious business report would be more formal
      and reserved, while a conversational blog post might have a casual,
      friendly tone.
    </p>
    <h6 class="text-h6">Simulate your persona tone from a website</h6>
    <span class="text-p-small text-grey-500">
      Enter a URL you would like Rubi to scan and create a voice.
    </span>
    <VRow no-gutters>
      <VCol cols="10">
        <AppTextField placeholder="Enter URL" />
      </VCol>
      <VCol cols="2">
        <button class="div-btn-append">Xtract</button>
      </VCol>
    </VRow>
    <h6 class="text-h6 mt-5">Simulate your persona tone from an influencer</h6>
    <span class="text-p-small text-grey-500">
      Enter the Instagram handle of your favorite influencer.
    </span>
    <VRow no-gutters>
      <VCol cols="10">
        <AppTextField placeholder="Enter URL" />
      </VCol>
      <VCol cols="2">
        <button class="div-btn-append">Xtract</button>
      </VCol>
    </VRow>
    <VRow no-gutters class="mt-5" align="center">
      <VCol cols="10">
        <span class="text-h6"
          >Type or paste text that represents you or the persona.</span
        >
      </VCol>
      <VCol cols="2">
        <span class="text-counter">{{ representText.length }}/2,000</span>
      </VCol>
    </VRow>
    <VRow no-gutters class="mt-2">
      <VCol cols="12">
        <AppTextarea v-model="representText" maxlength="2000"></AppTextarea>
      </VCol>
    </VRow>
    <VRow no-gutters class="mt-2" justify="end">
      <VBtn size="small">Analyze</VBtn>
    </VRow>
    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      label=""
      multiple
      persistent-hint
      class="my-3"
    />
    <p class="mt-2 text-text-color-heading">
      Personify is usually spot on, but if you aren’t satisfied yet, enter a new
      URL, handle, or text and analyze it again!
    </p>

    <VCol v-if="fromPanel">
      <VRow justify="space-between">
        <VBtn variant="tonal" color="secondary" @click="$emit('onClear')">
          Clear
        </VBtn>
        <VBtn @click="$emit('onSave')"> Save </VBtn>
      </VRow>
    </VCol>
    <VCol v-else>
      <VRow justify="space-between">
        <VBtn
          variant="tonal"
          color="secondary"
          prepend-icon="tabler-arrow-left"
          @click="backStepTerms"
          :disabled="modalStore.firstStep"
        >
          Previous
        </VBtn>
        <VBtn append-icon="tabler-arrow-right" @click="modalStore.next()">
          Next
        </VBtn>
      </VRow>
    </VCol>
  </div>
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
