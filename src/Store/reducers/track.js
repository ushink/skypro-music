import { SET_TRACKS } from "../action/types/track";

const initialState = {
  playlist: [],
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRACKS: {
      const { playlist } = action.payload;

      return {
        ...state,
        playlist,
      };
    }

    default:
      return state;
  }
}
