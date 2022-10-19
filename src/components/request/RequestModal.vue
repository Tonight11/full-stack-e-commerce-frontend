<template>
    <div class="content-modal">
        <div class="content-modal__title">{{ title }}</div>

        <form class="modal-form">
            <app-input v-model.trim="name" type="text" place="Name"></app-input>
            <app-input
                v-model.number="phone"
                type="tel"
                place="Phone number"
            ></app-input>
            <app-input v-model="email" type="email" place="Email"></app-input>
            <app-button class="modal-form__btn" text="Send"></app-button>
        </form>
    </div>
</template>

<script setup>
import AppInput from '@/UI/AppInput'
import { defineProps, ref } from 'vue'
import AppButton from '@/UI/AppButton'

defineProps({
    title: String,
})

const name = ref('')
const phone = ref()
const email = ref('')
</script>

<style lang="scss">
.content-modal {
    &__title {
        font-weight: 600;
        font-size: 32px;
        text-align: center;
        margin-bottom: 30px;
    }
}

.modal-form {
    display: flex;
    flex-direction: column;
    gap: 35px;

    &__btn {
        @media screen and (min-width: 1800px) {
            font-size: 24px;
        }
    }
}
</style>
