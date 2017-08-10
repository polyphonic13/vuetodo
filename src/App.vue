<template>
  <div id="app">
    <h1>todo list app</h1>
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        {
          title: 'todo a',
          description: 'the first todo',
          project: 'acme',
          done: false
        },
        {
          title: 'todo b',
          description: 'the second todo',
          project: 'aaa',
          done: true
        },
        {
          title: 'todo c',
          description: 'the third todo',
          project: 'aaa',
          done: false
        },
        {
          title: 'todo d',
          description: 'the forth todo',
          project: 'acme',
          done: false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
</style>
