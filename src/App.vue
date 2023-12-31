<template>
	<div class="container">
		<nav-bar/>
	
		<router-view/>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
	components: {
		NavBar
	}
}
</script>

<style lang="scss">
.container {
	padding: 50px;
}
</style>
