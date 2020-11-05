import { SET_CITY } from './actionTypes';

const setCity = city => ({
  type: SET_CITY,
  payload: city
})

export const getUserInfo = () => async (dispatch) => {
  try {
    const res = await fetch(`https://ipinfo.io/json?token=${process.env.REACT_APP_API_IP_TOKEN}`);
    const { city } = await res.json();

    dispatch(setCity(city));
  } catch (e) {
    console.log(e)
  }
}
