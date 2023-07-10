import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'My Accounts',
    to: { name: 'account' },
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Modules',
        to: { name: 'second-page' },
        icon: { icon: 'tabler-layout-grid-add' },
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
    to: { name: 'second-page' },
    icon: { icon: 'tabler-rocket' },
  },
  {
    title: 'Saved Content',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-device-floppy' },
  },
] as VerticalNavItems
