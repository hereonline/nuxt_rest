<script setup lang="ts">

import UploadForm from './UploadForm.vue'; 
import Stripe from './stripe.vue'; 

const events = ref([]);

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



const { data, execute, refresh } = await useFetch('http://localhost:8081/event');

onMounted(async () => {
  try {
    await execute();
    events.value = data.value;
    console.log('Geladene Daten:', events.value);
  } catch (error) {
    console.error('Fehler beim Laden der Daten:', error);
  }
});


//const { data, refresh } = await useFetch('http://localhost:8081/event')


//const { data, execute } = useFetch('http://localhost:8081/event');



const deleteRow = async (id: number) => {
  await fetch(`http://localhost:8081/event/${id}`, {
      method: 'DELETE',
        });

    }


</script>

<template>

    <UTable :columns="columns" :rows="events" >
      <template #actions-data="{ row }">   
        <UButton @click="deleteRow(row.id)" color="green" variant="ghost" icon="i-heroicons-trash-20-solid" />
      </template>
    </UTable>
   <UButton @click="refresh">Refresh</UButton>
  <UploadForm/>
  <Stripe/>
 
</template>

