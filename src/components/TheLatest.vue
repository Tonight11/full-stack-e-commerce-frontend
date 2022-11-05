<template>
    <div class="product-item">
        <div
            class="product-item__column"
            v-for="(item, idx) in product.value"
            :key="item.id"
        >
            <div class="product-item__item" v-if="idx + 1 <= total">
                <div class="product-item__img">
                    <img :src="item.picture.url" alt="product-item" />
                </div>
                <div class="product-item__info">
                    <div class="product-item__category">
                        {{ item.category }}
                    </div>
                    <div class="product-item__name">
                        {{ item.name }}
                    </div>
                    <div class="product-item__size" v-if="item.size?.length">
                        <div class="product-item__size-name">Size:</div>
                        <div class="product-item__size-items">
                            <div
                                class="product-item__size-item"
                                v-for="(size, idx) in item.size"
                                :key="idx"
                            >
                                {{ size
                                }}<span v-if="idx + 1 !== item.size.length"
                                    >,</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="product-item__bot">
                        <router-link
                            custom
                            v-slot="{ navigate }"
                            :to="{
                                name: 'productItem',
                                params: { id: item._id },
                            }"
                        >
                            <app-button
                                text="View"
                                @click="navigate"
                            ></app-button>
                        </router-link>
                        <div class="product-item__price">
                            <div class="product-item__price-item">
                                {{ item.price }}
                            </div>
                            <span>$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppButton from '@/UI/AppButton'
import { useProductItem } from '@/use/useProduct'
import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 768px)')

const productUse = useProductItem()

const product = computed(() => productUse.allItems)
const total = computed(() => {
    if (isLargeScreen.value) {
        return 8
    } else {
        return 4
    }
})
</script>

<style lang="scss">
.product-item {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;
    row-gap: 40px;
    flex: 1;

    &__column {
        flex: 0 1 25%;
        padding: 0 20px;

        @media screen and (max-width: 1100px) {
            flex: 0 1 33.333%;
        }
        @media screen and (max-width: 827px) {
            flex: 0 1 50%;
        }
        @media screen and (max-width: 547px) {
            flex: 0 1 100%;
            max-width: 400px;
            margin: 0 auto;
        }
    }

    &__item {
        background: #ffffff;
        box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        height: 100%;

        &:hover {
            box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.23);
        }
    }

    &__img {
        min-height: 320px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            max-height: 320px;
        }

        @media screen and (max-width: 547px) {
            height: 400px;
        }
        @media screen and (max-width: 400px) {
            height: 280px;
        }
    }

    &__info {
        padding: 8px;
        color: #000000;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__category {
        font-size: 14px;

        color: #4f4f4f;
        margin-bottom: 5px;
    }

    &__name {
        font-size: 20px;
        margin-bottom: 10px;
        @media screen and (max-width: 827px) {
            font-size: 18px;
        }
    }

    &__size {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        line-height: 17px;
        color: #4f4f4f;
        margin-bottom: 10px;
    }

    &__size-items {
        display: flex;
        align-items: center;
    }

    &__bot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
    }

    &__price {
        font-weight: 600;
        font-size: 18px;

        &-item {
            display: inline-block;
        }
    }
}
</style>
