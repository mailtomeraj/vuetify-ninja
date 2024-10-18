<template>
    <div class="py-5 px-5">
        <h1 class="subheading grey--text">Team</h1>
        <v-container  class="my-5">
        <v-row>
         <v-col cols="12"
         sm="4"  v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3">
                <v-responsive class="pt-4">
                
                    <v-avatar
                    size="100"
                    class="border"
                    contain
                  
                  >
              <v-img
                  alt="Avatar"
                :src="person.avatar"
              contain
                width="80%"
                   ></v-img>
                 
                    
                  </v-avatar>
                </v-responsive>
                <v-card-text>
                    <div class="subheading">
                       {{ person.name }}
                    </div>
                    <div class="text-grey">{{person.role}}</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color="grey" prepend-icon="mdi-message">
                     message
                    </v-btn>
                </v-card-actions>
            </v-card>
         </v-col>
        </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const team = ref([
  {
    name: "The Net Ninja",
    role: "web developer",
    avatar:"/1.jpg"
      },
  {
    name: "Meraj Li ",
    role: "UI developer",
       avatar:"/2.png"
  },
  {
    name: "Ahmad ",
    role: "Frontend developer",
       avatar:"/3.png"
  },
  {
    name: "Naqui ",
    role: "Oracle developer",
       avatar:"/4.png"
  },
  {
    name: "Shung Lee",
    role: "Ui/UX developer",
       avatar:"/5.png"
  },
  {
    name: "Zaheer",
    role: "Ui/UX developer",
       avatar:"/6.png"
  },
  {
    name: "David",
    role: "Ui/UX developer",
       avatar:"/7.png"
  },
  {
    name: "Travis",
    role: "Ui/UX developer",
       avatar:"/8.png"
  }
]);



</script>

<style>

</style>