import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'My Accounts',
    to: {
      name: 'account-settings',
      params: {
        id: 1,
      },

    },
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Nickname 1',
        to: {
          name: 'account-settings',
          params: {
            id: 1,
          },
        },
        icon: { icon: 'tabler-user' },
      },
      {
        title: 'Nickname 2',
        to: {
          name: 'account-settings',
          params: {
            id: 2,
          },
        },
        icon: { icon: 'tabler-user' },
      },
      {
        title: 'Nickname 3',
        to: {
          name: 'account-settings',
          params: {
            id: 3,
          },
        },
        icon: { icon: 'tabler-user' },
      },
    ],
  },
  {
    title: 'Modules',
    to: { name: 'modules' },
    icon: { icon: 'tabler-layout-grid-add' },
  },
  {
    title: 'Chat',
    to: { name: 'chat' },
    icon: { icon: 'tabler-messages' },
  },
  {
    title: 'Create Content',
    to: { name: 'content-create' },
    icon: { icon: 'tabler-plus' },
  },
  {
    title: 'SPI Audit',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-speakerphone' },
  },
  {
    title: 'Xtract Boosts',
    to: { name: 'xtract-boosts' },
    icon: { icon: 'tabler-rocket' },
  },
  {
    title: 'Saved Content',
    to: { name: 'save-content', params: { tab: 'content' } },
    icon: { icon: 'tabler-device-floppy' },
  },
] as VerticalNavItems
