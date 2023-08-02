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
    action: 'menu-all',
    subject: 'User',
    children: [
      {
        title: 'Nickname 1',
        to: {
          name: 'account-settings',
          params: {
            id: 1,
          },
        },
        action: 'menu-all',
        subject: 'User',
      },
      {
        title: 'Nickname 2',
        to: {
          name: 'account-settings',
          params: {
            id: 2,
          },
        },
        action: 'menu-all',
        subject: 'User',
      },
      {
        title: 'Nickname 3',
        to: {
          name: 'account-settings',
          params: {
            id: 3,
          },
        },
        action: 'menu-all',
        subject: 'User',
      },
    ],
  },
  {
    title: 'Modules',
    to: { name: 'modules' },
    icon: { icon: 'tabler-layout-grid-add' },
    action: 'menu-all',
    subject: 'User',
  },
  {
    title: 'Create Content',
    to: { name: 'content-create' },
    icon: { icon: 'tabler-brand-pagekit' },
    action: 'menu-all',
    subject: 'User',
  },
  {
    title: 'Chat',
    to: { name: 'chat' },
    icon: { icon: 'tabler-messages' },
    action: 'menu-all',
    subject: 'User',
  },
  {
    title: 'SPI Audit',
    to: { name: 'spi-audit' },
    icon: { icon: 'tabler-map-search' },
    action: 'menu-all',
    subject: 'User',
  },
  {
    title: 'Xtract Boosts',
    to: { name: 'xtract-boosts' },
    icon: { icon: 'tabler-rocket' },
    action: 'menu-all',
    subject: 'User',
  },
  {
    title: 'Saved Content',
    to: { name: 'save-content', params: { tab: 'content' } },
    icon: { icon: 'tabler-device-floppy' },
    action: 'menu-all',
    subject: 'User',
  },
] as VerticalNavItems
