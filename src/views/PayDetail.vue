<template>
  <div class="">
    <h5 class="text-center">Transition Details</h5>
    <div class="my-5 text-center ">
      <img width="100" src="https://cdn3d.iconscout.com/3d/premium/thumb/online-payment-successful-6929796-5686167.png" alt="">
    </div>
    <div class="bg-grey-lighten-5 pa-3 text-center mt-4 " style="border-radius: 20px">
      <h3 class="text-overline">- $ 200</h3>
      <small class="text-caption text-green-lighten-1">Successful Transition</small>
    </div>
    <div class="mt-5">
      <div class="bg-grey-lighten-5 pa-3  mt-4 px-5 " style="border-radius: 20px">
        <h5 class="text-blue-accent-1 mb-8 mt-4 ">Transition Infomation</h5>
          <div class="mb-10 d-flex justify-space-between align-center ">
            <span class="text-grey text-caption ">Service</span>
            <span class="text-blue-accent-1 font-weight-bold text-caption">Transfer</span>
          </div>
          <div class="mb-10 d-flex justify-space-between align-center  ">
            <span class="text-grey  text-caption">Funds</span>
            <span class="text-blue-accent-1 font-weight-bold text-caption ">Gpay</span>
          </div>
          <div class="mb-10 d-flex justify-space-between align-center ">
            <span class="text-grey  text-caption">Phone Number</span>
            <span class="text-blue-accent-1 font-weight-bold text-caption  ">09-453183057</span>
          </div>
          <div class="mb-10 d-flex justify-space-between align-center   ">
            <span class="text-grey text-caption">Transition Time</span>
            <span class="text-blue-accent-1 font-weight-bold text-caption ">July 10 2022 - 11:23</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {onMounted} from "vue";

const  route  = useRoute();
const id = route.params.id;

</script>

<style scoped>
</style>