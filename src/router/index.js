import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/taskone',
		name: 'taskone',
		component: () => import('@/views/TaskOne.vue')
	},
	{
		path: '/tasktwo',
		name: 'tasktwo',
		component: () => import('@/views/TaskTwo.vue')
	},
	{
		path: '/taskthree',
		name: 'taskthree',
		component: () => import('@/views/TaskThree.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
