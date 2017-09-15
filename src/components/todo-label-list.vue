<template>
  <ul>
    <li v-for="label in labels" :key="label.id">
      <div>{{ label.name }}</div>
    <li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue'; 
import Component from 'vue-class-component';

export default {
  name: 'todo-label-list'
}
</script>
