<script setup lang="ts">
interface CardPlanProps {
  name: string
  price: number
  features: string[]
  type_plan: 'month' | 'year' | string
  comming: boolean
  highlight: boolean
  minimalist: boolean
  current: boolean
}
defineProps<CardPlanProps>()
</script>

<template>
  <!-- 👉  Card -->
  <VCard
    flat
    :class="`plan-card ${highlight ? 'bg-rubi-red' : ''}`"
  >
    <VCardText
      style="block-size: 4.125rem;"
      class="text-end"
    />

    <!-- 👉 Plan logo -->
    <VCardText class="text-center">
      <!-- 👉 Plan name -->
      <h5
        class="card-plan-title"
        :class="highlight ? 'text-white' : ''"
      >
        {{ name }}
      </h5>
    </VCardText>

    <!-- 👉 Plan price  -->
    <VCardText class="position-relative text-center">
      <div class="d-flex justify-center align-center">
        <h1
          class="card-plan-price"
          :class="highlight ? 'text-white' : ''"
        >
          ${{ price }}
        </h1>
      </div>
      <sub
        class="card-plan-type ms-1 mt-4 text-muted"
        :class="highlight ? 'text-white' : ''"
      >per {{ type_plan }}</sub>
    </VCardText>

    <!-- 👉 Plan features -->
    <VCardText
      v-if="!minimalist"
      class="mt-5 d-flex justify-center "
    >
      <VList class="card-list">
        <VListItem
          v-for="feature in features"
          :key="feature"
          :class="`${highlight ? 'bg-rubi-red' : ''}`"
        >
          <template #prepend>
            <svg
              class="mr-2"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="2.5"
                cy="2.5"
                r="2.5"
                :fill="highlight ? 'white' : '#434344'"
              />
            </svg>
          </template>

          <VListItemTitle
            class="card-plan-feature-text"
            :class="highlight ? 'text-white' : ''"
          >
            {{ feature }}
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>

    <!-- 👉 Plan actions -->
    <VCardActions
      v-if="!minimalist"
      class="d-flex justify-center mt-10"
    >
      <VBtn
        :color="highlight ? 'extra-dark' : 'rgba(72, 181, 255, 0.16)'"
        :variant="highlight ? 'flat' : 'flat'"
        size="large"
        style="width: 168px;"
      >
        <span class="text-on-surface">
          Choose plan
        </span>
      </VBtn>
    </VCardActions>

    <!-- 👉 Plan actions -->
    <VCardActions
      v-if="minimalist"
      class="d-flex justify-center mt-10"
    >
      <VBtn
        v-if="current"
        color="secundary"
        variant="text"
        style="width: 168px;"

        disabled
      >
        Current Plan
      </VBtn>
      <VBtn
        v-else
        color="primary"
        variant="flat"
        style="width: 168px;"
      >
        Select
      </VBtn>
    </VCardActions>
    <VCardActions
      v-if="comming && !minimalist"
      class="d-flex justify-center mt-5 mb-2"
    >
      <span
        class="card-plan-coming-text"
        :class="highlight ? 'text-white' : ''"
      >*Coming Soon</span>
    </VCardActions>
  </VCard>
</template>

<style lang="scss" scoped>
.plan-card {
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);

}
.card-plan-title {
  color: rgba(var(--v-theme-on-surface));
  text-align: center;
  font-family: Montserrat !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.333px;
}

.card-plan-price {
  color: rgba(var(--v-theme-on-surface));
  text-align: center;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1px;
}

.card-plan-type {
  color: rgba(var(--v-theme-on-surface));
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.233px;
}

.card-plan-feature-text {
  color: rgba(var(--v-theme-on-surface));
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
}

.card-plan-coming-text {
  color: rgba(var(--v-theme-on-surface));
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.233px;
}
</style>
