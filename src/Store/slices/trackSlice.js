import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "tracks",
  initialState: {
    playing: false,
    playlist: [],
    track: null,
    // trackIndex: null,
    shufflePlaylist: [],
    shuffle: false,
  },
  reducers: {
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
        ? state.shufflePlaylist.indexOf(state.track) + 1
        : state.playlist.indexOf(state.track) + 1;

      if (nextIndex >= 0 && nextIndex < state.playlist.length) {
        return {
          ...state,
          track: state.shuffle
            ? state.shufflePlaylist[nextIndex]
            : state.playlist[nextIndex],

          trackIndex: nextIndex,
        };
      } else {
        return {
          ...state,
          track: state.playlist[0],
          trackIndex: 0,
        };
      }
    },

    prevTrack(state) {
      const prevIndex = state.shuffle
        ? state.shufflePlaylist.indexOf(state.track) - 1
        : state.playlist.indexOf(state.track) - 1;

      if (prevIndex >= 0 && prevIndex < state.playlist.length) {
        return {
          ...state,
          track: state.shuffle
            ? state.shufflePlaylist[prevIndex]
            : state.playlist[prevIndex],

          trackIndex: prevIndex,
        };
      } else {
        return {
          ...state,
          track: state.playlist[0],
          trackIndex: 0,
        };
      }
    },

    toggleSuffled(state) {
      if (!state.shuffle) {
        const shufflePlaylist = [...state.playlist].sort(
          () => Math.random() - 0.5
        );
        return {
          ...state,
          shufflePlaylist,
          shuffle: !state.shuffle,
        };
      } else {
        const trackIndex = state.playlist.indexOf(state.track);
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
  setAllTracks,
  setTrack,
  playTrack,
  pauseTrack,
  nextTrack,
  prevTrack,
  toggleSuffled,
} = trackSlice.actions;

export default trackSlice.reducer;
