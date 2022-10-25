<template>
    <form
        action="#"
        class="check"
        v-if="cartForm.cartStore.products?.length"
        @submit.prevent="cartForm.orderHandler"
    >
        <div class="check__title">Place an order</div>
        <app-input
            place="Your name"
            type="text"
            v-model="cartForm.mainInfo.value.name"
            required
        ></app-input>
        <MazPhoneNumberInput
            v-model="cartForm.phoneNumber.value"
            default-country-code="US"
            color="primary"
            :preferred-countries="['RU', 'US', 'KG']"
            @update="cartForm.results.value = $event"
            :success="cartForm.results.value?.isValid"
        />
        <app-input
            place="Email"
            type="email"
            v-model="cartForm.mainInfo.value.email"
            required
        ></app-input>
        <app-input
            place="Address"
            type="text"
            v-model="cartForm.mainInfo.value.address"
            required
        ></app-input>
        <div class="pay-control">
            <div class="pay-control__text">Choose a payment method</div>
            <MazRadioButtons
                v-model="cartForm.selected.value"
                :options="cartForm.options.value"
            />
        </div>
        <app-button text="Order"></app-button>
    </form>
</template>

<script setup>
import AppInput from '@/UI/AppInput'
import AppButton from '@/UI/AppButton'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import MazRadioButtons from 'maz-ui/components/MazRadioButtons'

import { useCartForm } from '@/use/useCartForm'

const cartForm = useCartForm()
</script>

<style lang="scss" scoped></style>
