<script setup lang="ts">
import { usePersonifyModalStore } from "@/store/modal/personify";
const modalStore = usePersonifyModalStore();
</script>

<template>
  <h5 class="text-h5">Congratulations!</h5>
  <p class="text-p mt-5">
    Whoo-hoo! You and Rubi have really hit it off, haven't you? It's like you've
    been on this awesome journey together, crafting the most exquisite persona
    named, “{persona-name}”. Whether this persona is a mini-you, designed to
    represent yourself, or a tailored communicator that will resonate with a
    specific audience, you've got it all sorted. Thanks to the XO (experience
    optimization) of PERSONIFY powered by rubi.ai, you're not just set; you're
    ready to take the world by storm!
  </p>

  <div class="mt-10"></div>
  <div class="mt-10"></div>

  <VCol>
    <VRow justify="end">
      <VBtn
        @click="
          modalStore.showModal = false;
          modalStore.setStep('voice');
        "
      >
        Finished
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
