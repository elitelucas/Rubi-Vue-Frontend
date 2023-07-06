<script setup lang="ts">
import { CustomInputContent } from "@/@core/types";
import { usePersonifyModalStore } from "@/store/modal/personify";

const props = defineProps({
  fromPanel: Boolean,
});

const emit = defineEmits(["onSave", "onClear"]);

const modalStore = usePersonifyModalStore();
const representText = ref("");
const analizyOptions = ["Informal", "Friendly", "Enthusiastic", "Persuasive"];
const analizyOption = ref();

const step = ref<"init" | "demographics" | "psychographics">("init");

const sliderValues = ref([10, 60]);

const educationLevel = ref("");

const radioEducationLevelOptions: CustomInputContent[] = [
  {
    title: "High School Graduate",
    value: "High School Graduate",
  },
  {
    title: "Some College",
    value: "Some College",
  },
  {
    title: "Master’s Degree",
    value: "Master’s Degree",
  },
  {
    title: "Trade School",
    value: "Trade School",
  },
  {
    title: "Bachelor’s Degree",
    value: "Bachelor’s Degree",
  },
  {
    title: "Doctorate Degree",
    value: "Doctorate Degree",
  },
];
const familyHousehold = ref("");

const radioFamilyHouseholdOptions: CustomInputContent[] = [
  {
    title: "Single",
    value: "Single",
  },
  {
    title: "Divorced",
    value: "Divorced",
  },
  {
    title: "In a relationship",
    value: "In a relationship",
  },
  {
    title: "Married",
    value: "Married",
  },
  {
    title: "Widowed",
    value: "Widowed",
  },
  {
    title: "Not Applicable",
    value: "Not Applicable",
  },
];

const incomeLevel = ref("");

const radioIncomeLevelOptions: CustomInputContent[] = [
  {
    title: "Under $25k",
    value: "Under $25k",
  },
  {
    title: "$50,000 - $74,999",
    value: "$50,000 - $74,999",
  },
  {
    title: "$100,000 - $149,999",
    value: "$100,000 - $149,999",
  },
  {
    title: "$25,000 - $49,999",
    value: "$25,000 - $49,999",
  },
  {
    title: "$75,000 - $99,999",
    value: "$75,000 - $99,999",
  },
  {
    title: "$150,000 and above",
    value: "$150,000 and above",
  },
];

const regionType = ref("");

const radioRegionTypeOptions: CustomInputContent[] = [
  {
    title: "Urban Area",
    value: "Urban Area",
  },
  {
    title: "Rural Area",
    value: "Rural Area",
  },
];

const freeTime = ref([]);

const checkboxFreeTimeOptions: CustomInputContent[] = [
  {
    title: "Reading",
    value: "Reading",
  },
  {
    title: "Photography",
    value: "Photography",
  },
  {
    title: "Yoga",
    value: "Yoga",
  },
  {
    title: "Traveling",
    value: "Traveling",
  },
  {
    title: "Computers",
    value: "Computers",
  },
  {
    title: "Painting/Drawing",
    value: "Painting/Drawing",
  },
  {
    title: "Writing",
    value: "Writing",
  },
  {
    title: "Fitness",
    value: "Fitness",
  },
  {
    title: "Outdoors",
    value: "Outdoors",
  },
  {
    title: "Fashion",
    value: "Fashion",
  },
  {
    title: "Technology",
    value: "Technology",
  },
  {
    title: "Gaming",
    value: "Gaming",
  },
  {
    title: "Music",
    value: "Music",
  },
  {
    title: "Dancing",
    value: "Dancing",
  },
  {
    title: "Sports",
    value: "Sports",
  },
  {
    title: "Cooking",
    value: "Cooking",
  },
  {
    title: "Pets",
    value: "Pets",
  },
  {
    title: "Collecting",
    value: "Collecting",
  },
];

const audience = ref([]);

const checkboxAudienceOptions: CustomInputContent[] = [
  {
    title: "Integrity",
    value: "Integrity",
  },
  {
    title: "Responsible",
    value: "Responsible",
  },
  {
    title: "Creative",
    value: "Creative",
  },
  {
    title: "Compassionate",
    value: "Compassionate",
  },
  {
    title: "Respectful",
    value: "Respectful",
  },
  {
    title: "Courageous",
    value: "Courageous",
  },
  {
    title: "Loyal",
    value: "Loyal",
  },
  {
    title: "Innovative",
    value: "Innovative",
  },
  {
    title: "Empathetic",
    value: "Empathetic",
  },
];

const audienceConsume = ref([]);

const checkboxAudienceConsumeOptions: CustomInputContent[] = [
  {
    title: "Books",
    value: "Books",
  },
  {
    title: "Podcasts",
    value: "Podcasts",
  },
  {
    title: "Streaming",
    value: "Streaming",
  },
  {
    title: "Blogs",
    value: "Blogs",
  },
  {
    title: "Movies",
    value: "Movies",
  },
  {
    title: "Social Media",
    value: "Social Media",
  },
  {
    title: "News",
    value: "News",
  },
  {
    title: "Television",
    value: "Television",
  },
  {
    title: "Empathetic",
    value: "Empathetic",
  },
];
const audienceMotivation = ref([]);

const checkboxAudienceMotivationOptions: CustomInputContent[] = [
  {
    title: "Personal Growth",
    value: "Personal Growth",
  },
  {
    title: "Wellness",
    value: "Wellness",
  },
  {
    title: "Convenience",
    value: "Convenience",
  },
  {
    title: "Recognition",
    value: "Recognition",
  },
  {
    title: "Financial Incentives",
    value: "Financial Incentives",
  },
  {
    title: "Competition",
    value: "Competition",
  },
  {
    title: "Health",
    value: "Health",
  },
  {
    title: "Philanthropy",
    value: "Philanthropy",
  },
  {
    title: "Curiosity",
    value: "Curiosity",
  },
];

const audienceComunicate = ref([]);

const checkboxAudienceComunicateOptions: CustomInputContent[] = [
  {
    title: "Email",
    value: "Email",
  },
  {
    title: "Text Message",
    value: "Text Message",
  },
  {
    title: "Face-to-Face",
    value: "Face-to-Face",
  },
  {
    title: "Telegram",
    value: "Telegram",
  },
  {
    title: "Phone calls",
    value: "Phone calls",
  },
  {
    title: "FB Messenger",
    value: "FB Messenger",
  },
  {
    title: "Chat Forums",
    value: "Chat Forums",
  },
  {
    title: "WhatsApp",
    value: "WhatsApp",
  },
  {
    title: "DM’s",
    value: "DM’s",
  },
  {
    title: "Zoom",
    value: "Zoom",
  },
  {
    title: "Postal Mail",
    value: "Postal Mail",
  },
  {
    title: "Discord",
    value: "Discord",
  },
];

const lifeStyle = ref([]);

const checkboxlifeStyleOptions: CustomInputContent[] = [
  {
    title: "Daily Routines",
    value: "Daily Routines",
  },
  {
    title: "Social Activities",
    value: "Social Activities",
  },
  {
    title: "Interest & Hobbies",
    value: "Interest & Hobbies",
  },
  {
    title: "Work-Life Balance",
    value: "Work-Life Balance",
  },
  {
    title: "Values & Beliefs",
    value: "Values & Beliefs",
  },
  {
    title: "Fitness",
    value: "FB Messenger",
  },
  {
    title: "Budgets",
    value: "Budgets",
  },
  {
    title: "Environment",
    value: "Environment",
  },
  {
    title: "Wellness",
    value: "Wellness",
  },
];

function nextStep() {
  switch (step.value) {
    case "init":
      step.value = "demographics";
      break;
    case "demographics":
      step.value = "psychographics";
      break;
    case "psychographics":
      modalStore.next();
      break;
  }
}

function backStep() {
  switch (step.value) {
    case "init":
      modalStore.previous();
      break;
    case "psychographics":
      step.value = "demographics";
      break;
    case "demographics":
      if (!props.fromPanel) {
        step.value = "init";
      }
      break;
  }
}

onMounted(() => {
  if (props.fromPanel) {
    step.value = "demographics";
  }
});
</script>

<template>
  <div v-if="step == 'init'">
    <h5 class="text-h5">Audience</h5>
    <p class="text-p mt-5">
      Digging deep into who your audience really is, is like striking gold for
      creating a persona! It's all about getting into the minds of your
      customers, figuring out what makes them tick and what they're all about.
      By doing this, you get to create stuff that fits them like a glove, and
      talk to them in a way that's music to their ears. The cool part? It's like
      you're having a real chat with them, not just pushing products or services
      their way. Plus, it saves you from shooting in the dark with your
      marketing strategies, making sure every move you make counts. So, knowing
      your audience in detail? It's the secret sauce for a persona that hits the
      bullseye.
    </p>
  </div>
  <div v-if="step == 'demographics'">
    <h5 class="text-h5">Demographics</h5>
    <p class="text-p mt-5">
      Basic demographic data includes age, gender, ethnicity, education level,
      income, occupation, and location. These factors provide a basic structure
      for your audience persona.
    </p>

    <VRangeSlider
      v-model="sliderValues"
      show-ticks="always"
      max="100"
      thumb-label="always"
      label="Age Range"
    />

    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      persistent-hint
      class="my-3"
      label="Gender"
      placeholder="Gender"
    />
    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      persistent-hint
      class="my-3"
      label="Ethnicity"
      placeholder="Ethnicity"
    />
    <CustomRadios
      class="my-3"
      v-model:selected-radio="educationLevel"
      :radio-content="radioEducationLevelOptions"
      label="Education Level"
      :grid-column="{ sm: '6', cols: '12', lg: '6' }"
    />
    <CustomRadios
      class="my-3"
      v-model:selected-radio="familyHousehold"
      :radio-content="radioFamilyHouseholdOptions"
      label="Family Household"
      :grid-column="{ sm: '6', cols: '12', lg: '6' }"
    />
    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      persistent-hint
      class="my-3"
      label="Number of Children living in the home"
      placeholder="Number of Children living in the home"
    />
    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      persistent-hint
      class="my-3"
      label="Number of Children living in the home"
      placeholder="Select number"
    />
    <CustomRadios
      class="my-3"
      v-model:selected-radio="incomeLevel"
      :radio-content="radioIncomeLevelOptions"
      label="Education Level"
      :grid-column="{ sm: '6', cols: '12', lg: '6' }"
    />
    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      persistent-hint
      class="my-3"
      label="Country"
      placeholder="Select Country"
    />
    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      persistent-hint
      class="my-3"
      label="State / Province / Region"
      placeholder="Select State / Province / Region"
    />
    <AppSelect
      v-model="analizyOption"
      :items="analizyOptions"
      :menu-props="{ maxHeight: '400' }"
      persistent-hint
      class="my-3"
      label="City / Town"
      placeholder="City / Town"
    />
    <AppTextField
      class="my-3"
      label="Postal Code"
      placeholder="Enter your Postal Code"
    />
    <CustomRadios
      class="my-3"
      v-model:selected-radio="regionType"
      :radio-content="radioRegionTypeOptions"
      label="Education Level"
      :grid-column="{ sm: '6', cols: '12', lg: '12' }"
    />
  </div>

  <div v-if="step == 'psychographics'">
    <h5 class="text-h5">Psychographics</h5>
    <p class="text-p mt-5">
      So, here’s the thing about psychographics - they're like the secret
      ingredients to the persona-creating recipe! They are your secret sauce in
      creating spot-on personas. When you dig into psychographics, you're diving
      into what really makes your audience tick - their attitudes, their values,
      their interests, their lifestyle. It's like you're reading their diary
      (with permission, of course!) It's kind of like becoming best friends with
      your audience. And when you know them that well, you can create a persona
      that's so spot-on, it's like looking at a mirror image. Now that's a big
      deal!
    </p>
    <CustomCheckboxes
      class="my-3"
      v-model:selected-checkbox="freeTime"
      :checkbox-content="checkboxFreeTimeOptions"
      :grid-column="{ sm: '6', cols: '12', lg: '4' }"
      :label="'Interests and Hobbies'"
    />
    <CustomCheckboxes
      class="my-3"
      v-model:selected-checkbox="audience"
      :checkbox-content="checkboxAudienceOptions"
      :grid-column="{ sm: '6', cols: '12', lg: '4' }"
      :label="'What values are important to your audience?'"
    />
    <CustomCheckboxes
      class="my-3"
      v-model:selected-checkbox="audienceConsume"
      :checkbox-content="checkboxAudienceConsumeOptions"
      :grid-column="{ sm: '6', cols: '12', lg: '4' }"
      :label="'What media does your audience consume?'"
    />
    <CustomCheckboxes
      class="my-3"
      v-model:selected-checkbox="audienceMotivation"
      :checkbox-content="checkboxAudienceMotivationOptions"
      :grid-column="{ sm: '6', cols: '12', lg: '4' }"
      :label="'What motivates your audience?'"
    />
    <CustomCheckboxes
      class="my-3"
      v-model:selected-checkbox="audienceComunicate"
      :checkbox-content="checkboxAudienceComunicateOptions"
      :grid-column="{ sm: '6', cols: '12', lg: '4' }"
      :label="'How does your audience prefer to communicate?'"
    />
    <CustomCheckboxes
      class="my-3"
      v-model:selected-checkbox="lifeStyle"
      :checkbox-content="checkboxlifeStyleOptions"
      :grid-column="{ sm: '6', cols: '12', lg: '4' }"
      :label="'Select the options below that influence strongly their lifestyle decisions?'"
    />
    <div class="py-2"></div>
  </div>
  <VCol>
    <VRow justify="space-between">
      <VBtn
        variant="tonal"
        color="secondary"
        prepend-icon="tabler-arrow-left"
        @click="backStep"
      >
        Previous
      </VBtn>
      <VBtn
        v-if="step == 'psychographics' && fromPanel"
        append-icon="tabler-arrow-right"
        @click="$emit('onSave')"
      >
        Save
      </VBtn>
      <VBtn v-else append-icon="tabler-arrow-right" @click="nextStep">
        Next
      </VBtn>
    </VRow>
  </VCol>
</template>
<style lang="scss" scoped>
.div-btn-append {
  background-color: #4b4b4b;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(var(--v-theme-rubi-red));
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  cursor: pointer;
  border-radius: 0px 4px 4px 0px;

  .v-theme--dark & {
    background-color: #d7d8de;
  }
}

.text-counter {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  text-align: end;
  color: #d7d8de;
  display: flex;
  justify-content: end;

  .v-theme--dark & {
    color: #4b4b4b;
  }
}
</style>
