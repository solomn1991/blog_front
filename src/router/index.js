import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/test',
      name:'Test',
      component:Test
    },
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/editor',
      name:'Editor',
      component:Editor
    }
  ]
})
