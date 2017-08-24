<template>
  <div class="todo-label-detail">
    <!-- <div v-show="record.isEditing">
      <input type="text" v-model="record.name" />
    </div> -->
    <div v-on:click="onClicked()">{{ record.name }}</div>
    <div class="delete-box" v-on:click="onDeleteClicked()" v-show="isEditing">X</div>

  </div>
</template>
<script type="text/javascript">
import Crud from '../mixins/crud.js';
import ClickEmitter from '../mixins/click-emitter.js';

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

.delete-box {
  /*border-left: 1px solid #456789;*/
}
</style>
