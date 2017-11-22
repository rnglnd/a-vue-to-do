<template>
  <div id="hello-todo">
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
/* eslint-disable */
export default {
    data() {
      return {
    newTodo: '',
    todos: [
    ]
      }
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
/* eslint-enable */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
