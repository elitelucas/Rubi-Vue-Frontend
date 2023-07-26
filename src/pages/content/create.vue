<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import ContentVoicePanel from '@/views/pages/content/panels/ContentVoicePanel.vue'
import ContentTonePanel from '@/views/pages/content/panels/ContentTonePanel.vue'
import type { CustomInputContent } from '@/@core/types'
import houseCheck from '@images/iconify-png/house-check.png'
import gridIconPng from '@images/iconify-png/layout-grid-add.png'
import SPIAuditScoring from '@/views/pages/content/SPIAuditScoring.vue'
import DialogSaveContent from '@/views/pages/content/DialogSaveContent.vue'
import DialogXtract from '@/views/pages/xtract-boosts/DialogXtract.vue'

const selectPersona = ref('Persona')
const selectVoice = ref('Voice')
const selectTone = ref('Tone')
const selectLanguage = ref('Language')

const radioContent: CustomInputContent[] = [
  {
    title: 'For Sale',
    subtitle: '',
    value: 'sale',
  },
  {
    title: 'For Rent',
    value: 'rent',
  },
]

const selectedRadio = ref('sale')

const radioContentSentiment: CustomInputContent[] = [
  {
    title: 'Negative',
    subtitle: '',
    value: 'Negative',
  },
  {
    title: 'Neutral',
    value: 'Neutral',
  },
  {
    title: 'Positive',
    value: 'Positive',
  },
]

const selectedRadioSentiment = ref('sale')

const radioContent2: CustomInputContent[] = [
  {
    title: 'Single-Family home',
    value: 'Single-Family home',
  },
  {
    title: 'Duplex',
    subtitle: '',
    value: 'Duplex',
    desc: '',
  },
  {
    title: 'Multi-Family',
    subtitle: '',
    value: 'Multi-Family',
    desc: '',
  },
  {
    title: 'Commercial Bldg.',
    subtitle: '',
    value: 'Commercial Bldg.',
    desc: '',
  },
]

const selectedRadio2 = ref('Duplex')

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Single Garage',
    value: 'Single Garage',
  },
  {
    title: 'Alarm',
    value: 'Alarm',
  },
  {
    title: 'Smart Home',
    value: 'Smart Home',
  },
]

const selectedCheckbox = ref(['Single Garage'])

const open = ref(['features'])
const input = ref('')
const showContentVoicePanel = ref(false)
const showContentTonePanel = ref(false)
const showAuditDialog = ref(false)
const showDialogSaveContent = ref(false)
const selectedBoost = ref()
const showDialogBoost = ref(false)
const showDialogBoostScraperMode = ref(false)
const slider2 = ref(0)
const promptData = ref('');

function testClick() {
  alert()
}

watch(selectedBoost, () => {
  showDialogBoost.value = true
})

const handleChangeContent = (e:any) => {
  promptData.value = e.ops[0].insert
}

const handleInitail = (e:any) => {
}
</script>

<template>
  <VRow
    no-gutters
    class="body-background"
  >
    <DialogXtract
      v-model:is-dialog-visible="showDialogBoost"
      v-model:is-scraper-mode="showDialogBoostScraperMode"
    />
    <ContentVoicePanel v-model="showContentVoicePanel" />
    <ContentTonePanel v-model="showContentTonePanel" />
    <DialogSaveContent v-model:is-dialog-visible="showDialogSaveContent" />

    <VCol
      cols="12"
      lg="6"
      md="12"
      sm="12"
      class="first-colum pt-5"
    >
      <VSlideXTransition>
        <SPIAuditScoring
          v-if="showAuditDialog"
          show-btn-run
          :promptData="promptData"
          class="mr-2"
          @close="showAuditDialog = false"
        />
      </VSlideXTransition>
      <div v-if="!showAuditDialog">
        <h3 class="text-h3 content-p">
          Global Composition Settings
        </h3>

        <VRow class="content-m global-composition-row mb-4">
          <VCol
            cols="12"
            lg="3"
            sm="12"
            md="12"
          >
            <AppSelect
              v-model="selectPersona"
              bg-color="primary"
              :items="['Persona']"
            />
          </VCol>
          <VCol
            cols="12"
            lg="3"
            sm="12"
            md="12"
          >
            <AppSelect
              v-model="selectVoice"
              :items="[selectVoice]"
            >
              <template #prepend-item>
                <VListItem
                  title="Edit"
                  @click="showContentVoicePanel = true"
                />
              </template>
            </AppSelect>
          </VCol>

          <VCol
            cols="12"
            lg="3"
            sm="12"
            md="12"
          >
            <AppSelect
              v-model="selectTone"
              :items="[selectTone]"
            >
              <template #prepend-item>
                <VListItem
                  title="Edit"
                  @click="showContentTonePanel = true"
                />
              </template>
            </AppSelect>
          </VCol>
          <VCol
            cols="12"
            lg="3"
            sm="12"
            md="12"
          >
            <AppSelect
              v-model="selectLanguage"
              :items="[selectLanguage]"
            />
          </VCol>
        </VRow>

        <CardOptionContent
          :icon-img="gridIconPng"
          title="Add New Module"
          :padding-icon="13"
          has-border
          sub-title="Combine modules to craft even more spectacular content."
          button-mode
          class="pr-1"
          @click="testClick"
        />
        <CardOptionContent
          :icon-img="houseCheck"
          title="Advanced Real Estate Listing"
          class="mt-1 pr-1"
          sub-title="Create a personalized real estate listing description."
          show-arrow
          bg-icon-color-light="#28C76F"
          bg-icon-color-dark="#28C76F"
          :padding-icon="12"
          toggle
        >
          <VCol
            cols="12"
            class="content-p mt-5"
          >
            <h3 class="text-h3">
              Persona Selection
            </h3>

            <AppSelect class="mt-5 mb-5" />

            <VExpansionPanels
              v-model="open"
              class="expanded-element-content"
            >
              <VExpansionPanel
                value="features"
                bg-color="rgb(var(--v-theme-background-body))"
              >
                <VExpansionPanelTitle expand-icon="tabler-chevron-up">
                  <p class="text-p">
                    Transaction Type *
                  </p>
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <CustomRadios
                    v-model:selected-radio="selectedRadio"
                    :radio-content="radioContent"
                    :grid-column="{ sm: '6', cols: '12' }"
                  />
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>

            <VExpansionPanels
              v-model="open"
              class="expanded-element-content"
            >
              <VExpansionPanel
                value="features"
                bg-color="rgb(var(--v-theme-background-body))"
              >
                <VExpansionPanelTitle expand-icon="tabler-chevron-up">
                  <p class="text-p">
                    Listing Type *
                  </p>
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <CustomRadios
                    v-model:selected-radio="selectedRadio2"
                    :radio-content="radioContent2"
                    :grid-column="{ sm: '6', cols: '12' }"
                  />
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>

            <VExpansionPanels
              v-model="open"
              class="expanded-element-content"
            >
              <VExpansionPanel
                value="features"
                bg-color="rgb(var(--v-theme-background-body))"
              >
                <VExpansionPanelTitle expand-icon="tabler-chevron-up">
                  <p class="text-p">
                    Features *
                  </p>
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <CustomCheckboxes
                    v-model:selected-checkbox="selectedCheckbox"
                    :checkbox-content="checkboxContent"
                    :grid-column="{ sm: '6', cols: '12', lg: '4' }"
                  />
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
            <AppTextField
              v-model="input"
              label="Property Location"
              :maxlength="100"
              :counter="100"
              class="mt-2"
            />
            <VRow>
              <VCol
                cols="12"
                lg="8"
                md="12"
                sm="12"
              >
                <AppTextField label="Lot Size" />
              </VCol>
              <VCol
                cols="12"
                lg="4"
                md="12"
                sm="12"
              >
                <AppSelect label="Units" />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="12"
                lg="8"
                md="12"
                sm="12"
              >
                <AppTextField label="Living Space" />
              </VCol>
              <VCol
                cols="12"
                lg="4"
                md="12"
                sm="12"
              >
                <AppSelect label="Units" />
              </VCol>
            </VRow>
            <VDivider />
            <CustomSlider />
          </VCol>
          <VDivider class="mt-5 mb-5" />

          <VExpansionPanels
            v-model="open"
            class="expanded-element-content content-p"
          >
            <VExpansionPanel
              value="features"
              bg-color="rgb(var(--v-theme-background-body))"
            >
              <VExpansionPanelTitle
                expand-icon="tabler-chevron-up"
                class="content-m"
              >
                <p class="text-h3">
                  Advanced Settings
                </p>
              </VExpansionPanelTitle>
              <VExpansionPanelText class="content-p">
                <VLabel> Randomness </VLabel>
                <VSlider
                  v-model="slider2"
                  :step="0.1"
                  :max="1"
                  show-ticks
                  :thumb-size="1"
                  :tick-size="3"
                  :track-size="2"
                />
                <VLabel class="mb-4">
                  Sentiment
                </VLabel>
                <CustomRadios
                  v-model:selected-radio="selectedRadioSentiment"
                  :radio-content="radioContentSentiment"
                  :grid-column="{ sm: '6', cols: '12', lg: '4' }"
                />
              </VExpansionPanelText>
            </VExpansionPanel>
          </VExpansionPanels>
          <VDivider class="mt-5 mb-5" />
          <VRow
            justify="center"
            class="mt-12"
          >
            <VBtn>Generate</VBtn>
          </VRow>

          <VCol
            cols="12"
            style="padding-bottom: 0px;"
          >
            <VRow align="center">
              <VCol
                cols="12"

                class="d-flex flex-row justify-space-between "
              >
                <VLabel

                  class="text-body-2 text-high-emphasis"
                  text="Results"
                />
                <div>
                  <VBtn
                    class="vertical-button"
                    variant="text"
                    color="text-color-body"
                    size="small"
                  >
                    <VIcon
                      icon="tabler-copy"
                      class="mb-0"
                      size="large"
                    />
                    Copy
                  </VBtn>

                  <VBtn
                    class="vertical-button"
                    variant="text"
                    color="text-color-body"
                    size="small"
                  >
                    <VIcon
                      icon="tabler-archive"
                      class="mb-0"
                      size="large"
                    />
                    Save
                  </VBtn>
                  <VBtn
                    class="vertical-button"
                    variant="text"
                    color="text-color-body"
                    size="small"
                  >
                    <VIcon
                      icon="tabler-forms"
                      class="mb-0"
                      size="large"
                    />
                    Send
                    <VTooltip
                      activator="parent"
                      location="bottom"
                      color="#E5E5E5"
                      scrim
                    >
                      <VCol>
                        <span class="text-h5">Send to Editor</span>
                        <p class="text-p mt-3">
                          Click to copy the results to the<br>
                          current location of your cursor<br>
                          in the text editor.
                        </p>
                      </VCol>
                    </VTooltip>
                  </VBtn>
                </div>
              </Vcol>
            </VRow>
          </VCol>

          <AppTextarea
            bg-color="background-card"
            class="content-m mb-10"
            disabled
          />
        </CardOptionContent>
      </div>
    </VCol>
    <VCol
      cols="12"
      lg="6"
      md="12"
      sm="12"
      class="pt-5"
    >
      <h3 class="text-h3 content-m">
        Output Composer & SPI Scoring
      </h3>
      <VRow
        class="mt-1 content-m"
        align="center"
      >
        <VCol
          cols="12"
          lg="6"
          md="6"
          sm="12"
          style="padding-left: 0px;"
        >
          <VBtn
            class="vertical-button"
            variant="text"
            color="text-color-body"
            size="small"
          >
            <VIcon
              icon="tabler-copy"
              size="large"
            />
            Copy
          </VBtn>
          <VBtn
            class="vertical-button"
            variant="text"
            color="text-color-body"
            size="small"
            @click="showDialogSaveContent = true"
          >
            <VIcon
              icon="tabler-archive"
              size="large"
            />
            Save
          </VBtn>

          <VBtn
            class="vertical-button"
            variant="text"
            color="text-color-body"
            size="small"
          >
            <VIcon
              icon="tabler-download"
              size="large"
            />
            Download
          </VBtn>
        </VCol>

        <VSpacer />
        <VRow>
          <VCol
            cols="12"
            lg="6"
            md="6"
            sm="6"
          >
            <VBtn
              block
              @click="showAuditDialog = true"
            >
              SPI Audit
            </VBtn>
          </VCol>
          <VCol
            cols="12"
            lg="6"
            md="6"
            sm="6"
          >
            <AppSelect
              v-model="selectedBoost"
              bg-color="primary"
              placeholder="Boosts"
              class="placeholder-white"
              :items="['test', 'test2']"
            />
          </VCol>
        </VRow>
      </VRow>
      <div class="editor editor-h-650">
        <QuillEditor toolbar="full" v-model="promptData" @update:content="handleChangeContent" @ready="handleInitail"/>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@import "@styles/responsive.scss";

.audit-container {
  max-width: 45%;
  @include media-query("sm") {
    max-width: 100%;
  }
  @include media-query("md") {
    max-width: 100%;
  }
  @include media-query("lg") {
    max-width: 100%;
  }
}

.content-m {
  margin: 0px 10px;
}
.content-p {
  padding: 0px 10px;
}

.first-colum {

  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @include media-query("sm") {
    border-right: none;
  }
  @include media-query("md") {
    border-right: none;
  }
  @include media-query("lg") {
    border-right: none;
  }
}

.expanded-element-content {
  & .v-expansion-panel-text__wrapper {
    padding: 5px;
  }
  & .v-expansion-panel__shadow {
    box-shadow: none !important;
  }
  & .v-expansion-panel-title {
    padding-left: 0px;
  }
}

.vertical-button,
.vertical-button span.v-btn__content {
  height: 52px !important;
}
.vertical-button span.v-btn__content {
  flex-direction: column;
}

.global-composition-row {
  margin-left: 0px;
}

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

.spi-center-score {
  & .percentage {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: rgb(var(--v-theme-primary)) !important;
  }
  & .caption {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: rgb(var(--v-theme-text-color-muted)) !important;
  }
}
</style>

<route lang="yaml">
name: content-create
meta:
  layout: default
</route>
