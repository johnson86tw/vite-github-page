import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory('/vite-github-page/'),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue'),
		},
		{
			path: '/admin',
			name: 'admin',
			component: () => import('./views/Admin.vue'),
		},
	],
})

export default router
