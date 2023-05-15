<script setup>
import { RouterLink, RouterView } from "vue-router";
import MenuIcon from "./components/MenuIcon.vue";
import Qr from "./components/Qr.vue";
import History from "./components/History.vue";
</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col sm="4" class=" mx-auto  header mt-5 " elevation="1" >
            <div class="justify-space-between  align-center d-flex">
              <menu-icon/>
              <router-link class="text-decoration-none text-grey" to="/">
                <v-avatar icon="mdi-vuetify" rounded="0"></v-avatar>
              </router-link>
            </div>
          </v-col >
      </v-row>
      <v-row class="bg-white">
        <v-col sm="4" class=" w-100 footer mx-auto bg-white" >
            <div class="justify-space-between align-center d-flex">
              <router-link class="text-center text-decoration-none text-grey" to="/">
                <v-icon> mdi-home </v-icon>
                <div class="text-caption">Home</div>
              </router-link>
              <router-link class="text-center text-decoration-none text-grey" to="/qr">
                <qr/>
                <div class="text-caption">Pay</div>
              </router-link>
              <router-link class="text-center text-decoration-none text-grey" to="/about"
                >
                <history></history>
                <div class="text-caption">History</div>
              </router-link>
            </div>
          </v-col >
      </v-row>
      <v-row>
        <v-col sm="5" class="mx-auto position-relative  mt-15  pb-10  " style="min-height: 100vh;" >
          <RouterView />
        </v-col>
      </v-row>


    </v-container>
  </v-app>


</template>

<style>

.footer{
    position: fixed;
    width: 100%;
    bottom: -10px;
    z-index: 999;
    right: 0;
    left: 0;
}

.header{
    position: fixed;
    width: 100%;
    top: -10px;
    z-index: 999;
    right: 0;
    left: 0;
}
.router-link-active.router-link-exact-active{
  color: #90CAF9  !important;
}
</style>