<template>
    <div>
        Protected
    </div>
</template>

<script>
export default {
    name: "Protected",
    mounted() {
        this.getData();
    },
    updated() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get('/api/protected')
                .then(response =>{
                    console.log(response)
                }).catch(e => {
                console.log(e)
            });
        }
    }
}
</script>

<style scoped>

</style>
