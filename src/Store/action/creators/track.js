import {
  PAUSE_TRACK,
  PLAY_TRACK,
  SET_CURRENT_TRACK,
  SET_TRACKS,
} from "../types/track";

export const setAllTracks = (playlist) => ({
  type: SET_TRACKS,
  payload: { playlist },
});

export const setTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: { track },
});

export const pauseTrack = (playing) => ({
  type: PAUSE_TRACK,
});

export const playTrack = (playing) => ({
  type: PLAY_TRACK,
});
