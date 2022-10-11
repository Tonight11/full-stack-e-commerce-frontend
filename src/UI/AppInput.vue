<template>
    <input :type="type" :placeholder="place" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

defineProps(['type', 'place', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss">

input {
    border: none;
    border-bottom: 1px solid black;
    padding: 5px;
    outline: none;

    &::placeholder {
        font-weight: 300;
        font-size: 16px;


        color: #000000;
    }
}

</style>