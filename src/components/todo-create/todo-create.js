import TodoForm from '../todo-form/todo-form.vue';

export default {
  props: ['record'],
  data() {
    return {
      isCreating: false
    };
  },
  components: {
    TodoForm
  },
  methods: {
    showForm() {
      this.isCreating = true;
    },
    hideForm() {
      this.isCreating = false;
    },
    reset() {
      this.record.name = '';
      this.record.description = '';
      this.record.labels = '';
    },
    sendForm() {
      const name = this.record.name;
      const description = this.record.description;
      const labels = this.record.labels;
      console.log('CreateTodo/sendForm\n\tname = ' + name + '\n\tdescription = ' + description + '\n\tlabels = ' + labels);
      if(name.length > 0 && description.length > 0) {
        const record = {
          id: Date.now() + Math.floor(Math.random() * 999),
          name: name,
          description: description,
          labels: labels,
          isCompleted: false
        };
        this.$emit('add-record', record);
      }
      this.reset();
      this.isCreating = false;
    }
  }
}
