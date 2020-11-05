import fetchMock from 'fetch-mock';
import { getUserInfo, setCity } from '../userActions';
import { SET_CITY } from '../actionTypes';
import { mockStore } from '../../../setupTests';

describe('async user actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('should create an action to add a city', () => {
      const city = 'Odessa';
      const expectedAction = {
        type: SET_CITY,
        payload: city
      }
      expect(setCity(city)).toEqual(expectedAction);
  });

  it('creates SET_CITY when fetching todos has been done', () => {
    fetchMock.getOnce(`https://ipinfo.io/json?token=${process.env.REACT_APP_API_IP_TOKEN}`, {
      body: { city: 'Odessa' },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = {
      type: SET_CITY,
      payload: 'Odessa'
    };
    const store = mockStore({ city: null });

    return store.dispatch(getUserInfo()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });
});
