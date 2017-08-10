<template>
  <div id="app">
    <h1>todo list app</h1>
    <todo-list v-bind:records="records"></todo-list>
    <create-todo v-on:add-record="addTodo"></create-todo>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      records: [
        {
          id: (Date.now() + (Math.random() * 999)),
          title: 'todo a',
          description: 'the first todo',
          project: 'acme',
          done: false
        },
        {
          id: (Date.now() + (Math.random() * 999)),
          title: 'todo b',
          description: 'the second todo',
          project: 'aaa',
          done: true
        },
        {
          id: (Date.now() + (Math.random() * 999)),
          title: 'todo c',
          description: 'the third todo',
          project: 'aaa',
          done: false
        }
      ]
    }
  },
  methods: {
    addTodo(data) {
      this.records.push(data);
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
