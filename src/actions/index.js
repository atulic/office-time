export const ADD_TIMEZONE = 'ADD_TIMEZONE';

export function addTimezone(timezone) {
  return {
    type: ADD_TIMEZONE,
    timezone,
  };
}
