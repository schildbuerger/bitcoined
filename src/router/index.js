import Vue from 'vue'
import Router from 'vue-router'
import Glossar from '@/components/Glossar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Glossar',
      component: Glossar
    }
  ]
})
