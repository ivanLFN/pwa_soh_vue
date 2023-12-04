import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './src/components/MainPage.vue'
import StationPage from './src/components/StationPage.vue'
import LoginPage from './src/components/LoginPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/station',
    component: StationPage,
    props: route => ({ num: route.query.num })
  },
  {
    path: '/login',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
