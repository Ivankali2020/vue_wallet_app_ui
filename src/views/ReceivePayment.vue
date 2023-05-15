<script setup>
import QrcodeVue from 'qrcode.vue';
</script>

<template>
  <v-container class=" mt-15  pb-10 ">
    <v-card elevation="2" style="border-radius:10px" class="mx-5 px-5 py-3 mt-10 text-center ">
        <v-alert-title class="mb-5 text-overline text-center font-weight-black">Receive Qr Code</v-alert-title>
        <qrcode-vue :value="value" size="200" level="H"></qrcode-vue>
        <div class="text-end mt-10 ">
            <router-link to="/" class="text-decoration-none ">
                <v-btn color="red-lighten-2 ">
                    Home
                </v-btn>
            </router-link>
        </div>
    </v-card>
  </v-container>
</template>
