<template>
    <div class="main">
        <app-page>
            <breadcrumb-back></breadcrumb-back>
            <app-loader v-if="!product"></app-loader>
            <div class="single-product" v-else-if="product">
                <div class="single-product__content">
                    <img
                        class="single-product__img"
                        :src="server + product.picture"
                        alt="product"
                    />
                    <div class="single-product__info">
                        <div class="single-product__title">
                            {{ product.name }}
                        </div>
                        <div class="single-product__cat">
                            {{ product.category }}
                        </div>
                        <div class="single-product__text">
                            {{ product.desc }}
                        </div>
                        <div
                            class="product-item__size-items"
                            v-if="product.size?.length"
                        >
                            <div class="product-item__size-name">Size:</div>
                            <div
                                class="product-item__size-item"
                                v-for="(size, idx) in product.size"
                                :key="idx"
                            >
                                {{ size
                                }}<span v-if="idx + 1 !== product.size.length"
                                    >,</span
                                >
                            </div>
                        </div>
                        <div class="product-item__bot">
                            <div class="product-item__buttons">
                                <app-button
                                    :disable="cartProducts?.inCart"
                                    @click="addCart(product)"
                                >
                                    <p v-if="!cartProducts?.inCart">
                                        Add to cart
                                    </p>
                                    <div class="cover" v-else>
                                        <div class="check"></div>
                                    </div>
                                </app-button>

                                <app-button
                                    v-if="cartProducts?.inCart"
                                    text="Delete from cart"
                                    @click="deleteCart(cartProducts)"
                                ></app-button>
                            </div>
                            <div class="product-item__price">
                                <div class="product-item__price-item">
                                    {{ product.price }}
                                </div>
                                <span>$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>Записи с таким {{ id }} id нет</div>
        </app-page>
    </div>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import AppButton from '@/UI/AppButton'
import AppLoader from '@/UI/AppLoader.vue'
import BreadcrumbBack from '@/components/BreadcrumbBack'
import { computed, defineProps, onMounted, ref } from 'vue'
import { useProductStore } from '@/store/productStore'
import { useCartStore } from '@/store/cartStore'

const props = defineProps(['id'])

const productStore = useProductStore()
const cartStore = useCartStore()

const cartProducts = computed(() =>
    cartStore.products.find((item) => item._id === props.id)
)
const product = ref()
const server = process.env.VUE_APP_SERVER

const deleteCart = (product) => {
    cartStore.deleteFromCart(product)
}
const addCart = (product) => {
    cartStore.addToCart(product)
}

onMounted(async () => {
    try {
        product.value = await productStore.getOneProduct(props.id)
    } catch (e) {
        console.log(e)
    }
})
</script>

<style lang="scss" scoped>
.cover {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 58%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

    > .check {
        width: 100%;
        height: 100%;
        transform: translate(-100%, -73%) rotate(-45deg);
        position: absolute;
        left: 50%;
        top: 50%;

        &::before,
        &::after {
            content: '';
            display: block;
            background-color: black;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 10px;
        }

        &::before {
            width: 3px;
            height: 50%;
        }

        &::after {
            width: 100%;
            height: 3px;
        }
    }
}

.product-item__size-items {
    margin-bottom: 10px;
}

.product-item__buttons {
    display: flex;
    gap: 20px;
}

.product-item__bot {
    margin-top: auto;
}

.single-product {
    &::before {
        content: '';
        display: block;
        position: fixed;
        width: 300%;
        height: 100%;
        top: 50%;
        left: 50%;
        border-radius: 100%;
        transform: translateX(-50%) skewY(-8deg);
        background-color: yellow;
        z-index: -1;
        animation: wave 8s ease-in-out infinite alternate;
    }

    padding: 50px 0;

    &__title {
        font-size: 32px;
        font-weight: bold;
    }

    &__cat {
        margin-bottom: 10px;
    }

    &__text {
        margin-bottom: 10px;
        font-weight: 500;
        color: #666;
    }

    &__content {
        display: flex;
        gap: 25px;
    }

    &__img {
        max-width: 420px;
        min-height: 500px;
        object-fit: cover;
    }

    &__info {
        display: flex;
        flex-direction: column;
        flex: 0 1 50%;
        width: 50%;
    }

    &__size-items {
        margin-bottom: 10px;
    }
}

@keyframes wave {
    0% {
        transform: translateX(-50%) skew(0deg, -8deg);
    }

    100% {
        transform: translateX(-20%) skew(10deg, -4deg);
    }
}
</style>
