<template>
    <div class="content-modal">
        <div class="content-modal__title">{{ title }}</div>

        <form class="modal-form">
            <app-input
                v-model.trim="name"
                type="text"
                place="Name"
                required
            ></app-input>
            <MazPhoneNumberInput
                v-model="phone"
                default-country-code="US"
                color="primary"
                :preferred-countries="['RU', 'US', 'KG']"
                @update="results = $event"
                :success="results?.isValid"
            />
            <app-input
                v-model="email"
                type="email"
                place="Email"
                required
            ></app-input>
            <app-button
                class="modal-form__btn"
                text="Send"
                :disabled="!results?.isValid"
            ></app-button>
        </form>
    </div>
</template>

<script setup>
import AppInput from '@/UI/AppInput'
import { defineProps, ref } from 'vue'
import AppButton from '@/UI/AppButton'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'

defineProps({
    title: String,
})

const name = ref('')
const phone = ref()
const results = ref()
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
