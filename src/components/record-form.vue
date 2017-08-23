<template>
  <div class="record-form">
    <div class="content" v-show="!record.isEditing">
      <div class="name">
        <b>{{ record.name }}</b>
      </div>
      <div class="description">
        {{ record.description }}
      </div>
      <div class="labels">
        <ul>
          <li v-for="label of record.labels" class="label text_sm"><b>{{ label }}</b></li>
        </ul>
      </div>
      <div class="created text_center text_sm">created: {{ record.createdAt | formatDate }}</div>
    </div>
    <div class="content" v-show="record.isEditing">
      <div class="ui form">
        <div v-if="!record.isNew">
          <input type="hidden" ref="_id" v-model="record._id" />
        </div>
        <div class="name">
          <input type="text" ref="name" v-model="record.name" placeholder="name">
        </div>
        <div class="description">
          <textarea rows="7" cols="37" type="textarea"  ref="description" v-model="record.description" placeholder="description"></textarea>
        </div>
        <div class="labels" v-show="!record.isNew">
          <span>labels: </span><b>{{ record.labels }}</b>
        </div>
        <div class="labels" v-show="record.isNew">
          <input type='text' ref='labels' v-model="record.labels" placeholder="labels" />
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
    updateRecord(record) {
      console.log('RecordForm/updateRecord');
      this.$emit('update-record', record);
    }
  }
}
</script>
<style>
.record-form {
  height: 205px;
}

.name {
  font-size: 1em;
}

.name input, .labels input {
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
