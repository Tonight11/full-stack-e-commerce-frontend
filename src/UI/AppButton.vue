<template>
    <button class="btn" :class="{
        'big': big,
        'small': small,
    }">{{ text }}
    </button>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
    'text': String,
    'big': Boolean,
    'small': Boolean
})

</script>

<style lang="scss">


.btn {
    color: white;

    background-color: #BD00FF;

    padding: 0.6em 2.8em;

    &.big {
        font-size: 22px;
        font-weight: 600;
        padding: 0.3em 2.8em;
    }

    &.small {
        font-size: 20px;
        padding: 0.4em 2.8em;
    }
}

</style>