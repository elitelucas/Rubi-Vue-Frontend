<template>
  <VCol cols="12">
    <h5 class="text-h5">
      Workspace Focus
    </h5>
  </VCol>
  <VCol cols="12">
    <p class="text-sm text-text-color-body">
      In this workspace, you have the ability to establish global settings that will be applied to submissions throughout your usage of this platform. You can specify a name for this workspace as well as select the keywords that best represent its content. By designating it as the primary workspace, it will be automatically loaded upon entering the RUBI platform.
    </p>
  </VCol>
  <VCol cols="12">
    <AppTextField label="Workspace Name" />
  </VCol>
  <VCol cols="12">
    <VSwitch label="Primary Workspace" />
  </VCol>
  <VCol cols="12">
    <AppTextarea label="Please provide details about your company, products/services, or yourself if for personal use." />
  </VCol>
  <VCol cols="12">
    <AppTextarea label="Share relevant keywords related to you company, products or yourself if for personal use." />
  </VCol>
</template>
