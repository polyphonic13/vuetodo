<template>
  <div class="list-filter">
    <div v-bind:class="getControlClass('open')" v-on:click="updateTodoFilter('open')">open</b></div>
    <div v-bind:class="getControlClass('completed')" v-on:click="updateTodoFilter('completed')">completed</b></div>
    <div v-bind:class="getControlClass('all')" v-on:click="updateTodoFilter('all')">all</b></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'; 
import Component from 'vue-class-component';

@Component({
  name: 'list-filter',
  props: {
    recordFilter: String
  }
})
export default class ListFilter extends Vue {
  recordFilter: string = this.recordFilter;

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
