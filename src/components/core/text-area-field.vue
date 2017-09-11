<template>
  <div v-bind:class="classObject">
    <div v-if="!isEditing">{{ value }}</div>
    <div v-if="isEditing">
        <textarea v-model="val" @input="emitChange($event.target.value)" v-bind:ref="fieldName" v-bind:placeholder="placeholder" v-bind:rows="rows" v-bind:cols="cols" />
    </div>
  </div>
</template>
<script>
import Field from './field';

export default {
    name: 'text-area-field',
    props: [ 'rows', 'cols' ],
    extends: Field
}
</script>
<style></style>
