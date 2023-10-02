import Login from "../Components/Login.vue";
import Register from "../Components/Register.vue";

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'user.login'
    },
    {
        path: '/register',
        component: Register,
        name: 'user.register'
    },
]

export default routes;
