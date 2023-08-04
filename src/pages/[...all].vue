<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import elephant from '@images/pages/400-500/elephant.png'

interface Props {
  code?: 404 | 500
}

const props = withDefaults(defineProps<Props>(), {
  code: 404,
})

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

const paddingLeft = ref('0px')

if (props.code === 404)
  paddingLeft.value = '36px'

const erros = {
  404: {
    title: '404',
    sub_title: 'Page Not Found',
    description: `Oops! 😖 The requested URL was not found on this server, 
but hey, it isn’t every day you see an elephant wearing stripes.`,
  },
  500: {
    title: '500',
    sub_title: 'It’s not you, it’s us.',
    description: `Oops! 😖 Looks like we got off track.
Go on back and let’s try that again ;) `,
  },
}
</script>

<template>
  <VRow>
    <VCol>
      <div class="misc-wrapper">
        <span class="error-label">ERROR</span>
        <span class="error-code-label">{{ erros[code].title }}</span>
        <h1 class="text-h1 text-text-color-heading">
          {{ erros[code].sub_title }}
        </h1>
        <h6
          class="text-h6 text-text-color-heading"
          style="white-space: pre-line"
        >
          {{ erros[code].description }}
        </h6>
        <VBtn
          to="/"
          class="mb-12 mt-5"
        >
          Back Home
        </VBtn>
        <VImg
          :src="authThemeMask"
          class="misc-footer-img d-none d-md-block"
        />
      </div>
    </VCol>
    <VCol class="d-none d-lg-flex">
      <img :src="elephant">
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";

.error-label {
  color: rgb(var(--v-theme-text-color-heading));
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 52px; /* 346.667% */
  letter-spacing: 20px;
  padding-left: v-bind(paddingLeft);
}

.error-code-label {
  color: rgb(var(--v-theme-text-color-heading));
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 96px;
  font-style: normal;
  font-weight: 900;
  line-height: 52px; /* 54.167% */
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
