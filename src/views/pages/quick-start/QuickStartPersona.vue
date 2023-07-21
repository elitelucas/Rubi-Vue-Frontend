<template>
  <VCol cols="12">
    <h5 class="text-h5">
      Persona Creation
    </h5>
  </VCol>
  <VCol cols="12">
    <p class="text-sm text-text-color-body">
      Personas create deep understanding of the target audience.  They are fictional representations of typical customers that encompass their demographic, behaviors, motivations and goals. By developing personas, businesses can gain valuable insights into their customers' needs, preferences, and pain points. This understanding allows companies to tailor their products, services, and marketing efforts to better meet the specific needs of their target audience.
    </p>
  </VCol>
  <VCol cols="12">
    <AppTextarea label="Describe your objective and goals." />
  </VCol>
  <VCol cols="12">
    <AppTextarea label="Provide a description of your product, focusing on its key benefits and features." />
  </VCol>
  <VCol cols="12">
    <AppSelect
      label="Specify the number of personas you would like to create."
      :items="[1, 2, 3]"
    />
  </VCol>
  <VCol cols="12">
    <h6 class="text-h6">
      Let Xtract simulate the tone & voice from an influencer or URL?
    </h6>
  </VCol>
  <VCol cols="12">
    <VLabel class="mb-1 text-body-2 text-high-emphasis">
      Simulate your persona voice from a website
    </VLabel><br>
    <VLabel class="mb-1 text-sm text-muted">
      Enter a URL you would like Rubi to scan and create a voice.
    </VLabel>
    <AppTextField placeholder="Enter URL" />
  </VCol>
  <VCol cols="12">
    <VLabel class="mb-1 text-body-2 text-high-emphasis">
      Simulate your persona voice from an influencer
    </VLabel><br>
    <VLabel class="mb-1 text-sm text-muted">
      Enter the Instagram handle of your favorite influencer.
    </VLabel>
    <AppTextField placeholder="Enter URL" />
    <VLabel class="mt-1 text-sm text-muted">
      Xtract Boosts cost 1 credit.
    </VLabel>
  </VCol>
</template>
