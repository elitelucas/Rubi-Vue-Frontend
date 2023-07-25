<script setup lang="ts">
import { computed } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  modelValue: Boolean,
})

const emits = defineEmits(['update:modelValue'])

const modalValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})
</script>

<template>
  <VNavigationDrawer
    v-model="modalValue"
    temporary
    border="0"
    location="start"
    width="340"
    :scrim="false"
    class="app-customizer"
  >
    <!-- 👉 Header -->
    <div
      class="customizer-heading d-flex align-center justify-space-between"
      style="gap: 10px"
    >
      <VIcon
        size="60"
        icon="custom-lightbulb"
        color="rubi-red"
        class="svg-strock-1"
      />
      <span class="text-display-4">Tip Drawer</span>
      <VSpacer />
      <IconBtn
        class="me-2"
        @click="modalValue = false"
      >
        <VIcon
          size="20"
          class="cursor-pointer"
          icon="tabler-x"
          color="text-color-body"
        />
      </IconBtn>
    </div>
    <VDivider />
    <!-- 👉 body -->
    <PerfectScrollbar
      tag="ul"
      :options="{ wheelPropagation: false }"
      class="px-5"
    >
      <p class="text-p-light text-text-color-heading mt-3">
        Use these tips and suggestions (or make your own) to further personalize RUBI and her responses.
      </p>
      <h5 class="text-h5 text-text-color-heading">
        Words to Know
      </h5>
      <span class="text-caption text-muted">Some key words and phrases you will encounter...</span><br>
      <span class="text-p-small">
        <span class="text-primary font-weight-bold">Input</span>: Text or commands
      </span><br>
      <span class="text-p-small">
        <span class="text-primary font-weight-bold">Output</span>: RUBI’s response
      </span><br>
      <span class="text-p-small">
        <span class="text-primary font-weight-bold">Prompt</span>: The detail you provide RUBI
      </span><br>
      <h5 class="text-h5 text-text-color-heading mt-5">
        Writing Styles
      </h5>
      <span class="text-caption text-muted">“Write in (this) style”</span><br>
      <div class="row-chip">
        <span class="custom-chip ">Formal</span>
        <span class="custom-chip ">Informal</span>
        <span class="custom-chip ">Descriptive</span>
        <span class="custom-chip ">Humorous</span>
        <span class="custom-chip ">Narrative</span>
        <span class="custom-chip ">Inpirational</span>
        <span class="custom-chip ">Confrontational</span>
      </div>
      <h5 class="text-h5 text-text-color-heading mt-5">
        Role Playing
      </h5>
      <span class="text-caption text-muted">“Act as (this) or (this person)”</span><br>
      <span class="text-p-small">
        Act like an <span class="text-primary font-weight-bold">interviewer</span>
      </span><br>
      <span class="text-p-small">
        Talk like <span class="text-primary font-weight-bold">Elon Musk</span>
      </span><br>
      <span class="text-p-small">
        Pretend you are a  <span class="text-primary font-weight-bold">Diet Expert</span>
      </span><br>
      <span class="text-p-small">
        Write like <span class="text-primary font-weight-bold">Jules Verne</span>
      </span><br>
      <span class="text-p-small">
        Act like a <span class="text-primary font-weight-bold">Marketing Professional</span>
      </span><br>
      <span class="text-p-small">
        You are a <span class="text-primary font-weight-bold">Real Estate Agent</span>
      </span><br>

      <h5 class="text-h5 text-text-color-heading mt-5">
        Prompt Format
      </h5>
      <span class="text-caption text-muted">Follow this formula to get the best content from RUBI.</span><br>
      <span class="text-p-small">
        Acting as <span class="text-primary font-weight-bold">(role)</span> perform this <span class="text-primary font-weight-bold">(task)</span> in <span class="text-primary font-weight-bold">(format)</span>
      </span><br>
      <span class="text-caption text-muted">Example:</span>
      <p class="text-p-small">
        “Acting as an expert marketer in nutritional products, list 20 blog ideas about the differences in protein types in a CSV file.”
      </p>
      <h5 class="text-h5 text-text-color-heading mt-5">
        Multi-item Prompting
      </h5>
      <span class="text-caption text-muted">Nest multiple output requests for a rich response.</span><br>
      <span class="text-caption text-muted">Example:</span>
      <p class="text-p-small">
        “As a marketing expert in fitness, output the ideal 3 week social media strategy for maximum conversion. Use high ranking SEO keywords, and output the list in table format.”
      </p>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.row-module-item-list {
  background: rgb(var(--v-theme-perfect-scrollbar-thumb));
}

.module-item-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: rgb(var(--v-theme-background-card));
  margin-top: 1px;
  margin-bottom: 1px;
  border-right: 1px solid rgb(var(--v-theme-perfect-scrollbar-thumb));

  height: 132px;
  cursor: pointer;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.app-customizer {
  .customizer-section {
    padding: 1.25rem;
  }

  .customizer-heading {
    padding-block: 0.875rem;
    padding-inline: 1.25rem;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}

.app-customizer-toggler {
  position: fixed !important;
  inset-block-start: 50%;
  inset-inline-end: 0;
}

.custom-chip {
  display: inline-flex;
  padding: 5px 10px;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;

  background-color:  #A8AAAE;

  .v-theme--dark & {
    background-color: #A8AAAE;
  }

}

.row-chip {
    display: flex;
    flex-direction: row;
    gap: 2px;
    flex-wrap: wrap;
  }
</style>
