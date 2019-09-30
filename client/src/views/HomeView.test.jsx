import React from 'react';
import { shallow } from 'enzyme';
import HomeView from './Home';
import TimelineList from '../component/TimelineList';
import LoadingIndicator from '../component/LoadingIndicator';

describe('<HomeView />', () => {
  const timelines = [
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
  ];
  describe('<HomeView timelines={timelines} isFetching={true}/>', () => {
    const wrapper = shallow(<HomeView timelines={timelines} isFetching />);
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it(' contains LoadingIndicator', () => {
      expect(wrapper.find(LoadingIndicator).length).toBe(1);
    });
    it('does not contain TimelineList', () => {
      expect(wrapper.find(TimelineList).length).toBe(0);
    });
  });
  describe('<HomeView timelines={timelines} isFetching={true}/>', () => {
    const wrapper = shallow(<HomeView timelines={timelines} isFetching={false} />);
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('contains TimelineList', () => {
      expect(wrapper.find(TimelineList).length).toBe(1);
    });
    it('does not contain LoadingIndicator', () => {
      expect(wrapper.find(LoadingIndicator).length).toBe(0);
    });
  });
});
