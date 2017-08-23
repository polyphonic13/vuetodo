import Requestor from './services/requestor';

// import TodoList from './components/todo-list/todo-list.vue';
// import TodoCreate from './components/todo-create/todo-create.vue';

var apiUrl = 'http://localhost:8997/api/';
var apis = {
  todo: 'todos/',
  todoDelete: 'todos/delete/'
};
var requestor = new Requestor();

var filters = {
  all: function (todos) {
    return todos;
  },
  open: function (todos) {
    return todos.filter(function (todo) {
      return !todo.isCompleted;
    })
  },
  complete: function (todos) {
    return todos.filter(function (todo) {
      return todo.isCompleted;
    })
  }
};

export default {
  name: 'app',
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      records: [],
      empty: {
        name: '',
        description: '',
        labels: ''
      },
      recordFilter: 'open'
    }
  },
  mounted: function() {
    var done = function(context) {
      return function(response) {
        context.records = response.data;
        console.log('app js mounted, records = ', context.records);
      };
    }(this);

    requestor.get({
      url: apiUrl + apis.todo,
      done: done
    });
  },
  methods: {
    addRecord(data) {
      var done = function(context) {
        return function(response) {
          if(response.success) {
            context.records.unshift(response.data);
          } else {
            console.log(response.message);
          }
        };
      }(this);

      requestor.post({
        url: apiUrl + apis.todo,
        data: data,
        done: done
      });
    },
    updateRecord(data) {
      console.log('App/updateRecord, data = ', data);
      if(!data._id) {
        return;
      }
      var index = this.getTodoIndex(data);

      var done = function(context) {
        return function(response) {
          if(response.success) {
              this.records.splice('index', 1, response.data);
          } else {
            console.log(response.message);
          }
        }
      };

      requestor.post({
        url: apiUrl + apis.todo + data._id,
        data: data,
        done: done
      });
    },
    deleteRecord(data) {
      console.log('App/deleteRecord, data = ', data);
      if(!data._id) {
        return;
      }
      var index = this.getTodoIndex(data);

      var done = function(context) {
        return function(response) {
          console.log('delete callback, response = ', response, '\nindex = ' + index);
          if(response.success) {
            this.records.splice(index, 1);
          } else {
            console.log(response.message);
          }
        }
      };

      requestor.post({
        url: apiUrl + apis.todoDelete + data._id,
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
    updateRecordFilter(data) {
      if(data === this.recordFilter) {
        return;
      }
      this.recordFilter = data;
    }
  },
  computed: {
    filteredRecords: function() {
      return filters[this.recordFilter](this.records);
    }
  }
}
