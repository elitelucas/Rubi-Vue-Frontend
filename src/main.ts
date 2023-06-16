/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import 'vue3-side-panel/dist/vue3-side-panel.css';
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { VueSidePanel } from 'vue3-side-panel'

loadFonts()

// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(VueSidePanel);

// Mount vue app
app.mount('#app')
