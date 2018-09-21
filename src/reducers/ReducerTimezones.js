const initialState = { currentValue: '', times: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TIMEZONE':
      return {
        ...state,
        times: [...state.times, action.timezone],
      };
    default:
      return state;
  }
}
