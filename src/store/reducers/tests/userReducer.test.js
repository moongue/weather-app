import userReducer from '../userReducer';
import { setCity } from '../../actions/userActions';

describe('userReducer', () => {
  const initialState = {
    city: null
  };

  it('should return the initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState)
  });

  it('should handle SET_CITY', () => {
    expect(userReducer(initialState, setCity('Odessa'))).toEqual({
      city: 'Odessa'
    });
  });
});
