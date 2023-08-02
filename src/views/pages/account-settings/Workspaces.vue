<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { VDataTable } from "vuetify/labs/VDataTable";
import DialogNewWorkSpace from "@/views/pages/account-settings/workspaces/DialogNewWorkSpace.vue";
import { useProfileStore } from "@/store/profile";
import func from "vue-temp/vue-editor-bridge";
import { toast } from "vue3-toastify";
import {
  workspaceLists,
  workspaceUpdate,
  workspaceDelete,
} from "@/services/workspace";

const profileStore = useProfileStore();

interface Props {
  workspaceList: Array<Object>;
  account_id: string;
}

const props = defineProps<Props>();
const workspaceList = ref(props.workspaceList);
const account_id = ref(props.account_id);

const { d, n } = useI18n();

const headers = [
  { title: "WORKSPACE", sortable: true, key: "nickname" },
  { title: "STATUS", key: "active" },
  { title: "Collaborators", key: "collaborators" },
  { title: "CREATED DATE", key: "created_at" },
  { title: "USAGE", key: "usage" },
  { title: "ACTIONS", key: "actions", sortable: false },
];

const showDialogNewWorkSpace = ref(false);
const showConfirmDialog = ref(false);
const showRemoveConfirmDialog = ref(false);
const editMode = ref(false);
const activeRawData = ref({
  id: 0,
  nickname: "",
  short_description: "",
  keywords: [],
  active: false,
});
const uid = profileStore.uuid;
const sortOptions = ["All", "Active", "Inactive"];
const sortOption = ref("All");

watch(
  () => uid,
  async () => {
    try {
      const response = await workspaceLists();
      let resdata = response.data?.data;
      workspaceList.value = resdata;
    } catch (error) {
      console.log("error", error.message);
    }
  },
  { immediate: true }
);

function update(arr: any, id: any, updatedData: any) {
  return arr.map((item: any) =>
    item.id === id ? { ...item, ...updatedData } : item
  );
}
function removeItem(arr: any, id: any) {
  return arr.filter((item: any) => {
    return item.id !== id;
  });
}

async function removeWorkspace() {
  try {
    await workspaceDelete(activeRawData?.value.id);
    const result = removeItem(workspaceList.value, activeRawData?.value.id);
    workspaceList.value = result;
    toast.success("Workspace removed!", {
      position: "top-right",
    });
    showRemoveConfirmDialog.value = false;
  } catch (error: any) {
    toast.warning(`Error: ${error.message}`, {
      position: "top-right",
    });
    showRemoveConfirmDialog.value = false;
  }
}

async function changeState() {
  try {
    await workspaceUpdate(activeRawData?.value.id, {
      nickname: activeRawData?.value.nickname,
      short_description: activeRawData?.value.short_description,
      keywords: activeRawData?.value.keywords,
      active: !activeRawData?.value.active,
    });

    const updatedData = { active: !activeRawData?.value.active };
    const result = update(
      workspaceList.value,
      activeRawData?.value.id,
      updatedData
    );
    workspaceList.value = result;
    toast.success("Status changed!", {
      position: "top-right",
    });
    showConfirmDialog.value = false;
  } catch (error: any) {
    toast.warning(`Error: ${error.message}`, {
      position: "top-right",
    });
    showConfirmDialog.value = false;
  }
}
function updateDialogVisible(state: boolean) {
  showDialogNewWorkSpace.value = state;
}
function updateList(itemData: any, isEdit: boolean) {
  if (isEdit) {
    const result = update(workspaceList.value, itemData.id, itemData);
    workspaceList.value = result;
    toast.success("Workspace updated!", {
      position: "top-right",
    });
    showDialogNewWorkSpace.value = false;
  } else {
    workspaceList.value.unshift(itemData);
    toast.success("Workspace created!", {
      position: "top-right",
    });
    showDialogNewWorkSpace.value = false;
  }
}
</script>

<template>
  <div>
    <DialogNewWorkSpace
      v-model:is-dialog-visible="showDialogNewWorkSpace"
      :is-edit-mode="editMode"
      :active-raw-data="activeRawData"
      :user-subscription-id="account_id"
      @updateDialogVisible="updateDialogVisible"
      @updateList="updateList"
    />
    <v-dialog v-model="showConfirmDialog" width="auto">
      <VCard class="pa-5 pa-sm-8">
        <VCardText class="pt-6"> Are you sure to change state?. </VCardText>
        <VRow>
          <VCol cols="12" class="text-center">
            <VBtn class="me-3" type="submit" @click="changeState"> OK </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              @click="showConfirmDialog = false"
            >
              Cancel
            </VBtn>
          </VCol>
        </VRow>
      </VCard>
    </v-dialog>
    <v-dialog v-model="showRemoveConfirmDialog" width="auto">
      <VCard class="pa-5 pa-sm-8">
        <VCardText class="pt-6"> Delete workspace?. </VCardText>
        <VRow>
          <VCol cols="12" class="text-center">
            <VBtn class="me-3" type="submit" @click="removeWorkspace">
              OK
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              @click="showRemoveConfirmDialog = false"
            >
              Cancel
            </VBtn>
          </VCol>
        </VRow>
      </VCard>
    </v-dialog>
    <VCard>
      <VCardText>
        <VRow>
          <VCol cols="12" lg="2" md="2" sm="12">
            <VBtn
              prepend-icon="tabler-plus"
              style="width: 100%"
              @click="
                activeRawData = {};
                editMode = false;
                showDialogNewWorkSpace = true;
              "
            >
              Create New Workspace
            </VBtn>
          </VCol>
          <VSpacer />
          <!-- <VCol
            cols="12"
            lg="2"
            md="4"
            sm="12"
          >
            <AppTextField placeholder="Search Guests" />
          </VCol> -->
          <VCol cols="12" lg="2" md="4" sm="12">
            <AppSelect
              placeholder="Select Status"
              v-model="sortOption"
              :items="sortOptions"
            />
          </VCol>
        </VRow>
      </VCardText>
      <VCardText>
        <VDataTable
          :headers="headers"
          :items="workspaceList"
          :search="
            sortOption == 'All' ? '' : sortOption == 'Active' ? 'true' : 'false'
          "
        >
          <template #item.nickname="{ item }">
            <span class="text-h6">{{ item.raw.nickname }}</span
            ><br />
            <span class="text-p-small text-muted">{{
              item.raw.short_description
            }}</span>
          </template>
          <template #item.active="{ item }">
            <VChip
              :color="item.raw.active ? 'success' : 'error'"
              rounded="sm"
              variant="flat"
            >
              {{ item.raw.active ? "Active" : "Inactive" }}
            </VChip>
          </template>
          <template #item.collaborators="{ item }">
            {{ item.raw.collaborators.length }}
          </template>
          <template #item.created_at="{ item }">
            {{ d(item.raw.created_at) }}
          </template>
          <template #item.usage="{ item }">
            {{ n(item.raw.usage) }} words
          </template>
          <template #item.actions="{ item }">
            <VMenu>
              <template #activator="{ props }">
                <VBtn
                  icon="mdi-dots-vertical"
                  variant="plain"
                  color="black"
                  v-bind="props"
                />
              </template>

              <VList>
                <VListItem
                  @click="
                    activeRawData = item.raw;
                    editMode = true;
                    showDialogNewWorkSpace = true;
                  "
                >
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>
                <!-- <VListItem @click="changeState(item.raw, !item.raw.active)"> -->
                <VListItem
                  @click="
                    activeRawData = item.raw;
                    showConfirmDialog = true;
                  "
                >
                  <VListItemTitle>
                    {{
                      item.raw.active ? "Deactivate" : "Activate"
                    }}</VListItemTitle
                  >
                </VListItem>
                <VListItem
                  @click="
                    activeRawData = item.raw;
                    showRemoveConfirmDialog = true;
                  "
                >
                  <VListItemTitle>Remove</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </template>
          <template #bottom />
        </VDataTable>
      </VCardText>
    </VCard>
  </div>
</template>

<route lang="yaml">
name: workspaces
meta:
  layout: default
  name: workspaces
</route>
