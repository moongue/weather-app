import React from 'react';
import { Home } from './Home';
import Wrapper from '../../layouts/Wrapper/Wrapper';
import {Title} from '../../components/Title/Title';
import { shallow } from 'enzyme';


describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  })

  it('should be render Wrapper', () => {
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });

  // it('should be render Title', () => {
  //   wrapper = mount(shallow(<Home />).get(0));
  //   expect(wrapper.find(Title)).toEqual(1);
  // });
});
