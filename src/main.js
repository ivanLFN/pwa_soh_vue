import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { VueQrcodeReader } from 'vue-qrcode-reader'


const app = createApp(App)

app.use(VueQrcodeReader)

app.mount('#app')