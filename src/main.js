import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css';
import './assets/main.css'

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const vuetify = createVuetify({
    components,
    directives,
  })
const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
