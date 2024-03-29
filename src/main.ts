/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import 'vue3-toastify/dist/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import i18n from './plugins/i18n'
import type { ToastContainerOptions } from 'vue3-toastify'
import Vue3Toastify from 'vue3-toastify'
import { abilitiesPlugin } from '@casl/vue'
import ability from '@/plugins/casl/ability'

loadFonts()

// Create vue app
const app = createApp(App)

// Use plugins
app.use(i18n)
app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
})

// Mount vue app
app.mount('#app')
