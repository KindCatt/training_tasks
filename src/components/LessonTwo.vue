<template>
	<div class="lesson-two">
		<h1>Урок №2. Поиск</h1>

		<input type="text"
				v-model="userName">
		<button
				@click="addName">
			Добавить имя
		</button>
		<p>Всего имен: {{ names.length }}</p>
		<p>Совпадений: {{  }}</p>
		<ul
				v-for="(name, index) in searchNames" :key="index">
			<li>{{ `${++index}. ${name}` }}</li>
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
				'Даниил',
				'Гавриил',
				'Михаил',
				'Уриил',
				'Робуил',
			],
			userName: '',
		}
	},

	methods: {
		addName() {
			if (this.userName !== '' && this.userName.length > 1) {
				this.names.push(this.userName);
				this.userName = ''
			}
		},
		delName(index) {
			this.names.splice(index, 1)
		}
	},

	computed: {
		searchNames() {
			return this.names.filter(name => name.toLowerCase().includes(this.userName.toLowerCase()))
			//Запускаем .filter() метод в нашем массиве. Первый параметр — это значение массива при его переборе. Стрелка — это функция обратного вызова, которая возвращает значение true или, false если фильтр соответствует. Метод `includes()` в JavaScript позволяет определить, содержит ли массив искомый элемент. В случае нахождения элемента метод возвращает логическое значение `true`, в обратном случае — `false`.

			// Синтаксис: `array.includes(searchElement, fromIndex)`. `searchElement` — значение, которое требуется найти внутри массива (обязательное значение);
		}
	}
}
</script>

<style scoped lang="scss">

</style>
