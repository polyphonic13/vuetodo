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
          id: (Date.now() + Math.floor(Math.random() * 999)),
          title: 'todo a',
          description: 'the first todo',
          project: 'acme',
          isCompleted: false
        },
        {
          id: (Date.now() + Math.floor(Math.random() * 999)),
          title: 'todo b',
          description: 'the second todo',
          project: 'aaa',
          isCompleted: true
        },
        {
          id: (Date.now() + Math.floor(Math.random() * 999)),
          title: 'todo c',
          description: 'the third todo',
          project: 'aaa',
          isCompleted: false
        }
      ],
      empty: {
        title: '',
        description: '',
        project: ''
      }
    }
  },
  methods: {
    addTodo(data) {
      console.log('App/addTodo, data: ' , data);
      this.records.push(data);
    },
    getEmpty() {
      var obj = {};
      for(var key in this.empty) {
        obj[key] = this.empty[key];
      }
      return obj;
    }
  }
}
