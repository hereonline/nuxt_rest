<script setup lang="ts">
import { ref } from 'vue'


const name = ref('')
const description = ref('')
const date = ref(new Date())

const onSubmit = async () => {
    try {
        const response = await fetch('http://localhost:8081/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                description: description.value,
                date: date.value
             
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <UForm class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
            <UInput v-model="name" />
        </UFormGroup>
        <UFormGroup label="Description" name="description">
            <UInput v-model="description" />
        </UFormGroup>
        <UFormGroup label="Date" name="date">
            <UInput type="date" v-model="date" />
        </UFormGroup>
        <UButton type="submit">
            Submit
        </UButton>
    </UForm>
</template>