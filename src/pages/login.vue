<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authBackgroundIllustrationLight from '@images/pages/auth-background-illustration.png'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'

import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
const router = useRouter()

const authThemeImg = useGenerateImageVariant(authBackgroundIllustrationLight, authBackgroundIllustrationLight, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)

const isPasswordVisible = ref(false)

const refVForm = ref<VForm>()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const inputValidations = [(v: string) => v.length || 'This field is required']
const showError = ref(false)
const loading = ref(false)

async function handleSubmit() {
  const { valid } = await refVForm.value?.validate() as never
  if (valid) {
    try {
      showError.value = false
      loading.value = true
      await authStore.handleLogin(email.value, password.value)
      await authStore.handleMe()
      router.push('/')
    }
    catch (error) {
      showError.value = true
    }
    finally {
      loading.value = false
    }
  }
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
  >
    <VCol
      lg="8"
      class="d-none d-lg-flex"
    >
      <div
        class="position-relative bg-background  w-100"
        :style="`background-image: url(${authThemeImg});background-size: cover;background-position: center;background-repeat: no-repeat;`"
      >
        <LogoLoading message="RELATIONAL UNDERSTANDING BASED INTERACTION" />
      </div>
    </VCol>

    <VCol
      cols="12"
      lg="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="mb-6"
          />

          <h5 class="text-h5 mb-1 text-auth-welcome-title">
            Say hello to <span class="text-capitalize"> {{ themeConfig.app.title }} </span>. 👋
          </h5>

          <p class="mb-0">
            Sign into your account and do something amazing.
          </p>
        </VCardText>

        <VCardText>
          <VAlert
            v-if="showError"
            color="error"
            class="mb-2"
          >
            The login or password is incorrect
          </VAlert>
          <VForm
            ref="refVForm"
            validate-on="submit"
            @submit.prevent="handleSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="email"
                  label="Email or Username"
                  placeholder="Email or Username"
                  type="email"
                  autofocus
                  :rules="inputValidations"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :rules="inputValidations"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                  <VCheckbox
                    v-model="rememberMe"
                    label="remember Me"
                  />
                  <a
                    v-if="false"
                    class="text-primary ms-2 mb-1"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>

                <VBtn
                  block
                  :loading="loading"
                  type="submit"
                >
                  Sign in
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                v-if="false"
                cols="12"
                class="text-center"
              >
                <span>New on our platform?</span>

                <a
                  class="text-primary ms-2"
                  href="#"
                >
                  Create an account
                </a>
              </VCol>

              <VCol
                v-if="false"
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />

                <span class="mx-4">or</span>

                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol
                v-if="false"
                cols="12"
                class="text-center"
              >
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<style scoped>
  .text-auth-welcome-title {
    font-family: 'Roboto' !important;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 36px;
    display: flex;
    align-items: center;
    color: #434344;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .text-auth-welcome-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #434344;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
</style>

<route lang="yaml">
name: login
meta:
  requiredAuth: false
  layout: blank
</route>
