import { SET_TRACKS } from "../action/types/track";

const initialState = {
  tracks: [],
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRACKS: {
      const { tracks } = action.payload;

      return {
        ...state,
        tracks,
      };
    }

    default:
      return state;
  }
}
