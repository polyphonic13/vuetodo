<template>
  <div>
    <p>Completed Tasks: {{records.filter(record => {return record.done === true}).length}}</p>
    <p>Pending Tasks: {{records.filter(record => {return record.done === false}).length}}</p>
    <todo  v-for="record in records" v-bind:record="record" :key="record.id" v-on:update-record="updateRecord" v-on:delete-record="deleteRecord"></todo>
  </div>
</template>
<script type='text/javascript'>
import Todo from './Todo';

export default {
  props: ['records'],
  components: {
    Todo
  },
  methods: {
    updateRecord(record) {
      const index = this.records.indexOf(record);
      // this.records[index] = record;
      this.records.splice(index, 1, record)
    },
    deleteRecord(record) {
      const index = this.records.indexOf(record);
      this.records.splice(index, 1);
    }
  }
}
</script>
