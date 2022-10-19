<template>
    <main class="main">
        <div class="cart-page">
            <app-page>
                <div class="cart-page__inner">
                    <form
                        action="#"
                        class="check"
                        v-if="cartStore.products?.length"
                    >
                        <div class="check__title">Place an order</div>
                        <app-input place="Your name" type="text"></app-input>
                        <MazPhoneNumberInput
                            v-model="phoneNumber"
                            default-country-code="US"
                            color="primary"
                            :preferred-countries="['RU', 'US', 'KG']"
                            @update="results = $event"
                            :success="results?.isValid"
                        />
                        <app-input place="Email" type="email"></app-input>
                        <app-input place="Address" type="text"></app-input>

                        <div class="pay-control">
                            <div class="pay-control__text">
                                Choose a payment method
                            </div>
                            <MazRadioButtons
                                v-model="selected"
                                :options="options"
                            />
                        </div>
                        <app-button text="Order"></app-button>
                    </form>
                    <request-cart></request-cart>
                </div>
            </app-page>
        </div>
    </main>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import AppInput from '@/UI/AppInput'
import AppButton from '@/UI/AppButton'
import RequestCart from '@/components/request/RequestCart'
import { ref } from 'vue'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import MazRadioButtons from 'maz-ui/components/MazRadioButtons'
import { useCartStore } from '@/store/cartStore'

const cartStore = useCartStore()
const phoneNumber = ref()
const results = ref()
const selected = ref('')

const options = ref([
    {
        value: '1',
        label: 'By bank card',
    },
    {
        value: '2',
        label: 'money transfer',
    },
    {
        value: '3',
        label: 'Cash on hand',
    },
])
</script>

<style lang="scss">
.pay-control__text {
    margin-bottom: 10px;
}

.cart-page {
    padding: 50px 0;
    &__inner {
        display: flex;
        gap: 100px;
        justify-content: space-between;
    }
}

.check {
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    &__title {
        font-size: 32px;
    }
}

html.dark {
    .maz-border-primary {
        border-color: #fff500 !important;
    }

    .m-select-list-item.--is-selected.--primary[data-v-9a37f2ae] {
        background-color: #fff500;
    }

    .m-input.--is-focused .m-input-wrapper {
        border-color: #fff500 !important;
    }

    .--is-selected {
        border: 1px solid #fff500 !important;
        color: white !important;

        &::before {
            background-color: #fff500;
        }
    }
}

.maz-border-primary {
    border-color: #bd00ff !important;
}

.m-input.--is-focused .m-input-wrapper {
    border-color: #bd00ff !important;
}

.m-select-list-item.--is-selected.--primary[data-v-9a37f2ae] {
    background-color: #bd00ff;
    color: black !important;
}

.m-radio-buttons__items {
    position: relative;
    background-color: transparent !important;
    padding-left: 30px !important;
    border: 1px solid transparent !important;

    &::before {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        top: 49%;
        left: 7px;
        transform: translateY(-50%);
        background-color: var(--maz-color-bg-light);
    }
}

.--is-selected {
    border: 1px solid #bd00ff !important;
    color: black !important;

    &::before {
        background-color: #bd00ff;
    }
}
</style>
