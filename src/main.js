import './assets/main.css'

import { createApp } from 'vue'
import App from './app/App.vue'

import router from './router'
import store from './store'

createApp(App)
    .use(router)
    .mount('#app')
