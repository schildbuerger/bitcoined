import Vue from 'vue'
import Router from 'vue-router'
import Glossar from '@/components/Glossar'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Glossar',
      component: Glossar
    }
  ]
})
