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
    {
        path: '/home',
        component: () => import("../Components/Pages/Home/Index.vue"),
        name: 'pages.home'
    },
    {
        path: '/offers',
        component: () => import("../Components/Pages/Offers/Index.vue"),
        name: 'pages.offers'
    },
    {
        path: '/orders',
        component: () => import("../Components/Pages/Orders/Index.vue"),
        name: 'pages.orders'
    },
    {
        path: '/prices',
        component: () => import("../Components/Pages/Prices/Index.vue"),
        name: 'pages.prices'
    },
    {
        path: '/users',
        component: () => import("../Components/Pages/Users/Index.vue"),
        name: 'pages.users'
    },
]

export default routes;
