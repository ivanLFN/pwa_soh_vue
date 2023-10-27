import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from '../routes.js'


const app = createApp(App)

app.use(router)

app.mount('#app')