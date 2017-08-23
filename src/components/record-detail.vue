<template>
  <div class="ui centered card">
      <record-form
        v-bind:record="record"
        v-bind:class="[{ completed: record.isCompleted }]">
      </record-form>
      <div class="extra content" v-bind:class="[{ completed: record.isCompleted }]">
        <button class="right floated edit icon " v-on:click="showForm(record)" v-show="!record.isEditing">EDIT</button>
        <button class="right floated isCompleted icon " v-on:click="saveRecord(record)" v-show="record.isEditing">SAVE</button>
        <button class="right floated delete icon " v-on:click="deleteRecord(record)" v-show="!record.isNew">DELETE</button>
        <button class="right floated delete icon " v-on:click="cancelCreate()" v-show="record.isNew">CANCEL</button>
      </div>
      <div class="ui bottom attached green basic button" v-show="record.isCompleted" disabled  v-on:click="updateRecord(record, false)">
          restart
      </div>
      <div class="ui bottom attached blue basic button" v-show="!record.isCompleted" v-on:click="saveRecord(record, true)">
          complete
      </div>
  </div>
</template>
<script type="text/javascript">
// import TodoForm from '../todo-form/todo-form.vue';
import RecordForm from './record-form.vue';

export default {
  name: 'record-detail',
  props: ['record'],
  components: {
    // TodoForm
    RecordForm
  },
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    mounted: function() {
      console.log('RecordDetail/mounted, record = ', this.record);
    },
    showForm(record) {
      record.isEditing = true;
    },
    hideForm(record) {
      record.isEditing = false;
    },
    saveRecord(record, isComplete) {
      console.log('RecordDetail/saveRecord, is new = ' + record.isNew + ', record = ', record);
      if(record.isNew) {
        this.$emit('create-record', record);
      } else {
        this.$emit('update-record', record);
      }
      this.hideForm(record);
    },
    createRecord(record) {
      this.hideForm(record);
      console.log('RecordDetail/createRecord, record = ', record);
      this.$emit('create-record', record);
    },
    updateRecord(record, isComplete) {
      this.hideForm(record);
      console.log('RecordDetail/updateRecord, record = ', record);
      record.isCompleted = isComplete;
      this.$emit('update-record', record);
    },
    deleteRecord(record) {
      console.log('RecordDetail/deleteRecord, record = ', record);
      this.$emit('delete-record', record);
    },
    cancelCreate() {
      console.log('RecordDetail/cancelCreate');
      this.$emit('cancel-create');
    }
  }
}
</script>
<style>
</style>
