import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
    state: () => ({
        load: false,
    }),
    getters: {
        loaded: (state) => state.load,
    },
})
