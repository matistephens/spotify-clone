import Axios from "axios";

export const playlistsModule = {
  namespaced: true,
  state: {
    playlists: [],
  },
  mutations: {
    SET_PLAYLISTS(state, newPlaylists) {
      state.playlists = newPlaylists;
    },
  },
  actions: {
    async getAllPlaylists(context) {
      try {
        if (context.state.playlists.length === 0) {
          const { data: Playlists } = await Axios.get("/playlists.json");
          context.commit("SET_PLAYLISTS", Playlists);
        }
        console.log(Playlists);
      } catch (e) {}
    },
  },
};
