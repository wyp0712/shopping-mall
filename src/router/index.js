import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: resolve => require(['@/views/home'], resolve)
    },
    {
      path: '/shopcart',
      component: resolve => require(['@/views/shoppingcart'], resolve)
    },
    {
      path: '/mime',
      component: resolve => require(['@/views/mime'], resolve)
    }
  ]
})
