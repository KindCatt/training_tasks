<template>
	<div class="background">
		<div class="lesson-three-poop-up">
			<h1>Фильтры</h1>

			<button
					@click="imageFilterSepia"
					:class="{btnNone: this.imgFilters.sepia}">
				Сепия
			</button>
			<button
					@click="imageFilterBorder"
					:class="this.imgFilters.border ? 'btnNone' : ''">
				Граница
			</button>
			<button
					@click="imageFilterShadow"
					:class="{btnNone: this.imgFilters.shadow}">
				Тени
			</button>

			<p>Ширина: {{ `${imgSizes.currentWidth}px` }}</p>
			<label>
				<input type="range"
						:min="imgSizes.minWidth"
						:max="imgSizes.maxWidth"
						v-model="imgSizes.currentWidth"
						@input="imageSizeRotate">
			</label>
			<p>Высота: {{ `${imgSizes.currentHeight}px` }}</p>
			<label>
				<input type="range"
						:min="imgSizes.minHeight"
						:max="imgSizes.maxHeight"
						v-model="imgSizes.currentHeight"
						@input="imageSizeRotate">
			</label>
			<p>Угол: {{ `${imgRotate.currentDeg} градусов` }}</p>
			<label>
				<input type="range"
						:min="imgRotate.minDeg"
						:max="imgRotate.maxDeg"
						v-model="imgRotate.currentDeg"
						@input="imageSizeRotate">
			</label>


			<button
					@click="$emit('closePoopUp')">
				Закрыть настройки
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LessonThreePoopUp',

	props: {
		imgFilters: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	
	data() {
		return {
			imgSizes: {
				maxWidth: 480,
				maxHeight: 270,
				currentWidth: 480,
				currentHeight: 270
			},

			imgRotate: {
				minDeg: 0,
				maxDeg: 360,
				currentDeg: 0,
			}
		}
	},

	methods: {
		imageFilterSepia() {
			this.$emit('imageFilterSepia')
		},
		imageFilterBorder() {
			this.$emit('imageFilterBorder')
		},
		imageFilterShadow() {
			this.$emit('imageFilterShadow')
		},

		imageSizeRotate() {
			this.$emit('imageSizeRotate', this.imgSizes.currentWidth, this.imgSizes.currentHeight, this.imgRotate.currentDeg)
		},
	}
}
</script>

<style lang="scss" scoped>
.background {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(176, 202, 255, 0.3);
}
.lesson-three-poop-up {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 10;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 70%;
	padding: 30px;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 10%;
	box-shadow: 0 0 10px 5px #949494;
	overflow: auto;
	box-sizing: border-box;
	background-color: rgba(43, 75, 192, 0.7);

	color: #ffffff;
	&::-webkit-scrollbar {
		width: 7px;
		height: 10px;
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: transparent;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&:hover::-webkit-scrollbar-thumb {
		background-color: rgb(28, 18, 58);
	}
}
.btnNone {
	background-color: #2e0040;
	color: #ffffff;
}
</style>