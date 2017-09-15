<template>
  <div class="ui centered card">
      <todo-form
        v-bind:record="record"
        v-bind:class="[{ completed: record.isCompleted }]">
      </todo-form>
      <div class="extra content" v-bind:class="[{ completed: record.isCompleted }]">
        <button class="right floated edit icon " v-on:click="showForm(record)" v-show="!record.isEditing">EDIT</button>
        <button class="right floated isCompleted icon " v-on:click="saveTodo(record)" v-show="record.isEditing">SAVE</button>
        <button class="right floated delete icon " v-on:click="deleteTodo(record)" v-show="!record.isEditing">DELETE</button>
        <button class="right floated cancel icon " v-on:click="cancelCreate()" v-show="record.isNew">CANCEL</button>
        <button class="right floated cancel icon " v-on:click="cancelEdit(record)" v-show="record.isEditing&&!record.isNew">CANCEL</button>
      </div>
      <div class="ui bottom attached green basic button" v-show="record.isCompleted" disabled  v-on:click="saveTodo(record, false)">
          restart
      </div>
      <div class="ui bottom attached blue basic button" v-show="!record.isCompleted" v-on:click="saveTodo(record, true)">
          complete
      </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'; 
import Component from 'vue-class-component';

import TodoForm from './todo-form.vue';

export default {
  name: 'todo-detail',
  props: ['record'],
  components: {
    TodoForm
  },
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    mounted: function() {
      console.log('TodoDetail/mounted, record = ', this.record);
    },
    showForm(record) {
      record.isEditing = true;
    },
    hideForm(record) {
      record.isEditing = false;
    },
    saveTodo(record, isCompleted) {
      // var label = record.labels || [];
      //
      // record.labels = new Array();
      //
      // labels.forEach(function(l) {
      //   console.log('\tpushing: ' + l);
      //   record.labels.push(l);
      // })

      console.log('TodoDetail/saveTodo, is new = ' + record.isNew + '\nlabels length = ', record.labels.length, '\nrecord = ', record);
      if(record.isNew) {
        this.$emit('create-record', record);
      } else {
        record.isCompleted = isCompleted;

        this.$emit('update-record', record);
      }
      this.hideForm(record);
    },
    deleteTodo(record) {
      console.log('TodoDetail/deleteTodo, record = ', record);
      this.$emit('delete-record', record);
    },
    cancelCreate() {
      console.log('TodoDetail/cancelCreate');
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
