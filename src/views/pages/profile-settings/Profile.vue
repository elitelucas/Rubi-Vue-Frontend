<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-14.png'

const refInputEl = ref<HTMLElement>()

const accountData = {
  avatarImg: avatar1,
}

const accountDataLocal = ref(structuredClone(accountData))

// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}
</script>

<template>
  <div>
    <VCard title="Profile Details">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
            <div class="d-flex">
              <!-- 👉 Avatar -->
              <VAvatar
                rounded
                size="100"
                class="me-6"
                :image="accountDataLocal.avatarImg"
              />

              <!-- 👉 Upload Photo -->
              <form class="d-flex flex-column justify-center gap-4">
                <div class="d-flex flex-wrap gap-2">
                  <VBtn
                    color="primary"
                    @click="refInputEl?.click()"
                  >
                    <VIcon
                      icon="tabler-cloud-upload"
                      class="d-sm-none"
                    />
                    <span class="d-none d-sm-block">Upload new photo</span>
                  </VBtn>

                  <input
                    ref="refInputEl"
                    type="file"
                    name="file"
                    accept=".jpeg,.png,.jpg,GIF"
                    hidden
                    @input="changeAvatar"
                  >

                  <VBtn
                    type="reset"
                    color="secondary"
                    variant="tonal"
                    @click="resetAvatar"
                  >
                    <span class="d-none d-sm-block">Reset</span>
                    <VIcon
                      icon="tabler-refresh"
                      class="d-sm-none"
                    />
                  </VBtn>
                </div>

                <p class="text-body-1 mb-0 text-muted">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p>
              </form>
            </div>
          </VCol>
        </VRow>
      </VCardText>
      <VDivider />
      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="First Name"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Last Name"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Email"
                type="email"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Organization"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Phone Number"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Address"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="City"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="State/Province"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Country"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Preferred Language"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <!-- 👉 submit and reset button -->
              <VBtn type="submit">
                Save Changes
              </VBtn>

              <VBtn
                color="secondary"
                type="reset"
                variant="tonal"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VCard
      title="Delete Account"
      class="mt-10"
    >
      <VCardText>
        <VRow>
          <VCol cols="12">
            <div class="alert-automatic-pay">
              <span class="text-h6 text-warning">Are you sure you want to delete your account?</span><br>
              <span class="text-p-small text-warning">Once you delete your account, there is no going back. Please be certain.</span><br>
            </div>
          </VCol>
          <VCol cols="12">
            <VCheckbox label="I confirm my account deactivation" />
          </VCol>
          <VCol cols="12">
            <!-- 👉 submit and reset button -->
            <VBtn
              type="submit"
              color="error"
            >
              Deactivate Account
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.alert-automatic-pay {
  background-color: rgb(var(--v-theme-warning), 0.16);
  border-radius: 6px;
  color: rgb(var(--v-theme-warning)) !important;
  padding: inherit;
}
</style>

<route lang="yaml">
name: account
meta:
  layout: default
  name: account
</route>
