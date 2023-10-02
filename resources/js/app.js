import './bootstrap';
import {createApp} from "vue";
import App from "./src/Components/App.vue";
import router from "./src/router/router.js";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app');
