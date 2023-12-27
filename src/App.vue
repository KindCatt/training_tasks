<template>
	<div class="container">
		<nav class="nav-bar">
			<router-link class="nav-bar__main-link" to="/">На главную</router-link> |
			<router-link class="nav-bar__main-link" to="/taskone">Задание №1</router-link> |
			<router-link class="nav-bar__main-link" to="/tasktwo">Задание №2</router-link> |
			<router-link class="nav-bar__main-link" to="/taskthree">Задание №3</router-link> |
		</nav>
	
		<router-view/>
	</div>
</template>

<style lang="scss">
.container {
	padding: 50px;
	
}
.nav-bar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	
	display: flex;
	align-items: center;
	height: 50px;
	padding: 0 50px;
	
	background-color: rgb(131, 199, 255, 0.7);
	
	font-size: 24px;

	&__main-link {
		margin: 0 20px;
	}
}
</style>
