/* eslint-disable no-console */
import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  usuario: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.usuario = action.payload.usuario;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...initialState };
      newState.isLoading = true;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
};
