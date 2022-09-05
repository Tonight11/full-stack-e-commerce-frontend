<template>
    <div class="grid__item">
        <img src='../../assets/img/best/1.jpg' alt="best">
        <div class="grid__info">
            <div class="grid__name">{{item[0].name}}</div>
            <div class="grid__text">{{item[0].text}}</div>
            <app-button small text="BUY"></app-button>
        </div>
    </div>
</template>

<script setup>
import AppButton from "@/UI/AppButton"
import {defineProps} from "vue";

defineProps(['item'])
</script>

<style>

</style>