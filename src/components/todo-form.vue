<template>
  <div class="todo-form">
    <!-- VIEW -->
    <!-- <div class="content" v-show="!recordMeta.item.isEditing"> -->
      <div class="content">
      <!-- <div class="name">
        <b>{{ recordMeta.item.name }}</b>
      </div> -->
      <text-field 
        v-bind:fieldName="fieldNames.name"
        v-bind:value="recordMeta.item.name"
        v-bind:isEditing="recordMeta.item.isEditing"
        v-bind:className="fieldNames.name"
        v-on:change="onFieldChange('name', $event)">
      </text-field>
      <!-- <div class="description">
        {{ recordMeta.item.description }}
      </div> -->
      <text-area-field
        v-bind:fieldName="fieldNames.description"
        v-bind:value="recordMeta.item.description"
        v-bind:isEditing="recordMeta.item.isEditing"
        v-bind:className="fieldNames.description"
        v-bind:rows="descriptionRows"
        v-bind:cols="descriptionCols"
        v-on:change="onFieldChange('description', $event)">
      </text-area-field>
      <div class="labels">
        <ul v-show="recordMeta.item.labels.length > 0">
          <li v-for="label of recordMeta.item.labels" :key="label.id" class="label text_sm">
            <todo-label-detail
              v-bind:record="label"
              v-bind:isEditing="recordMeta.item.isEditing"
              v-on:clicked="labelClicked"
              v-on:delete-clicked="labelDeleteClicked">
            </todo-label-detail>
          </li>
        </ul>
      </div>
      <div class="created text_center text_sm">created: {{ recordMeta.item.createdAt | formatDate }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// models
import Todo from '../models/todo';
import TodoLabel from '../models/todo-label';
import RecordMeta from '../models/record-meta';

// components
import TextField from './core/text-field.vue'
import TextAreaField from './core/text-area-field.vue';

import TodoLabelDetail from './todo-label-detail.vue';

@Component({
  name: 'todo-form',
  components: {
    TextField,
    TextAreaField,
    TodoLabelDetail
  }
})
export default class TodoForm extends Vue {
  @Prop()
  recordMeta: RecordMeta<Todo>;

  get fieldNames() {
    return {
      name: 'name',
      description: 'description'
    }
  }
  get descriptionRows(): number {
    return 6;
  }
  get descriptionCols(): number {
    return 37;
  }

  changeContext(type: string): void {
    switch(type) {
      case 'edit':
      // this.$refs.name.focus();
      this.recordMeta.isEditing = true;
      break;

      case 'view':
      this.recordMeta.isEditing = false;
      break;

      default:
      this.recordMeta.isEditing = false;
      break;
    }
  }

  onFieldChange(field, data): void {
    console.log('TodoForm/onFieldChange, field = ' + field + ', data = ', data);
    this.recordMeta.item[field] = data;
  }

  labelClicked(label: RecordMeta<TodoLabel>): void {
    console.log('TodoForm/labelClicked, label = ', label.item);
  }

  labelDeleteClicked(label: RecordMeta<TodoLabel>): void {
    console.log('TodoForm/labelDeleteClicked, _id = ', label.item._id);
    let id = label.item._id;
    let index = -1;
    this.recordMeta.item.labels.forEach(function(l, idx) {
      if(l._id === id) {
        index = idx;
      }
    });
    if(index === -1) {
      return;
    }

    console.log('\tsplicing from index: ' + index);
    this.recordMeta.item.labels.splice(index, 1);
    console.log('\tlabels now = ', this.recordMeta.item.labels);
  
  }
}
</script>
<style>
.todo-form {
  height: 205px;
}
.name, .description, .ordinal, .labels, .extra {
  padding: 5px;
}
.name, .ordinal {
  font-weight: bold;
  font-size: 1em;
}
.name input, .ordinal input, .labels input {
  width: 97%;
  font-size: 0.9em;
}
.description {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 96px;
}
.description-edit {
  font-size: 0.85em;
}
.labels {
  border-bottom: 1px solid #eee;
  height: 27px;
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
  cursor: pointer;
}
.created {
  padding: 5px;
  height: 22px;
}
</style>
