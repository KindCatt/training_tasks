<template>
	<div class="lesson-two">
		<h1>Задание №2. Поиск</h1>

		<input type="text"
				v-model="userName">
		<button
				@click="addName">
			Добавить имя
		</button>
		<p>Всего имен: {{ names.length }}</p>
		<p>Совпадений: {{ searchNames.length }}</p>
		<ul
				v-for="(item, index) in searchNames" :key="index">
			<li>{{ `${++index}. ${item.name}` }}</li>
			<button
					@click="delName">
				Удалить имя
			</button>
		</ul>

	</div>
</template>

<script>
export default {
	name: 'LessonTwo',
	data() {
		return {
			names: [
				{name: 'Даниил'},
				{name: 'Гавриил'},
				{name: 'Михаил'},
				{name: 'Уриил'},
				{name: 'Робуил'},
			],
			userName: '',
		}
	},

	methods: {
		addName() {
			if (this.userName !== '' && this.userName.length > 1) {
				this.names.push({name: this.userName});
				this.userName = ''
			}
		},
		delName(index) {
			this.names.splice(index, 1)
		}
	},

	computed: {
		searchNames() {
			return this.names.filter(item => item.name.toLowerCase().includes(this.userName.toLowerCase()))
			//Запускаем .filter() метод в нашем массиве. Первый параметр — это значение массива при его переборе. Стрелка — это функция обратного вызова, которая возвращает значение true или, false если фильтр соответствует. Метод `includes()` в JavaScript позволяет определить, содержит ли массив искомый элемент. В случае нахождения элемента метод возвращает логическое значение `true`, в обратном случае — `false`.

			// Синтаксис: `array.includes(searchElement, fromIndex)`. `searchElement` — значение, которое требуется найти внутри массива (обязательное значение);
		}
	}
}
</script>

<style scoped lang="scss">

</style>
