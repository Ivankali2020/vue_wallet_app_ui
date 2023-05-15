<template>
  <v-snackbar
      class="mb-5"
      color="white"
      :timeout="timeout"
      v-model="storeTask.isOpenSnack"
  >
    {{  message }}

    <template v-slot:actions>
      <v-btn
          color="pink"
          variant="text"
          @click="storeTask.isOpenSnack = !storeTask.isOpenSnack"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>

import {ref} from "vue";
import {useTaskStore} from "../stores/task";

const text = defineProps({
  message : String,
})
const storeTask = useTaskStore();
const timeout = 1000;

</script>

<style scoped>

</style>