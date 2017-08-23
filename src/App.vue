<template>
  <div>
    <div class="top-row">
      <list-filter
        v-bind:recordFilter="recordFilter"
        v-on:update-record-filter="updateRecordFilter">
      </list-filter>
      <div class="create-record">
        <record-create
          v-bind:record="getEmpty()"
          v-on:add-record="addRecord"
          v-on:create-record="createRecord"
          v-on:cancel-create="cancelCreate">
        </record-create>
      </div>
    </div>
    <record-list
      v-bind:records="filteredRecords"
      v-bind:totalRecords="records.length"
      v-on:create-record="createRecord"
      v-on:cancel-create="cancelCreate"
      v-on:update-record="updateRecord"
      v-on:delete-record="deleteRecord">
    </record-list>
  </div>
</template>

<script type="text/javascript">
import Requestor from './services/requestor';
import RecordList from './components/record-list.vue';
import RecordCreate from './components/record-create.vue';
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
    RecordList,
    RecordCreate,
    ListFilter
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
        labels: [],
        isCompleted: false,
        isNew: true,
        isEditing: true
      },
      editable: [
        'name',
        'description',
        'labels',
        'isCompleted'
      ],
      recordFilter: 'open'
    }
  },
  mounted: function() {
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
      url: this.apiUrl + this.apis.todo,
      done: done
    });
  },
  methods: {
    addRecord() {
      console.log('App/addRecord');
      var record = this.getEmpty();
      console.log('\tnew record = ', record);
      this.records.unshift(record);
    },
    createRecord(data) {
      console.log('App/createRecord, data = ', data);
      this.records.shift();

      let done = function(context) {
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
    cancelCreate() {
      console.log('App/cancelCreate');
      this.records.shift();
    },
    updateRecord(data) {
      console.log('App/updateRecord, data = ', data);
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
        }
      }(this);

      this.requestor.post({
        url: this.apiUrl + this.apis.todo + id,
        data: update,
        done: done
      });
    },

    deleteRecord(data) {
      console.log('App/deleteRecord, id = ' + data._id + ', data = ', data);
      if(!data._id) {
        return;
      }
      var index = this.getTodoIndex(data);

      let done = function(context) {
        return function(response) {
          console.log('\tdelete callback, response = ', response, '\nindex = ' + index);
          if(response.success) {
            context.records.splice(index, 1);
          } else {
            console.log(response.message);
          }
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
<style src="./app.css"></style>
