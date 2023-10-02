import Login from "../Components/Login.vue";
import Register from "../Components/Register.vue";
import Protected from "../Components/Protected.vue";

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
    {
        path: '/protected',
        component: Protected,
        name: 'protected'
    }
]

export default routes;
