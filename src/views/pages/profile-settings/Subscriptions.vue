<script setup lang="ts">
import DialogSubscriptionsChangePlan from './subscriptions/DialogSubscriptionsChangePlan.vue'
import PlanCard from './subscriptions/PlanCard.vue'
import FrameRubiLogo from '@images/pages/profile-settings/subscriptions/frame-rubi-logo.png'

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
    highlight: true,
  },
]

const subs = reactive({
  name1: 'BitJar Labs LLC',
  sub_name1: 'Custom Software Development',
  name2: 'FLEX Technologies',
  sub_name2: 'Leader of EXO AI',
})

const showDialogSubscriptionsChangePlan = ref(false)
</script>

<template>
  <div>
    <DialogSubscriptionsChangePlan v-model:is-dialog-visible="showDialogSubscriptionsChangePlan" />
    <img
      v-if="!$vuetify.display.mdAndDown"
      :src="FrameRubiLogo"
      class="frame-logo"
    >
    <VRow
      justify="center"
      class="my-10"
    >
      <h2 class="title-subscription">
        LEVEL UP YOUR<br>
        RUBI <span style="color: rgb(var(--v-theme-rubi-red));">EXPERIENCE</span>
      </h2>
    </VRow>
    <!-- SECTION pricing plans -->
    <div class="mb-10 row-plans">
      <div
        v-for="plan in pricingPlans"
        :key="plan.name"
        cols="12"
        lg="3"
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
          :minimalist="false"
          :current="false"
        />
      </div>
    </div>
    <VDivider class="mt-10" />
    <h4 class="text-h4 mt-10">
      My Current Subscriptions
    </h4>
    <VCard
      title="Current Plan"
      class="mt-5"
    >
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <VCol
              cols="12"
              lg="6"
              md="6"
              sm="12"
              style="padding: 0px;"
            >
              <span class="text-h6" />
              <AppTextField
                v-model="subs.name1"
                class="text-input-medium"
              />
            </VCol>
            <VCol
              cols="12"
              lg="6"
              md="6"
              sm="12"
              style="padding: 0px;"
              class="mt-2"
            >
              <AppTextField
                v-model="subs.sub_name1"
                class="text-h5"
              />
            </VCol>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <VAlert
              color="warning"
              variant="tonal"
            >
              <VAlertTitle class="mb-2">
                Your account is set to auto-renew
              </VAlertTitle>
              <span>Pay annually and get 2 months free.</span>
            </VAlert>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <span class="text-base font-weight-medium text-high-emphasis">Active until Dec 09, 2021</span><br>
            <span class="text-sm">We will send you a notification upon Subscription
              expiration</span><br>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <div class="d-flex text-base font-weight-medium text-high-emphasis justify-space-between">
              <span>Days</span>
              <span>24 of 30 Days</span>
            </div>
            <VProgressLinear
              model-value="30"
              bg-color="secundary"
              color="primary"
            />
            <span class="text-sm">6 days remaining until your plan requires update</span><br>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <span class="text-base font-weight-medium text-high-emphasis">$199 Per Month
              <VChip
                class="ma-1"
                color="primary"
                rounded="sm"
              >
                BASIC
              </VChip></span><br>
            <span class="text-sm">Standard plan for small to medium businesses</span><br>
          </VCol>
          <VCol
            cols="12"
            md="6"
            class="d-flex gap-4"
          />

          <VCol
            cols="12"
            md="6"
            class="d-flex gap-4"
          >
            <!-- 👉 submit and reset button -->
            <VBtn @click="showDialogSubscriptionsChangePlan = true">
              Change Plan
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
    <VCard class="mt-5">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <VCol
              cols="12"
              lg="6"
              md="6"
              sm="12"
              style="padding: 0px;"
            >
              <span class="text-h6" />
              <AppTextField
                v-model="subs.name2"
                class="text-input-medium"
              />
            </VCol>
            <VCol
              cols="12"
              lg="6"
              md="6"
              sm="12"
              style="padding: 0px;"
              class="mt-2"
            >
              <span class="text-h6" />
              <AppTextField
                v-model="subs.sub_name2"
                class=""
              />
            </VCol>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <VAlert
              color="warning"
              variant="tonal"
            >
              <VAlertTitle class="mb-2">
                Your account is set to auto-renew
              </VAlertTitle>
              <span>Pay annually and get 2 months free.</span>
            </VAlert>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <span class="text-base font-weight-medium text-high-emphasis">Active until Dec 09, 2021</span><br>
            <span class="text-sm">We will send you a notification upon Subscription
              expiration</span><br>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <div class="d-flex text-base font-weight-medium text-high-emphasis justify-space-between">
              <span>Days</span>
              <span>24 of 30 Days</span>
            </div>
            <VProgressLinear
              model-value="30"
              bg-color="secundary"
              color="primary"
            />
            <span class="text-sm">6 days remaining until your plan requires update</span><br>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <span class="text-base font-weight-medium text-high-emphasis">$199 Per Month
              <VChip
                class="ma-1"
                color="primary"
                rounded="sm"
              >
                BASIC
              </VChip></span><br>
            <span class="text-sm">Standard plan for small to medium businesses</span><br>
          </VCol>
          <VCol
            cols="12"
            md="6"
            class="d-flex gap-4"
          />

          <VCol
            cols="12"
            md="6"
            class="d-flex gap-4"
          >
            <!-- 👉 submit and reset button -->
            <VBtn @click="showDialogSubscriptionsChangePlan = true">
              Change Plan
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
@import "@styles/responsive.scss";

.frame-logo {
  position: absolute;
  left: -40px;
  top: -10px;
  height: 700px;
}

.title-subscription {
  color: rgb(var(--v-theme-text-color-body));
  font-family: Bebas Neue;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 92%; /* 88.32px */
  letter-spacing: 0.43px;

  margin-right: 500px;

  @include media-query("lg") {
    margin-right: 0;
  }

  @include media-query("sm") {
    font-size: 60px;
  }

}

.input-title {
  input:disabled {
    color: red !important;
  }
}

.row-plans {
  display: flex;
  justify-content: center;
  gap: 26px;

  @include media-query("sm") {
    flex-direction: column;
  }

  @include media-query("md") {
    flex-direction: column;
  }

  @include media-query("lg") {
    flex-direction: column;
    align-items: center;
  }
}
</style>
