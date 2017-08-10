export default {
  props: ['record'],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    updateRecord(record, isComplete) {
      record.done = isComplete;
      this.$emit('update-record', record);
    },
    deleteRecord(record) {
      this.$emit('delete-record', record);
    }
  }
}
