<script setup lang="ts">
// Ensure it uses `ref` instead of `reactive`.
import UploadForm from './UploadForm.vue'; 
const sort = ref({
  column: 'name',
  direction: 'desc'
})

const columns = [
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
  label: 'Delete',
  key: 'delete',

},
]

const { data: count } = await useFetch('http://localhost:8081/event')

</script>

<template>
  <UTable :columns="columns" :rows="count" />
      <UButton row="delete" >Löschen</UButton>
  <UploadForm/>
</template>
