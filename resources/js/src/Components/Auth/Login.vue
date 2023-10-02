<template>
    <div class="container">
        <form class="m-5">
            <div class="form-group pb-2">
                <label for="email" class="pb-2">Email address</label>
                <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div class="form-group pb-2">
                <label for="password" class="pb-2">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button @click.prevent="login" type="submit" class="btn btn-primary">Login</button>
        </form>
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
                            this.$router.push();
                        })
                })
        }
    }
}
</script>
