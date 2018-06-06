import Vue from 'vue'
import Router from 'vue-router'
import Glossar from '@/components/Glossar'
import FireGlossar from '@/components/FireGlossar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Glossar',
      component: Glossar
    },
    {
      path: '/FireGlossar',
      name: 'FireGlossar',
      component: FireGlossar
    }
  ]
})
