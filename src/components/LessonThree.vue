<template>
	<div class="lesson-three">
		<h1>Урок №3. Условная отрисовка и стили</h1>

		<button
				@click="showPoopUpButton">
			Показать настройки
		</button>
		<div>
			<img src="https://avatars.mds.yandex.net/i?id=e835c9905f257e11a02f4bd5df6ac8d116f2c471-9096591-images-thumbs&n=13"
					:class="imgFilters"
					:style="imgStyles">
		</div>
		
		<keep-alive>
			<lesson-three-poop-up 
					v-if="showPoopUp"
					@closePoopUp="showPoopUp = !showPoopUp"
					:imgFilters="imgFilters"
					@imageFilterSepia="imageFilterSepia"
					@imageFilterBorder="imageFilterBorder"
					@imageFilterShadow="imageFilterShadow"
					@imageSizeRotate="imageSizeRotate"/>
		</keep-alive>
		
	</div>
</template>

<script>
import LessonThreePoopUp from "@/components/LessonThreePoopUp.vue";

export default {
	name: 'LessonThree',
	components: {
		LessonThreePoopUp
	},
	
	data() {
		return {
			showPoopUp: false,

			imgFilters: {
				sepia: false,
				border: false,
				shadow: false,
			},

			imgCurrentWidth: '',
			imgCurrentHeight: '',
			imgCurrentDeg: '',
		}
	},

	methods: {
		showPoopUpButton() {
			this.showPoopUp = !this.showPoopUp
		},

		imageFilterSepia() {
			this.imgFilters.sepia = !this.imgFilters.sepia
		},
		imageFilterBorder() {
			this.imgFilters.border = !this.imgFilters.border
		},
		imageFilterShadow() {
			this.imgFilters.shadow = !this.imgFilters.shadow
		},
		

		imageSizeRotate(iWidth, iHeight, iDeg) {
			this.imgCurrentWidth = iWidth
			this.imgCurrentHeight = iHeight
			this.imgCurrentDeg = iDeg
		},
	},
	
	computed: {
		imgStyles() {
			return {
				width: `${this.imgCurrentWidth}px`,
				height: `${this.imgCurrentHeight}px`,
				transform: `rotate(${this.imgCurrentDeg}deg)`,
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.sepia {
	filter: sepia(100%);
}
.border {
	border: 10px double #550076;
}
.shadow {
	box-shadow: 0 0 10px 5px #000000;
}
</style>