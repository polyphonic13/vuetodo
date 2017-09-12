<template>
  
</template>
<script lang="ts">
export default {
    props: ['fieldName', 'value', 'isEditing', 'default', 'className'],
    data: function() {
        return {
            val: null
        }
    },
    computed: {
        placeholder: function() {
            return this.default || '';
        },
        classObject: function() {
            var className = this.className || this.fieldName;
            var obj = {
                field: true
            };
            obj[className] = true;
            return obj;
        }
    },
    mounted: function() {
        this.val = this.value;
    },
    methods: {
        emitChange: function(data) {
            this.$emit('change', data);
        }
    }
}
</script>
<style>

</style>
