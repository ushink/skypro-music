import {
  NEXT_TRACK,
  PAUSE_TRACK,
  PLAY_TRACK,
  PREV_TRACK,
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
      const { track, index } = action.payload;

      return {
        ...state,
        playing: true,
        track,
        trackIndex: index,
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

    case NEXT_TRACK: {
      const nextIndex = state.playlist.indexOf(state.track) + 1;

      if (nextIndex >= 0 && nextIndex < state.playlist.length) {
        return {
          ...state,
          track: state.playlist[nextIndex],
          trackIndex: nextIndex,
        };
      }
    }

    case PREV_TRACK: {
      const nextIndex = state.playlist.indexOf(state.track) - 1;

      if (nextIndex >= 0 && nextIndex < state.playlist.length) {
        return {
          ...state,
          track: state.playlist[nextIndex],
          trackIndex: nextIndex,
        };
      }
    }

    default:
      return state;
  }
}
