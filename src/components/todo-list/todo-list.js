import Todo from '../todo/todo.vue';

export default {
  props: ['records', 'recordFilter', 'totalRecords'],
  components: {
    Todo
  },
  methods: {
    updateRecord(record) {
      console.log('TodoList/updateRecord, record = ', record);
      // const index = this.records.indexOf(record);
      // this.records[index] = record;
      // this.records.splice(index, 1, record);
      this.$emit('update-record', record);
    },
    deleteRecord(record) {
      console.log('TodoList/deleteRecord, record = ', record);
      // const index = this.records.indexOf(record);
      // this.records.splice(index, 1);
      this.$emit('delete-record', record);
    },
    updateRecordFilter(value) {
      this.$emit('update-record-filter', value)
    }
  },
  computed: {
    controlAllClass: function() {
      return {
        control_button01: true,
        bg_white: this.recordFilter === 'all'
      };
    },
    controlOpenClass: function() {
      return {
        control_button01: true,
        bg_white: this.recordFilter === 'open'
      };
    },
    controlCompleteClass: function() {
      return {
        control_button01: true,
        bg_white: this.recordFilter === 'complete'
      };
    },
  }
}
