<template>
  <div class="ui basic content center aligned segment">
    <button class="right floated edit icon " v-on:click="addTodo" v-show="!isCreating">ADD</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'todo-create',
  props: {
    recordFilter: String
  }
})
export default class TodoCreate extends Vue {
  @Prop()
  recordFilter: String;
  
  isCreating: boolean = false;

  addTodo(): void {
    this.$emit('add-record');
  }
}
</script>
<style>
</style>
