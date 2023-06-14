<script setup lang="ts">
import type { CustomInputContent } from '@/@core/types'
import houseCheck from '@images/iconify-png/house-check.png'
import gridIconPng from '@images/iconify-png/layout-grid-add.png'

const selectPersona = ref('Persona')
const selectAudience = ref('Audience')
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
</script>

<template>
  <VRow
    no-gutters
    class="body-background pt-5"
  >
    <VCol
      cols="12"
      lg="6"
      md="12"
      sm="12"
    >
      <h3 class="text-h3 content-p">
        Global Composition Settings
      </h3>
      <VRow class="content-m">
        <VCol style="padding-left: 0px !important;">
          <AppSelect
            v-model="selectPersona"
            :items="['Persona']"
          />
        </VCol>
        <VCol>
          <AppSelect
            v-model="selectAudience"
            :items="[selectAudience]"
          />
        </VCol>
        <VCol>
          <AppSelect
            v-model="selectTone"
            :items="[selectTone]"
          />
        </VCol>
        <VCol>
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
      />
      <VCol
        cols="12"
        class="content-p mt-5"
      >
        <h3 class="text-h3">
          Persona Selection
        </h3>

        <AppSelect class="mt-5" />

        <VExpansionPanels
          v-model="open"
          class="expanded-element-content"
        >
          <VExpansionPanel
            value="features"
            bg-color="rgb(var(--v-theme-background-body))"
          >
            <VExpansionPanelTitle>
              <p class="text-p mt-5">
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
            <VExpansionPanelTitle>
              <p class="text-p mt-5">
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
            <VExpansionPanelTitle>
              <p class="text-p mt-5">
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
      </VCol>
    </VCol>
    <VCol
      cols="12"
      lg="6"
      md="12"
      sm="12"
    >
      aaaa
    </VCol>
  </VRow>
</template>

<style lang="scss">
  .content-m {
    margin: 0px 23px;
  }
  .content-p {
    padding: 0px 23px;
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
</style>

<route lang="yaml">
meta:
  layout: default
  </route>
