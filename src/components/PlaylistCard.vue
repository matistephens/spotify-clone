<template>
  <v-card width="210" height="290" class="py-4">
    <v-img
      :src="item.url"
      height="170"
      width="170"
      class="mx-auto"
    ></v-img>

    <v-card-title class="card-playlist-title"> {{ item.title }}</v-card-title>

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
</style>
