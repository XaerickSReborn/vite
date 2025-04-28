import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
//import router from "@/router/index.js";
import Toolbar from 'primevue/toolbar';

import Button from 'primevue/button';

const app = createApp(App)

createApp(App)
    app.use(PrimeVue, { ripple: true })
    //.use(Aura)
    //.use(router) //importante para que funcionen las rutas
    //.use(router)
   .component('pv-button', Button)
   .component('pv-toolbar', Toolbar)
   .mount('#app')