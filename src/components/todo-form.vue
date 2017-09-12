<template>
  <div class="todo-form">
    <!-- VIEW -->
    <!-- <div class="content" v-show="!record.isEditing"> -->
      <div class="content">
      <!-- <div class="name">
        <b>{{ record.name }}</b>
      </div> -->
      <text-field 
        v-bind:fieldName="fieldNames.name"
        v-bind:value="record.name"
        v-bind:isEditing="record.isEditing"
        v-bind:className="fieldNames.name"
        v-on:change="onFieldChange('name', $event)">
      </text-field>
      <!-- <div class="description">
        {{ record.description }}
      </div> -->
      <text-area-field
        v-bind:fieldName="fieldNames.description"
        v-bind:value="record.description"
        v-bind:isEditing="record.isEditing"
        v-bind:className="fieldNames.description"
        v-bind:rows="descriptionRows"
        v-bind:cols="descriptionCols"
        v-on:change="onFieldChange('description', $event)">
      </text-area-field>
      <div class="labels">
        <ul v-show="record.labels.length > 0">
          <li v-for="label of record.labels" :key="label.id" class="label text_sm">
            <todo-label-detail
              v-bind:record="label"
              v-bind:isEditing="record.isEditing"
              v-on:clicked="labelClicked"
              v-on:delete-clicked="labelDeleteClicked">
            </todo-label-detail>
          </li>
        </ul>
      </div>
      <div class="created text_center text_sm">created: {{ record.createdAt | formatDate }}</div>
    </div>
    <!-- EDIT
    <div class="content" v-show="record.isEditing">
      <div class="ui form">
        <div v-if="!record.isNew">
          <input type="hidden" ref="_id" v-model="record._id" />
        </div>
        <div class="name">
          <input type="text" ref="name" v-model="record.name" placeholder="name">
        </div>
        <div class="description">
          <textarea rows="5" cols="32" type="textarea" ref="description" v-model="record.description" placeholder="description" class="description-edit"></textarea>
        </div>
        <div class="labels">
          <ul v-show="record.labels.length > 0">
            <li v-for="label of record.labels" :key="label.id" class="label text_sm">
              <todo-label-detail
                v-bind:record="label"
                v-bind:isEditing="true"
                v-on:clicked="labelClicked"
                v-on:delete-clicked="labelDeleteClicked">
              </todo-label-detail>
            </li>
          </ul>
        </div>
        <div class="created text_center text_sm"></div>
      </div>
    </div>
     -->
  </div>
</template>
<script lang="ts" src="./todo-form.ts"></script>
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
