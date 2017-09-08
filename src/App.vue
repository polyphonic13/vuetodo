<template>
  <div>
    <div class="top-row">
      <list-filter
        v-bind:recordFilter="recordFilter"
        v-on:update-todo-filter="updateTodoFilter">
      </list-filter>
      <div class="create-record">
        <todo-create
          v-bind:record="getEmpty()"
          v-on:add-record="addTodo"
          v-on:create-record="createTodo"
          v-on:cancel-create="cancelCreate">
        </todo-create>
      </div>
    </div>
    <todo-list
      v-bind:records="filteredTodos"
      v-bind:totalTodos="records.length"
      v-on:create-record="createTodo"
      v-on:cancel-create="cancelCreate"
      v-on:update-record="updateTodo"
      v-on:delete-record="deleteTodo">
    </todo-list>
  </div>
</template>

<script type="text/javascript">
import Requestor from './services/requestor';
import TodoList from './components/todo-list.vue';
import TodoCreate from './components/todo-create.vue';
import ListFilter from './components/list-filter.vue';

let filters = {
  all: function(records) {
    return records;
  },
  completed: function(records) {
    return records.filter(function(record) {
      return record.isCompleted;
    });
  },
  open: function(records) {
    return records.filter(function(record) {
      return !record.isCompleted;
    })
  }
};

export default {
  name: 'app',
  components: {
    TodoList,
    TodoCreate,
    ListFilter
  },
  data() {
    return {
      apiUrl: 'http://localhost:8997/api/',
      apis: {
        todo: 'todos/',
        todoList: 'todos/?sort_by=createdAt:-1',
        todoDelete: 'todos/delete/'
      },
      requestor: new Requestor(),
      records: [],
      empty: {
        name: '',
        description: '',
        labels: [],
        isCompleted: false,
        isNew: true,
        isEditing: true
      },
      editable: [
        'name',
        'description',
        'ordinal',
        'labels',
        'isCompleted'
      ],
      recordFilter: 'open'
    }
  },
  mounted: function() {
    this.getTodoList();
  },
  methods: {
    getTodoList() {
      let done = function(context) {
        return function(response) {
          context.records = response.data.map(record => {
            record.isNew = false;
            record.isEditing = false;
            return record;
          });
          context.records = response.data;
          console.log('app js mounted, records = ', context.records);
        };
      }(this);

      this.requestor.get({
        url: this.apiUrl + this.apis.todoList,
        done: done
      });
    },
    addTodo() {
      console.log('App/addTodo');
      var record = this.getEmpty();
      console.log('\tnew record = ', record);
      this.records.unshift(record);
    },
    createTodo(data) {
      console.log('App/createTodo, data = ', data);
      this.records.shift();

      let done = function(context) {
        return function(response) {
          context.getTodoList();
        };
      }(this);

      this.requestor.post({
        url: this.apiUrl + this.apis.todo,
        data: data,
        done: done
      });
    },
    cancelCreate() {
      console.log('App/cancelCreate');
      this.records.shift();
    },
    updateTodo(data) {
      console.log('App/updateTodo, data = ', data);
      if(!data._id) {
        return;
      }

      let update = {};
      for(var key in data) {
        if(this.editable.indexOf(key) > -1) {
          update[key] = data[key];
        }
      }
      console.log('update = ', update);
      let id = data._id;

      let done = function(context) {
        return function(response) {
          console.log('\tupdate callback, response = ', response);
          context.getTodoList();
        }
      }(this);

      this.requestor.post({
        url: this.apiUrl + this.apis.todo + id,
        data: update,
        done: done
      });
    },

    deleteTodo(data) {
      console.log('App/deleteTodo, id = ' + data._id + ', data = ', data);
      if(!data._id) {
        return;
      }
      var index = this.getTodoIndex(data);

      let done = function(context) {
        return function(response) {
          console.log('\tdelete callback, response = ', response, '\nindex = ' + index);
          context.getTodoList();
        }
      }(this);

      this.requestor.post({
        url: this.apiUrl + this.apis.todoDelete + data._id,
        data: data,
        done: done
      });
    },
    getTodoIndex(todo) {
      return this.records.indexOf(todo);
    },
    getEmpty() {
      var obj = {};
      for(var key in this.empty) {
        obj[key] = this.empty[key];
      }
      return obj;
    },
    updateTodoFilter(data) {
      if(data === this.recordFilter) {
        return;
      }
      this.recordFilter = data;
    }
  },
  computed: {
    filteredTodos: function() {
      return filters[this.recordFilter](this.records);
    }
  }
}
</script>
<style src="./app.css"></style>
