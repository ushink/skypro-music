import {
  NEXT_TRACK,
  PAUSE_TRACK,
  PLAY_TRACK,
  PREV_TRACK,
  SET_CURRENT_TRACK,
  SET_TRACKS,
  TOGGLE_SUFFLED,
} from "../types/track";

export const setAllTracks = (playlist) => ({
  type: SET_TRACKS,
  payload: { playlist },
});

export const setTrack = (track, index) => ({
  type: SET_CURRENT_TRACK,
  payload: { index, track },
});

export const pauseTrack = (playing) => ({
  type: PAUSE_TRACK,
});

export const playTrack = (playing) => ({
  type: PLAY_TRACK,
});

export const nextTrack = (track, index) => ({
  type: NEXT_TRACK,
  payload: { index, track },
});

export const prevTrack = (track, index) => ({
  type: PREV_TRACK,
  payload: { index, track },
});

export const toggleSuffled = (shufflePlaylist) => ({
  type: TOGGLE_SUFFLED,
  payload: { shufflePlaylist },
});
