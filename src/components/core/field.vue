<template>
  
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        fieldName: String,
        value: String,
        isEditing: Boolean,
        defaultValue: String,
        className: String
    }
})
export default class Field extends Vue {
    val: any;
    fieldName: string;
    value: string;
    isEditing: boolean;
    defaultValue: string;
    className: string; 

    get placeholder(): string {
        return this.defaultValue || '';
    }

    get classObject(): any {
        let className = this.className || this.fieldName;
        let obj = {
            field: true
        };
        obj[className] = true;
        return obj;
    }

    mounted(): void {
        this.val = this.value;
    }

    emitChange(data): void {
        this.$emit('change', data);
    }
}
</script>
<style>

</style>
