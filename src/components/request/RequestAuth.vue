<template>
    <form
        action="#"
        class="auth__form-item"
        @submit.prevent="authAdmin.onSubmit"
    >
        <div class="auth__control">
            <label for="email">Email</label>
            <input
                type="text"
                :class="{
                    invalid: authAdmin.emailError.value,
                }"
                id="email"
                v-model="authAdmin.email.value"
                @blur="authAdmin.emailBlur"
            />
            <small v-if="authAdmin.emailError.value">{{
                authAdmin.emailError.value
            }}</small>
        </div>
        <div class="auth__control">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                :class="{
                    invalid: authAdmin.passwordError.value,
                }"
                v-model="authAdmin.password.value"
                @blur="authAdmin.passwordBlur"
            />
            <small v-if="authAdmin.passwordError.value">{{
                authAdmin.passwordError.value
            }}</small>
        </div>
        <button class="btn primary" :disabled="!authAdmin.isSubmitting">
            Войти
        </button>
    </form>
</template>

<script setup>
import { useAuthAdmin } from '@/use/useAuth'
import { defineEmits } from 'vue'

const emit = defineEmits(['sign'])

const submit = (data) => {
    emit('sign', data)
}

const authAdmin = useAuthAdmin(submit)
</script>

<style lang="scss">
html.dark {
    .auth__form {
        background-color: #252525;
        box-shadow: 0px 0px 25px 5px #1c1919;
    }
}

.auth__form-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.auth__control {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.auth-back {
    margin-bottom: 10px;
    text-transform: lowercase;
    text-decoration: underline;
}

.auth {
    min-height: 100vh;
    display: flex;
    align-items: center;

    &__form {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        padding: 30px;
        background-color: white;
        box-shadow: 0px 0px 15px 0.5px black;

        h1 {
            margin-bottom: 50px;
        }
    }
}
</style>
