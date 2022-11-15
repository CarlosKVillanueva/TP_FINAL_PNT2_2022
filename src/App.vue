<template>
    <div id="app">
        <NavBar />

        <HomeView />
        <router-view> </router-view>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import HomeView from "@/components/HomeView";

export default {
    name: "App",
    components: {
        HomeView,
        NavBar,
    },
};
</script>

<style>
#app {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
