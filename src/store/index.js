
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
  	addTodo: (state, payload) => state.todos.push({ text: payload.text }),
    removeTodo: (state, payload) => state.todos.splice(payload.index, 1)
  }
});
