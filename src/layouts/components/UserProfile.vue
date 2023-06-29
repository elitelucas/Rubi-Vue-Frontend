<script setup lang="ts">
import avatar1 from "@images/avatars/avatar-1.png";
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
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
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
                  <VAvatar color="primary" variant="tonal">
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

          <!-- 👉 My Account -->
          <VListItem :to="{ name: 'account' }">
            <template #prepend>
              <VIcon class="me-2" icon="tabler-user-check" size="22" />
            </template>

            <VListItemTitle>My Account</VListItemTitle>
          </VListItem>

          <!-- 👉 Orders -->
          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="tabler-tag" size="22" />
            </template>

            <VListItemTitle>Orders</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Personas -->
          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="tabler-id" size="22" />
            </template>

            <VListItemTitle>Personas</VListItemTitle>
          </VListItem>

          <!-- 👉 Keywords -->
          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="tabler-key" size="22" />
            </template>

            <VListItemTitle>Keywords</VListItemTitle>
          </VListItem>

          <!-- 👉 Audiences -->
          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="tabler-speakerphone" size="22" />
            </template>

            <VListItemTitle>Audiences</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem to="/login">
            <template #prepend>
              <VIcon class="me-2" icon="tabler-logout" size="22" />
            </template>

            <VListItemTitle>Sign Out</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
