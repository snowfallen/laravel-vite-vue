import './bootstrap';
import {createApp} from "vue";
import App from "./src/Components/App.vue";
import router from "./src/router/router.js";
import store from "./store.js";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).use(store).mount('#app');
