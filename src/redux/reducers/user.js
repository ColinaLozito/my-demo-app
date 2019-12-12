import {createReducer} from 'easy-redux-helpers';

const config = {
  initialState: {
    name: undefined,
    token: undefined,
    userId: undefined,
  },
  RECEIVE_USER_INFORMATION: (state, action) => {
    state.name = action.payload.name;
    state.token = action.payload.token;
    state.userId = action.payload.userId;
  },
  REFRESH_USER_TOKEN: (state, action) => {
    state.token = action.payload.token;
  },
  REMOVE_USER_INFORMATION: state => {
    state.name = undefined;
    state.token = undefined;
    state.userId = undefined;
  },
};

export default createReducer(config);
