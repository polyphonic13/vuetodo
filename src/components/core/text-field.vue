<template>
  <div v-bind:class="classObject">
    <div v-if="!isEditing">{{ value }}</div>
    <div v-if="isEditing">
        <input type="text" v-model="val" @input="emitChange($event.target.value)" v-bind:ref="fieldName" v-bind:placeholder="placeholder" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Field from './field.vue';

@Component({
  name: 'text-field'  
})
export default class TextField extends Field {
}
</script>
<style></style>
