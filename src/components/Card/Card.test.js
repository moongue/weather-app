import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  let wrapper;
  const props = {
    temp: 10.5,
    date: "2020-11-05",
    weather: {
      code: 802,
      description: "Scattered clouds",
      icon: "c02d"
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  it('should be exist', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should correct display temp', () => {
    const output = String(Math.round(props.temp));

    expect(wrapper.find('.temp').text()).toEqual(output);
  });

  it('should correct display day', () => {
    expect(wrapper.find('.day').text()).toEqual('Thursday');
  });

  // it('should have correct className', () => {
  //   expect(wrapper.find('.wi').hasClass('wi-day-cloudy')).toEqual(true);
  // });
})
