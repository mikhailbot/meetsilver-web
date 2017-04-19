import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CreateEvent from '@/components/CreateEvent'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/create',
      name: 'CreateEvent',
      component: CreateEvent
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
