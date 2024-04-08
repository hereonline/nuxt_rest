<script setup lang="ts">

import UploadForm from './UploadForm.vue'; 
import Stripe from './stripe.vue'; 

const sort = ref({
  column: 'name',
  direction: 'desc',
})

const columns = [
{
  label: 'Id',
  key: 'id',

},
{
  label: 'Name',
  key: 'name',

}, {
  label: 'Description',
  key: 'description',

},
{
  label: 'Date',
  key: 'date',

},
{
  key: 'actions'
}]


const { data: count } = await useFetch('http://localhost:8081/event')
if (!count.value) {
  count.value = []; 
}

const deleteRow = async (id: number) => {
  await fetch(`http://localhost:8081/event/${id}`, {
      method: 'DELETE',
        });

    }


</script>

<template>
    <UTable :columns="columns" :rows="count" >
      <template #actions-data="{ row }">   
        <UButton @click="deleteRow(row.id)" color="green" variant="ghost" icon="i-heroicons-trash-20-solid" />
      </template>
    </UTable>
  <UploadForm/>
  <Stripe/>
</template>

