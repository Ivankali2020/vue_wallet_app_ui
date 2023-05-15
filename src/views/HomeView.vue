<script setup>
import { ref } from "vue-demi";
import Card from "../components/Card.vue";
import LiteCoin from "../components/LiteCoin.vue";
import qr from "../components/Qr.vue";
import History from "../components/History.vue";

const messages  = ref([
        {
          to: 'Evan',
          amount: 200,
          time: '10:42am',
          color: 'red-lighten-2',
          isReceived : false
        },
        {
          to: 'John Doe',
          amount: 15,
          time: '10:37am',
          color: 'green-lighten-2',
          isReceived : false
        },
        {
          to: 'Ohmic',
          amount: 185,
          time: '9:47am',
          color: 'red-lighten-2',
          isReceived : true
        },
        {
          to: 'John Ivan ',
          amount: 15,
          time: '10:37am',
          color: 'green-lighten-2',
          isReceived : false
        },
        {
          to: 'Zaw Hlayan',
          amount: 185,
          time: '9:47am',
          color: 'red-lighten-2',
          isReceived : true
        },
      ]);

</script>

<template>
  <v-container >
    <v-card elevation="2" style="border-radius:10px" class="mx-5 px-5 py-3 mt-10">
      <div class="d-flex justify-space-between align-center text-overline  ">
        <h1>
          <lite-coin/>
        </h1>
        <span>**** **** **** 4321</span>
      </div>
      <div class="my-4 mt-8 d-flex justify-space-between align-center " >
       <div class="">
        <h6 class="text-caption mb-3 ">Balance</h6>
        <h3>43,2432,30 $</h3>
       </div>
       <div class="align-self-end  ">
        <router-link to="/qr/receive" class="text-black">
          <h2> <qr></qr> </h2>
        </router-link>
       </div>
      </div>
    </v-card>

    <v-card elevation="1" style="border-radius:10px" class="mx-5 pa-5 my-10">
      <div class="d-flex justify-space-between  align-center mb-4 ">
        <v-card-title class="font-weight-bold ">Transitions</v-card-title>
        <router-link class="text-center text-decoration-none text-grey" to="/about"
                >
                <history></history>
       </router-link>
      </div>
      <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.isReceived ?  'blue-lighten-2' : 'red-lighten-2'"
              size="x-small"
              class=" w-100 "
            >
              <div class="mb-4  " >
                <div class="font-weight-normal">
                  <strong>{{ message.to }}</strong>
                </div>
                <div class="font-weight-bold ">
                  <span :class="[{ 'text-blue-lighten-2' : message.isReceived  } , 'text-red-lighten-2']">{{ message.isReceived ? '+' : '-'}}</span>
                  {{ message.amount }} $
                  <span class="text-caption mx-2 ">{{ message.time }}</span>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
    </v-card>

  </v-container>
</template>
