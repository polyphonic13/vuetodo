<template>
  <div class="ui basic content center aligned segment">
    <button class="right floated edit icon " v-on:click="addTodo" v-show="!isCreating">ADD</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'todo-create',
  data() {
    return {
      isCreating: false
    };
  },
  methods: {
    addTodo() {
      this.$emit('add-record');
    }
  }
}
</script>
<style>
</style>
