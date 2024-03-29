/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { Tabs, Tab } from 'react-bootstrap';
import AuthorTimelines from './index';
import TimelineList from '../TimelineList';

describe('<AuthorTimelines />', () => {
  describe('<AuthorTimelines isLoggedInUserProfile={true}/>', () => {
    const props = {
      userId: '12344',
      isLoggedIn: true,
      username: 'DK22',
      name: 'Donkey Kong',
      publicTimelines: [
        {
          _id: 'DK22T123',
          coverImg: '',
          title: 'title123',
          tagline: 'tagline123',
        },
        {
          _id: 'DK22T1234',
          coverImg: '',
          title: 'title1234',
          tagline: 'tagline1234',
        },
      ],
      privateTimelines: [
        {
          _id: '_DK22T12345',
          coverImg: '',
          title: 'title12345',
          tagline: 'tagline12345',
        },
      ],
    };
    const wrapper = shallow(<AuthorTimelines {...props} />);
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    // it('renders Tabs Component', () => {
    //   expect(wrapper.find(Tabs).length).toBe(1);
    // });
    // it('has two Tab Components', () => {
    //   expect(wrapper.find(Tab).length).toBe(2);
    // });
    // it('has two TimelineList Components', () => {
    //   expect(wrapper.find(TimelineList).length).toBe(2);
    // });
  });

  describe('<AuthorTimelines isLoggedInUserProfile={false}/>', () => {
    const props = {
      userId: '12344',
      isLoggedIn: false,
      username: 'DK22',
      fullName: 'Donkey Kong',
      profilePic: 'http://lorempixel.com/100/100/people/',
      publicTimelines: [
        {
          _id: 'DK22T123',
          coverImg: '',
          title: 'title123',
          tagline: 'tagline123',
        },
        {
          _id: 'DK22T1234',
          coverImg: '',
          title: 'title1234',
          tagline: 'tagline1234',
        },
      ],
    };
    const wrapper = shallow(<AuthorTimelines {...props} />);
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('renders 1 TimelineList', () => {
      expect(wrapper.find(TimelineList).length).toBe(1);
    });
  });
});
