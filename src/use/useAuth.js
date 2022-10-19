import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

export function useAuthAdmin(submit) {
    const { handleSubmit, isSubmitting } = useForm()

    const {
        value: email,
        errorMessage: emailError,
        handleBlur: emailBlur,
    } = useField('email', yup.string().trim().required().email())
    const {
        value: password,
        errorMessage: passwordError,
        handleBlur: passwordBlur,
    } = useField('password', yup.string().trim().required().min(6))

    const onSubmit = handleSubmit(async (form) => {
        try {
            await submit(form)
            email.value = ''
            password.value = ''
        } catch (e) {
            email.value = ''
            password.value = ''
        }
    })

    return {
        email,
        emailError,
        emailBlur,
        password,
        passwordError,
        passwordBlur,
        onSubmit,
        isSubmitting,
    }
}
