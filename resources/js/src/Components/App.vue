<template>
    <BaseHeader></BaseHeader>
    <router-view/>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";

export default {
    name: "App",
    components: {
        BaseHeader
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
