import Vue from 'vue'
import Router from 'vue-router'
import Center from '@/components/Center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Center',
      component: Center
    }
  ]
})
