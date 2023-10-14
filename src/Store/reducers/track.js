import { SET_CURRENT_TRACK, PAUSE } from "../action/types/track";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      const { id, track } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            track,
            complete: false,
          },
        },
      };
    }

    case PAUSE: {
      const { id } = action.payload;

      const targetTrack = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTrack,
            completed: !targetTrack.completed,
          },
        },
      };
    }

    default:
      return state;
  }
}
