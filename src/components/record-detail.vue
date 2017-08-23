<template>
  <div class="ui centered card">
      <record-form
        v-bind:record="record"
        v-bind:class="[{ completed: record.isCompleted }]">
      </record-form>
      <div class="extra content" v-bind:class="[{ completed: record.isCompleted }]">
        <button class="right floated edit icon " v-on:click="showForm(record)" v-show="!record.isEditing">EDIT</button>
        <button class="right floated isCompleted icon " v-on:click="saveRecord(record)" v-show="record.isEditing">SAVE</button>
        <button class="right floated delete icon " v-on:click="deleteRecord(record)" v-show="!record.isEditing">DELETE</button>
        <button class="right floated cancel icon " v-on:click="cancelCreate()" v-show="record.isNew">CANCEL</button>
        <button class="right floated cancel icon " v-on:click="cancelEdit(record)" v-show="record.isEditing&&!record.isNew">CANCEL</button>
      </div>
      <div class="ui bottom attached green basic button" v-show="record.isCompleted" disabled  v-on:click="saveRecord(record, false)">
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
    saveRecord(record, isCompleted) {
      let labels = record.labels.replace(' ', '').split(',');
      record.labels = new Array();

      labels.forEach(function(l) {
        console.log('\tpushing: ' + l);
        record.labels.push(l);
      })

      console.log('RecordDetail/saveRecord, is new = ' + record.isNew + '\nlabels = ', record.labels.length, '\nrecord = ', record);
      if(record.isNew) {
        this.$emit('create-record', record);
      } else {
        record.isCompleted = isCompleted;
        this.$emit('update-record', record);
      }
      this.hideForm(record);
    },
    deleteRecord(record) {
      console.log('RecordDetail/deleteRecord, record = ', record);
      this.$emit('delete-record', record);
    },
    cancelCreate() {
      console.log('RecordDetail/cancelCreate');
      this.$emit('cancel-create');
    },
    cancelEdit(record) {
      this.hideForm(record);
    }
  }
}
</script>
<style>
</style>
