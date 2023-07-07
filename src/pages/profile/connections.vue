<script setup lang="ts">
import google from '@images/iconify-png/google.png'
import slack from '@images/iconify-png/slack.png'
import github from '@images/iconify-png/github.png'
import mailchimp from '@images/iconify-png/mailchimp.png'
import facebook from '@images/iconify-png/facebook.png'
import twitter from '@images/iconify-png/twitter.png'
import instagram from '@images/iconify-png/instagram.png'
import dribbble from '@images/iconify-png/dribbble.png'
import behance from '@images/iconify-png/behance.png'

const connectionsAccounts = ref([
  {
    avatarImg: google,
    title: 'Google',
    sub_title: 'Calendar and contacts',
    connected: true,
  },
  {
    avatarImg: slack,
    title: 'Slack',
    sub_title: 'Communication',
    connected: false,
  },
  {
    avatarImg: github,
    title: 'GitHub',
    sub_title: 'Manage your Git repositories',
    connected: true,
  },
  {
    avatarImg: mailchimp,
    title: 'Mailchimp',
    sub_title: 'Email marketing service',
    connected: true,
  },
  {
    avatarImg: google,
    title: 'Asana',
    sub_title: 'Communication',
    connected: true,
  },
])

const socialAccounts = ref([
  {
    avatarImg: facebook,
    title: 'Facebook',
    sub_title: null,
    connected: false,
  },
  {
    avatarImg: twitter,
    title: 'Twitter',
    sub_title: '@ThemeSelection',
    connected: true,
  },
  {
    avatarImg: instagram,
    title: 'Instagram',
    sub_title: '@ThemeSelection',
    connected: true,
  },
  {
    avatarImg: dribbble,
    title: 'Dribbble',
    sub_title: null,
    connected: false,
  },
  {
    avatarImg: behance,
    title: 'Behance',
    sub_title: null,
    connected: false,
  },
])
</script>

<template>
  <div>
    <HeaderProfile />
    <VCard title="Instant Post Connections">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
            <VCard
              title="Connected Accounts"
              subtitle="Display content from your connected accounts on your site"
            >
              <VCardText>
                <VList class="card-list">
                  <VListItem
                    v-for="connection in connectionsAccounts"
                    :key="connection.title"
                  >
                    <template #prepend>
                      <VAvatar size="28">
                        <VImg :src="connection.avatarImg" />
                      </VAvatar>
                    </template>

                    <VListItemTitle class="font-weight-medium">
                      {{ connection.title }}
                    </VListItemTitle>
                    <VListItemSubtitle class="text-muted">
                      {{ connection.sub_title }}
                    </VListItemSubtitle>

                    <template #append>
                      <VSwitch v-model="connection.connected" />
                    </template>
                  </VListItem>
                </VList>
              </VCardText>
            </VCard>
          </VCol>
          <VCol
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
            <VCard
              title="Social Accounts"
              subtitle="Display content from your connected accounts on your site"
            >
              <VCardText>
                <VList class="card-list">
                  <VListItem
                    v-for="connection in socialAccounts"
                    :key="connection.title"
                  >
                    <template #prepend>
                      <VAvatar size="28">
                        <VImg :src="connection.avatarImg" />
                      </VAvatar>
                    </template>

                    <VListItemTitle class="font-weight-medium">
                      {{ connection.title }}
                    </VListItemTitle>
                    <VListItemSubtitle
                      v-if="connection.connected"
                      class="text-primary"
                    >
                      {{ connection.sub_title }}
                    </VListItemSubtitle>
                    <VListItemSubtitle
                      v-else
                      class="text-muted"
                    >
                      Not Connected
                    </VListItemSubtitle>

                    <template #append>
                      <VBtn
                        v-if="connection.connected"
                        icon="tabler-trash"
                        color="error"
                        variant="tonal"
                        rounded="sm"
                        size="x-small"
                      />
                      <VBtn
                        v-else
                        icon="tabler-link"
                        color="secondary"
                        variant="tonal"
                        rounded="sm"
                        size="x-small"
                      />
                    </template>
                  </VListItem>
                </VList>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<route lang="yaml">
name: connections
meta:
  layout: default
  name: connections
</route>
