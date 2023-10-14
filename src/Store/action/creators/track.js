import {
  NEXT_TRACK,
  PAUSE,
  PREV_TRACK,
  SET_CURRENT_TRACK,
  TOGGLE_SUFFLED,
} from "../types/track";

let nextTrackId = 0;

export const setCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    id: ++nextTrackId,
    track,
  },
});

export const nextTrack = (id) => ({
  type: NEXT_TRACK,
  payload: { id },
});

export const prevTrack = (id) => ({
  type: PREV_TRACK,
  payload: { id },
});

export const Pause = (id) => ({
  type: PAUSE,
  payload: { id },
});
