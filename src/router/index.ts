import { createRouter, createWebHistory } from 'vue-router'
import MainScreenView from '@/views/MainScreenView.vue'
import CalendarView from '@/views/CalendarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainScreenView,
    },
    {
      path: '/calendar',
      component: CalendarView,
      children: [
        {
          path: '',
          name: 'calendar',
          component: () => import('@/components/VCalendarComponent.vue'),
        },
        {
          path: ':date',
          name: 'calendar-date',
          component: () => import('@/views/CalendarDateView.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: { name: 'home' },
    },
  ],
})

export default router
