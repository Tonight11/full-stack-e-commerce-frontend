<template>
    <div class="sidebar__form">
        <app-input v-model="search" place="Search"></app-input>
        <the-slider v-model="range"></the-slider>
    </div>
</template>

<script setup>
import AppInput from "@/components/AppInput";
import {ref} from "vue";
import TheSlider from "@/components/TheSlider"

const search = ref('')
const range = ref([1, 100])
</script>

<style>


.sidebar__form {
    display: flex;
    flex-direction: column;
    gap: 75px;
}
</style>