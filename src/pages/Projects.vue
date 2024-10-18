<template>
  <div class="py-5 px-5">
    <h1 class="subheading grey--text">Project</h1>
    <v-container>
      <v-layout>
        <v-expansion-panels>
          <v-expansion-panel v-for="project in myProjects" :key="project.title">
            <v-expansion-panel-title v-slot="{ expanded }"
              >{{ project.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="font-weight-bold text-grey mt-3 mb-3">
                due project {{ project.due }}
              </div>
              {{ project.content }}
            </v-expansion-panel-text>
          </v-expansion-panel>
          s
        </v-expansion-panels>
      </v-layout>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { doc, getDoc } from "firebase/firestore";
const myProjects = computed(() =>
  projects.value.filter((project) => project.person == "The Net Meraj")
);

const projects = ref([
  {
    title: "Design a new website",
    person: "The Net Ninja",
    due: "1st Jan 2025",
    status: "ongoing",
    content:
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
  },
  {
    title: "Design the video thumbnail",
    person: "The Net Meraj",
    due: "1st March 2025",
    status: "completed",
    content:
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
  },
  {
    title: "Code up to the homepage",
    person: "The Net Naqui",
    due: "1st Feb 2025",
    status: "completed",
    content:
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
  },
  {
    title: "Design and developed landing page",
    person: "The Net Laura",
    due: "15th March 2025",
    status: "overdue",
    content:
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
  },
  {
    title: "Design a new landing page",
    person: "The Net Meraj",
    due: "1st april 2025",
    status: "ongoing",
    content:
      "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
  },
]);
</script>

<style lang="scss" scoped></style>
