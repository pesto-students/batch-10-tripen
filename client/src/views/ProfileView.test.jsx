import React from 'react';
import { shallow } from 'enzyme';
import ProfileView from './Profile';
import AuthorTimelines from '../component/AuthorTimelines';
import AuthorInfoSection from '../component/AuthorInfoSection';
import LoadingIndicator from '../component/LoadingIndicator';

describe('<ProfileView />', () => {
  const userData = {
    userId: '1234',
    isLoggedIn: true,
    username: 'DK22',
    fullName: 'Donkey Kong',
    profilePic: 'http://lorempixel.com/100/100/people/',
    publicTimelines: [
      {
        timelineId: 'DK22T123',
        coverPicUrl: '',
        title: 'title123',
        tagline: 'tagline123',
      },
      {
        timelineId: 'DK22T1234',
        coverPicUrl: '',
        title: 'title1234',
        tagline: 'tagline1234',
      },
    ],
    privateTimelines: [
      {
        timelineId: '_DK22T12345',
        coverPicUrl: '',
        title: 'title12345',
        tagline: 'tagline12345',
      },
    ],
  };
  describe('<ProfileView isLoading={true} isLoggedInUserProfile={true} userData={userData} />', () => {
    const wrapper = shallow(
      <ProfileView isLoading isLoggedInUserProfile userData={userData} />,
    );
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('contains LoadingIndicator', () => {
      expect(wrapper.find(LoadingIndicator).length).toBe(1);
    });
  });
  describe('<ProfileView isLoading={true} isLoggedInUserProfile={true} userData={userData} />', () => {
    const wrapper = shallow(
      <ProfileView isLoading={false} isLoggedInUserProfile userData={userData} />,
    );
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('contains AuthorTimelines', () => {
      expect(wrapper.find(AuthorTimelines).length).toBe(1);
    });
    it('contains AuthorInfoSection', () => {
      expect(wrapper.find(AuthorInfoSection).length).toBe(1);
    });
  });
});
