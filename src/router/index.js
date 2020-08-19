import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'
import SingleSmoothie from '@/components/SingleSmoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },
    {
      path: '/add-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    },
    {
      path: '/:smoothie_slug',
      name: 'SingleSmoothie',
      component: SingleSmoothie
    }
  ]
})
