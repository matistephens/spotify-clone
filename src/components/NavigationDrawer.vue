<template>
  <v-card height="100%" width="241">
    <v-navigation-drawer app color="#000" permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-img
              lazy-src="../assets/Spotify_logo_with_text.svg"
              max-width="131"
              src="../assets/Spotify_logo_with_text.svg"
              class="mt-2"
            >
            </v-img>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon class="mr-4">
            <v-icon size="30">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="font-size: 0.875rem; font-weight: 700">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-variant' },
          { title: 'Search', icon: 'mdi-magnify' },
          { title: 'Your Library', icon: 'mdi-music-box-multiple' },
        ],
        right: null,
      }
    },
  }
</script>

<style></style>
