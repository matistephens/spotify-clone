<template>
  <v-card id="modalCard" width="210" height="290" class="py-4">
    <v-img :src="item.url" height="170" width="170" class="mx-auto"></v-img>

    <v-card-title class="card-playlist-title">
      <span @click="openModal(item)">
        {{ item.title }}</span
      ></v-card-title
    >

    <v-card-subtitle class="card-playlist-subtitle">
      {{ item.description }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    openModal(playlistDetails) {
      this.$emit("openModal", playlistDetails);
    },
  },
};
</script>

<style>
.card-playlist-title {
  font-size: 1rem;
  padding: 12px 8px;
  justify-content: center;
}
.card-playlist-subtitle {
  padding: 0px 18px;
  display: flex;
  justify-content: center;
}
span:hover {
  font-weight: 700;
  transform: scale(1.05);
  cursor: pointer;
}
#modalCard.v-card:hover {
  transform: scale(1.05);
  background-color: rgb(60, 60, 60);
}
</style>
