<script setup lang="ts">

const state = reactive({
  name: undefined,
  description: undefined,
  date: undefined
})


const onSubmit = async () => {
    try {
        const response = await fetch('http://localhost:8081/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <UForm class="space-y-4" @submit="onSubmit" :state="state">
        <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" />
        </UFormGroup>
        <UFormGroup label="Description" name="description">
            <UInput v-model="state.description" />
        </UFormGroup>
        <UFormGroup label="Date" name="date">
            <UInput type="date" v-model="state.date" />
        </UFormGroup>
        <UButton type="submit">
            Submit
        </UButton>
    </UForm>
</template>