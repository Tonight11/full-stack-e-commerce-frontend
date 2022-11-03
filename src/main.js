import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'maz-ui/css/main.css'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
