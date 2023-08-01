<script setup lang="ts">
import avatar1 from "@images/avatars/avatar-14.png";
import http from "@/utils/http";
import { useProfileStore } from "@/store/profile";
const profileStore = useProfileStore();
const refInputEl = ref<HTMLElement>();
const router = useRouter();
const accountData = {
  avatarImg: avatar1,
};

const accountDataLocal = ref(structuredClone(accountData));

// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader();
  const { files } = file.target as HTMLInputElement;

  if (files && files.length) {
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        accountDataLocal.value.avatarImg = fileReader.result;
    };
  }
};

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg;
};

interface Props {
  account_id: string;
}
const props = defineProps<Props>();
const account_id = ref(props.account_id);
const account_data = ref({});

watch(
  () => props.account_id,
  async (newVal, oldVla) => {
    account_id.value = newVal;

    const response = await http.get(
      "/v1/user-subscriptions?order_col=nickname&order_dir=asc",
      {},
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    let resdata = response.data?.data;

    const foundItem = resdata.find((item) => item.id == props.account_id);
    if (foundItem) {
      account_data.value = foundItem;
      console.log("account_data", account_data.value)
    }
  },
  { immediate: true }
);

async function handleUpdateButtonClick() {
  try {
    const response = await http.patch(
      "/v1/user-subscriptions/" + account_data.value?.id,
      { ...account_data.value },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Saved successfully!");
    // window.location.reload();
  } catch (error) {
    console.error("Error in async function:", error);
  }
}
// Delete
const isDelConfirmChecked = ref(false);
const showErrorForDelete = ref(false);

async function handleDeleteButtonClick() {
  try {
    if (!isDelConfirmChecked.value) {    
      showErrorForDelete.value = true;
      return;
    }
    const response = await http.delete(
      "/v1/user-subscriptions/" + account_data.value?.id,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Deleted successfully!");
    window.location = "/";
  } catch (error) {
    console.error("Error in async function:", error);
  }
}
</script>

<template>
  <div>
    <VCard
      title="Subscription Account Details"
      subtitle="Define and manage your subscription."
    >
      <!-- <p>{{ JSON.stringify(account_data) }}</p> -->
      <VCardText>
        <VRow>
          <VCol cols="12" lg="6" md="6" sm="12">
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
                  <VBtn color="primary" @click="refInputEl?.click()">
                    <VIcon icon="tabler-cloud-upload" class="d-sm-none" />
                    <span class="d-none d-sm-block">Upload new photo</span>
                  </VBtn>

                  <input
                    ref="refInputEl"
                    type="file"
                    name="file"
                    accept=".jpeg,.png,.jpg,GIF"
                    hidden
                    @input="changeAvatar"
                  />

                  <VBtn
                    type="reset"
                    color="secondary"
                    variant="tonal"
                    @click="resetAvatar"
                  >
                    <span class="d-none d-sm-block">Reset</span>
                    <VIcon icon="tabler-refresh" class="d-sm-none" />
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
            <VCol cols="12" lg="6" md="6" sm="12">
              <VCheckbox label="Make primary account" v-model="account_data.primary"/>
              <AppTextField
                label="Account Nickname"
                v-model="account_data.nickname"
              />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" />
            <VCol cols="12" lg="6" md="6" sm="12">
              <AppTextField
                label="Short Description"
                v-model="account_data.short_description"
              />
            </VCol>
            <VCol cols="12" class="d-flex gap-4">
              <!-- 👉 submit and reset button -->
              <VBtn type="submit" @click="handleUpdateButtonClick">
                Save Changes
              </VBtn>

              <VBtn color="secondary" type="reset" variant="tonal">
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VCard title="Delete Subscription Account" class="mt-10">
      <VCardText>
        <VRow>
          <VCol cols="12">
            <div class="alert-automatic-pay">
              <span class="text-h6 text-warning"
                >Are you sure you want to delete this subscription?</span
              ><br />
              <span class="text-p-small text-warning"
                >Once you delete your subscription, there is no going back.
                Please be certain.</span
              ><br />
            </div>
          </VCol>
          <VCol cols="12">
            <div
              :style="{
                border: showErrorForDelete ? '1px solid red' : '0px solid red',
              }"
            >
              <VCheckbox
                label="I confirm my subscription deletion."
                v-model="isDelConfirmChecked"
                color="danger"
              />
            </div>
          </VCol>
          <VCol cols="12">
            <!-- 👉 submit and reset button -->
            <VBtn type="submit" color="error" @click="handleDeleteButtonClick">
              Deactivate Subscription
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
