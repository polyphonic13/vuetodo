<template>
  <ul>
    <li v-for="label in labels" :key="label.id">
      <div>{{ label.name }}</div>
    <li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'todo-label-list'
})
export default class TodoLabelList extends Vue {
}
</script>
