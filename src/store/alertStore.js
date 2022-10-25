import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alertErr', {
    state: () => ({
        err: null,
        interval: null,
    }),
    getters: {
        msg: (state) => state.err,
    },
    actions: {
        async setMsg(payload) {
            clearInterval(this.interval)
            this.err = payload
            this.interval = setTimeout(() => {
                this.clearMsg()
            }, 5000)
        },
        clearMsg() {
            this.err = null
        },
    },
})
