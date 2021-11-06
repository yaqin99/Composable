<script setup lang="ts">
import useincrement from './composable/increment';
import useFetch from './composable/useFetch' ; 
import {onMounted} from 'vue' ; 
const {count , hitung} = useincrement();
const { filter,  result , fetchData } = useFetch('https://api.unira.ac.id/v1/mhs') ; 

onMounted(() => {
    fetchData();
});
</script>
<template>
<div class="container">
    <button type="button " @click="count++">Count</button>
    <p>{{count}}</p>
    <input type="text" v-model="filter" @keyup="fetchData()">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama</th>
      <th scope="col">Nim</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,i) in result " :key="data.id">
      <th scope="row">{{i + 1}}</th>
      <td>{{data.attributes.nama}}</td>
      <td>{{data.id}}</td>

    </tr>
    
  </tbody>
</table>
</div>
   
</template>