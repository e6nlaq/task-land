// import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TaskListVue from './components/TaskList.vue';
import SettingPageVue from './components/SettingPage.vue';
import PointStationVue from './components/PointStation.vue';

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
		component: TaskListVue
	},
	{
		path: '/setting',
		name: 'setting',
		component: SettingPageVue
	},
	{
		path: '/point',
		name: 'point',
		component: PointStationVue
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
