import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/vela-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import '@/styles/global.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
