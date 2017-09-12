<template>
  <div class="todo-label-detail">
    <!-- <div v-show="record.isEditing">
      <input type="text" v-model="record.name" />
    </div> -->
    <div v-on:click="onClicked()">{{ record.name }}</div>
    <div class="delete-box" v-on:click="onDeleteClicked()" v-show="isEditing">X</div>

  </div>
</template>
<script lang="ts">
import Crud from '../mixins/crud';
import ClickEmitter from '../mixins/click-emitter';

export default {
  name: 'todo-label-detail',
  props: ['record', 'isEditing'],
  mixins: [ Crud, ClickEmitter ]
}
</script>
<style>
.todo-label-detail div {
  display: inline-block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 1px 4px;
}
</style>
