<script setup lang="ts">
import DialogNewAudience from "@/views/pages/profile/audiences/DialogNewAudience.vue";
import { useI18n } from "vue-i18n";
import { VDataTable } from "vuetify/labs/VDataTable";

const i18n = useI18n();

const data = [
  {
    id: 1,
    name: "AI Enthusiast",
    sub_title: "18-34 Male - $75K+",
    language: "English",
    age: "18 - 34",
    level: 75000,
    tone: "Entusiastic",
  },
];

const headers = [
  { title: "Name".toUpperCase(), key: "name" },
  { title: "Preferred Language".toUpperCase(), key: "language" },
  { title: "Age DEMO".toUpperCase(), key: "age" },
  { title: "Income Levels".toUpperCase(), key: "level" },
  { title: "Primary Tone".toUpperCase(), key: "tone" },
  { title: "ACTIONS", key: "actions", sortable: false },
];

const selected = ref([]);
</script>

<template>
  <div>
    <HeaderProfile />
    <VCard>
      <VCardText>
        <VRow>
          <VCol cols="12" lg="2" md="2" sm="12">
            <VBtn prepend-icon="tabler-plus" style="width: 100%">
              Create New Persona
            </VBtn>
          </VCol>
          <v-spacer></v-spacer>
          <VCol cols="12" lg="2" md="4" sm="12">
            <AppTextField placeholder="Search Audiences" />
          </VCol>
          <VCol cols="12" lg="2" md="4" sm="12">
            <AppSelect placeholder="Select Status" />
          </VCol>
        </VRow>
      </VCardText>
      <VCardText>
        <VDataTable
          v-model="selected"
          :headers="headers"
          :items="data"
          show-select
          item-value="id"
        >
          <template v-slot:item.name="{ item }">
            <span class="text-h6">{{ item.raw.name }}</span
            ><br />
            <span class="text-p-small text-muted">{{
              item.raw.sub_title
            }}</span>
          </template>
          <template v-slot:item.level="{ item }">
            {{ i18n.n(item.raw.level, "currency") }}+
          </template>

          <template v-slot:item.actions="{ item }">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" variant="plain"></v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Hi</v-list-item-title>
                  <v-list-item-title>Hi</v-list-item-title>
                  <v-list-item-title>Hi</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <VBtn icon="tabler-pencil" variant="plain"></VBtn>
          </template>
          <template v-slot:bottom> </template>
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>

<route lang="yaml">
name: personas
meta:
  layout: default
  name: personas
</route>
