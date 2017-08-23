<template>
  <div>
    <record-list
      v-bind:records="filteredRecords"
      v-bind:totalRecords="records.length"
      v-bind:recordFilter="recordFilter"
      v-on:update-record-filter="updateRecordFilter"
      v-on:update-record="updateRecord"
      v-on:delete-record="deleteRecord">
    </record-list>
    <record-create
      v-bind:record="getEmpty()"
      v-on:add-record="addRecord">
    </record-create>
  </div>
</template>

<script type="text/javascript">
import Requestor from './services/requestor';
import RecordList from './components/record-list.vue';
import RecordCreate from './components/record-create.vue';

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
    RecordList,
    RecordCreate
  },
  data() {
    return {
      apiUrl: 'http://localhost:8997/api/',
      apis: {
        todo: 'todos/',
        todoDelete: 'todos/delete/'
      },
      requestor: new Requestor(),
      records: [],
      empty: {
        name: '',
        description: '',
        labels: '',
        isCompleted: false
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

    this.requestor.get({
      url: this.apiUrl + this.apis.todo,
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

      this.requestor.post({
        url: this.apiUrl + this.apis.todo,
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

      this.requestor.post({
        url: this.apiUrl + this.apis.todo + data._id,
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
</script>
<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.card {
  background: #eee;
  border: 1px solid #ddd;
  text-align: left;
  margin: 5px;
  padding: 10px;
  width: 256px;
  display: inline-block;
  vertical-align: top;
}

.content {
  background: white;
}

.name, .description, .labels, .extra {
  padding: 5px;
}

.name {
  font-size: 1.3em;
}

.description {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 100px;
}

.labels {
  border-bottom: 1px solid #eee;

}

.labels ul {
  -webkit-padding-start: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
.label {
  background: #123456;
  color: white;
  padding: 3px 5px;
  margin: 2px;
  display: inline-block;
}

.extra {
  text-align: right;
}

.icon {
  background: #ccc;
  /*color: white;*/
  width: 56px;
  border: 1px solid #999;
  font-size: .66em;
  font-weight: bold;
  margin: 2px;
  padding: 4px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
}

button {
  background: white;
  border: none;
}

.control_button01 {
  background: #eef;
  border: 1px solid #ccc;
  width: 128px;
  padding: 3px 5px;
  cursor: pointer;
  display: inline-block;
}

.button {
  background: white;
  border: 1px solid #ccc;
  text-align: center;
  padding: 3px;
  margin-top: 5px;
  cursor: pointer;

}

.above_it_all {
  left: calc(50% - 128px);
  top: 50px;
  position: fixed;
  z-index: 3;
}

.lightbox {
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  position: fixed;
  z-index: 2;
}
.completed {
  opacity: 0.33;
}

.bg_white {
  background: white;
}

.bg_light_blue {
  background: #eef;
}

.blue {
  color: #234567;
}

.red {
  color: red;
}

.green {
  color: green;
}

.inline_block {
  display: inline-block;
}

.border_box {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.width50per {
  width: 50%;
}

.width128px {
    width: 128px;
}
.text_center {
  text-align: center;
}
.text_left {
  text-align: left
}
.text_right {
  text-align: right;
}

.text_xxl {
    font-size: 2em;
}
.text_xl {
    font-size: 1.5em;
}
.text_lg {
    font-size: 1.25em;
}
.text_md {
    font-size: 1em;
}
.text_sm {
    font-size: .75em;
}
.text_xs {
    font-size: .5em;
}
</style>
