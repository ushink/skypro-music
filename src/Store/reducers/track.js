import {
  PAUSE_TRACK,
  PLAY_TRACK,
  SET_CURRENT_TRACK,
  SET_TRACKS,
} from "../action/types/track";

const initialState = {
  playing: false,
  playlist: [],
  track: null,
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

    case SET_CURRENT_TRACK: {
      const { track } = action.payload;

      return {
        ...state,
        playing: true,
        track,
      };
    }

    case PLAY_TRACK: {
      return {
        ...state,
        playing: true,
      };
    }

    case PAUSE_TRACK: {
      return {
        ...state,
        playing: false,
      };
    }

    default:
      return state;
  }
}
