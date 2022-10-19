<template>
    <input
        :type="type"
        :placeholder="place"
        :value="modelValue"
        :required="req"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['type', 'place', 'modelValue', 'req'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss">
input {
    border: none;
    border-bottom: 1px solid black;
    padding: 5px;
    outline: none;
    font-size: 16px;
    background-color: transparent;

    @media screen and (min-width: 1800px) {
        font-size: 24px;
    }

    &:focus {
        border-color: #bd00ff;
    }

    &::placeholder {
        font-weight: 300;
        font-size: 16px;
        color: #000000;

        @media screen and (min-width: 1800px) {
            font-size: 24px;
        }
    }
}
</style>
