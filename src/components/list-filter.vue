<template>
  <div class="list-filter">
    <div v-bind:class="getControlClass('open')" v-on:click="updateRecordFilter('open')">open</b></div>
    <div v-bind:class="getControlClass('completed')" v-on:click="updateRecordFilter('completed')">completed</b></div>
    <div v-bind:class="getControlClass('all')" v-on:click="updateRecordFilter('all')">all</b></div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'list-filter',
  props: ['recordFilter'],
  methods: {
    updateRecordFilter(value) {
      this.$emit('update-record-filter', value)
    },
    getControlClass: function(type) {
      return {
        control_button01: true,
        bg_white: this.recordFilter === type
      };
    }
  }
}
</script>
<style>
.list-filter div {
  text-align: center;
}
</style>
