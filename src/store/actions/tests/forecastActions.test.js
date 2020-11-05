import fetchMock from 'fetch-mock';
import { setForecast, urlStringFromObject, getArrayObjectsWithRequiredOptions } from '../forecastActions';
import { SET_FORECAST } from '../actionTypes';

describe('async forecast actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  const forecast = [{temp: 10.5,
    date: "2020-11-05",
    weather: {
      code: 802,
      description: "Scattered clouds",
      icon: "c02d"
    }}];

  it('should create an action to add a forecast', () => {
    const expectedAction = {
      type: SET_FORECAST,
      payload: forecast
    }
    expect(setForecast(forecast)).toEqual(expectedAction);
  });
});

describe('functions utils', () => {
  it('urlStringFromObject should return correct string', () => {
    const options = {
      days: 4,
      city: 'Lviv',
      lang: 'ua'
    }
    const expected = 'days=4&city=Lviv&lang=ua'
    expect(urlStringFromObject(options)).toEqual(expected);
  });

  it('getArrayObjectsWithRequiredOptions should return correct array', () => {
    const array = [
      { name: 'Sasha', age: '19', admin: true },
      { name: 'Pasha', age: '22', admin: false },
    ];
    const expected = [
      { name: 'Sasha', age: '19'},
      { name: 'Pasha', age: '22'}
    ];
    expect(getArrayObjectsWithRequiredOptions(array, 'name', 'age')).toEqual(expected);
  });
});
