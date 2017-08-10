import Todo from '../todo/todo.vue';

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
