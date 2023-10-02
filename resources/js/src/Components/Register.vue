<template>
    <input v-model="name" type="text" placeholder="name">
    <input v-model="email" type="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <input v-model="password_confirmation" type="password" placeholder="password_confirmation">
    <input @click.prevent="login" type="submit" value="login">
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation})
                        .then(response => {
                            console.log(response.config.headers['X-XSRF-TOKEN'])
                        })
                })
        }
    }
}
</script>

<style scoped>

</style>
