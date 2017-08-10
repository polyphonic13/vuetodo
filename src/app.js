import TodoList from './components/todo-list/todo-list.vue';
import CreateTodo from './components/create-todo/create-todo.vue';

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
