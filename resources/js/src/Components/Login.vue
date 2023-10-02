<template>
    <div>
        <input v-model="email" type="email" placeholder="email">
        <input v-model="password" type="password" placeholder="password">
        <input @click.prevent="login" type="submit" value="login">
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', {email: this.email, password: this.password})
                        .then(response => {
                            console.log(response.config.headers['X-XSRF-TOKEN'])
                            console.log(response)
                        })
                })
        }
    }
}
</script>

<style scoped>

</style>
