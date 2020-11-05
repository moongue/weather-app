import { SET_FORECAST } from '../actions/actionTypes';

const initialState = {
  forecast: []
}

export default function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORECAST:
      return { ...state, forecast: action.payload }
    default:
      return state
  }
}
