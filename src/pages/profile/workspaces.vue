<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { VDataTable } from "vuetify/labs/VDataTable";

const { d, n } = useI18n();

const data = [
  {
    workspace: "BitJar Labs",
    sub_title: "Software Development",
    contributors: 5,
    joined_date: Date.now(),
    usage: 1210,
  },
  {
    workspace: "BitJar Labs",
    sub_title: "Software Development",
    contributors: 5,
    joined_date: Date.now(),
    usage: 1210,
  },
  {
    workspace: "BitJar Labs",
    sub_title: "Software Development",
    contributors: 5,
    joined_date: Date.now(),
    usage: 1210,
  },
];

const headers = [
  { title: "WORKSPACE", sortable: true, key: "workspace" },
  { title: "CONTRIBUTORS", key: "contributors" },
  { title: "JOINED DATE", key: "joined_date" },
  { title: "USAGE", key: "usage" },
  { title: "ACTIONS", key: "actions", sortable: false },
];
</script>

<template>
  <div>
    <HeaderProfile />
    <VCard>
      <VCardText>
        <VRow>
          <VCol cols="12" lg="2" md="2" sm="12">
            <VBtn prepend-icon="tabler-plus" style="width: 100%">
              Create New Workspace
            </VBtn>
          </VCol>
          <v-spacer></v-spacer>
          <VCol cols="12" lg="2" md="4" sm="12">
            <AppTextField placeholder="Search Guests" />
          </VCol>
          <VCol cols="12" lg="2" md="4" sm="12">
            <AppSelect placeholder="Select Status" />
          </VCol>
        </VRow>
      </VCardText>
      <VCardText>
        <VDataTable :headers="headers" :items="data">
          <template v-slot:item.workspace="{ item }">
            <span class="text-h6">{{ item.raw.workspace }}</span
            ><br />
            <span class="text-p-small text-muted">{{
              item.raw.sub_title
            }}</span>
          </template>
          <template v-slot:item.usage="{ item }">
            {{ n(item.raw.usage) }} words
          </template>
          <template v-slot:item.joined_date="{ item }">
            {{ d(item.raw.joined_date) }}
          </template>
          <template v-slot:item.actions="{ item }">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon="mdi-dots-vertical"
                  variant="plain"
                  color="black"
                ></v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Hi</v-list-item-title>
                  <v-list-item-title>Hi</v-list-item-title>
                  <v-list-item-title>Hi</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-slot:bottom> </template>
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>

<route lang="yaml">
name: workspaces
meta:
  layout: default
  name: workspaces
</route>
