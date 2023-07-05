<script setup lang="ts">
import { useGenerateImageVariant } from "../composable/useGenerateImageVariant";
import VerticalMenu from "./modal-personify/VerticalMenu.vue";
import logoPersonifyLight from "@images/components/modal-personify/personify-light.png";
import logoPersonifyDark from "@images/components/modal-personify/personify-dark.png";
import iconPeronify from "@images/components/modal-personify/personify-icon.png";
import { usePersonifyModalStore } from "@/store/modal/personify";
import VoiceStep from "./modal-personify/steps/Voice.vue";
import ToneStep from "./modal-personify/steps/Tone.vue";
import AudienceStep from "./modal-personify/steps/Audience.vue";
import PersonalizeStep from "./modal-personify/steps/Personalize.vue";
import PersonifyStep from "./modal-personify/steps/Personify.vue";

const modalStore = usePersonifyModalStore();

const isDialogVisible = ref(false);

const logoVariant = useGenerateImageVariant(
  logoPersonifyLight,
  logoPersonifyDark
);

const menuItens = [
  {
    title: "VOICE",
    subtitle: "Discover Your Style",
    icon: "tabler-message-2",
  },
  {
    title: "TONE",
    subtitle: "Discover Your Emotions",
    icon: "tabler-access-point",
  },
  {
    title: "AUDIENCE",
    subtitle: "Demographics",
    icon: "tabler-speakerphone",
  },
  {
    title: "PERSONALIZE",
    subtitle: "Craft. Refine. Express.",
    icon: "tabler-checkup-list",
  },
  {
    title: "PERSONIFY",
    subtitle: "Complete Your Look",
    icon: iconPeronify,
  },
];

const currentStep = computed(() =>
  menuItens.map((item) => item.title.toLowerCase()).indexOf(modalStore.step)
);
</script>

<template>
  <VDialog v-model="modalStore.showModal" max-width="870">
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="modalStore.showModal = !modalStore.showModal" />

    <!-- Dialog Content -->
    <VCard height="80vh">
      <VCardText>
        <VRow class="mt-5" justify="center">
          <img :src="logoVariant" />
        </VRow>
        <VRow>
          <VCol cols="12" lg="4" md="3" sm="12">
            <VerticalMenu :items="menuItens" :step="modalStore.step" />
          </VCol>
          <VCol class="content-modal" cols="12" lg="8" md="3" sm="12">
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition stepper-content"
            >
              <VWindowItem>
                <VoiceStep />
              </VWindowItem>
              <VWindowItem>
                <ToneStep />
              </VWindowItem>
              <VWindowItem>
                <AudienceStep />
              </VWindowItem>
              <VWindowItem>
                <PersonalizeStep />
              </VWindowItem>
              <VWindowItem>
                <PersonifyStep />
              </VWindowItem>
            </VWindow>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style scoped lang="scss">
@import "@styles/responsive.scss";

.content-modal {
  max-height: 70vh;
  overflow-y: scroll;

  @include media-query("sm") {
    max-height: auto;
    overflow-y: inherit;
  }
  @include media-query("md") {
    max-height: auto;
    overflow-y: inherit;
  }
}
</style>
