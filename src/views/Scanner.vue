<template>
  <div class="mt-10">
    <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>

    <v-btn @click="aa()">GOOG</v-btn>
  </div>
</template>
<script setup>
import { QrcodeStream } from 'vue3-qrcode-reader';
import router from "../router";

function onDecode(url) {

  console.log(url);
  router.push({ name: 'InputPhone', params: { phone: '09777126169' } })
}

function aa(){
  console.log('adf');
  router.push({ path :'input/phone/09777126169' })
}

async function onInit (promise) {
  // show loading indicator

  try {
    const { capabilities } = await promise

    // successfully initialized
  } catch (error) {
    if (error.name === 'NotAllowedError') {
      console.log(error);// user denied camera access permisson
    } else if (error.name === 'NotFoundError') {
      console.log(error);// no suitable camera device installed
    } else if (error.name === 'NotSupportedError') {
      console.log(error);// page is not served over HTTPS (or localhost)
    } else if (error.name === 'NotReadableError') {
      console.log(error);// maybe camera is already in use
    } else if (error.name === 'OverconstrainedError') {
      console.log(error);// did you requested the front camera although there is none?
    } else if (error.name === 'StreamApiNotSupportedError') {
      console.log(error);// browser seems to be lacking features
    }
  } finally {
    // hide loading indicator
  }
}

</script>

<style scoped>

</style>
