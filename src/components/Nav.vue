<template>
  <div>
    <v-snackbar v-model="snackbar" color="success" location="top">
      Awesome !!! you added a new project

      <template v-slot:actions>
        <v-btn color="black" variant="text" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
    <v-toolbar>
      <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="text-grey fontxs">TODOMERAJ</span>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" append-icon="mdi-menu-down"> Menu </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in data.items"
              :key="index"
              route
              :to="item.route"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <span>Sign out</span>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-layout class="d-flex flex-column text-center justify-center">
        <v-col class="mt-7">
          <v-avatar size="100" class="border">
            <v-img alt="Avatar" src="../../3.png" width="80%"></v-img>
          </v-avatar>
          <p class="subheading mt-1">The Meraj Ninja</p>
        </v-col>

        <!-- <v-btn class="mt-5 mb-5" variant="outlined" @click="">Add project</v-btn> -->
        <Popup @projectAdded="snackbar = true" />
      </v-layout>

      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in data.items"
          :key="i"
          :value="item"
          color="primary"
          :to="item.route"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Popup from "./Popup.vue";
const drawer = ref(false);
const snackbar = ref(false);
const data = ref({
  items: [
    { text: "Dashboard", icon: "mdi-developer-board", route: "/dashboard" },
    { text: "My Projects", icon: "mdi-folder-image", route: "/projects" },
    { text: "Team", icon: "mdi-account-multiple", route: "/team" },
  ],
});

const myitems = ref({
  items: [
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me 2" },
  ],
  locations: ["top", "bottom", "start", "end", "center"],
  location: "end",
});
</script>

<style>
.bg {
  background: tomato;
  color: #fff;
}
</style>
