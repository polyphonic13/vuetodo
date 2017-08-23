<template>
  <div class="ui basic content center aligned segment">
    <button class="right floated edit icon " v-on:click="showForm" v-show="!isCreating">ADD</button>
    <div class="lightbox" v-show="isCreating"></div>
    <div class="ui centered above_it_all card" v-show="isCreating">
      <record-form
        v-bind:record="record"
        v-bind:isEditing="true"
        v-bind:isNew="true">
      </record-form>
      <div class="extra content" v-bind:class="[{ completed: record.isCompleted }]">
        <button class="right floated icon " v-on:click="sendForm">CREATE</button>
        <button class="right floated icon " v-on:click="hideForm">CANCEL</button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import RecordForm from './record-form.vue';

export default {
  name: 'record-create',
  props: ['record'],
  data() {
    return {
      isCreating: false
    };
  },
  components: {
    RecordForm
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
</script>
<style>
</style>
