<script setup lang="ts">
import { useProfileStore } from "@/store/profile";
import router from "@/router";
import {
  workspaceLists,
  workspaceCreate,
  workspaceUpdate,
  workspaceDelete,
} from "@/services/workspace";

interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
}
interface rawDataObject {
  id: number;
  nickname: string;
  short_description: string;
  keywords: Array<string>;
  collaborators: number;
}

interface Props {
  isDialogVisible: boolean;
  isEditMode?: boolean;
  activeRawData?: rawDataObject;
  userSubscriptionId?: string;
}

const profileStore = useProfileStore();
const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<Emit>();

const workspace_data = ref({});
const collaboratorList = [
  {
    id: 1,
    label: "Nick name 1",
  },
  {
    id: 2,
    label: "Nick name 2",
  },
];
const form = reactive({
  nickname: "",
  short_description: "",
  keywords: [],
  collaborator: { id: 0, label: "" },
  search: null,
  items: [""],
});
const uid = profileStore.uuid;

onUpdated(() => {
  form.nickname = props?.activeRawData?.nickname as string;
  form.short_description = props?.activeRawData?.short_description as string;
  form.keywords = props?.activeRawData?.keywords as never[];
  form.collaborator = {
    id: props?.activeRawData?.collaborators as number,
    label: "Nick name 1",
  };
});

const formSubmit = async () => {
  try {
    var data = {
      ...form,
      user_subscription_id: props.userSubscriptionId,
      active: false,
    };
    if (props.isEditMode) {
      //update
      await workspaceUpdate(props.activeRawData?.id, data);
    } else {
      //create
      await workspaceCreate(data);
    }   
    window.location.reload();
  } catch (error) {
    console.error("Error in async function:", error);
  }
};

const removeKey = (key: string) =>
  (form.keywords = form.keywords.filter((item) => item !== key));

const dialogModelValueUpdate = (val: boolean) => {
  emit("update:isDialogVisible", val);
};
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 580"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-8">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <AppLogo />
        <div class="my-3" />
        <VCardTitle class="text-h5 font-weight-medium mb-3">
          {{ isEditMode ? "Edit" : "Create New" }} Workspace
        </VCardTitle>
        <p class="mb-0">
          {{ isEditMode ? "Edit" : "A new" }} workspace segments your content,
          personas and collaborators.
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12">
              <AppTextField
                v-model="form.nickname"
                label="Workspace Name"
                placeholder="Workspace Name"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                v-model="form.short_description"
                label="description"
                placeholder="short description"
              />
            </VCol>

            <VCol cols="12">
              <VLabel
                class="mb-1 text-body-2 text-high-emphasis"
                text="Keywords"
              />
              <p class="text-caption">
                Type your keywords and hit the Enter key to save each one.
              </p>
              <AppCombobox
                v-model="form.keywords"
                multiple
                clear-icon="tabler-trash-x"
                chips
                closable-chips
              />
            </VCol>
            <VCol cols="12">
              <AppSelect
                v-model="form.collaborator"
                :items="collaboratorList"
                item-title="label"
                item-value="id"
                label="Select"
                persistent-hint
                return-object
                single-line
              />
            </VCol>

            <!-- 👉 Card actions -->
            <VCol cols="12" class="text-center">
              <VBtn class="me-3" type="submit" @click="formSubmit">
                {{ isEditMode ? "Save" : "Submit" }}
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                @click="$emit('update:isDialogVisible', false)"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
