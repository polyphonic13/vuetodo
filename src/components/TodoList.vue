<template>
  <div class='list-holder'>
      <todo  v-for="todo in todos" v-bind:todo="todo"></todo>
  </div>
</template>
<script type='text/javascript'>
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo
  }
}
</script>
<style>
.list-holder {
  text-align: left;
}

.list-holder ul {
  list-style: none;
}
</style>
