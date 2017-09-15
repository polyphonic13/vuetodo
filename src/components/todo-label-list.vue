<template>
  <ul>
    <li v-for="label in labels" :key="label.id">
      <div>{{ label.name }}</div>
    <li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
  name: 'todo-label-list'
}
</script>
