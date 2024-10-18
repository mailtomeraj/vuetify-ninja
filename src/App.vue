<template>
  <v-app class="bg-app">
 
    <v-main >
      <NavBar/>
      <router-view />
  
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/Nav.vue'


</script>
<style>
.v-main{
  background: #f8f8f8;
}
</style>
