import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Statistics from '@/components/Statistics'
import Rewards from '@/components/Rewards'
import About from '@/components/About'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/rewards',
      name: 'Rewards',
      component: Rewards
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
