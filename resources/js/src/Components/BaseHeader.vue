<template>
    <header class="d-flex bg-light justify-content-between">
        <menu class="d-flex justify-content-center">
            <router-link v-if="token" :to="{name: 'pages.home'}" class="nav-link p-2">Home</router-link>
            <router-link v-if="token" :to="{name: 'pages.prices'}" class="nav-link p-2">Prices</router-link>
            <router-link v-if="token" :to="{name: 'pages.offers'}" class="nav-link p-2">Offers</router-link>
            <router-link v-if="token" :to="{name: 'pages.users'}" class="nav-link p-2">Users</router-link>
            <router-link v-if="token" :to="{name: 'pages.orders'}" class="nav-link p-2">Orders</router-link>
        </menu>
        <menu class="d-flex justify-content-center">
            <router-link v-if="!token" :to="{name: 'user.login'}" class="nav-link p-2">Login</router-link>
            <router-link v-if="!token" :to="{name: 'user.register'}" class="nav-link p-2">Register</router-link>
            <a v-if="token" @click.prevent="logout" class="nav-link p-2">Logout</a>
        </menu>
    </header>
</template>

<script>
import store from "../../store.js";

export default {
    name: "BaseHeader",
    methods: {
        logout() {
            axios.post('/logout')
                .then(response => {
                    store.commit('deleteToken')
                    localStorage.removeItem('x_xsrf_token');
                    this.$router.push({name: 'user.login'})
                })
        }
    },
    computed: {
        token () {
            return store.state.token
        }
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>
