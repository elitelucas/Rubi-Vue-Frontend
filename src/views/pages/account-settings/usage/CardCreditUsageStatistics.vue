<script setup lang="ts">
const statistics = [
  {
    title: 'Documents',
    stats: '400',
    icon: 'tabler-file-text',
    color: 'primary',
  },
  {
    title: 'Booosts',
    stats: '10,384',
    icon: 'tabler-database-import',
    color: 'info',
  },
  {
    title: 'Words Used',
    stats: '84,293',
    icon: 'tabler-message-2',
    color: 'error',
  },
  {
    title: 'Payments',
    stats: '$89.98',
    icon: 'tabler-currency-dollar',
    color: 'success',
  },
]

const date = ref('July, 2023')
</script>

<template>
  <VCard title="Statistics">
    <template #append>
      <AppDateTimePicker
        v-model="date"
        style="width: 180px;"
        append-inner-icon="tabler-chevron-down"
        density="compact"
        color="primary"
        class="text-primary"
        base-color="primary"
        :config="{ position: 'auto right', dateFormat: 'F, Y' }"
      />
    </template>

    <VCardText class="pt-6">
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <VAvatar
              :color="item.color"
              variant="tonal"
              size="42"
              class="me-3"
            >
              <VIcon :icon="item.icon" />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h5 font-weight-medium">{{ item.stats }}</span>
              <span class="text-sm">
                {{ item.title }}
              </span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
