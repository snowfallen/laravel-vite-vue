import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes.js";
import store from "../../store.js";

const router = new createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const token = store.state.token

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if ((to.name === 'user.login' || to.name === 'user.register') && token) {
        return next({
            name: 'pages.home'
        })
    }
    next()
})

export default router;
