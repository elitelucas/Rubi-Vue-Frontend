<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import SPIAuditScoring from "@/views/pages/content/SPIAuditScoring.vue";

const promptData = ref('');

const isVisibleProgress = ref(false);
const isRunning = ref(false);

const handleChangeContent = (e:any) => {
  promptData.value = e.ops[0].insert
}

const runAduit = () => {
  isVisibleProgress.value = true;
  isRunning.value = true;
}

const handleFinished = () => {
  isVisibleProgress.value = false;
  isRunning.value = false;
}

</script>

<template>
  <div>
    <VRow>
      <VCol cols="12" lg="6" md="6" sm="12">
        <h3 class="text-h3 mt-10">SPI Content Audit</h3>
        <VRow>
          <VCol cols="12">
            <AppTextField label="Scan Title" />
          </VCol>
          <VCol cols="12" lg="6" md="6" sm="12">
            <AppTextField
              label="Scan content from a website"
              placeholder="https://mywebsite.com"
              class="xtract-input"
            >
              <VBtn class="btn-append-xtract" color="red"> Xtract </VBtn>
              <template #append-inner>
                <div style="width: 60px" />
              </template>
            </AppTextField>
          </VCol>
          <VCol
            cols="12"
            lg="6"
            md="6"
            sm="12"
            align-self="end"
            style="text-align: center"
          >
            <p class="text-p-bold">
              <br />
              Total Word Count: 64 <br />
              Credits Used: 3
            </p>
          </VCol>
        </VRow>
        <div class="editor mt-2 editor-h-300">
          <QuillEditor toolbar="full" placeholder="Paste or write content here" @update:content="handleChangeContent"/>
        </div>
        <VRow justify="center" class="mt-10">
          <VBtn @click="runAduit()">
            <VProgressCircular
              :size="25"
              width="4"
              style="margin-right: 5px"
              color="warning"
              indeterminate
              v-if="isVisibleProgress"
            />
            Run Audit
          </VBtn>
        </VRow>
        <VRow justify="center">
          <span class="text-caption text-muted mt-2">
            Each submission costs 1 credit
          </span>
        </VRow>
      </VCol>
      <VCol cols="12" lg="6" md="6" sm="12">
        <SPIAuditScoring :show-btn-run="false" :promptData="promptData" :running="isRunning" @get-data="handleFinished"/>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.editor {
  background-color: rgb(var(--v-theme-background-card));

  & .ql-toolbar.ql-snow {
    border: none;
    border-bottom: 0.5px solid #434968;
    padding: 10px 10px;
  }

  & .ql-container.ql-snow {
    border: none !important;
    padding: 5px 10px;
    height: 400px;
  }
}
</style>

<route lang="yaml">
name: spi-audit
</route>
