<template>
  <div id="hello-todo">
    <router-link to="/">Add New</router-link>
    <h4>All todos listed below:</h4>
    <ul>
      <li v-for="(todo, index) in todos" :key='index'>
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store';

  export default {
    computed: {
      todos () {
        return store.state.todos
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
