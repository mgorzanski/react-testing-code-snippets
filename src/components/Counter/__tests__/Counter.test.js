import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../Counter';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('the increment method increments count', () => {
  const wrapper = mount(<Counter />);

  expect(wrapper.instance().state.count).toBe(0);

  wrapper.instance().increment();
  expect(wrapper.instance().state.count).toBe(1);
});