import React from 'react';
import { shallow } from 'enzyme';
import { Col } from 'react-bootstrap';
import TimelineList from './index';
import TimelineCard from '../TimelineCard';

describe('<TimelineList />', () => {
  describe('for timelines with data', () => {
    const timelines = [
      {
        _id: 'DK22T123',
        coverImg: '',
        title: 'title123',
        tagline: 'tagline123',
        updatedAt: '2019-10-01T12:50:11Z',
      },
    ];
    const wrapper = shallow(<TimelineList timelines={timelines} />);
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('renders a same number of timelines as passed', () => {
      expect(wrapper.find(Col).length).toBe(timelines.length);
    });
    it('renders a same number of TimelineCards as passed', () => {
      expect(wrapper.find(TimelineCard).length).toBe(timelines.length);
    });
  });

  describe('<TimelineList timelines ={[]} />', () => {
    const timelines = [];
    const wrapper = shallow(<TimelineList timelines={timelines} />);
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('should not render any TimelineCard if timelines is empty', () => {
      expect(wrapper.find(TimelineCard).length).toBe(0);
    });
    it('renders Error Message: No Timelines Found', () => {
      expect(wrapper.find('.text-muted').length).toBe(1);
      expect(wrapper.find('p').length).toBe(1);
    });
  });
});
