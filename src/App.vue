<template>
  <v-app>
    <v-main row style="background-color:#121212">
      <v-container width="100%">
        <NavigationDrawer />
        <v-app-bar app style="background-color:#090909">
          <v-btn icon>
            <v-icon large>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon large>mdi-chevron-right</v-icon>
          </v-btn>
          <v-layout>
            <v-flex shrink> </v-flex>
          </v-layout>

          <v-btn text color="#a7a7a7" large> Sign up </v-btn>

          <v-btn rounded color="white" dark large style="color=black">
            <span style="color: black">Log in</span>
          </v-btn>
        </v-app-bar>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
export default {
  components: { NavigationDrawer },
};
</script>

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: none;
}
.v-btn.v-size--large {
  font-size: 16px;
  font-weight: 500;
}
</style>
