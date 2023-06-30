import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Dashboard',
    to: { path: '/' },
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
    to: { name: 'second-page' },
    icon: { icon: 'tabler-message' },
  },
  {
    title: 'Personas',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-users' },
  },
  {
    title: 'Campaigns',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-smart-home' },
  },
] as VerticalNavItems
