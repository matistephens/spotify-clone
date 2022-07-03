<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="playlistDetails.url"
        height="200px"
      ></v-img>

      <v-card-title> {{ playlistDetails.title }} </v-card-title>

    </v-card>
    <v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeModal()">
          Play
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      // title: this.playlistDetails.title,
      // img: this.playlistDetails.url
    };
  },
  computed: {
    changeValue() {
      this.dialog = this.showModal;
    },
  },
  methods: {
    closeModal() {
      this.dialog = false;
      this.$emit('hideModal');
    },
  },
  props: {
    showModal: Boolean,
    playlistDetails: Object,
  },
};
</script>

<style></style>
