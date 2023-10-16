export const allTracksSelector = (store) => store.audioplayer.playlist;
export const trackPlaySelector = (store) => store.audioplayer.track;
export const isPlayingTrack = (store) => store.audioplayer.playing;
export const indexTrackSelector = (state) => state.audioplayer.trackIndex;

