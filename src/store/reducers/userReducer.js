import { SET_CITY } from '../actions/actionTypes';

const initialState = {
  city: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload }
    default:
      return state
  }
}
