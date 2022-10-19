<template>
    <Transition name="alert-anim">
        <div :class="['notification', error.type]" v-if="error?.type">
            <div class="notification__exit" @click="alert.clearMsg">X</div>
            <div class="notification__status">{{ status[error.type] }}</div>
            <div class="notification__text">{{ error.value }}</div>
        </div>
    </Transition>
</template>

<script setup>
import { useAlertStore } from '@/store/alertStore'
import { computed } from 'vue'

const alert = useAlertStore()
const status = {
    success: 'Success!',
    error: 'Error',
    war: 'Warning',
}

const error = computed(() => alert.msg)
</script>

<style lang="scss" scoped>
.alert-anim-enter-active,
.alert-anim-leave-active {
    transition: all 0.5s ease;
}

.alert-anim-enter-from,
.alert-anim-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.notification {
    position: fixed;
    z-index: 1000;
    min-width: 250px;
    min-height: 80px;
    bottom: 20px;
    right: 20px;
    color: #2f2f2f;
    background-color: white;
    box-shadow: 0 0 10px #2f2f2f;
    padding: 10px 20px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
    }

    &.success {
        &::before {
            background-color: rgb(0, 207, 0);
        }
        .notification__status {
            color: rgb(0, 207, 0);
        }
    }

    &.error {
        &::before {
            background-color: rgb(255, 55, 55);
        }
        .notification__status {
            color: rgb(255, 55, 55);
        }
    }

    &.war {
        &::before {
            background-color: rgb(255, 190, 70);
        }
        .notification__status {
            color: rgb(255, 190, 70);
        }
    }

    &__exit {
        position: absolute;
        cursor: pointer;
        top: 2px;
        right: 5px;
    }

    &__status {
        font-size: 18px;
    }
    &__text {
        font-size: 14px;
    }
}
</style>
