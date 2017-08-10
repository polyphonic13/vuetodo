export default {
  props: ['record'],
  data() {
    return {
      titleText: '',
      descriptionText: '',
      projectText: '',
      isCreating: false
    };
  },
  methods: {
    showForm() {
      console.log('CreateTodo/showForm, title = ', this.$refs.title);
      this.$refs.title.focus();
      this.isCreating = true;
    },
    hideForm() {
      this.isCreating = false;
    },
    clearForm() {
      this.titleText = '';
      this.descriptionText = '';
      this.projectText = '';
    },
    sendForm() {
      const title = this.titleText;
      const description = this.descriptionText;
      const project = this.projectText;

      if(title.length > 0 && description.length > 0 && project.length > 0) {
        const record = {
          id: Date.now() + (Math.random() * 999),
           title: this.titleText,
           description: this.descriptionText,
           project: this.projectText,
           done: false
        };
        this.$emit('add-record', record);
      }
      this.clearForm();
      this.isCreating = false;
    }
  }
}
