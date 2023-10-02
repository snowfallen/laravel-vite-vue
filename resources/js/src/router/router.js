import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes.js";

const router = new createRouter({
    history: createWebHistory(),
    routes
});

export default router;
