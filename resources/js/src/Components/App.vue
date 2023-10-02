<template>
    <Header></Header>
    <router-view/>
</template>

<script>
import Header from "./Header.vue";

export default {
    name: "App",
    components: {
        Header
    }

}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}
</style>
