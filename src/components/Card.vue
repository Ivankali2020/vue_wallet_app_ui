<template>
    <div>
        <v-card>

            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            cover
            :aspect-ratio="16/9"
            ></v-img>

            <v-card-title class="flex-column align-start">

                <div class="text-h6 mb-2 text-success">Welcome Home ...</div>
                <div class="text-grey text-overline ">  Monday, 12:30 PM, Mostly Sunny </div>
            </v-card-title>

            <v-chip color="success" class="ma-2 pa-3 " label  >
            <v-icon start icon="mdi-server"></v-icon>
                Server Update
            </v-chip>

            </v-card>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>