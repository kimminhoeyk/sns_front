import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import LoginView from '@/components/login/LoginView'
import Header from '@/components/all/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login/loginView',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/all/header',
      name: 'Header',
      component: Header
    }
  ]
})
