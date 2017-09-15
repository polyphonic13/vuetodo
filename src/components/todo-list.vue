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

import TodoDetail from './todo-detail.vue';

export default {
  name: 'todo-list',
  props: ['records', 'totalTodos'],
  components: {
    TodoDetail
  },
  methods: {
    createTodo(record) {
      console.log('TodoList/createTodo, record = ', record);
      this.$emit('create-record', record);
    },
    cancelCreate() {
      console.log('TodoList/cancelCreate');
      this.$emit('cancel-create');
    },
    updateTodo(record) {
      console.log('TodoList/updateTodo, record = ', record);
      this.$emit('update-record', record);
    },
    deleteTodo(record) {
      console.log('TodoList/deleteTodo, record = ', record);
      this.$emit('delete-record', record);
    }
  }
}
</script>
<style></style>
