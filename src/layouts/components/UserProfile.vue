<script setup lang="ts">
import { useAuthStore } from '@/store/auth'
import avatar1 from '@images/avatars/avatar-1.png'

const authStore = useAuthStore()
const router = useRouter()

function handleLogout() {
  authStore.handleLogout()
  router.push({ name: 'login' })
}
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              John Doe
            </VListItemTitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Profile Details -->
          <VListItem :to="{ name: 'profile-settings', params: { tab: 'profile' } }">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-user-check"
                size="22"
              />
            </template>

            <VListItemTitle>Profile Details</VListItemTitle>
          </VListItem>

          <!-- 👉 Subscriptions -->
          <VListItem
            link
            :to="{ name: 'profile-settings', params: { tab: 'subscriptions' } }"
          >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-exchange"
                size="22"
              />
            </template>

            <VListItemTitle>Subscriptions</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Return to Back Office -->
          <VListItem href="https://www.myflex.ai">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-arrow-forward-up"
                size="22"
              />
            </template>

            <VListItemTitle>Return to Back Office</VListItemTitle>
          </VListItem>
          <!-- 👉 Logout -->
          <VListItem @click="handleLogout">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-logout"
                size="22"
              />
            </template>

            <VListItemTitle>Sign Out</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
