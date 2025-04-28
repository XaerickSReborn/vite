<script setup>
import { ref, onMounted } from 'vue'
import StatesListComponent from "./universities/components/states-list/states-list.component.vue"
import { NewsApiService } from './universities/services/news-api.service.js'
import appToolbarComponent from './public/pages/app-toolbar.component.vue'
const universities = ref([])

onMounted(async () => {
  try {
    const newsService = new NewsApiService()
    const response = await newsService.getUniversities()
    universities.value = response.data
    console.log('Universidades cargadas:', universities.value)
  } catch (error) {
    console.error('Error al cargar universidades:', error)
  }
})
</script>

<template>
  <header>
    <appToolbarComponent/>
  </header>
  <main>
    <h1>Universidades</h1>
    <StatesListComponent :universities="universities" />
  </main>
</template>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #42b983;
}
</style>
