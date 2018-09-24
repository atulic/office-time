export const ADD_TIMEZONE = 'ADD_TIMEZONE';
export const REMOVE_TIMEZONE = 'REMOVE_TIMEZONE';

export function addTimezone(timezone) {
  return {
    type: ADD_TIMEZONE,
    timezone
  };
}

export function removeTimezone(timezone) {
  return {
    type: REMOVE_TIMEZONE,
    timezone
  };
}
