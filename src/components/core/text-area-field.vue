<template>
  <div v-bind:class="classObject">
    <div v-if="!isEditing">{{ value }}</div>
    <div v-if="isEditing">
        <textarea v-model="val" @input="emitChange($event.target.value)" v-bind:ref="fieldName" v-bind:placeholder="placeholder" v-bind:rows="rows" v-bind:cols="cols" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'; 

import Field from './field.vue';

@Component({
  name: 'text-area-field',
  props: {
    rows: Number,
    cols: Number
  }
})
export default class TextAreaField extends Field {
  rows: number = this.rows; 
  cols: number = this.cols;
}
</script>
<style></style>
