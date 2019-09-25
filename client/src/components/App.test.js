import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const wrapper = mount(<App />);
  it('should render', () => {
    wrapper.debug();
  });
  it('should contain the navbar and there should be only one navbar', () => {
    const headerWrapper = wrapper.find('Header');
    expect(headerWrapper.length).toBe(1);
  });
});
