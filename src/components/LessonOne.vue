<template>
	<div class="lesson-one">
		<h1>Задание №1. Счетчик</h1>
		<p>От {{ minCount }} до {{ maxCount }}</p>

		<button
				@click="minusCount">
			-
		</button>
		<input type="number"
				v-model="count"
				:min="minCount"
				:max="maxCount">
		<button
				@click="plusCount">
			+
		</button>

	</div>
</template>

<script>
export default {
	name: 'LessonOne',
	data() {
		return {
			count: '',
			minCount: 0,
			maxCount: 10
		}
	},

	methods: {
		minusCount() {
			if (this.count > 0) {
				this.count--
			}
		},
		plusCount() {
			if (this.count < 10) {
				this.count++
			}
		}
	},
}
</script>

<style scoped lang="scss">

</style>
