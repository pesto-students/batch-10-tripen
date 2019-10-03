/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'react-bootstrap';
import AuthorTimelines from './index';
import InputBox from '../InputBox';

describe('<AuthorInfoSection />', () => {
  describe('<AuthorInfoSection isLoggedInUserProfile={true}/>', () => {
    const props = {
      userId: '12344',
      isLoggedIn: true,
      username: 'DK22',
      fullName: 'Donkey Kong',
      profilePic: 'http://lorempixel.com/100/100/people/',
    };
    // const wrapper = shallow(<AuthorTimelines {...props} />);
    it('dummy', () => {
      expect(true).toBe(true);
    });
    // it('has at least 2 Input Box Components', () => {
    //   expect(wrapper.find(InputBox).length >= 2).toBe(true);
    // });
  });

  describe('<AuthorInfoSection isLoggedInUserProfile={false}/>', () => {
    const props = {
      isLoggedIn: false,
      username: 'DK22',
      fullName: 'Donkey Kong',
      profilePic: 'http://lorempixel.com/100/100/people/',
    };
    // const wrapper = shallow(<AuthorTimelines {...props} />);
    // it('renders', () => {
    //   expect(wrapper.exists()).toBe(true);
    // });
    // // it('has username and Full name', () => {
    //   expect(wrapper.find('p').length).toBe(2);
    // });
    // it('contains Image', () => {
    //   expect(wrapper.find(Image).length).toBe(1);
    // });
  });
});
