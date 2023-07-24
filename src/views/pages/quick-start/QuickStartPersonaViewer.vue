<script setup lang="ts">
import ItemViewerInfo from './components/ItemViewerInfo.vue'
import avatarBg from '@images/pages/quick-start/avatar-bg.png'
import rubiLogo from '@images/iconify-png/rubi_icon.png'

interface Props {
  profileLg?: string
  lg?: string
  avatar?: string
}

const props = withDefaults(defineProps<Props>(), {
  lg: '6',
  profileLg: '4',
})

const refInputEl = ref<HTMLElement>()

const avatarImg = ref(props.avatar || rubiLogo)

const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        avatarImg.value = fileReader.result
    }
  }
}

const itensInfo = [
  {
    title: 'Voice Profiles',
    icon: 'tabler-speakerphone',
    body: [
      '1. Friendly and Informative',
      '2. Inspirational and Motivational',
      '3. Supportive and Encouraging',
    ],
  },
  {
    title: 'Tone Profiles',
    icon: 'tabler-adjustments',
    body: [
      '1. Conversational and Approachable',
      '2. Aspirational and Empowering',
      '3. Nurturing and Caring',
    ],
  },
  {
    title: 'Demographics:',
    icon: 'tabler-list-details',
    body: [
      'Age Range: 30-39',
      'Gender: Female',
      'Ethnicity: All ethnicities',
    ],
  },
  {
    title: 'Household Structure',
    icon: 'tabler-home-2',
    body: [
      'Married',
      'Children - 2',
    ],
  },
  {
    title: 'Income Level:',
    icon: 'tabler-report-money',
    body: [
      'Middle to high income',
    ],
  },
  {
    title: 'Location',
    icon: 'tabler-map-2',
    body: [
      'Oklahoma',
      'Suburban area',
    ],
  },
  {
    title: 'Communication Pref.',
    icon: 'tabler-messages',
    body: [
      'Social media platforms, email newsletters, health and wellness events, online communities',
    ],
  },
  {
    title: 'Influences',
    icon: 'tabler-arrows-minimize',
    body: [
      'Health influencers, before-and-after success stories, scientific research, positive customer reviews',
    ],
  },
  {
    title: 'Interests & Hobbies',
    icon: 'tabler-activity',
    body: [
      'Fitness, wellness, clean eating, self-care, beauty, yoga, pilates, cooking, natural remedies',
    ],
  },
  {
    title: 'Values',
    icon: 'tabler-target',
    body: [
      'Health and well-being, natural and sustainable products, self improvement, work-life balance',
    ],
  },
  {
    title: 'Motivation',
    icon: 'tabler-rocket',
    body: [
      'They prioritize their health and are proactive about seeking products and practices that support their well-being. They are interested in collagen for its potential benefits in skin health, joint support, and overall vitality.',
    ],
  },
  {
    title: 'Media Consumption',
    icon: 'tabler-social',
    body: [
      'Health and wellness blogs, social media platforms (Instagram, Facebook), fitness magazines, wellness podcasts, online forums, influencer recommendations',
    ],
  },
]
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      :lg="profileLg"
      md="4"
      sm="12"
    >
      <!-- 👉 Avatar -->
      <div
        :style="`background-image: url('${avatarBg}');`"
        class="avatar-container"
      >
        <VAvatar
          rounded="large"
          :size="avatarImg === rubiLogo ? 100 : 200"
          :image="avatarImg"
        />
        <VBtn
          icon="tabler-edit"
          rounded="sm"
          color="secondary"
          variant="flat"
          class="btn"
          size="35"
          @click="refInputEl?.click()"
        />
      </div>

      <input
        ref="refInputEl"
        type="file"
        name="file"
        accept=".jpeg,.png,.jpg,GIF"
        hidden
        @input="changeAvatar"
      >
    </VCol>
    <VCol
      cols="12"
      lg="8"
      md="8"
      sm="12"
    >
      <div class="mt-15" />
      <VRow
        v-if="lg !== '3'"
        align="center"
      >
        <IconBtn>
          <VIcon icon="tabler-chevron-left" />
        </IconBtn>
        <span class="text-h5 text-muted">1 of 3</span>
        <IconBtn>
          <VIcon icon="tabler-chevron-right" />
        </IconBtn>
      </VRow>
      <VRow>
        <h3 class="text-h3">
          <input
            as="input"
            value="Emma, the Educator"
            class="input-name"
          > <br>
          <div
            style="height: 4px; background-color: rgb(var(--v-theme-rubi-red));border-radius: 6px;"
            color="rubi-red"

            thickness="2"
          />
        </h3>
        <IconBtn class="ml-2">
          <VIcon icon="tabler-edit" />
        </IconBtn>
      </VRow>
      <VRow class="mt-10">
        <VCol
          v-for="item in itensInfo"
          :key="item.title"
          cols="12"
          :lg="lg"
          md="6"
          sm="12"
        >
          <ItemViewerInfo
            :title="item.title"
            :icon="item.icon"
            :body="item.body"
          />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-container {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .btn {
    position: absolute;
    right: 10px;
    bottom: 0px;
  }
}

.input-name {
  min-width: 100px;
}

.input-name:focus {

    outline: 0px solid transparent;
}
</style>
