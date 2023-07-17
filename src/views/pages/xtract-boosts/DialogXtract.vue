<script setup lang="ts">
interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
  (e: 'update:isScraperMode', value: boolean): void
}

interface Props {
  isDialogVisible: boolean
  isScraperMode: boolean
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emit>()

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
  emit('update:isScraperMode', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 800"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard
      class="pa-5 pa-sm-8"
      style="position: relative;"
    >
      <VCardText>
        <h3 class="title-xtract">
          WEBSITE SCRAPER
        </h3>
        <p class="description-xtract">
          Crawls arbitrary websites using the Chrome browser and extracts data from pages using a provided JavaScript code. The actor supports both recursive crawling and lists of URLs and automatically manages concurrency for maximum performance. This is Apify's basic tool for web crawling and scraping.
        </p>
      </VCardText>
      <VCardText v-if="!isScraperMode">
        <h3 class="ways-title-xtract">
          WAYS TO USE THE BOOST:
        </h3>
        <p class="mt-5 ways-description-xtract">
          1. Content Research: Use website scraping to gather information and data from relevant websites, blogs, and online publications. This data can be used as a foundation for generating insightful and informative content with Rubi.
        </p>
        <p class="mt-1 ways-description-xtract">
          2. Competitor Analysis: Scrape competitor websites to gather insights on their strategies, content offerings, and audience engagement. This information can help you identify gaps and opportunities in your own content strategy
        </p>
        <VRow
          justify="center"
          class="mt-10"
        >
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/NbEbs6I3eLw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </VRow>
      </VCardText>
      <VCardText v-if="isScraperMode">
        <VRow>
          <VCol cols="12">
            <AppTextField
              label="Run mode"
              placeholder="&quot;PRODUCTION&quot;: string"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              label="Start URLs*"
              placeholder="https://www.rubi-ai.com"
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
              >
                Copy
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
            />
          </VCol>
        </VRow>
      </VCardText>
      <div class="py-10" />
      <VCardActions class="actions-xtract px-0 bg-surface">
        <VCol class="px-0">
          <VDivider />
          <VRow
            justify="center"
            class="mt-5"
          >
            <VBtn
              v-if="!isScraperMode"
              variant="flat"
              class="px-5"
              @click="$emit('update:isScraperMode', true)"
            >
              BOOST
            </VBtn>
            <VBtn
              v-else
              variant="flat"

              prepend-icon="tabler-player-play"
              class="px-5"
            >
              Start
            </VBtn>
          </VRow>
        </VCol>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
  .title-xtract {
    color: rgb(var(--v-theme-rubi-red));
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 175% */
  }

  .description-xtract {
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .ways-title-xtract {
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px; /* 140% */
  }

  .ways-description-xtract {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }

  .actions-xtract {
    position: fixed;
    bottom: 0px;
    width: 100%;
    left: 0px;
  }
</style>
