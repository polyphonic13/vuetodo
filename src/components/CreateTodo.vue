<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="showForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='title' defaultValue="" autofocus />
          </div>
          <div class='field'>
            <label>Description</label>
            <input v-model="descriptionText" type='text' ref='description' defaultValue="">
          </div>
          <div class='field'>
            <label>Project</label>
            <input v-model="projectText" type='text' ref='project' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm">
              Create
            </button>
            <button class='ui basic red button' v-on:click="hideForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/javascript'>
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

</script>
