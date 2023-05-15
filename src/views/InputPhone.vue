<template>

  <div class="">
    <v-card elevation="2" style="border-radius:10px" class="mx-5 px-5 py-3 mt-10">

      <h4 class="mb-2">{{ this.$route.params.phone }}</h4>

      <input type="text" placeholder="amount" class="form">



    </v-card>
  </div>

</template>

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form:focus{
  text-overline: none;
}
</style>