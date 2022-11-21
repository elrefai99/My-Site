import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import SkillsViewVue from '@/views/SkillsView.vue'
import ProjectsViewVue from '@/views/ProjectsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue
  },
  {
    path: '/skill',
    name: 'skill',
    component: SkillsViewVue
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectsViewVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
