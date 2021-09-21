import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import LoginView from '@/components/login/LoginView'
import Register from '@/components/register/Register'
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
      path: '/register/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/all/header',
      name: 'Header',
      component: Header
    }
  ]
})
