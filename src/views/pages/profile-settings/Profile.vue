<script setup lang="ts">
import { toast } from 'vue3-toastify'
import { useAuthStore } from '@/store/auth'
import type { Countries } from '@/services/country'
import type { Languages } from '@/services/language'
import countryService from '@/services/country'
import languageService from '@/services/language'
import { requiredValidator } from '@/@core/utils/validators'

const authStore = useAuthStore()

const refInputEl = ref<HTMLElement>()

const countries = ref<Countries[]>([])
const languages = ref<Languages[]>([])

const loading = ref(false)

const refVForm = ref<VForm>()

const address = authStore.auth.addresses[0] || {}

const avatar = ref()

const accountData = {
  avatarImg: authStore.auth.avatar,
  fist_name: authStore.auth.firstname,
  last_name: authStore.auth.lastname,
  email: authStore.auth.email,
  organization: authStore.auth.business_name,
  phone: authStore.auth.mobile,
  address: `${address.address_line1}, ${address.address_line2}`,
  city: address.city,
  state: address.state,
  country: authStore.auth.country_id,
  language: authStore.auth.preferred_language.id,
}

const accountDataLocal = reactive(structuredClone(accountData))

// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    avatar.value = files[0]
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.avatarImg = accountData.avatarImg
}

async function loadCountries() {
  try {
    const response = await countryService.countries()

    countries.value = response.data.data
  }
  catch {
    toast.error('Erro load countries', {
      position: 'bottom-center',
    })
  }
}
async function fetchLanguages() {
  try {
    const response = await languageService.languages()

    languages.value = response.data.data
  }
  catch {
    toast.error('Erro fetch languages', {
      position: 'bottom-center',
    })
  }
}

async function submit() {
  const { valid } = await refVForm.value?.validate() as never

  if (valid) {
    if (avatar.value) {
      try {
        loading.value = true

        const bodyFormData = new FormData()

        bodyFormData.append('file', avatar.value)
        await authStore.handleUpdateUserAvatar(authStore.auth.uuid, bodyFormData)
        avatar.value = null
        toast.success('User avatar updated!', {
          position: 'bottom-center',
        })
      }
      catch (error) {
        toast.error('failed to upload user avatar', {
          position: 'bottom-center',
        })
      }
      finally {
        loading.value = false
      }
    }
    await authStore.handleMe()
    accountDataLocal.avatarImg = authStore.auth.avatar
  }
}

function cancel() {
  accountDataLocal.avatarImg = accountData.avatarImg
  accountDataLocal.language = accountData.language
}

onMounted(async () => {
  loading.value = true
  await Promise.all([fetchLanguages(), loadCountries()])
  loading.value = false
})
</script>

<template>
  <div>
    <VCard
      title="Profile Details"
      :loading="loading"
      :disabled="loading"
    >
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
                    color="secondary"
                    variant="tonal"
                    :disabled="!avatar"
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
        <VForm
          ref="refVForm"
          validate-on="submit"
          @submit.prevent="submit"
        >
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="accountDataLocal.fist_name"
                label="First Name"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="accountDataLocal.last_name"
                label="Last Name"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="accountDataLocal.email"
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
                v-model="accountDataLocal.organization"
                label="Organization"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="accountDataLocal.phone"
                label="Phone Number"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="accountDataLocal.address"
                label="Address"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="accountDataLocal.city"
                label="City"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="accountDataLocal.state"
                label="State/Province"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppSelect
                v-model="accountDataLocal.country"
                label="Country"
                :items="countries"
                item-title="name"
                item-value="id"
                disabled
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppSelect
                v-model="accountDataLocal.language"
                label="Preferred Language"
                :items="languages"
                item-title="name"
                item-value="id"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <!-- 👉 submit and reset button -->
              <VBtn
                type="submit"
                :loading="loading"
              >
                Save Changes
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="cancel"
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
