import Vue from 'vue'
import Router from 'vue-router'
import AddTodos from '@/components/AddTodos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Add',
      component: AddTodos
    }
  ]
})
