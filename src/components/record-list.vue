<template>
  <div>
    <div class="view-holder">
      <record-detail
        v-for="record in records"
        v-bind:record="record"
        :key="record.id"
        v-on:update-record="updateRecord"
        v-on:delete-record="deleteRecord">
      </record-detail>
    </div>
    <p>
      <div v-bind:class="controlAllClass" v-on:click="updateRecordFilter('all')">all</b></div>
      <div v-bind:class="controlOpenClass" v-on:click="updateRecordFilter('open')">open</b></div>
      <div v-bind:class="controlCompleteClass" v-on:click="updateRecordFilter('complete')">completed</b></div>
    </p>
  </div>
</template>
<script type="text/javascript">
import RecordDetail from './record-detail.vue';

export default {
  name: 'record-list',
  props: ['records', 'totalRecords', 'recordFilter'],
  components: {
    RecordDetail
  },
  methods: {
    updateRecord(record) {
      console.log('TodoList/updateRecord, record = ', record);
      // const index = this.records.indexOf(record);
      // this.records[index] = record;
      // this.records.splice(index, 1, record);
      this.$emit('update-record', record);
    },
    deleteRecord(record) {
      console.log('TodoList/deleteRecord, record = ', record);
      // const index = this.records.indexOf(record);
      // this.records.splice(index, 1);
      this.$emit('delete-record', record);
    },
    updateRecordFilter(value) {
      this.$emit('update-record-filter', value)
    }
  },
  computed: {
    controlAllClass: function() {
      return {
        control_button01: true,
        bg_white: this.recordFilter === 'all'
      };
    },
    controlOpenClass: function() {
      return {
        control_button01: true,
        bg_white: this.recordFilter === 'open'
      };
    },
    controlCompleteClass: function() {
      return {
        control_button01: true,
        bg_white: this.recordFilter === 'complete'
      };
    },
  }
}
</script>
<style></style>
