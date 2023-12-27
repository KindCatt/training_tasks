<template>
	<div class="task-one">
		<h1>Страница с заданием №1</h1>

		<lesson-one />
	</div>
</template>

<script>
import LessonOne from '@/components/LessonOne.vue'

export default {
	name: 'TaskOne',
	components: {
		LessonOne
	},

	data() {
		return {}
	}
}
</script>
