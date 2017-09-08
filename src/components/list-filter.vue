<template>
  <div class="list-filter">
    <div v-bind:class="getControlClass('open')" v-on:click="updateTodoFilter('open')">open</b></div>
    <div v-bind:class="getControlClass('completed')" v-on:click="updateTodoFilter('completed')">completed</b></div>
    <div v-bind:class="getControlClass('all')" v-on:click="updateTodoFilter('all')">all</b></div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'list-filter',
  props: ['recordFilter'],
  methods: {
    updateTodoFilter(value) {
      this.$emit('update-todo-filter', value)
    },
    getControlClass: function(type) {
      return {
        control_button01: true,
        bg_white: this.recordFilter === type
      };
    }
  }
}
</script>
<style>
.list-filter div {
  text-align: center;
}
</style>
