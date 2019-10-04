import {
  GET_TIMELINE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TIMELINE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
