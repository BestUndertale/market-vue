import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Home from '../components/Home'
import GoodsIndex from "../components/goods/GoodsIndex";
import Register from "../components/Register";
import Add from "../components/goods/Add";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/goods',
          name: 'GoodsIndex',
          component: GoodsIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path:'/add',
          name:'Add',
          component:Add,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

