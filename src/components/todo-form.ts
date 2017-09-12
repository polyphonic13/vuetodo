import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component';

import TextField from './core/text-field.vue'
import TextAreaField from './core/text-area-field.vue';

import TodoLabelDetail from './todo-label-detail.vue';

@Component({
    props: {
        record: any,
        isEditing: boolean,
        isNew: boolan
    }
})
export default class TodoForm extends Vue {
  name: 'todo-form',
  props: ['record', 'record.isEditing', 'record.isNew'],
  components: {
    TodoLabelDetail,
    TextField,
    TextAreaField
  },
  computed:  {
    fieldNames: function() {
      return {
        name: 'name',
        description: 'description'
      }
    },
    descriptionRows: function() {
      return 6;
    },
    descriptionCols: function() {
      return 37;
    }
  },
  methods: {
    changeContext(type) {
      switch(type) {
        case 'edit':
        this.$ref.name.focus();
        this.record.isEditing = true;
        break;

        case 'view':
        this.record.isEditing = false;
        break;

        default:
        this.record.isEditing = false;
        break;
      }
    },
    onFieldChange(field, data) {
      console.log('TodoForm/onFieldChange, field = ' + field + ', data = ', data);
      this.record[field] = data;
    },
    labelClicked(label) {
      console.log('TodoForm/labelClicked, label = ', label.record);
    },
    labelDeleteClicked(label) {
      console.log('TodoForm/labelDeleteClicked, _id = ', label.record._id);
      let id = label.record._id;
      let index = -1;
      this.record.labels.forEach(function(l, idx) {
        if(l._id === id) {
          index = idx;
        }
      });
      if(index !== -1) {
        console.log('\tsplicing from index: ' + index);
        this.record.labels.splice(index, 1);
        console.log('\tlabels now = ', this.record.labels);
      }
    }
  }
} as ComponentOptions<TodoForm>