<template>
    <form action="" class="admin-add" @submit.prevent="addChange.onSubmit">
        <input
            type="text"
            :class="{
                invalid: addChange.nameError.value,
            }"
            placeholder="Name of product"
            v-model="addChange.name.value"
            @blur="addChange.nameBlur"
        />
        <small v-if="addChange.nameError.value">{{
            addChange.nameError.value
        }}</small>
        <input
            type="text"
            :class="{
                invalid: addChange.categoryError.value,
            }"
            placeholder="Category"
            v-model="addChange.category.value"
            @blur="addChange.categoryBlur"
        />
        <small v-if="addChange.categoryError.value">{{
            addChange.categoryError.value
        }}</small>
        <textarea
            class="form-control"
            :class="{
                invalid: addChange.descError.value,
            }"
            name="message"
            id="message"
            cols="30"
            rows="7"
            v-model="addChange.desc.value"
            @blur="addChange.descBlur"
            placeholder="Description"
        ></textarea>
        <small v-if="addChange.descError.value">{{
            addChange.descError.value
        }}</small>
        <input
            type="text"
            :class="{
                invalid: addChange.sizeError.value,
            }"
            v-model="addChange.size.value"
            @blur="addChange.sizeBlur"
            placeholder="Size of product with comma"
        />
        <small v-if="addChange.sizeError.value">{{
            addChange.sizeError.value
        }}</small>
        <input
            type="text"
            :class="{
                invalid: addChange.priceError.value,
            }"
            v-model="addChange.price.value"
            @blur="addChange.priceBlur"
            placeholder="Price"
        />
        <small v-if="addChange.priceError.value">{{
            addChange.priceError.value
        }}</small>
        <div class="center">
            <div class="form-input">
                <label for="file-ip-1">Upload Image</label>
                <input
                    type="file"
                    id="file-ip-1"
                    accept="image/*"
                    @change="upload.showPreview($event)"
                    required
                />

                <div class="preview">
                    <div
                        class="delete-img"
                        v-if="upload.image"
                        @click="upload.deleteImage"
                    >
                        X
                    </div>
                    <img id="file-ip-1-preview" />
                </div>
            </div>
        </div>
        <small v-if="!upload.image">Upload img</small>

        <app-button text="Add" :disabled="!addChange.isSubmitting"></app-button>
    </form>
</template>

<script setup>
import AppButton from '@/UI/AppButton.vue'
import { useAddChange } from '@/use/useAddChange'
import { useUploadStore } from '@/store/uploadStore'
import { onBeforeRouteLeave } from 'vue-router'

const upload = useUploadStore()
const addChange = useAddChange()

onBeforeRouteLeave(() => {
	// delete img file when we live this component
    upload.deleteImage()
})
</script>

<style lang="scss">
@import '@/assets/scss/adminAdd.scss';
</style>
