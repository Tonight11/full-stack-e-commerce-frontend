import { defineStore } from 'pinia'

export const useHoverStore = defineStore('hover', {
    state: () => ({
        // which one of the circle is hovered so we can show the info content
        hover: 0,
    }),
    getters: {
        num: (state) => state.hover,
    },
    actions: {},
})
