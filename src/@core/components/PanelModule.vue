<script setup lang="ts">
import { useModuleStore } from "@/store/module";
import { VueSidePanel } from "vue3-side-panel";
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
  <VueSidePanel
    v-model="moduleStore.showModal"
    width="500px"
    hide-close-btn
    class="vsp-custom"
  >
    <template #header class="headerss">
      <VIcon size="40" icon="tabler-apps" color="text-color-body" />
      <span class="text-display-4">Modules</span>
      <VSpacer />
      <IconBtn class="me-2" @click="() => moduleStore.setModal(false)">
        <VIcon
          size="12"
          class="cursor-pointer"
          icon="tabler-x"
          color="text-color-body"
        />
      </IconBtn>
    </template>
    <template #default>
      <div style="height: 100%">
        <VRow align-content="center" align="center" class="px-5 my-2">
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
                <v-list-item :title="item.title" @click="onClick">
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

        <VRow class="row-module-item-list">
          <VCol
            cols="12"
            sm="12"
            md="6"
            lg="6"
            v-for="item in listOptions"
            :key="item.name"
            class="module-item-list"
          >
            <div
              :style="`width: 48px; height: 48px; border-radius: 50px; background: ${item.color}`"
            >
              <VIcon
                :icon="item.icon"
                :style="`color: ${item.colorIcon}`"
              ></VIcon>
            </div>

            <span class="text-p-semibold">
              {{ item.name }}
            </span>
          </VCol>
        </VRow>
      </div>
    </template>
  </VueSidePanel>
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
</style>
