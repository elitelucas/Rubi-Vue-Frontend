<script lang="ts" setup>
import type { CustomInputContent, GridColumn } from '@core/types'

interface Props {
  selectedRadio: string
  radioContent: CustomInputContent[]
  gridColumn?: GridColumn
}

interface Emit {
  (e: 'update:selectedRadio', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const selectedOption = ref(structuredClone(toRaw(props.selectedRadio)))

watch(selectedOption, () => {
  emit('update:selectedRadio', selectedOption.value)
})
</script>

<template>
  <VRadioGroup
    v-if="props.radioContent"
    v-model="selectedOption"
    class="radio-group-custom"
  >
    <VRow>
      <VCol
        v-for="item in props.radioContent"
        :key="item.title"
        v-bind="gridColumn"
        class="col-radio"
      >
        <VLabel
          class="custom-input custom-radio rounded cursor-pointer pa-0"
          :class="selectedOption === item.value ? 'active' : ''"
          style="border: none"
        >
          <div>
            <VRadio :value="item.value" />
          </div>
          <slot :item="item">
            <div class="flex-grow-1">
              <div class="d-flex align-center mb-1">
                <h6 class="cr-title text-base">
                  {{ item.title }}
                </h6>
                <VSpacer />
                <span
                  v-if="item.subtitle"
                  class="text-disabled text-base"
                >{{
                  item.subtitle
                }}</span>
              </div>
              <p
                v-if="item.desc"
                class="text-sm mb-0"
              >
                {{ item.desc }}
              </p>
            </div>
          </slot>
        </VLabel>
      </VCol>
    </VRow>
  </VRadioGroup>
</template>

<style lang="scss" scoped>
.custom-radio {
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 0.375rem;
  padding: 0px !important;

  .v-radio {
    margin-block-start: -0.25rem;
  }

  .cr-title {
    font-weight: 400;
  }
}

.col-radio {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
