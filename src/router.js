import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/Home.vue';
import AboutPage from './components/About.vue';
import CatalogPage from './components/CatalogPage.vue'; // Обновлено
import LoginPage from './components/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/catalog',
    name: 'CatalogPage',
    component: CatalogPage // Убедитесь, что это CatalogPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
