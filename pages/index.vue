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


const { data, pending } = await useLazyFetch(() => `http://localhost:8081/event?orderBy=${sort.value.column}&order=${sort.value.direction}`)
</script>

<template>
  <UTable v-model:sort="sort" :loading="pending" :columns="columns" :rows="data" sort-mode="auto" />
      <UButton row="delete" >Löschen</UButton>
  <UploadForm/>
</template>
