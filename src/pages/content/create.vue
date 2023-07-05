<script setup lang="ts">
import type { CustomInputContent } from "@/@core/types";
import houseCheck from "@images/iconify-png/house-check.png";
import gridIconPng from "@images/iconify-png/layout-grid-add.png";
import { QuillEditor } from "@vueup/vue-quill";

const selectPersona = ref("Persona");
const selectAudience = ref("Audience");
const selectTone = ref("Tone");
const selectLanguage = ref("Language");

const radioContent: CustomInputContent[] = [
  {
    title: "For Sale",
    subtitle: "",
    value: "sale",
  },
  {
    title: "For Rent",
    value: "rent",
  },
];

const selectedRadio = ref("sale");

const radioContentSentiment: CustomInputContent[] = [
  {
    title: "Negative",
    subtitle: "",
    value: "Negative",
  },
  {
    title: "Neutral",
    value: "Neutral",
  },
  {
    title: "Positive",
    value: "Positive",
  },
];

const selectedRadioSentiment = ref("sale");

const radioContent2: CustomInputContent[] = [
  {
    title: "Single-Family home",
    value: "Single-Family home",
  },
  {
    title: "Duplex",
    subtitle: "",
    value: "Duplex",
    desc: "",
  },
  {
    title: "Multi-Family",
    subtitle: "",
    value: "Multi-Family",
    desc: "",
  },
  {
    title: "Commercial Bldg.",
    subtitle: "",
    value: "Commercial Bldg.",
    desc: "",
  },
];

const selectedRadio2 = ref("Duplex");

const checkboxContent: CustomInputContent[] = [
  {
    title: "Single Garage",
    value: "Single Garage",
  },
  {
    title: "Alarm",
    value: "Alarm",
  },
  {
    title: "Smart Home",
    value: "Smart Home",
  },
];

const selectedCheckbox = ref(["Single Garage"]);

const open = ref(["features"]);
const input = ref("");

const slider2 = ref(0);

function testClick() {
  alert();
}
</script>

<template>
  <VRow no-gutters class="body-background">
    <VCol cols="12" lg="6" md="12" sm="12" class="first-colum pt-5">
      <h3 class="text-h3 content-p">Global Composition Settings</h3>
      <VRow class="content-m global-composition-row">
        <VCol cols="12" lg="3" sm="12" md="12">
          <AppSelect v-model="selectPersona" :items="['Persona']" />
        </VCol>
        <VCol cols="12" lg="3" sm="12" md="12">
          <AppSelect v-model="selectAudience" :items="[selectAudience]" />
        </VCol>
        <VCol cols="12" lg="3" sm="12" md="12">
          <AppSelect v-model="selectTone" :items="[selectTone]" />
        </VCol>
        <VCol cols="12" lg="3" sm="12" md="12">
          <AppSelect v-model="selectLanguage" :items="[selectLanguage]" />
        </VCol>
      </VRow>

      <CardOptionContent
        :icon-img="gridIconPng"
        title="Add New Module"
        :padding-icon="13"
        has-border
        sub-title="Combine modules to craft even more spectacular content."
        :button-mode="true"
        @click="testClick"
      />
      <CardOptionContent
        :icon-img="houseCheck"
        title="Advanced Real Estate Listing"
        class="mt-1"
        sub-title="Create a personalized real estate listing description."
        show-arrow
        bg-icon-color-light="#28C76F"
        bg-icon-color-dark="#28C76F"
        :padding-icon="12"
        toggle
      >
        <VCol cols="12" class="content-p mt-5">
          <h3 class="text-h3">Persona Selection</h3>

          <AppSelect class="mt-5 mb-5" />

          <VExpansionPanels v-model="open" class="expanded-element-content">
            <VExpansionPanel
              value="features"
              bg-color="rgb(var(--v-theme-background-body))"
            >
              <VExpansionPanelTitle expand-icon="tabler-chevron-up">
                <p class="text-p">Transaction Type *</p>
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

          <VExpansionPanels v-model="open" class="expanded-element-content">
            <VExpansionPanel
              value="features"
              bg-color="rgb(var(--v-theme-background-body))"
            >
              <VExpansionPanelTitle expand-icon="tabler-chevron-up">
                <p class="text-p">Listing Type *</p>
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

          <VExpansionPanels v-model="open" class="expanded-element-content">
            <VExpansionPanel
              value="features"
              bg-color="rgb(var(--v-theme-background-body))"
            >
              <VExpansionPanelTitle expand-icon="tabler-chevron-up">
                <p class="text-p">Features *</p>
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
            label="Property Location"
            :maxlength="100"
            v-model="input"
            :counter="100"
            class="mt-2"
          />
          <VRow>
            <VCol cols="12" lg="8" md="12" sm="12">
              <AppTextField label="Lot Size" />
            </VCol>
            <VCol cols="12" lg="4" md="12" sm="12">
              <AppSelect label="Units" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" lg="8" md="12" sm="12">
              <AppTextField label="Living Space" />
            </VCol>
            <VCol cols="12" lg="4" md="12" sm="12">
              <AppSelect label="Units" />
            </VCol>
          </VRow>
          <VDivider></VDivider>
          <CustomSlider></CustomSlider>
        </VCol>
        <VDivider class="mt-5 mb-5"></VDivider>

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
              <p class="text-h3">Advanced Settings</p>
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
              <VLabel class="mb-4"> Sentiment </VLabel>
              <CustomRadios
                v-model:selected-radio="selectedRadioSentiment"
                :radio-content="radioContentSentiment"
                :grid-column="{ sm: '6', cols: '12', lg: '4' }"
              />
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
        <VDivider class="mt-5 mb-5"></VDivider>
        <VRow justify="center" class="mt-12">
          <VBtn>Generate</VBtn>
        </VRow>
        <VRow justify="end" class="mt-10 content-m">
          <VBtn
            class="vertical-button"
            prepend-icon="tabler-copy"
            variant="text"
            color="text-color-body"
            size="small"
            >Copy</VBtn
          >

          <VBtn
            class="vertical-button"
            prepend-icon="tabler-archive"
            variant="text"
            color="text-color-body"
            size="small"
            >Save</VBtn
          >
          <VBtn
            class="vertical-button"
            prepend-icon="tabler-forms"
            variant="text"
            color="text-color-forms"
            size="small"
          >
            <VTooltip
              activator="parent"
              location="bottom"
              color="#E5E5E5"
              scrim
            >
              <VCol>
                <span class="text-h5">Send to Editor</span>
                <p class="text-p">
                  Click to copy the results to the<br />
                  current location of your cursor<br />
                  in the text editor.
                </p>
              </VCol>
            </VTooltip>
          </VBtn>
        </VRow>
        <AppTextarea
          label="Results"
          bg-color="background-card"
          class="content-m mb-10"
        />
      </CardOptionContent>
    </VCol>
    <VCol cols="12" lg="6" md="12" sm="12" class="pt-5">
      <h3 class="text-h3 content-m">Output Composer & SPI Scoring</h3>
      <VRow class="mt-1 content-m">
        <VBtn
          class="vertical-button"
          prepend-icon="tabler-edit-circle"
          variant="text"
          color="text-color-body"
          size="small"
          >Save</VBtn
        >
        <VBtn
          class="vertical-button"
          prepend-icon="tabler-copy"
          variant="text"
          color="text-color-body"
          size="small"
          >Copy</VBtn
        >

        <VBtn
          class="vertical-button"
          prepend-icon="tabler-archive"
          variant="text"
          color="text-color-body"
          size="small"
          >Save</VBtn
        >
      </VRow>
      <div class="editor mt-2">
        <QuillEditor />
      </div>
      <div class="bg-background-card mt-5 pb-15">
        <VRow class="content-m" justify="space-between" align-content="center">
          <VCol cols="12" lg="6" md="6" sm="12">
            <h3 class="text-h3">SPI Scoring</h3>
            <p class="text-body-2-medium">
              Surveillance and Plagiarism Identifier
            </p>
          </VCol>
          <VCol cols="12" lg="6" md="6" sm="12" align-self="end">
            <p class="text-caption text-end">SPI Credits: 1,947</p>
          </VCol>
        </VRow>
        <VDivider class="mt-2 mb-2"></VDivider>
        <VRow justify="center" class="mt-5">
          <VCol cols="12" sm="4">
            <VCardText
              class="d-flex flex-column justify-center align-center text-center ps-2 h-100"
            >
              <VCheckbox label="SPI AI Detection" class="mt-5" />

              <VProgressCircular
                model-value="75"
                color="error"
                size="173"
                width="10"
                class="mt-5"
              >
                <span class="text-body-1">AI Detection Score</span>
              </VProgressCircular>
              <span class="text-body-2-medium mt-5"
                ><span class="text-error">75%</span> AI</span
              >
            </VCardText>
          </VCol>
          <VCol cols="12" sm="4">
            <VCardText
              class="d-flex flex-column justify-center align-center text-center ps-2 h-100"
            >
              <VCheckbox label="Detect Plagiarism" class="mt-5" />

              <VProgressCircular
                model-value="100"
                color="success"
                size="173"
                width="10"
                class="mt-5"
              >
                <div class="d-flex flex-column justify-center align-center">
                  <span class="text-body-1 mt-5">Plagiarism Score</span>
                  <VIcon
                    icon="tabler-check"
                    color="success"
                    size="54"
                    class="svg-strock-1"
                  />
                </div>
              </VProgressCircular>
              <span class="text-body-2-medium mt-5"
                ><span class="text-success">0%</span> Plagiarized</span
              >
            </VCardText>
          </VCol>
          <VCol cols="12" sm="4">
            <VCardText
              class="d-flex flex-column justify-center align-center text-center ps-2 h-100"
            >
              <VCheckbox label="Detect Plagiarism" class="mt-5" />

              <VProgressCircular
                model-value="82"
                color="primary"
                size="173"
                width="10"
                class="mt-5"
              >
                <div class="d-flex flex-column justify-center align-center">
                  <span class="text-body-1 mt-5"
                    >Flesch-Kincaid Reading Ease</span
                  >
                  <VIcon
                    icon="tabler-check"
                    color="success"
                    size="54"
                    class="svg-strock-1"
                  />
                </div>
              </VProgressCircular>
              <span class="text-body-2-medium mt-5"
                ><span class="text-primary">82%</span>
              </span>
            </VCardText>
          </VCol>
        </VRow>
        <VRow justify="center" class="mt-10">
          <VBtn> Run Analysis </VBtn>
        </VRow>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@import "@styles/responsive.scss";

.content-m {
  margin: 0px 10px;
}
.content-p {
  padding: 0px 10px;
}

.first-colum {
  border-right: 4px solid #4b465c29;

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
  justify-content: space-around;
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
meta:
  layout: default
</route>
