<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useModuleStore } from "@/store/module";
const moduleStore = useModuleStore();
const options = ref([
  {
    name: "View All Modules",
    value: "View All Modules",
    color: "none",
  },
  {
    name: "Marketing/Advertising",
    value: "Marketing/Advertising",
    color: "#FCCC0F",
  },
  {
    name: "Businessg",
    value: "Businessg",
    color: "#FF7012",
  },
]);

const listOptions = [
  {
    name: "AIDA Framework",
    icon: "tabler-calendar-event",
    color: "#F272E14D",
    colorIcon: "#F272E1",
  },
  {
    name: "Facebook Post",
    icon: "tabler-brand-facebook",
    color: "#3498DB33",
    colorIcon: "#049DDF",
  },
  {
    name: "TicTok Script",
    icon: "tabler-brand-tiktok",
    color: "#3498DB33",
    colorIcon: "#3498DB",
  },
  {
    name: "Blog Outline",
    icon: "tabler-brand-tiktok",
    color: "#E8004C33",
    colorIcon: "#E8004C",
  },
];

const module = ref(null);
</script>

<template>
  <VNavigationDrawer
    v-model="moduleStore.showModal"
    temporary
    border="0"
    location="end"
    width="500"
    :scrim="false"
    class="app-customizer"
  >
    <!-- 👉 Header -->
    <div
      class="customizer-heading d-flex align-center justify-space-between"
      style="gap: 10px"
    >
      <VIcon
        size="60"
        icon="tabler-apps"
        color="text-color-body"
        class="svg-strock-1"
      />
      <span class="text-display-4">Modules</span>
      <VSpacer />
      <IconBtn class="me-2" @click="() => moduleStore.setModal(false)">
        <VIcon
          size="20"
          class="cursor-pointer"
          icon="tabler-x"
          color="text-color-body"
        />
      </IconBtn>
    </div>
    <!-- 👉 body -->
    <PerfectScrollbar tag="ul" :options="{ wheelPropagation: false }">
      <VRow
        align-content="center"
        align="center"
        class="px-10 my-2"
        style="min-height: 70px"
      >
        <VCol cols="12" sm="12" md="6" lg="6">
          <VRow>
            <VTextField
              color="text-color-heading"
              bg-color="background-card"
              placeholder="Search modules here..."
              prepend-icon="tabler-search"
              variant="solo"
              flat
            ></VTextField>
          </VRow>
        </VCol>
        <VCol cols="12" sm="12" md="6" lg="6">
          <VSelect
            color="text-color-heading"
            variant="solo"
            bg-color="background-card"
            flat
            placeholder="All Collections"
            :items="options"
            item-title="name"
            item-value="name"
            v-model="module"
          >
            <template #selection="{ item }">
              <v-list-item :title="item.title">
                <template v-slot:prepend>
                  <v-avatar
                    size="28"
                    :style="`background-color: ${item.raw.color};${
                      item.raw.color == 'none'
                        ? 'border: 1px solid #000000;'
                        : ''
                    }`"
                  >
                  </v-avatar>
                </template>
              </v-list-item>
            </template>
            <template #prepend-item>
              <v-list-item class="text-h6" title="Modules Collections">
                <template #title="{ title }">
                  <h6 class="text-h6">{{ title }}</h6>
                  <VDivider class="mt-3"></VDivider>
                </template>
              </v-list-item>
            </template>
            <template #item="{ item, props: { onClick, title, value } }">
              <v-list-item :title="item.title" @click="onClick as any">
                <template #title="{ title }">
                  <h6 class="text-h6">{{ title }}</h6>
                </template>
                <template v-slot:prepend>
                  <v-avatar
                    size="28"
                    :style="`background-color: ${item.raw.color};${
                      item.raw.color == 'none'
                        ? 'border: 1px solid #000000;'
                        : ''
                    }`"
                  >
                  </v-avatar>
                </template>
              </v-list-item>
            </template>
          </VSelect>
        </VCol>
      </VRow>
      <VRow class="ma-0 mt-n1">
        <VCol
          v-for="(option, index) in listOptions"
          :key="option.name"
          cols="6"
          class="text-center border-t cursor-pointer pa-4 shortcut-icon"
          :class="(index + 1) % 2 ? 'border-e' : ''"
        >
          <VAvatar
            variant="tonal"
            size="48"
            :style="`background: ${option.color}`"
          >
            <VIcon :icon="option.icon" :style="`color: ${option.colorIcon}`" />
          </VAvatar>

          <h6 class="text-base font-weight-medium mt-2 mb-0">
            {{ option.name }}
          </h6>
        </VCol>
      </VRow>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<style lang="scss">
.row-module-item-list {
  background: rgb(var(--v-theme-perfect-scrollbar-thumb));
}

.module-item-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: rgb(var(--v-theme-background-card));
  margin-top: 1px;
  margin-bottom: 1px;
  border-right: 1px solid rgb(var(--v-theme-perfect-scrollbar-thumb));

  height: 132px;
  cursor: pointer;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.app-customizer {
  .customizer-section {
    padding: 1.25rem;
  }

  .customizer-heading {
    padding-block: 0.875rem;
    padding-inline: 1.25rem;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}

.app-customizer-toggler {
  position: fixed !important;
  inset-block-start: 50%;
  inset-inline-end: 0;
}
</style>
