import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      //return new state (new array with extra value)
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
