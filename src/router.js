// import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import IndexPages from './components/IndexPages.vue';
import RouterTest from './components/RouterTest.vue';

// const app = createApp({});

// app.use(Router);

// export default new Router({
// 	mode: 'history',
// 	base: './',
// 	routes: [
// 		{
// 			path: '/',
// 			name: 'index',
// 			component: IndexPages
// 		},
// 		{
// 			path: '/test',
// 			name: 'test',
// 			component: RouterTest
// 		}
// 	]
// });

const routes = [
	{
		path: '/',
		name: 'index',
		component: IndexPages
	},
	{
		path: '/test',
		name: 'test',
		component: RouterTest
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
