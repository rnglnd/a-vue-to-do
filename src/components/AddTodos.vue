<template>
  <div id="hello-todo">
    <router-link to="view">View All</router-link>
    <h4>Enter a todo list item below:</h4>
    <input v-model="newTodo" v-on:keyup.enter="addTodo">
    <ul>
      <li v-for="(todo, index) in todos" :key='index'>
        {{ todo.text }} <button v-on:click="removeTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store';

  export default {
    data() {
      return {
        newTodo: ''
      }
    },
    computed: {
      todos () {
        return store.state.todos
      }
    },
    methods: {
      addTodo: function () {
        var text = this.newTodo.trim()
        if (text) {
          store.commit({
          type: 'addTodo',
          text
        })
          this.newTodo = ''
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1)
        store.commit({
          type: 'removeTodo',
          index
        })
      }
    }
  };
</script>

<style scoped>
  h4 {
    margin: 0;
    padding: 0;}

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }
</style>
