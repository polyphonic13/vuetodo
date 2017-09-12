<template>
  <div v-bind:class="classObject">
    <div v-if="!isEditing">{{ value }}</div>
    <div v-if="isEditing">
        <input type="text" v-model="val" @input="emitChange($event.target.value)" v-bind:ref="fieldName" v-bind:placeholder="placeholder" />
    </div>
  </div>
</template>
<script lang="ts">
import Field from './field';

export default {
    name: 'text-field',
    extends: Field
}
</script>
<style></style>
