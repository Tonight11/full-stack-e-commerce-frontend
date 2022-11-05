<template>
    <form action="" class="admin-add" @submit.prevent="update">
        <app-input
            type="text"
            :place="'Name of product'"
            v-model="name"
            :req="true"
        ></app-input>
        <app-input
            type="text"
            :place="item?.category || 'Category'"
            v-model="category"
            :req="true"
        ></app-input>
        <textarea
            class="form-control"
            name="message"
            id="message"
            cols="30"
            rows="7"
            v-model="desc"
            :placeholder="item?.desc || 'Description'"
        ></textarea>
        <app-input
            type="text"
            :place="item?.size || 'Size of product with comma'"
            v-model="size"
        ></app-input>
        <app-input
            type="number"
            :place="item?.price || 'Price'"
            v-model="price"
            :req="true"
        ></app-input>
        <div class="center">
            <div class="form-input">
                <label for="file-ip-1">Upload Image</label>
                <input
                    type="file"
                    id="file-ip-1"
                    accept="image/*"
                    @change="upload.showPreview($event)"
                />
                <div class="preview">
                    <div
                        class="delete-img"
                        v-if="upload.image"
                        @click="upload.deleteImage"
                    >
                        X
                    </div>
                    <img id="file-ip-1-preview" :src="item?.picture?.url" />
                </div>
            </div>
        </div>
        <app-button :text="btnText"></app-button>
    </form>
</template>

<script setup>
import AppInput from '@/UI/AppInput'
import AppButton from '@/UI/AppButton'
import { defineProps, ref } from 'vue'
import { useUploadStore } from '@/store/uploadStore'
import { useProductStore } from '@/store/productStore'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
const router = useRouter()

const upload = useUploadStore()
const productStore = useProductStore()
const props = defineProps({
    item: {
        type: Object,
        required: false,
    },
    btnText: {
        type: String,
    },
})

const uploadImg = computed(() => upload.image)
const picture = ref()
const name = ref(props.item?.name || '')
const category = ref(props.item?.category || '')
const desc = ref(props.item?.desc || '')
const size = ref(props.item?.size || '')
const price = ref(props.item?.price || '')

const update = async () => {
    picture.value = uploadImg.value ? uploadImg.value : props.item?.picture
    await productStore.updateProduct({
        _id: props.item?._id,
        name: name.value,
        category: category.value,
        desc: desc.value,
        size: size.value,
        price: price.value,
        picture: picture.value,
    })
    router.push({ name: 'AdminProducts' })
}
</script>

<style lang="scss">
@import '@/assets/scss/adminAdd.scss';

.form-input img {
    width: 100%;
    display: block;
    margin-bottom: 30px;
}
</style>
