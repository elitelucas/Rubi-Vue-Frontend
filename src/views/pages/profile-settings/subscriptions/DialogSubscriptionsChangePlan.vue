<script setup lang="ts">
import PlanCard from './PlanCard.vue'

interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  isDialogVisible: boolean
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emit>()

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const pricingPlans = [
  {
    name: 'Basic',
    price: 15,
    type: 'month',
    features: [
      '10,000 Words',
      '10 Credits',
      '1 Workspace',
      '1 Collaborator',
      '3 Personas',
    ],
    comming: false,
    highlight: false,
    current: false,
  },
  {
    name: 'Pro',
    price: 25,
    type: 'month',
    features: [
      '25,000 Words',
      '25 Credits',
      '3 Workspace',
      '3 Collaborator',
      '10 Personas',
      '1-Click Posting*',
    ],
    comming: true,
    highlight: false,
    current: true,
  },
  {
    name: 'Premium',
    price: 50,
    type: 'month',
    features: [
      '50,000 Words',
      '50 Credits',
      '5 Workspace',
      '5 Collaborator',
      'Unlimited Personas',
      '1-Click Posting*',
      '2GB of Storage*',
    ],
    comming: true,
    highlight: false,
    current: false,

  },
]
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : '50%'"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-8">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <AppLogo />
        <div class="my-3" />
        <VCardTitle class="text-h5 font-weight-medium mb-3">
          Modify Your Subscription
        </VCardTitle>
        <p class="mb-0">
          FLEXible subscriptions to fit your needs.
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VRow
          justify="center"
          class="mb-10"
        >
          <VCol
            v-for="plan in pricingPlans"
            :key="plan.name"
            cols="12"
            lg="4"
            md="4"
            sm="12"
          >
            <PlanCard
              :name="plan.name"
              :features="plan.features"
              :price="plan.price"
              :type_plan="plan.type"
              :comming="plan.comming"
              :highlight="plan.highlight"
              minimalist
              :current="plan.current"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>
