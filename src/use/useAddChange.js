import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useUploadStore } from '@/store/uploadStore'
import { useProductStore } from '@/store/productStore'
import { useRouter } from 'vue-router'

export function useAddChange() {
    const { handleSubmit, isSubmitting } = useForm()

	// handling all values
    const {
        value: name,
        errorMessage: nameError,
        handleBlur: nameBlur,
    } = useField('name', yup.string().trim().required())
    const {
        value: desc,
        errorMessage: descError,
        handleBlur: descBlur,
    } = useField('desc', yup.string().trim().required())
    const {
        value: category,
        errorMessage: categoryError,
        handleBlur: categoryBlur,
    } = useField('category', yup.string().trim().required())
    const {
        value: size,
        errorMessage: sizeError,
        handleBlur: sizeBlur,
    } = useField('size', yup.string().trim())
    const {
        value: price,
        errorMessage: priceError,
        handleBlur: priceBlur,
    } = useField(
        'price',
        yup.number().required().typeError('you must specify a number')
    )
	
    const upload = useUploadStore()
    const create = useProductStore()
    const router = useRouter()
    const onSubmit = handleSubmit(async (form) => {
        try {
            await create.createProduct({
                picture: upload.image,
                ...form,
            })
            router.push({ name: 'AdminProducts' })
        } catch (e) {
            name.value = ''
            category.value = ''
            price.value = ''
            size.value = ''
            desc.value = ''
        }
    })

    return {
        name,
        nameError,
        nameBlur,
        category,
        categoryError,
        categoryBlur,
        price,
        priceError,
        priceBlur,
        desc,
        descError,
        descBlur,
        size,
        sizeError,
        sizeBlur,
        isSubmitting,
        onSubmit,
    }
}
