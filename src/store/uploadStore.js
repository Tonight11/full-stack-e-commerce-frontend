import { defineStore } from 'pinia'

export const useUploadStore = defineStore('upload', {
    state: () => ({
        upload: null,
    }),
    getters: {
        image: (state) => state.upload,
    },
    actions: {
        showPreview(event) {
            if (event.target.files.length > 0) {
                let src = URL.createObjectURL(event.target.files[0])
                this.upload = event.target.files[0]

                let preview = document.getElementById('file-ip-1-preview')
                preview.src = src
                preview.style.display = 'block'
            }
        },
        deleteImage() {
            this.upload = null
            let preview = document.getElementById('file-ip-1-preview')
            console.log(preview)
            preview.src = ''
            preview.style.display = 'none'
            console.log(preview)
        },
    },
})
