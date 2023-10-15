import { SET_CURRENT_TRACK, SET_TRACKS } from "../types/track";

export const setAllTracks = (playlist) => ({
  type: SET_TRACKS,
  payload: { playlist },
});

export const setTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: { track },
});
