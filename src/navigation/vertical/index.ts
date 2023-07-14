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
    title: 'Personas',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-users' },
  },
  {
    title: 'Audiences',
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
    to: { name: 'second-page' },
    icon: { icon: 'tabler-device-floppy' },
  },
] as VerticalNavItems
