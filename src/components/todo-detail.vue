<template>
  <div class="ui centered card">
      <todo-form
        v-bind:record="record"
        v-bind:class="[{ completed: recordMeta.item.isCompleted }]">
      </todo-form>
      <div class="extra content" v-bind:class="[{ completed: recordMeta.item.isCompleted }]">
        <button class="right floated edit icon " v-on:click="showForm(recordMeta)" v-show="!recordMeta.item.isEditing">EDIT</button>
        <button class="right floated isCompleted icon " v-on:click="saveTodo(recordMeta)" v-show="recordMeta.item.isEditing">SAVE</button>
        <button class="right floated delete icon " v-on:click="deleteTodo(recordMeta)" v-show="!recordMeta.item.isEditing">DELETE</button>
        <button class="right floated cancel icon " v-on:click="cancelCreate()" v-show="recordMeta.item.isNew">CANCEL</button>
        <button class="right floated cancel icon " v-on:click="cancelEdit(recordMeta)" v-show="recordMeta.item.isEditing&&!recordMeta.item.isNew">CANCEL</button>
      </div>
      <div class="ui bottom attached green basic button" v-show="recordMeta.item.isCompleted" disabled  v-on:click="saveTodo(recordMeta, false)">
          restart
      </div>
      <div class="ui bottom attached blue basic button" v-show="!recordMeta.item.isCompleted" v-on:click="saveTodo(recordMeta, true)">
          complete
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// models
import Todo from '../models/todo';
import TodoLabel from '../models/todo-label';
import RecordMeta from '../models/record-meta';

// components
import TodoForm from './todo-form.vue';

@Component({
  name: 'todo-detail',
  components: {
    TodoForm
  }
})
export default class TodoDetail extends Vue {
  @Prop() 
  recordMeta: RecordMeta<Todo>;

  isEditing: boolean = false;

  mounted(): void {
    console.log('TodoDetail/mounted, record = ', this.recordMeta);
  }

  showForm(recordMeta: RecordMeta<Todo>): void {
    recordMeta.item.isEditing = true;
  }

  hideForm(recordMeta: RecordMeta<Todo>): void {
    recordMeta.item.isEditing = false;
  }

  saveTodo(recordMeta: RecordMeta<Todo>, isCompleted: boolean): void {
    console.log('TodoDetail/saveTodo, is new = ' + recordMeta.item.isNew + '\nlabels length = ', recordMeta.item.labels.length, '\nrecord = ', recordMeta);
    if(recordMeta.item.isNew) {
      this.$emit('create-record', recordMeta);
    } else {
      recordMeta.item.isCompleted = isCompleted;

      this.$emit('update-record', recordMeta);
    }
    this.hideForm(recordMeta);
  }

  deleteTodo(recordMeta: RecordMeta<Todo>): void {
    console.log('TodoDetail/deleteTodo, record = ', recordMeta);
    this.$emit('delete-record', recordMeta);
  }

  cancelCreate(): void {
    console.log('TodoDetail/cancelCreate');
    this.$emit('cancel-create');
  }

  cancelEdit(recordMeta: RecordMeta<Todo>): void {
    this.hideForm(recordMeta);
  }

}
</script>
<style>
</style>
