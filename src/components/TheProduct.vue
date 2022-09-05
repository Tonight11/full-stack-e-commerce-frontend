<template>
    <div class="product-item" :class="{
        'product-page': page === 'product'
    }">
        <div class="product-item__column" v-for="item in items" :key="item.id">
            <div class="product-item__item">
                <img class="product-item__img" src="../assets/img/product.jpg" alt="product-item">
                <div class="product-item__info">
                    <div class="product-item__category">
                        {{ item.category }}
                    </div>
                    <div class="product-item__name">
                        {{ item.name }}
                    </div>
                    <div class="product-item__size" v-if="item.size">
                        <div class="product-item__size-name">Size:</div>
                        <div class="product-item__size-items">
                            <div class="product-item__size-item" v-for="(size, idx) in item.size" :key="idx">
                                {{ size }}<span v-if="idx + 1 !== item.size.length">,</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-item__bot">
                        <app-button text="Add to cart"></app-button>
                        <div class="product-item__price">
                            <div class="product-item__price-item">{{ item.price }}</div>
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
import {ref, computed} from "vue";
import {v4 as uuidv4} from 'uuid';
import {useRoute} from "vue-router";

const route = useRoute()
const page = computed(() => route.name)

const items = ref([
    {
        id: uuidv4(),
        category: 'shoes',
        name: 'nike air jordan',
        size: ['40', '41', '42'],
        price: '32'
    },
    {
        id: uuidv4(),
        category: 'shoes',
        name: 'nike air jordan',
        size: ['40', '41', '42'],
        price: '32'
    },
    {
        id: uuidv4(),
        category: 'shoes',
        name: 'nike air jordan',
        size: ['40', '41', '42'],
        price: '32'
    },
    {
        id: uuidv4(),
        category: 'shoes',
        name: 'nike air jordan',
        size: ['40', '41', '42'],
        price: '32'
    },
    {
        id: uuidv4(),
        category: 'clothing',
        name: 'glass',
        price: '32'
    },
    {
        id: uuidv4(),
        category: 'shoe231s',
        name: 'niee jordan',
        size: ['40', '41', '42'],
        price: '31'
    },
    {
        id: uuidv4(),
        category: 'axas',
        name: 'bag',
        size: ['xl', 'xll'],
        price: '22'
    },
])

</script>

<style lang="scss">

.product-page {
    margin: 0 -10px;
    padding-right: 15px;

    @media screen and (max-width: 900px){
        justify-content: center;
        padding: 10px;
    }

    .product-item__column {
        flex: 0 1 33.333%;
        padding: 0 10px;

        @media screen and (max-width: 1170px) {
            flex: 0 1 50%;
        }
        @media screen and (max-width: 900px){
            flex: 0 1 100%;
            max-width: 400px;

        }
    }

    .product-item__img {
        height: auto !important;
    }


}

.product-item {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;
    row-gap: 40px;

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
        }
    }

    &__item {
        background: #FFFFFF;
        box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.15);
        transition: all .3s linear;
        display: flex;
        flex-direction: column;
        height: 100%;

        &:hover {
            box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.23);
        }
    }

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 1100px) {
        }
        @media screen and (max-width: 827px) {
            height: 350px;
        }
        @media screen and (max-width: 547px) {
            height: 400px;
        }
    }

    &__info {
        padding: 8px;
        color: #000000;
    }

    &__category {
        font-size: 14px;

        color: #4F4F4F;
        margin-bottom: 5px;
    }

    &__name {
        font-size: 20px;
        margin-bottom: 10px;
    }

    &__size {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        line-height: 17px;
        color: #4F4F4F;
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