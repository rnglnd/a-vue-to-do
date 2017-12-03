import Vue from 'vue';
import Router from 'vue-router';
import AddTodos from '@/components/AddTodos';
import ViewTodos from '@/components/ViewTodos';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Add',
      component: AddTodos
    },
    {
      path: '/view',
      name: 'View',
      component: ViewTodos
    }
  ]
});
