import Vue from 'vue'
import Router from 'vue-router'

import TheMoneyExchange from '@/components/TheMoneyExchange'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: TheMoneyExchange }
  ]
})
