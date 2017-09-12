export default {
  methods: {
    onClicked() {
      this.$emit('clicked', this);
    },
    onEditClicked() {
      this.$emit('edit-clicked', this);
    },
    onDeleteClicked() {
      this.$emit('delete-clicked', this);
    }
  }
}
