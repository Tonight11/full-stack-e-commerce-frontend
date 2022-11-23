<template>
    <Slider :value="modelValue" @update="update" :max="max" />
</template>

<script setup>
import Slider from '@vueform/slider'
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const max = Math.max(...props.modelValue)
// emit to RequestSlider(not only, we can get it everywhere, where we import it) so we can work with them
const update = (value) => {
    emit('update:modelValue', value)
}
</script>

<style src="@vueform/slider/themes/default.css"></style>
