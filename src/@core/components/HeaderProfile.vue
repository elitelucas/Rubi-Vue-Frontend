<script setup lang="ts">
const route = useRoute();

const routeName = route.meta.name || "account";

const buttons = [
  {
    variant: "plain",
    prependIcon: "tabler-user-circle",
    text: "Account",
    route_name: "account",
  },
  {
    variant: "plain",
    prependIcon: "tabler-chart-arcs",
    text: "Usage",
    route_name: "usage",
  },
  {
    variant: "plain",
    prependIcon: "tabler-layout-board-split",
    text: "Workspaces",
    route_name: "workspaces",
  },
  {
    variant: "plain",
    prependIcon: "tabler-users",
    text: "Contributors",
    route_name: "contributors",
  },
  {
    variant: "plain",
    prependIcon: "tabler-circle-plus",
    text: "Add-ons",
    route_name: "account",
  },
  {
    variant: "plain",
    prependIcon: "tabler-speakerphone",
    text: "Audiences",
    route_name: "audiences",
  },
  {
    variant: "plain",
    prependIcon: "tabler-id",
    text: "Personas",
    route_name: "personas",
  },
  {
    variant: "plain",
    prependIcon: "tabler-exchange",
    text: "Connections",
    route_name: "connections",
  },
];

const buttonsElements = computed(() => {
  return buttons.map((btn) => {
    if (btn.text.toLowerCase() == routeName) {
      btn.variant = "elevated";
    }
    return btn;
  });
});

const title = computed(() =>
  buttons.find((btn) => btn.text.toLowerCase() == routeName)
);
</script>
<template>
  <div class="breadcrumbs-header">
    <VRow class="row">
      <span class="text-h4 text-muted">Account Settings</span>&nbsp;&nbsp;<span
        class="text-h4"
        >/</span
      >&nbsp;&nbsp;<span class="text-h4 text-2">{{ title?.text || "" }}</span>
    </VRow>
  </div>
  <div class="btn-tabs">
    <VBtn
      v-for="btn in buttonsElements"
      :key="btn.text"
      :variant="(btn.variant as any)"
      :prepend-icon="btn.prependIcon"
      :to="{ name: btn.route_name }"
    >
      {{ btn.text }}</VBtn
    >
  </div>
</template>

<style lang="scss" scoped>
@import "@styles/responsive.scss";
.breadcrumbs-header {
  padding: 26px 13px;

  & .row {
    font-weight: 600;

    & .text-2 {
      .v-theme--dark & {
        color: #cfd3ec !important;
      }
    }
  }
}

.btn-tabs {
  display: flex;
  gap: 10px;
  margin: 15px 0px;

  @include media-query("sm") {
    flex-direction: column;
  }

  @include media-query("md") {
    max-height: auto;
    overflow-y: inherit;
  }

  & .v-btn--variant-plain {
    .v-theme--light & {
      color: #434344 !important;
    }
    .v-theme--dark & {
      color: #b6bee3 !important;
    }
  }
}
</style>
