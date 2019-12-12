import {createReducer} from 'easy-redux-helpers';

const config = {
  initialState: {
    data: [],
  },
  RECEIVE_DATA: (state, action) => {
    state.data = action.payload.data;
  },
  REMOVE_DATA: state => {
    state.data = undefined;
  },
};

export default createReducer(config);
