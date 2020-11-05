import { SET_CITY } from './actionTypes';
import { getWeather } from './forecastActions';

export const setCity = city => ({
  type: SET_CITY,
  payload: city
})

export const getUserInfo = () => async (dispatch) => {
  try {
    const urlIpInfo = 'https://ipinfo.io/json?token=';
    const res = await fetch(`${urlIpInfo}${process.env.REACT_APP_API_IP_TOKEN}`);
    const { city } = await res.json();
    dispatch(setCity(city));

    dispatch(getWeather(city));
  } catch (e) {
    console.log(e)
  }
}
