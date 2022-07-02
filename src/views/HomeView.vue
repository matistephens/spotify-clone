<template>
  <v-container>
    <h2 class="my-2">Viernes de Lanzamientos</h2>
    <v-layout wrap style="gap: 20px">
      <div v-for="(playlist, $index) of playlists" :key="$index">
        <PlaylistCard :item="playlist"/>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import PlaylistCard from "@/components/PlaylistCard.vue";
import Store from "@/store/"
export default {
  components: { PlaylistCard },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("playlists/getAllPlaylists");
    next();
  },
  computed: {
    ...mapState("playlists", {
      playlists: (state) => state.playlists,
    }),
  },
};
</script>
