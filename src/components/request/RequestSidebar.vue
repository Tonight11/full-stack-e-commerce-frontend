<template>
    <div class="sidebar__form">
        <app-input v-model="searchValue" type="text" place="Search"></app-input>
        <the-slider v-model="range"></the-slider>
    </div>
</template>

<script setup>
import AppInput from '@/UI/AppInput'
import { ref, watch } from 'vue'
import TheSlider from '@/components/TheSlider'
import { useFilterStore } from '@/store/filterStore'
const filter = useFilterStore()

// initial filter status
const searchValue = ref('')
const range = ref([1, 100])

// changing a SEARCH value in a store
watch(
    () => searchValue.value,
    (value) => {
        filter.search = value
    }
)
// changing a RANGE value in a store
watch(
    () => [...range.value],
    (value) => {
        filter.range = value
    }
)
</script>

<style>
.sidebar__form {
    display: flex;
    flex-direction: column;
    gap: 75px;
}
</style>
