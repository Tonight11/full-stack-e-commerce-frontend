<template>
    <div class="cart" v-if="cartItems?.length">
        <div class="cart__row">
            <div class="cart__item" v-for="item in cartItems" :key="item._id">
                <div class="cart__info">
                    <div class="cart__name">{{ item.name }}</div>
                    <div class="cart__count">
                        <div class="cart__count-item">Кол-во</div>
                        <MazInputNumber
                            v-model="item.count"
                            label="Enter number"
                            :min="0"
                            :max="10"
                            :step="1"
                            size="md"
                            color="secondary"
                        />
                    </div>
                    <div class="cart__price">
                        <div class="cart__price-item">
                            {{ item.price * item.count }}
                        </div>
                        <span>$</span>
                    </div>
                </div>
                <img class="cart__img" :src="server + item.picture" alt="" />
            </div>
        </div>
        <div class="cart-total">
            <div class="cart-total__text">Total</div>
            <div class="cart__price">
                <div class="cart__price-item">{{ total }}</div>
                <span>$</span>
            </div>
        </div>
    </div>
    <div class="cart" v-else>Корзина пуста</div>
</template>

<script setup>
import { computed, onUpdated } from 'vue'
import MazInputNumber from 'maz-ui/components/MazInputNumber'
import { useCartStore } from '@/store/cartStore'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.products)
const server = process.env.VUE_APP_SERVER

const total = computed(() => {
    return cartItems.value.reduce((acc, item) => {
        return acc + item.count * +item.price
    }, 0)
})

onUpdated(() => {
    let deletedItem = cartItems.value.find((item) => item.count === 0)
    if (deletedItem !== undefined) {
        cartStore.deleteFromCart(deletedItem)
        deletedItem = undefined
    }
})
</script>

<style lang="scss">
.cart {
    flex: 0 1 50%;
    padding: 50px 50px 25px 25px;
    -webkit-box-shadow: inset 10px 10px 15px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 10px 10px 15px -3px rgba(0, 0, 0, 0.75);
    box-shadow: inset 10px 10px 15px -3px rgba(0, 0, 0, 0.75);
    min-height: 500px;

    display: flex;
    flex-direction: column;

    &__row {
        max-height: 400px;
        overflow-y: scroll;
    }

    &__item {
        display: flex;
        justify-content: space-between;
        gap: 25px;
        margin-bottom: 25px;
    }

    &__info {
        display: flex;
        flex-direction: column;
    }

    &__name {
        margin-bottom: 10px;
        font-size: 22px;
    }

    &__count {
        max-width: 250px;
    }

    &__count-item {
        margin-bottom: 5px;
    }

    &__img {
        max-width: 200px;
        width: 100%;
        height: 150px;
        object-fit: cover;
        pointer-events: none;
    }

    &__price {
        display: flex;
        margin-top: auto;
    }
}

.cart-total {
    display: flex;
    justify-content: space-between;
    margin-top: auto;

    &__text {
        font-size: 32px;
    }
}
</style>
