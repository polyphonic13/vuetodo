export default {
  props: ['record', 'isEditing', 'isNew'],
  methods: {
    changeContext(type) {
      switch(type) {
        case 'edit':
        this.$ref.title.focus();
        this.isEditing = true;
        break;

        case 'view':
        this.isEditing = false;
        break;

        default:
        this.isEditing = false;
        break;
      }
    },
    updateRecord(record) {
      this.$emit('update-record', record);
    }
  }
}
