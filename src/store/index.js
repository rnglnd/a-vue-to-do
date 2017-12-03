
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
  	addTodo: (state, text) => state.todos.push({ text: text }),
    removeTodo: (state, index) => state.todos.splice(index, 1)
  }
})