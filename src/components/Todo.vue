<template>
  <div class="ui centered card">
    <div class='content'>
      <div class='header'>
        {{ record.title }}
      </div>
      <div class='description'>
        {{ record.description }}
      </div>
      <div class='meta'>
        {{ record.project }}
      </div>
      <div class='extra content'>
        <span class='right floated edit icon' v-on:click='showForm'>
          <i class='edit icon'></i>
        </span>
        <span class='right floated delete icon' v-on:click='deleteRecord(record)'>
          <i class='delete icon'></i>
        </span>
      </div>
    </div>
    <div class='content' v-show='isEditing'>
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="record.title" >
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="record.project" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show='!isEditing &&record.done' disabled  v-on:click='updateRecord(record, false)'>
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-show='!isEditing && !record.done' v-on:click='updateRecord(record, true)'>
        Pending
    </div>
  </div>
</template>
<script type='text/javascript'>
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
</script>
<style>
.card {
  text-align: left;
}
</style>
