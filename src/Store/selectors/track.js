export const allTracksSelector = (store) => store.audioplayer.playlist;
export const trackPlaySelector = (store) => store.audioplayer.track;
export const isPlayingTrack = (store) => store.audioplayer.playing;
export const indexTrackSelector = (state) => state.audioplayer.trackIndex;
export const isShuffleSelector = (state) => state.audioplayer.shuffle;
export const shufflePlaylistSelector = (state) => state.audioplayer.shufflePlaylist;



