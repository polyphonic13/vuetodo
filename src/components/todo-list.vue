<template>
  <div>
    <div class="view-holder">
      <todo-detail
        v-for="record in records"
        v-bind:record="record"
        :key="record.id"
        v-on:create-record="createTodo"
        v-on:cancel-create="cancelCreate"
        v-on:update-record="updateTodo"
        v-on:delete-record="deleteTodo">
      </todo-detail>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Todo from '../models/todo';
import RecordMeta from '../models/record-meta';

import TodoDetail from './todo-detail.vue';

@Component({
  name: 'todo-list',
  components: {
    TodoDetail
  }
})
export default class TodoList extends Vue {
  @Prop()
  records: RecordMeta<Todo>[];

  @Prop()
  totalTodos: number; 

    createTodo(record): void {
      console.log('TodoList/createTodo, record = ', record);
      this.$emit('create-record', record);
    }
    cancelCreate(): void {
      console.log('TodoList/cancelCreate');
      this.$emit('cancel-create');
    }
    updateTodo(record): void {
      console.log('TodoList/updateTodo, record = ', record);
      this.$emit('update-record', record);
    }
    deleteTodo(record): void {
      console.log('TodoList/deleteTodo, record = ', record);
      this.$emit('delete-record', record);
    }
}
</script>
<style></style>
