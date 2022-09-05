<template>
    <Slider :value="modelValue" @update="update" />
</template>

<script setup>
import Slider from '@vueform/slider'
import {defineProps, defineEmits} from "vue";

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const update = (value) => {
    emit('update:modelValue', value)
}
</script>

<style src="@vueform/slider/themes/default.css">

</style>