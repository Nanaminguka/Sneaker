import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Подключаем маршрутизатор

createApp(App)
  .use(router) // Используем роутер
  .mount('#app');
