import { SET_TRACKS } from "../types/track";

export const setAllTracks = (playlist) => ({
  type: SET_TRACKS,
  payload: { playlist },
});
