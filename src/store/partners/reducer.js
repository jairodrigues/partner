import * as types from './action-types';

export const initialState = {
  error: false,
  message: null,
};

export function partners(state = initialState, action) {
  switch (action.type) {
    case types.PARTNER_REQUEST: {
      return {
        ...state,
      };
    }
    case types.PARTNER_REJECT: {
      return {
        ...state,
        error: action.error,
        message: action.payload.message,
      };
    }
    case types.PARTNER_FULFILL: {
      return {
        ...state,
        error: false,
        message: null,
      };
    }
    default: {
      return state;
    }
  }
}
