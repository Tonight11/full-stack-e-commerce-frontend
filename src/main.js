import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'maz-ui/css/main.css'
import Vue3SmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(Vue3SmoothScroll).use(createPinia()).use(router).mount('#app')
