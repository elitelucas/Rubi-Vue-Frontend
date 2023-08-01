<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useDisplay } from "vuetify/lib/framework.mjs";
import avatar from "@images/avatars/avatar-1.png";
import bot from "@images/iconify-png/rubi_icon.png";
import { useResponsiveLeftSidebar } from "@/@core/composable/useResponsiveSidebar";
import ChatTipDrawer from "@/views/pages/chat/ChatTipDrawer.vue";
import ChatAPI from "@/services/chatAction/conversation";
import { toast } from "vue3-toastify";

const vuetifyDisplays = useDisplay();

const { isLeftSidebarOpen } = useResponsiveLeftSidebar(vuetifyDisplays.smAndDown);

const chatArea = ref<HTMLDivElement>();
const textArea = ref("");
const isRunning = ref(false);

const chatList = ref([
  {
    type: "bot",
    message: "Hey,  I’m Rubi! Let's make some magic happen!",
  },
  //   {
  //     type: "user",
  //     message:
  //       "Generate 5 taglines for a blog post about septic pumping that are exciting, engaging, and effective.",
  //   },
  //   {
  //     type: "bot",
  //     message: `  1. "Unleash the Power of Clean: Discover the Secrets of Effective Septic Pumping!"<br>
  //                 2. "Flush Away Your Worries: The Ultimate Guide to Seamless Septic Pumping Solutions."<br>
  //                 3. "Revitalize Your System: Unveiling the Art of Septic Pumping for a Smooth-Running Home."<br>
  //                 4. "From Mess to Success: How Expert Septic Pumping Ignites a Fresh Start."<br>
  //                 5. "Safeguarding Your Home's Health: Dive into the World of Proactive Septic Pumping."<br>
  // `,
  //   },
  //   {
  //     type: "bot",
  //     message: `  1. "Unleash the Power of Clean: Discover the Secrets of Effective Septic Pumping!"<br>
  //                 2. "Flush Away Your Worries: The Ultimate Guide to Seamless Septic Pumping Solutions."<br>
  //                 3. "Revitalize Your System: Unveiling the Art of Septic Pumping for a Smooth-Running Home."<br>
  //                 4. "From Mess to Success: How Expert Septic Pumping Ignites a Fresh Start."<br>
  //                 5. "Safeguarding Your Home's Health: Dive into the World of Proactive Septic Pumping."<br>
  // `,
  //   },
  //   {
  //     type: "bot",
  //     message: `  1. "Unleash the Power of Clean: Discover the Secrets of Effective Septic Pumping!"<br>
  //                 2. "Flush Away Your Worries: The Ultimate Guide to Seamless Septic Pumping Solutions."<br>
  //                 3. "Revitalize Your System: Unveiling the Art of Septic Pumping for a Smooth-Running Home."<br>
  //                 4. "From Mess to Success: How Expert Septic Pumping Ignites a Fresh Start."<br>
  //                 5. "Safeguarding Your Home's Health: Dive into the World of Proactive Septic Pumping."<br>
  // `,
  //   },
  //   {
  //     type: "bot",
  //     message: `  1. "Unleash the Power of Clean: Discover the Secrets of Effective Septic Pumping!"<br>
  //                 2. "Flush Away Your Worries: The Ultimate Guide to Seamless Septic Pumping Solutions."<br>
  //                 3. "Revitalize Your System: Unveiling the Art of Septic Pumping for a Smooth-Running Home."<br>
  //                 4. "From Mess to Success: How Expert Septic Pumping Ignites a Fresh Start."<br>
  //                 5. "Safeguarding Your Home's Health: Dive into the World of Proactive Septic Pumping."<br>
  // `,
  //   },
]);

const chatHistories = ref([
  {
    title: "Today",
    items: [
      {
        name: "Humorous Septic Experts: 10 names for2aaaaaaaaaaaaaaaaaaaaaaaaa",
        edited: false,
      },
      {
        name: "Humorous Septic Experts: 10 names for22",
        edited: false,
      },
      {
        name: "Humorous Septic Experts: 10 names for222",
        edited: false,
      },
    ],
  },
  {
    title: "Yeterday",
    items: [
      {
        name: "SEO Report Analysis",
        edited: false,
      },
      {
        name: "SEO Report Analysis1",
        edited: false,
      },
      {
        name: "SEO Report Analysis3",
        edited: false,
      },
    ],
  },
]);

const SendRequestAction = async (text: string) => {
  try {
    let data = {
      prompt: text,
    };
    let res = await ChatAPI.getResponse(data);
    return res;
  } catch (err: any) {
    toast.warning(err);
  }
};

const handleGenerate = async () => {
  if (!isRunning.value) {
    if (chatList.value.length > 1) {
      chatList.value.splice(chatList.value.length - 1, 1);
    }
    isRunning.value = true;
    scrollControl();
    let result = await SendRequestAction(
      chatList.value[chatList.value.length - 1].message
    );
    // let result =
    //   'Hello, Guy. I am rubi so I can help you perfectly! I am designed to make content creation a breeze. With me, you can generate unique, personalized content up to 10x faster. Pretty sweet, huh?';
    streamingInput(result);
    isRunning.value = false;
  }
};

const handleChangeEdit = (index: number, i: number, e: any) => {
  chatHistories.value[index].items[i].name = e.target.value;
};

const handleDeleteHistory = (index: number, i: number) => {
  chatHistories.value[index].items.splice(i, 1);
};

const handleKeyDown = async (e: any) => {
  try {
    let inputValue = textArea.value;

    if (e.keyCode === 13) {
      textArea.value = "";
      chatList.value.push({
        type: "user",
        message: inputValue,
      });
      isRunning.value = true;
      scrollControl();
      let result = await SendRequestAction(e.target.value);
      // let result =
      //   'Hello, Guy. I am rubi so I can help you perfectly! I am designed to make content creation a breeze. With me, you can generate unique, personalized content up to 10x faster. Pretty sweet, huh?';
      await createHistory(inputValue);
      streamingInput(result);
      isRunning.value = false;
    }
  } catch (err: any) {
    toast.warning(err);
  }
};

const scrollControl = () => {
  chatArea.value?.scroll({
    top: chatArea.value?.scrollHeight,
  });
};

const streamingInput = async (response: string) => {
  for (var i = 0; i < response.length; i++) {
    if (i === 0)
      chatList.value.push({
        type: "bot",
        message: response[0],
      });
    await DelayTime(response, i);
  }
};

const DelayTime = async (response: string, index: number) => {
  setTimeout(() => {
    chatList.value[chatList.value.length - 1].message = response.slice(0, index);
    scrollControl();
  }, 10);
};

const createHistory = (text: string) => {
  if (chatList.value.length === 2) {
    chatHistories.value[0].items.unshift({
      name: text,
      edited: false,
    });
  }
};

const handleEditHistory = (index: number, id: number) => {
  chatHistories.value[index].items[id].edited = !chatHistories.value[index].items[id]
    .edited;
};

const showChatTipDrawer = ref(false);

const handleNewChat = () => {
  chatList.value = [
    {
      type: "bot",
      message: "Hey,  I’m Rubi! Let's make some magic happen!",
    },
  ];
};
</script>

<template>
  <div>
    <ChatTipDrawer v-model="showChatTipDrawer" />
    <VRow v-if="$vuetify.display.smAndDown && !isLeftSidebarOpen" class="my-2">
      <IconBtn @click="isLeftSidebarOpen = !isLeftSidebarOpen">
        <VIcon icon="tabler-menu-2" />
      </IconBtn>
      <VBtn prepend-icon="tabler-plus" @click="handleNewChat"> New Chat </VBtn>
    </VRow>
    <VLayout id="chat-window">
      <!-- 👉 Left sidebar   -->
      <VNavigationDrawer
        v-model="isLeftSidebarOpen"
        absolute
        touchless
        location="start"
        width="370"
        :temporary="$vuetify.display.smAndDown"
        class="chat-list-sidebar"
        :permanent="$vuetify.display.mdAndUp"
        style="border: none"
      >
        <VCard class="pt-2" height="100%">
          <VCardText>
            <VRow align="center" no-gutters>
              <VBtn prepend-icon="tabler-plus" @click="handleNewChat"> New Chat </VBtn>
              <VSpacer />

              <VTooltip content-class="balance-tooltip-content" location="bottom">
                <template #activator="{ props }">
                  <VIcon
                    icon="custom-lightbulb"
                    size="40"
                    color="rubi-red"
                    class="cursor-pointer"
                    v-bind="props"
                    @click="showChatTipDrawer = true"
                  />
                </template>
                <span>Tip Drawer</span>
              </VTooltip>
              <VIcon
                v-if="$vuetify.display.smAndDown"
                icon="tabler-x"
                size="24"
                color="text-color-heading"
                class="cursor-pointer"
                style="transform: rotate(90deg)"
                @click="isLeftSidebarOpen = !isLeftSidebarOpen"
              />
            </VRow>
            <VDivider class="my-4" />

            <VCol v-for="(history, index) in chatHistories" :key="history.title">
              <VRow class="mb-2">
                <span class="text-caption">{{ history.title }}</span>
              </VRow>
              <VHover v-for="(item, id) in history.items" :key="item.name">
                <template #default="{ isHovering, props }">
                  <VRow v-bind="props" align="center" class="my-2 chat-history-item">
                    <VIcon size="16" icon="tabler-message" color="text-color-heading" />
                    <span class="text-p-small ml-1" v-if="!item.edited">
                      {{ item.name }}</span
                    >
                    <input
                      type="text"
                      class="text-p-small ml-1 edit_filed"
                      :value="item.name"
                      @change="handleChangeEdit(index, id, $event)"
                      v-if="item.edited"
                    />
                    <div v-show="isHovering" class="actions">
                      <VIcon
                        size="15"
                        icon="tabler-pencil"
                        @click="handleEditHistory(index, id)"
                      />
                      <VIcon size="15" icon="tabler-upload" />
                      <VIcon
                        size="15"
                        icon="tabler-trash"
                        @click="handleDeleteHistory(index, id)"
                      />
                    </div>
                  </VRow>
                </template>
              </VHover>
            </VCol>
          </VCardText>
        </VCard>
      </VNavigationDrawer>
      <VMain class="chat-content-container">
        <VCard class="chat" height="100%">
          <div class="body_chat_area" ref="chatArea">
            <PerfectScrollbar>
              <VCard
                v-for="chat in chatList"
                :key="chat.message"
                :class="`mb-5 chat-body-card ${chat.type} mx-1 mt-2`"
                variant="flat"
              >
                <VCardText class="chat-body-row">
                  <div class="chat-body-item">
                    <VAvatar size="36">
                      <VImg :src="chat.type === 'bot' ? bot : avatar" />
                    </VAvatar>
                    <span v-html="chat.message" />
                    <VSpacer />
                    <div class="actions">
                      <VIcon icon="tabler-copy" size="20" />
                    </div>
                  </div>
                </VCardText>
              </VCard>
            </PerfectScrollbar>
          </div>

          <div class="bottom">
            <VDivider />
            <div class="mt-5 bottom-row">
              <div class="input">
                <AppTextField
                  placeholder="Ask Rubi..."
                  variant="solo"
                  @keydown="handleKeyDown"
                  autofocus
                  class="chat-message-input"
                  v-model="textArea"
                >
                  <template #append-inner>
                    <img height="25" width="25" :src="bot" />
                  </template>
                </AppTextField>
                <VSwitch class="mt-2" label="Build on Conversation" />
              </div>

              <!-- <AppSelect
                :items="['Persona 1']"
                class="select placeholder-white"
                bg-color="primary"
                placeholder="Persona"
              /> -->
            </div>
            <VRow justify="center" class="button-generate-row">
              <VBtn
                variant="outlined"
                color="primary"
                append-icon="tabler-refresh-dot"
                @click="handleGenerate"
              >
                <VProgressCircular
                  :size="20"
                  width="3"
                  color="primary"
                  indeterminate
                  v-if="isRunning"
                />
                {{ !isRunning ? "Regenerate Response" : "Stop generating" }}
              </VBtn>
            </VRow>
          </div>
        </VCard>
      </VMain>
    </VLayout>
  </div>
</template>

<style lang="scss" scoped>
@import "@styles/responsive.scss";

#chat-window {
  height: 75vh;

  margin: 20px 0px;

  @include media-query("lg") {
    height: auto;
    margin: 0px !important;
  }
  @include media-query("md") {
    height: auto;
    margin: 0px !important;
  }
  @include media-query("sm") {
    height: auto;
    margin: 0px !important;
  }
}

.chat-content-container {
  margin-left: 10px;
  @include media-query("lg") {
    margin-left: 0px;
  }
}

.chat-message-input {
  .v-field__append-inner {
    align-items: center;
    padding-block-start: 0;
  }

  .v-field--appended {
    padding-inline-end: 9px;
  }

  .v-field__append-inner {
    background-color: red;
  }
}
.chat {
  .body_chat_area {
    height: 80%;
    overflow-y: scroll;
    padding-bottom: 80px;

    @include media-query("lg") {
      height: 100%;
    }
    @include media-query("md") {
      height: auto;
    }

    .chat-body-row {
      display: flex;
      justify-content: center;

      @include media-query("lg") {
        justify-content: start;
      }
      @include media-query("md") {
        justify-content: start;
      }
      @include media-query("sm") {
        justify-content: start;
      }
    }

    .chat-body-item {
      display: flex;
      align-items: start;
      gap: 10px;
      width: 70%;
      position: relative;

      @include media-query("lg") {
        width: 100%;
      }
      @include media-query("md") {
        width: auto;
      }
      @include media-query("sm") {
        width: auto;
      }

      span {
        margin-top: 5px;
        color: rgb(var(--v-theme-text-color-heading));
      }

      .actions {
        display: flex;
        gap: 5px;
        align-items: center;

        @include media-query("md") {
          position: absolute;
          bottom: -20px;
          right: 0px;
        }

        svg {
          cursor: pointer;
          color: rgb(var(--v-theme-muted));
        }
      }
    }

    .chat-body-card.bot {
      background: #fbfbfc;
      box-shadow: 0px 4px 18px 0px rgba(75, 70, 92, 0.1);

      .v-theme--dark & {
        background-color: #333335;
        box-shadow: 0px 4px 20px 0px rgba(15, 20, 34, 0.6);
      }
    }
  }
  .bottom {
    position: relative;
    height: 100%;
    margin: 0px 30px;
    margin-bottom: 20px;
    .regenerate {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: -40px;
    }

    .button-generate-row {
      @include media-query("md") {
        margin-top: 20px;
      }
    }

    .bottom-row {
      display: flex;
      justify-content: center;
      gap: 10px;

      @include media-query("md") {
        flex-direction: column;
      }

      .input {
        width: 60%;
        display: flex;
        flex-direction: column;
        @include media-query("md") {
          width: 100%;
        }
      }
      .select {
        max-width: 200px;
        @include media-query("md") {
          max-width: 100%;
          margin-top: 0px;
        }
      }
    }
  }
}
.chat-history-item {
  padding: 5px 0px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  .edit_filed {
    width: 200px;
    outline: 0.1px solid gray;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 78%;
  }

  &:hover {
    background-color: rgb(var(--v-theme-primary), 0.08);
  }

  .actions {
    display: flex;
    gap: 10px;
    align-items: center;
    position: absolute;
    right: 5px;

    svg {
      cursor: pointer;
    }
  }
}
</style>

<route lang="yaml">
name: chat
</route>
