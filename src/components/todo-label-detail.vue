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
import { Component, Prop, Vue } from 'vue-property-decorator';

import RecordMeta from '../models/record-meta';
import TodoLabel from '../models/todo-label';

import Crud from '../mixins/crud';
import ClickEmitter from '../mixins/click-emitter';

@Component({
  name: 'todo-label-detail',
  props: {
    record: TodoLabel
  },
  mixins: [
    Crud,
    ClickEmitter
  ]
})
export default class TodoLabelDetail extends Vue {
  @Prop()
  record: RecordMeta<TodoLabel>;
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
