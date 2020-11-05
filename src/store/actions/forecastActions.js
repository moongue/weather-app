import { SET_FORECAST } from './actionTypes';

const setForecast = (forecast) => ({
  type: SET_FORECAST,
  payload: forecast
})

function urlStringFromObject(options) {
  return Object.entries(options)
    .map(array => array.join('='))
    .join('&');
}

function getArrayObjectsWithRequiredOptions(array, ...options) {
  return array.map(item => {
    const obj = {};
    options.forEach(option => {
      if (item[option]) {
       obj[option] = item[option];
     }
    });
    return obj;
  });
}

export const getWeather = city => async (dispatch) => {
  try {
    const urlWeatherForecast = 'https://api.weatherbit.io/v2.0/forecast/daily?';
    const requestOptions = {
      city,
      days: 4,
      unit: 'M',
      lang: 'en',
      key: process.env.REACT_APP_API_WEATHER_FORECAST_TOKEN
    };
    const requestString = urlStringFromObject(requestOptions);

    const res = await fetch(`${urlWeatherForecast}${requestString}`);
    const { data } = await res.json();

    const forecast = getArrayObjectsWithRequiredOptions(data, 'temp', 'weather', 'valid_date');

    dispatch(setForecast(forecast));
  } catch (e) {
    console.log(e);
  }
}
