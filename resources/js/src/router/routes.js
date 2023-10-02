const routes = [
    {
        path: '/login',
        component: () => import("../Components/Auth/Login.vue"),
        name: 'user.login'
    },
    {
        path: '/register',
        component: () => import("../Components/Auth/Register.vue"),
        name: 'user.register'
    },
]

export default routes;
