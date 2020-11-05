import forecastReducer from '../userReducer';
import { setForecast } from '../../actions/forecastActions';

describe('forecastReducer', () => {
  const initialState = {
    forecast: []
  };

  const forecast = [{temp: 10.5,
    date: "2020-11-05",
    weather: {
      code: 802,
      description: "Scattered clouds",
      icon: "c02d"
    }}];

  it('should return the initial state', () => {
    expect(forecastReducer(initialState, {})).toEqual(initialState)
  });

  // it('should handle SET_FORECAST', () => {
  //   expect(forecastReducer(initialState, setForecast(forecast))).toEqual({ forecast });
  // });
});
