<template>
    <router-link :to="{name: 'user.login'}">Login</router-link>
    <router-link :to="{name: 'user.register'}">Register</router-link>
    <router-link :to="{name: 'protected'}">Protected</router-link>
    <a @click.prevent="logout">Logout</a>
</template>

<script>

export default {
    name: "Header",
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

</style>
