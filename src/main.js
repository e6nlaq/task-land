import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

createApp(App).use(router).mount("#app");
// createApp(App).mount("#app");
// new Vue({
// 	router,
// 	render: h => h(App)
// }).mount('#app');
