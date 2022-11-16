<template>
	<div id="app">
		<NavBar/>
		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
	name: "App",
	components: {
		NavBar,
	},
};
</script>

<style>
#app {
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #1f1f1f;
	background: #FCF1E7;

}

.btn-custom {
	background-color: #e75319;
	color: white;
}
html {
	background: #FCF1E7;

}

</style>
