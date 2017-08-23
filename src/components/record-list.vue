<template>
  <div>
    <div class="view-holder">
      <record-detail
        v-for="record in records"
        v-bind:record="record"
        :key="record.id"
        v-on:create-record="createRecord"
        v-on:cancel-create="cancelCreate"
        v-on:update-record="updateRecord"
        v-on:delete-record="deleteRecord">
      </record-detail>
    </div>
  </div>
</template>
<script type="text/javascript">
import RecordDetail from './record-detail.vue';

export default {
  name: 'record-list',
  props: ['records', 'totalRecords'],
  components: {
    RecordDetail
  },
  methods: {
    createRecord(record) {
      console.log('RecordList/createRecord, record = ', record);
      this.$emit('create-record', record);
    },
    cancelCreate() {
      console.log('RecordList/cancelCreate');
      this.$emit('cancel-create');
    },
    updateRecord(record) {
      console.log('RecordList/updateRecord, record = ', record);
      this.$emit('update-record', record);
    },
    deleteRecord(record) {
      console.log('RecordList/deleteRecord, record = ', record);
      this.$emit('delete-record', record);
    }
  }
}
</script>
<style></style>
