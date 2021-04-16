import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/TabHome.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/TabSettings.vue')
      },
      {
        path: 'add',
        component: () => import('@/views/TabAccountAdd.vue')
      },
      {
        path: 'account/:uid',
        component: () => import('@/views/TabAccountDetails.vue')
      },
      {
        path: 'account/:uid/edit',
        component: () => import('@/views/TabAccountEdit.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
