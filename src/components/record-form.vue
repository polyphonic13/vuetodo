<template>
  <div class="record-form">
    <!-- VIEW -->
    <div class="content" v-show="!record.isEditing">
      <div class="name">
        <b>{{ record.name }}</b>
      </div>
      <div class="description">
        {{ record.description }}
      </div>
      <div class="labels">
        <ul v-show="record.labels.length > 0">
          <li v-for="label of record.labels" class="label text_sm"><b>{{ label }}</b></li>
        </ul>
      </div>
      <div class="created text_center text_sm">created: {{ record.createdAt | formatDate }}</div>
    </div>
    <!-- EDIT -->
    <div class="content" v-show="record.isEditing">
      <div class="ui form">
        <div v-if="!record.isNew">
          <input type="hidden" ref="_id" v-model="record._id" />
        </div>
        <div class="name">
          <input type="text" ref="name" v-model="record.name" placeholder="name">
        </div>
        <div class="description">
          <textarea rows="7" cols="37" type="textarea" ref="description" v-model="record.description" placeholder="description"></textarea>
        </div>
        <div class="labels">
          <input type='text' ref='labels' v-model="record.labelsString" placeholder="labels" />
        </div>
        <div class="created text_center text_sm"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'record-form',
  props: ['record', 'record.isEditing', 'record.isNew'],
  mounted: function() {
    this.formatLabelsForEdit();
  },
  methods: {
    changeContext(type) {
      switch(type) {
        case 'edit':
        this.$ref.name.focus();
        this.record.isEditing = true;
        break;

        case 'view':
        this.record.isEditing = false;
        break;

        default:
        this.record.isEditing = false;
        break;
      }
    },
    formatLabelsForEdit() {
      this.record.labelsString = this.record.labels.join(', ');
    },
    formatLabelsForSave() {
      this.record.labels = this.record.labelsString.split(', ');
    },
    updateRecord(record) {
      this.formatLabelsForSave();
      console.log('RecordForm/updateRecord, labels now = ', this.record.labels);
      this.$emit('update-record', record);
    }
  }
}
</script>
<style>
.record-form {
  height: 205px;
}
.name, .description, .ordinal, .labels, .extra {
  padding: 5px;
}


.description {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 96px;
}

.labels {
  border-bottom: 1px solid #eee;

}

.labels ul {
  -webkit-padding-start: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
.label {
  background: #123456;
  color: white;
  padding: 3px 5px;
  margin: 2px;
  display: inline-block;
}

.name, .ordinal {
  font-size: 1em;
}

.name input, .ordinal input, .labels input {
  width: 97%;
  font-size: 0.9em;
}

.labels {
  height: 27px;
}

.created {
  padding: 5px;
  height: 22px;
}
</style>
