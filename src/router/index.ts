import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from './utils'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
  ],
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  // eslint-disable-next-line no-prototype-builtins
  const requiredAuth = to.meta.hasOwnProperty('requiredAuth') ? to.meta.requiredAuth : true

  if (to.name === 'login' && isLoggedIn)
    next('/')

  if (requiredAuth) {
    if (isLoggedIn)
      return next()
    else
      return next({ name: 'login' })
  }

  return next()
})

export default router
