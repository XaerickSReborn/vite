<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import { ref } from "vue";
const number= ref(0);

const addOne=()=>{
  number.value++;
}


let myCondition=true;


const myId="pata";




const myCondition2=true;

const movies=["Matrix","Star Wars","The Godfather"]
</script>

<template>
  <HeaderComponent />
  <h1 v-mdoel:id="myId">New Project</h1>
  <input type="text" v-model="number" />
  <button @click="addOne">{{ number }}</button>

  <h1 v-bind:class="{highlight:myCondition,red:true}">Hello World</h1>
  



  <br>
  <br>
  <h1> Directiva v-if</h1>
  <h2 v-if="myCondition2">La condicion se cumple</h2>
  <h2 v-else-if="myCondition2">condicion 2</h2> 
  <h2 v-else>condicion 3</h2>
  <br>
  <br>
  <h1> Directiva v-for</h1>
  <div>
    <p v-for="movie in movies" :key="movie">
      {{ movie  }}

    </p>


  </div>
</template>

<style scoped>
.highlight {
  color: red;
  background-color: aqua;
}

</style>
