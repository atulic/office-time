import { ADD_TIMEZONE, REMOVE_TIMEZONE } from '../actions';

const initialState = { timezone: '', times: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TIMEZONE:
      return {
        ...state,
        times: [...state.times, action.timezone]
      };
    case REMOVE_TIMEZONE:
      return {
        ...state,
        times: state.times.filter(time => time !== action.timezone)
      };
  }
  return state;
}
