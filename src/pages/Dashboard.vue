<template>
  <div class="py-5 px-5">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container>
      <v-layout row class="mb-3">
        <v-btn
          small
          flat
          variant="plain"
          color="grey"
          prepend-icon="mdi-folder"
          @click="sortBy('title')"
        >
          <span class="caption text-lowercase"> By Project Name</span>
          <v-tooltip activator="parent" location="top">Sort by Project Name</v-tooltip>
        </v-btn>
        <v-btn
          small
          flat
          variant="plain"
          color="grey"
          prepend-icon="mdi-account"
          @click="sortBy('person')"
        >
          <span class="caption text-lowercase"> By person</span>
          <v-tooltip activator="parent" location="top">Sort by person</v-tooltip>
        </v-btn>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap class="bg-white" :class="`pa-3 project ${project.status}`">
          <v-col xs12 md6>
            <div class="caption text-grey">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs6 sm4 md2>
            <div class="caption text-grey">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs6 sm4 md2>
            <div class="caption text-grey">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs2 sm4 md2 class="d-flex justify-center">
            <v-chip small class="text-white right" :class="`${project.status}`">{{
              project.status
            }}</v-chip>
          </v-col>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { db } from "@/fb";
import { ref } from "vue";

const projects = ref([]);
import { onMounted } from "vue";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
function sortBy(prop) {
  projects.value.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
}

onMounted(async () => {
  const colRef = collection(db, "projects");
  const docsSnap = await getDocs(colRef);
  const changes = docsSnap.docChanges();
  changes.forEach((change) => {
    if (change.type === "added") {
      projects.value.push({ ...change.doc.data(), id: change.doc.id });
    }
    console.log(change.data());
  });
  // db.collection("projects").onSnapshot((res) => {
  //   const changes = res.docChanges();

  //   changes.forEach((change) => {
  //     if (change.type === "added") {
  //       projects.value.push({ ...change.doc.data(), id: change.doc.id });
  //     }
  //   });
  // });
});

// const projects = ref([
//   {
//     title: "Design a new website",
//     person: "The Net Ninja",
//     due: "1st Jan 2025",
//     status: "ongoing",
//     content:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//   },
//   {
//     title: "Design the video thumbnail",
//     person: "The Net Meraj",
//     due: "1st March 2025",
//     status: "completed",
//     content:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//   },
//   {
//     title: "Code up to the homepage",
//     person: "The Net Naqui",
//     due: "1st Feb 2025",
//     status: "completed",
//     content:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//   },
//   {
//     title: "Design and developed landing page",
//     person: "The Net Laura",
//     due: "15th March 2025",
//     status: "overdue",
//     content:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//   },
//   {
//     title: "Design a new landing page",
//     person: "The Net Lahsun",
//     due: "1st april 2025",
//     status: "ongoing",
//     content:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//   },
// ]);
</script>

<style>
.bg-white {
  background: #fff;
}
.caption {
  font-size: 15px;
}
.project.completed {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.completed {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
