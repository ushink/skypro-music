export const currentPlaylistSelector = (state) =>
  state.audioplayer.currentPlaylist;
export const categoryPlaylistSelector = (state) =>
  state.audioplayer.categoryPlaylist;
export const favoritePlaylistSelector = (state) =>
  state.audioplayer.favoritePlaylist;
export const allTracksSelector = (store) => store.audioplayer.playlist;
export const trackPlaySelector = (store) => store.audioplayer.track;
export const isPlayingTrack = (store) => store.audioplayer.playing;
export const indexTrackSelector = (state) => state.audioplayer.trackIndex;
export const isShuffleSelector = (state) => state.audioplayer.shuffle;
export const shufflePlaylistSelector = (state) =>
  state.audioplayer.shufflePlaylist;
export const authSelector = (store) => store.auth;
