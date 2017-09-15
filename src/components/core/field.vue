<template>
  
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Field extends Vue {
    @Prop()
    val: any;

    @Prop()
    fieldName: string;
    
    @Prop()
    value: any;

    @Prop()
    defaultValue: any;
    
    @Prop()
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
