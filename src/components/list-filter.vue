<template>
  <div class="list-filter">
    <div v-bind:class="getControlClass('open')" v-on:click="updateTodoFilter('open')">open</b></div>
    <div v-bind:class="getControlClass('completed')" v-on:click="updateTodoFilter('completed')">completed</b></div>
    <div v-bind:class="getControlClass('all')" v-on:click="updateTodoFilter('all')">all</b></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'list-filter'
})
export default class ListFilter extends Vue {
  @Prop()
  recordFilter: string;

  updateTodoFilter(value: string): void {
    this.$emit('update-todo-filter', value)
  }
  getControlClass(type: string): any {
    return {
      control_button01: true,
      bg_white: this.recordFilter === type
    };
  }
}
</script>
<style>
.list-filter div {
  text-align: center;
}
</style>
