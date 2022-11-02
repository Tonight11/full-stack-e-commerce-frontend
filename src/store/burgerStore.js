import { defineStore } from 'pinia'

export const useBurgerStore = defineStore('burger', {
    state: () => ({
        isActive: false,
    }),
    actions: {
        toggle() {
            this.isActive = !this.isActive
            document.body.classList.toggle('lock')
        },
    },
})
