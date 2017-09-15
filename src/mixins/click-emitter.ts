import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ClickEmitter extends Vue {
  onClicked(): void {
    this.$emit('clicked', this);
  }
  onEditClicked(): void {
    this.$emit('edit-clicked', this);
  }
  onDeleteClicked(): void {
    this.$emit('delete-clicked', this);
  }
}
