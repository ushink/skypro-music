import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "tracks",
  initialState: {
    playing: false,
    playlist: [],
    track: null,
    shufflePlaylist: [],
    shuffle: false,
    favoritePlaylist: [],
    currentPlaylist: [],
    currentPage: null,
  },
  reducers: {
    setCurrentPlaylist: (state) => {
      if (state.currentPage === "Main") {
        state.currentPlaylist = state.playlist;
      }
      if (state.currentPage === "Favorite") {
        state.currentPlaylist = state.favoritePlaylist;
      }
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setFavoritePlaylist: (state, action) => {
      state.favoritePlaylist = action.payload;
    },

    setAllTracks(state, action) {
      state.playlist = action.payload;
    },

    setTrack(state, action) {
      const { track, index } = action.payload;
      state.track = track;
      state.trackIndex = index;
      state.playing = true;
    },

    playTrack(state) {
      state.playing = true;
    },

    pauseTrack(state) {
      state.playing = false;
    },

    nextTrack(state) {
      const nextIndex = state.shuffle
        ? state.shufflePlaylist.findIndex((el) => el.id === state.track.id) + 1
        : state.trackIndex + 1;

      if (nextIndex >= 0 && nextIndex < state.currentPlaylist.length) {
        return {
          ...state,
          track: state.shuffle
            ? state.shufflePlaylist[nextIndex]
            : state.currentPlaylist[nextIndex],
          trackIndex: nextIndex,
        };
      } else {
        return {
          ...state,
          track: state.shuffle
            ? state.shufflePlaylist[0]
            : state.currentPlaylist[0],
          trackIndex: 0,
        };
      }
    },

    prevTrack(state) {
      const prevIndex = state.shuffle
        ? state.shufflePlaylist.findIndex((el) => el.id === state.track.id) - 1
        : state.trackIndex - 1;

      if (prevIndex >= 0 && prevIndex < state.currentPlaylist.length) {
        return {
          ...state,
          track: state.shuffle
            ? state.shufflePlaylist[prevIndex]
            : state.currentPlaylist[prevIndex],

          trackIndex: prevIndex,
        };
      } else {
        return {
          ...state,
          track: state.shuffle
            ? state.shufflePlaylist[0]
            : state.currentPlaylist[0],
          trackIndex: 0,
        };
      }
    },

    toggleSuffled(state) {
      if (!state.shuffle) {
        const shufflePlaylist = [...state.currentPlaylist].sort(
          () => Math.random() - 0.5
        );
        return {
          ...state,
          shufflePlaylist,
          shuffle: !state.shuffle,
        };
      } else {
        const trackIndex = state.currentPlaylist.findIndex(
          (el) => el.id === state.track.id
        );
        return {
          ...state,
          shuffle: false,
          shufflePlaylist: [],
          trackIndex: trackIndex,
        };
      }
    },
  },
});

export const {
  setCurrentPlaylist,
  setCurrentPage,
  setFavoritePlaylist,
  setAllTracks,
  setTrack,
  playTrack,
  pauseTrack,
  nextTrack,
  prevTrack,
  toggleSuffled,
} = trackSlice.actions;

export default trackSlice.reducer;
