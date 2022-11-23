import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
    state: () => ({
        search: '',
        range: JSON.parse(localStorage.getItem('rangeProduct')),
    }),
    getters: {
        result: (state) => state.search,
        money: (state) => state.range,
    },
    actions: {},
})
