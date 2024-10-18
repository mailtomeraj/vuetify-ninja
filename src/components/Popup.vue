<template>
  <div class="text-center pa-4 mt-3 mb-2">
    <v-btn style="background: lightseagreen; color: white" @click="dialog = true">
      ADD NEW PROJECT
    </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="600" min-width="600" class="pa-4">
        <v-card-title>Add a New Project</v-card-title>

        <v-card-text>
          <v-form class="px-3" @submit.prevent="submit" ref="myForm">
            <v-text-field
              label="Title"
              v-model="title"
              :rules="rules.titleRules"
              prepend-inner-icon="mdi-folder"
              required
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              :rules="rules.contentRules"
              prepend-inner-icon="mdi-pencil"
            ></v-textarea>

            <v-date-input
              v-model="due"
              label="due date"
              max-width="368"
              prepend-icon=""
              prepend-inner-icon="$calendar"
              :rules="rules.dueRules"
            ></v-date-input>

            <v-spacer></v-spacer>

            <v-card-actions>
              <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

              <v-btn
                :loading="loading"
                text="Save"
                type="submit"
                variant="tonal"
                class="bg"
              ></v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
        <!-- @click="dialog = false" -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { db } from "@/fb";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";
// import { Database } from 'firebase/database';
const dialog = ref(false);
const loading = ref(false);
const title = ref("");
const content = ref("");
const due = ref(null);
const myForm = ref(null);
const emit = defineEmits(["projectAdded", "submit"]);
const rules = ref({
  titleRules: [
    (value) => !!value || "You must enter a title. ",
    (value) => (value && value.length >= 3) || "You must have 3+ characters",
    // value => {
    //   if (value) return true
    //   return 'You must enter a first name.'
    // },
  ],
  contentRules: [
    (value) => !!value || "You must enter a content. ",
    (value) => (value && value.length >= 3) || "You must have 3+ characters",
  ],
  dueRules: [
    (value) => !!value || "You must enter a due date. ",
    (value) => (value && value.length >= 3) || "You must have 3+ characters",
  ],
});

// const submit = () => {
//  if(myForm.value?.validate().then(({valid: isValid}) => {
//   console.log(title.value, content.value, due.value)
//  }))
// }

const submit = async () => {
  //  const project = {
  //         title : title,
  //         content : content,
  //         due : due,
  //         person : 'The Meraj Ninja',
  //         status : 'ongoing'
  //  }

  //  db.collection('vuetify-app').add(project).then(()=> {
  //   console.log('added to db')
  //  })
  // Define the collection and document data

  // console.log(title.value, content.value, due.value)
  loading.value = true;
  const newDoc = await addDoc(collection(db, "projects"), {
    title: title.value,
    content: content.value,
    due: due.value,
    person: "The Meraj Ninja",
    status: "ongoing",
  });

  loading.value = false;
  console.log("Added");
  console.log("Document written with ID: ", newDoc.id);

  dialog.value = false;

  emit("projectAdded");
};
</script>

<style lang="scss" scoped>
.bg {
  background: lightseagreen;
}
</style>
