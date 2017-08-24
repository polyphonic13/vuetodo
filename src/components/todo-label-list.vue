<template>
  <ul>
    <li v-for="label in labels">
      <div>{{ label.name }}</div>
    <li>
  </ul>
</template>
<script type="text/javascript">
export default {
  name: 'todo-label-list'
}
</script>
