import React from 'react';
import { mount } from 'enzyme';
import LoginModal from './LoginModal';
import EmailAndPassInput from '../../molecules/EmailAndPassInput/EmailAndPassInput';
import { Button, Modal, Form } from 'react-bootstrap';

describe('<LoginModal />', () => {
  let wrapper = mount(<LoginModal></LoginModal>);

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('contains 1 button by default', () => {
    const buttonWrapper = wrapper.find(Button);
    expect(buttonWrapper.length).toBe(1);
  });
  it('contains one Modal', () => {
    const modalWrapper = wrapper.find(Modal);
    expect(modalWrapper.length).toBe(1);
  });
  describe('button', () => {
    let wrapper = mount(<LoginModal></LoginModal>);
    const buttonWrapper = wrapper.find(Button);
    it('opens modal when button is clicked', () => {
      buttonWrapper.simulate('click');

      expect(wrapper.find(Modal).prop('show')).toEqual(true);
    });
  });

  describe('modal', () => {
    it('is closed by default', () => {
      expect(wrapper.find(Modal).prop('show')).toEqual(false);
    });
    describe('when open', () => {
      let wrapper = mount(<LoginModal></LoginModal>);
      const buttonWrapper = wrapper.find(Button);
      buttonWrapper.simulate('click');
      it('closes on clicking the close button', () => {
        const closeButton = wrapper.find('.close');
        closeButton.simulate('click');
        expect(wrapper.find(Modal).prop('show')).toEqual(false);
      });
      describe('modal header', () => {
        it('exists', () => {
          expect(wrapper.find(Modal.Title).length).toBe(1);
        });
      });

      describe('modal body', () => {
        it('exists', () => {
          expect(wrapper.find(Modal.Body).length).toBe(1);
        });
        it('contains 1 email input', () => {
          expect(wrapper.find('input[type="email"]').length).toBe(1);
        });
        it('contains 1 password input', () => {
          expect(wrapper.find('input[type="password"]').length).toBe(1);
        });
      });
      describe('modal footer', () => {
        let footerWrapper = wrapper.find(Modal.Footer);
        it('exists', () => {
          expect(footerWrapper.length).toBe(1);
        });
        const buttonWrapper = footerWrapper.find(Button);

        it('contains 2 buttons', () => {
          expect(buttonWrapper.length).toBe(2);
        });
        it('contains 1 "Close" button', () => {
          expect(buttonWrapper.contains('Close')).toBe(true);
        });
        it('contains 1 state toggle button', () => {
          const signUpButton = buttonWrapper.find('button.toggleSignUp');
          expect(signUpButton.length).toBe(1);
        });
      });
      describe('Mode', () => {
        it('is Sign In by default', () => {
          expect(wrapper.find(Modal.Title).text()).toEqual('Sign In');
        });

        describe('Sign In', () => {
          it('contains only two input fields, email and password', () => {
            expect(wrapper.find('input').length).toBe(2);
          });
          it('toggles to Sign Up mode on clicking state toggle button', () => {
            const signUpButton = wrapper.find('button.toggleSignUp');
            signUpButton.simulate('click');
            expect(wrapper.find(Modal.Title).text()).toEqual('Sign-up');
          });
        });
        describe('Sign Up', () => {
          it('contains input for first name', () => {
            expect(wrapper.find('input[placeholder="First name"]').length).toBe(
              1,
            );
          });
          it('contains input for last name', () => {
            expect(wrapper.find('input[placeholder="Last name"]').length).toBe(
              1,
            );
          });
          it('contains datepicker for date of birth', () => {
            expect(wrapper.find('input[placeholder="mm/dd/yyyy"]').length).toBe(
              1,
            );
          });
          it('toggles to Sign In mode on clicking state toggle button', () => {
            const signUpButton = wrapper.find('button.toggleSignUp');
            signUpButton.simulate('click');
            expect(wrapper.find(Modal.Title).text()).toEqual('Sign In');
          });
        });
      });
    });
  });
});
