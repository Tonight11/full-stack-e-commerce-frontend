import {defineStore} from 'pinia'

export const useFilterStore = defineStore('filter', {
    state: () => ({
        search: '',
        range: [0,100]
    }),
    getters: {
        result: state => state.search,
        money: state => state.range,
    },
    actions: {

    },
})
