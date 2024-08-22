import { createApp } from 'vue'
import './style.css'
import Root from './Root.vue'
import '../polyfills';
import eruda from "eruda";

import router from './router/index'

eruda.init();

const app = createApp(Root);
app.use(router)
app.mount('#app')
