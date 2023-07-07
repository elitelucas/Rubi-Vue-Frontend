<script setup lang="ts">
defineProps({
  title: String,
  subTitle: String,
  icon: String,
  selected: Boolean,
})
</script>

<template>
  <VCol
    cols="12"
    lg="12"
    md="12"
    sm="12"
  >
    <VRow align="center">
      <div
        class="icon-div"
        :class="selected ? 'selected' : ''"
      >
        <img
          v-if="!icon?.includes('tabler')"
          :src="icon"
        >
        <VIcon
          v-else
          :icon="icon"
        />
      </div>

      <VCol
        cols="9"
        class="text-div"
      >
        <span class="text-h6">{{ title }}</span><br>
        <span class="text-p-semibold">{{ subTitle }}</span>
      </VCol>
    </VRow>
  </VCol>
</template>

<style lang="scss" scoped>
.icon-div {
  width: 40px;
  height: 40px;
  background-color: rgb(var(--v-theme-grey-8), 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
.icon-div.selected {
  background-color: rgb(var(--v-theme-rubi-red), 0.8);

  & svg {
    color: white;
  }
}

.text-div {
  & .text-h6 {
    color: rgb(var(--v-theme-text-color-heading));
  }
  & .text-p-semibold {
    color: rgb(var(--v-theme-grey-500));
    font-style: normal;
    font-weight: 500 !important;
    font-size: 15px;
    line-height: 22px;
  }
}
</style>
