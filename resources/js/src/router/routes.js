import Login from "../Components/Auth/Login.vue";
import Register from "../Components/Auth/Register.vue";

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
