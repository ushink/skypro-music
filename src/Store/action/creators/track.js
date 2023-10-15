import { SET_TRACKS } from "../types/track";

export const setAllTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: { tracks },
});
