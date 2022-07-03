<template>
  <v-container>
    <h2 class="my-2">Viernes de Lanzamientos</h2>
    <v-layout wrap style="gap: 20px">
      <div v-for="(playlist, $index) of playlists" :key="$index" >
        <PlaylistCard :item="playlist" @openModal="openModal" />
      </div>
    </v-layout>

    <PlaylistModal :showModal="this.showModal" :playlistDetails="playlistDetails" @hideModal="hideModal()"/>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import PlaylistCard from "@/components/PlaylistCard.vue";
import PlaylistModal from "@/components/PlaylistModal.vue";
import Store from "@/store/";
export default {
  data: () => ({
    showModal: false,
    playlistDetails: {}
  }),
  components: { PlaylistCard, PlaylistModal },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("playlists/getAllPlaylists");
    next();
  },
  computed: {
    ...mapState("playlists", {
      playlists: (state) => state.playlists,
    }),
  },
  methods: {
    hideModal() {
      this.showModal = false
    },
    openModal(name) {
      this.showModal = true
      this.playlistDetails = name
    }
  },
};
</script>
