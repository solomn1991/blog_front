import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Home from '@/components/Home'
import Register from '@/components/Register'
import PassagEditor from '@/components/PassageEditor'
import Passage from '@/components/Passage'
import Profile from '@/components/Profile'
import MyPassages from '@/components/MyPassages'
import PassageAdder from '@/components/PassageAdder'

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
      path:'/passage/edit/:id',
      name:'PassageEditor',
      component:PassagEditor
    },
    {
      path:'/passage/:id',
      name:'passage',
      component:Passage
    },
    {
      path:'/profile/:id',
      name:'Profile',
      component:Profile
    },
    {
      path:'/mypassages',
      name:'MyPassages',
      component:MyPassages
    },
    {
      path:"/new/passage",
      name:'PassageAdder.vue',
      component:PassageAdder
    }
  ]
})
