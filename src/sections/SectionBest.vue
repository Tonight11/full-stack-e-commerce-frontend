<template>
    <div class="best">
        <app-page>
            <div class="best__inner">
                <app-title
                    title="Best product of the week"
                    text="Fashion that we provide. there are several stunning outfit that most likely by our client and you can buy one of them"
                ></app-title>
                <div class="best__grid grid">
                    <request-grid v-for="(item, index) in gridItems" :key="item.id" :item="[item, index]"></request-grid>

                </div>
            </div>
        </app-page>
    </div>
</template>

<script setup>

import { v4 as uuidv4 } from 'uuid';
import AppPage from "@/UI/AppPage"
import AppTitle from "@/UI/AppTitle"
import RequestGrid from "@/components/request/RequestGrid"


const gridItems = [
    {
        id: uuidv4(),
        name: 'coat',
        text: 'dwa dwaio awdin adwni awdnoaw ndawawd dawnl',
        img: '../../assets/img/best/1.jpg'

    },
    {
        id: uuidv4(),
        name: 'best',
        text: 'dwa dwaio awdin l',
        img: '../../assets/img/best/2.jpg'

    },
    {
        id: uuidv4(),
        name: 'shoes',
        text: 'dwa dwaio 123',
        img: '../../assets/img/best/3.jpg'

    },
    {
        id: uuidv4(),
        name: 'leaf',
        text: 'dwa',
        img: '../../assets/img/best/4.jpg'

    },
]
</script>

<style lang="scss">


.best {
    padding-top: 140px;
}

.grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
    gap: 25px;

    //@media screen and (min-width: 695px) {
    //    grid-template-rows: 400px 400px;
    //}
    //
    //@media screen and (min-width: 1040px) {
    //    grid-template-rows: 350px 80px 380px;
    //}

    &__item {
        position: relative;

        @media screen and (max-width: 695px) {
            height: 350px;
        }
        
        @media screen and (min-width: 1040px) {
            &:nth-child(4n + 1) {
                grid-column: span 2;
                grid-row: span 2;
            }
            &:nth-child(4n + 2) {
                height: 400px;
            }
            &:nth-child(4n + 3) {
                grid-column: 3/4;
                grid-row: span 2;
            }
            &:nth-child(4n + 4) {
                grid-column: span 2;
                height: 350px;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__info {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 15px;
        opacity: 0;
        visibility: hidden;
    }
    &__name {
        font-weight: 600;
        font-size: 24px;
        color: #FFFFFF;
        margin-bottom: 5px;
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }
}
</style>