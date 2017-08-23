import TodoForm from '../todo-form/todo-form.vue';

export default {
  props: ['record'],
  components: {
    TodoForm
  },
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
    updateCompleted(record, isComplete) {
      record.isCompleted = isComplete;
      this.$emit('update-record', record);
    },
    deleteRecord(record) {
      this.$emit('delete-record', record);
    }
  }
}
