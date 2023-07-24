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
      },
      {
        title: 'Nickname 2',
        to: {
          name: 'account-settings',
          params: {
            id: 2,
          },
        },
      },
      {
        title: 'Nickname 3',
        to: {
          name: 'account-settings',
          params: {
            id: 3,
          },
        },
      },
    ],
  },
  {
    title: 'Modules',
    to: { name: 'modules' },
    icon: { icon: 'tabler-layout-grid-add' },
  },
  {
    title: 'Create Content',
    to: { name: 'content-create' },
    icon: { icon: 'tabler-brand-pagekit' },
  },
  {
    title: 'Chat',
    to: { name: 'chat' },
    icon: { icon: 'tabler-messages' },
  },
  {
    title: 'SPI Audit',
    to: { name: 'spi-audit' },
    icon: { icon: 'tabler-map-search' },
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
