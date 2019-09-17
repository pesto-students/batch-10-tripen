import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  const wrapper = mount(<Header />);
  describe('Logo', () => {
    const logoWrapper = wrapper.find('.navbar-brand');
    it('should contain exactly one logo', () => {
      expect(logoWrapper.length).toBe(1);
    });
  });
  describe('Buttons', () => {
    const buttonsWrapper = wrapper.find('.btn');
    it('should contain 2 buttons', () => {
      expect(buttonsWrapper.length).toBe(2);
    });
    it('should contain 1 "Create Timeline" button', () => {
      expect(buttonsWrapper.contains('Create Timeline')).toBe(true);
    });
    it('should contain "Login/Sign-Up" or "Logout" button', () => {
      expect(
        buttonsWrapper.contains('Sign-In/Sign-Up') ||
          buttonsWrapper.contains('Logout'),
      ).toBe(true);
    });
  });
  describe('Collapsible', () => {
    it('should be collapsible', () => {
      expect(wrapper.find('.collapse').length).toBe(1);
    });
  });
});
