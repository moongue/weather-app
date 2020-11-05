import { configure } from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() })

