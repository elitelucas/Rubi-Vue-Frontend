<script lang="ts" setup>
import type { CustomInputContent, GridColumn } from '@core/types'

interface Props {
  selectedCheckbox: string[]
  checkboxContent: CustomInputContent[]
  gridColumn?: GridColumn
  label?: string
}

interface Emit {
  (e: 'update:selectedCheckbox', value: string[]): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const selectedOption = ref(structuredClone(toRaw(props.selectedCheckbox)))

watch(selectedOption, () => {
  emit('update:selectedCheckbox', selectedOption.value)
})
</script>

<template>
  <div>
    <VLabel
      v-if="label"
      class="mb-4"
    >
      {{ label }}
    </VLabel>
    <VRow
      v-if="props.checkboxContent && selectedOption"
      v-model="selectedOption"
    >
      <VCol
        v-for="item in props.checkboxContent"
        :key="item.title"
        v-bind="gridColumn"
        class="col-checbox"
      >
        <VLabel
          class="custom-input custom-checkbox rounded cursor-pointer"
          :class="selectedOption.includes(item.value) ? 'active' : ''"
          style="border: none"
        >
          <div>
            <VCheckbox
              v-model="selectedOption"
              :value="item.value"
            />
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
  </div>
</template>

<style lang="scss" scoped>
.custom-checkbox {
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0px !important;

  .v-checkbox {
    margin-block-start: -0.375rem;
  }

  .cr-title {
    font-weight: 400;
  }
}

.col-checbox {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
