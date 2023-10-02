<template>
    <header class="d-flex bg-light justify-content-between">
        <menu class="d-flex justify-content-center">
            <router-link to="" class="nav-link p-2">Home</router-link>
            <router-link to="" class="nav-link p-2">Prices</router-link>
            <router-link to="" class="nav-link p-2">Offers</router-link>
            <router-link to="" class="nav-link p-2">Users</router-link>
            <router-link to="" class="nav-link p-2">Orders</router-link>
        </menu>
        <menu class="d-flex justify-content-center">
            <router-link :to="{name: 'user.login'}" class="nav-link p-2">Login</router-link>
            <router-link :to="{name: 'user.register'}" class="nav-link p-2">Register</router-link>
            <a @click.prevent="logout" class="nav-link p-2">Logout</a>
        </menu>
    </header>
</template>

<script>

export default {
    name: "BaseHeader",
    methods: {
        logout() {
            axios.post('/logout')
                .then(response => {
                    this.$router.push({name: 'user.login'})
                })
        },
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>
