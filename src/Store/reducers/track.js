import {
  NEXT_TRACK,
  PAUSE_TRACK,
  PLAY_TRACK,
  PREV_TRACK,
  SET_CURRENT_TRACK,
  SET_TRACKS,
  TOGGLE_SUFFLED,
} from "../action/types/track";

const initialState = {
  playing: false,
  playlist: [],
  track: null,
  shufflePlaylist: [],
  shuffle: false,
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
      const nextIndex = state.shuffle
        ? state.shufflePlaylist.indexOf(state.track) + 1
        : state.playlist.indexOf(state.track) + 1;

      if (nextIndex >= 0 && nextIndex < state.playlist.length) {
        return {
          ...state,
          track: state.playlist[nextIndex],
          trackIndex: nextIndex,
        };
      }
    }

    // eslint-disable-next-line no-fallthrough
    case PREV_TRACK: {
      const prevIndex = state.shuffle
        ? state.shufflePlaylist.indexOf(state.track) - 1
        : state.playlist.indexOf(state.track) - 1;

      if (prevIndex >= 0 && prevIndex < state.playlist.length) {
        return {
          ...state,
          track: state.playlist[prevIndex],
          trackIndex: prevIndex,
        };
      }
    }

    // eslint-disable-next-line no-fallthrough
    case TOGGLE_SUFFLED: {
      if (!state.shuffle) {
        const shufflePlaylist = [...state.playlist].sort(
          () => Math.random() - 0.5
        );
        return {
          ...state,
          shufflePlaylist,
          shuffle: !state.shuffle,
        };
      } else {
        const trackIndex = state.playlist.indexOf(state.track);
        return {
          ...state,
          shuffle: false,
          shufflePlaylist: [],
          trackIndex: trackIndex,
        };
      }
    }

    default:
      return state;
  }
}
