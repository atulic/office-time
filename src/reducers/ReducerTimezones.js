import { ADD_TIMEZONE } from "../actions";

const initialState = { timezone: "", times: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TIMEZONE:
      return {
        ...state,
        times: [...state.times, action.timezone]
      };
  }
  return state;
}
