<template>
  <div class="ui basic content center aligned segment">
    <button class="right floated edit icon " v-on:click="addRecord" v-show="!isCreating">ADD</button>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'record-create',
  data() {
    return {
      isCreating: false
    };
  },
  methods: {
    addRecord() {
      this.$emit('add-record');
    }
  }
}
</script>
<style>
</style>
