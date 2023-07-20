<script setup lang="ts">
interface Props {
  title: string
  icon: string
  body: string[]
}
defineProps<Props>()
</script>

<template>
  <div class="">
    <VRow class="py-5">
      <VIcon
        :icon="icon"
        color="rubi-red"
        class="mr-2"
      />
      <div
        class="d-flex flex-column"
        style="width: 145px;"
      >
        <span
          class="text-h6"
          style="width: 145px;"
        >{{ title }} </span><br>
        <VDivider
          thickness="2"
          class="mt-2"
        />
        <div class="my-2" />
        <span
          v-for="text in body"
          :key="text"
          style="text-align: start;"
          class="text-p text-black mb-2"
        >
          {{ text }}
        </span>
      </div>
    </VRow>
  </div>
</template>
