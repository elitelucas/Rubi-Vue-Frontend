<script setup lang="ts"></script>

<template>
  <div>
    <HeaderProfile />
    <VCard title="Profile Details">
      <VCardText>
        <div class="header">
          <img
            class="img-profile"
            src="/src/assets/images/avatars/avatar-1.png"
            height="100"
            width="100"
          />
          <div class="options">
            <div class="btns">
              <VBtn>Upload new photo</VBtn>
              <VBtn variant="tonal" color="secundary" disabled>Reset</VBtn>
            </div>
            <span class="text-grey-400 description">
              Allowed JPG, GIF or PNG. Max size of 800K
            </span>
          </div>
        </div>
      </VCardText>
      <VDivider />
      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField label="First Name" placeholder="First Name" />
            </VCol>

            <VCol cols="12" md="6">
              <AppTextField label="Last Name" placeholder="Last Name" />
            </VCol>

            <VCol cols="12" md="6">
              <AppTextField label="Email" type="email" placeholder="Email" />
            </VCol>

            <VCol cols="12" md="6">
              <AppTextField label="Organization" placeholder="Organization" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField label="Phone Number" placeholder="Phone Number" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField label="Address" placeholder="Address" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField label="State" placeholder="State" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField label="Zip Code" placeholder="Zip Code" />
            </VCol>
            <VCol cols="12" md="6">
              <AppSelect
                label="Country"
                placeholder="Country"
                :items="['USA']"
              />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField label="Language" placeholder="Language" />
            </VCol>
            <VCol cols="12" md="6">
              <AppSelect
                label="Timezone"
                placeholder="Select Timezone"
                :items="['Timezone']"
              />
            </VCol>
            <VCol cols="12" md="6">
              <AppSelect
                label="Currency"
                placeholder="Select Currency"
                :items="['Currency']"
              />
            </VCol>
            <VCol cols="12" class="d-flex gap-4">
              <!-- 👉 submit and reset button -->
              <VBtn type="submit"> Save Changes </VBtn>

              <VBtn color="secondary" type="reset" variant="tonal">
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
    <VCard title="Current Plan" class="mt-10">
      <VCardText>
        <VRow>
          <VCol cols="12" md="6">
            <span class="text-h6">Your Current Plan is Basic</span><br />
            <span class="text-p-lighter">A simple start for everyone</span
            ><br />
          </VCol>
          <VCol cols="12" md="6">
            <div class="alert-automatic-pay">
              <span class="text-h6 text-warning"
                >Your account is set to auto-renew</span
              ><br />
              <span class="text-p-lighter text-warning"
                >Pay annually and get 2 months free.</span
              ><br />
            </div>
          </VCol>
          <VCol cols="12" md="6">
            <span class="text-h6">Active until Dec 09, 2021</span><br />
            <span class="text-p-lighter"
              >We will send you a notification upon Subscription
              expiration</span
            ><br />
          </VCol>
          <VCol cols="12" md="6">
            <div class="d-flex text-h6 justify-space-between">
              <span>Days</span>
              <span>24 of 30 Days</span>
            </div>
            <VProgressLinear
              model-value="30"
              bg-color="secundary"
              color="primary"
            />
            <span class="text-p-lighter"
              >6 days remaining until your plan requires update</span
            ><br />
          </VCol>
          <VCol cols="12" md="6">
            <span class="text-h6"
              >$199 Per Month
              <v-chip class="ma-1" color="primary" rounded="sm">
                Popular
              </v-chip></span
            ><br />
            <span class="text-p-lighter"
              >Standard plan for small to medium businesses</span
            ><br />
          </VCol>
          <VCol cols="12" md="6" class="d-flex gap-4"></VCol>

          <VCol cols="12" md="6" class="d-flex gap-4">
            <!-- 👉 submit and reset button -->
            <VBtn type="submit"> Save Changes </VBtn>

            <VBtn color="secondary" type="reset" variant="tonal"> Cancel </VBtn>
          </VCol>
          <VCol cols="12" md="6" class="d-flex gap-4">
            <!-- 👉 submit and reset button -->
            <VBtn type="submit"> Order History </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
    <VCard title="Delete Account" class="mt-10">
      <VCardText>
        <VRow>
          <VCol cols="12">
            <div class="alert-automatic-pay">
              <span class="text-h6 text-warning"
                >Are you sure you want to delete your account?</span
              ><br />
              <span class="text-p-lighter text-warning"
                >Once you delete your account, there is no going back. Please be
                certain.</span
              ><br />
            </div>
          </VCol>
          <VCol cols="12">
            <VCheckbox label="I confirm my account deactivation" />
          </VCol>
          <VCol cols="12">
            <!-- 👉 submit and reset button -->
            <VBtn type="submit" color="error"> Deactivate Account </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: start;

  .img-profile {
    border-radius: 6px;
    height: 100px;
    width: 100px;
  }

  .options {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
    gap: 10px;

    .btns {
      display: flex;
      gap: 10px;
    }

    .description {
      font-size: 15px;
      line-height: 22px;
      overflow-wrap: break-word;
    }
  }
}

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
