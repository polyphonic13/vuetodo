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
      this.record.title = '';
      this.record.description = '';
      this.record.project = '';
    },
    sendForm() {
      const title = this.record.title;
      const description = this.record.description;
      const project = this.record.project;
      console.log('CreateTodo/sendForm\n\ttitle = ' + title + '\n\tdescription = ' + description + '\n\tproject = ' + project);
      if(title.length > 0 && description.length > 0 && project.length > 0) {
        const record = {
          id: Date.now() + Math.floor(Math.random() * 999),
          title: title,
          description: description,
          project: project,
          isCompleted: false
        };
        this.$emit('add-record', record);
      }
      this.reset();
      this.isCreating = false;
    }
  }
}
