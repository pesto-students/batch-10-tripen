import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TimelineCard from './index';

describe('<TimelineCard />', () => {
  const timelineData = {
    _id: '786',
    title: 'Khiladi',
    tagline: "Khiladi bhaiya's journey",
  };
  const wrapper = shallow(<TimelineCard timelineData={timelineData} />);
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('render one Component', () => {
    expect(wrapper.children.length).toBe(1);
  });
  it("render a React-Bootstrap's Card Element", () => {
    expect(wrapper.type()).toBe(Card);
  });
  it('should have 1 Image', () => {
    expect(wrapper.find(Card.Img).length).toBe(1);
  });
  it('should have 1 Title', () => {
    expect(wrapper.find(Card.Title).length).toBe(1);
  });
  it('should have 1 Tagline', () => {
    expect(wrapper.find(Card.Text).length).toBe(1);
  });
  it('should have 1 Body', () => {
    expect(wrapper.find(Card.Body).length).toBe(1);
  });
  it('should have 1 Footer', () => {
    expect(wrapper.find(Card.Footer).length).toBe(1);
  });
  it('should have 1 Link ', () => {
    expect(wrapper.find(Link).length).toBe(1);
  });
  it('have 1 Link with Strechable Class', () => {
    expect(wrapper.find(Link).hasClass('stretched-link')).toBe(true);
  });
  it('should have a Link which is a direct child of Card', () => {
    expect(
      wrapper
        .find(Link)
        .parent()
        .is(Card),
    ).toBe(true);
  });
  it('should display timelineData.title as Title in Card.Title ', () => {
    expect(wrapper.find(Card.Title).text()).toBe(timelineData.title);
  });
});
