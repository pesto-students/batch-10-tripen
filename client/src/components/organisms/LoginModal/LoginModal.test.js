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
  describe('Buttons', () => {
    let wrapper = mount(<LoginModal></LoginModal>);
    const buttonWrapper = wrapper.find(Button);
    it('opens modal when button is clicked', () => {
      buttonWrapper.simulate('click');
      expect(wrapper.find(Modal).prop('show')).toEqual(true);
    });
  });

  describe('Modal', () => {
    it('is closed by default', () => {
      expect(wrapper.find(Modal).prop('show')).toEqual(false);
    });
    describe('when open', () => {
      let wrapper = mount(<LoginModal></LoginModal>);
      const buttonWrapper = wrapper.find(Button);
      buttonWrapper.simulate('click');
      describe('modal header', () => {
        it('exists', () => {
          expect(wrapper.find(Modal.Title).length).toBe(1);
        });
        it('contains title', () => {
          expect(wrapper.find(Modal.Title).length).toBe(1);
        });
      });

      describe('modal body', () => {
        it('exists', () => {
          expect(wrapper.find(Modal.Body).length).toBe(1);
        });
        it('contains <EmailAndPassInput>', () => {
          expect(wrapper.find(EmailAndPassInput).length).toBe(1);
        });
      });
      describe('modal footer', () => {
        let footerWrapper = wrapper.find(Modal.Footer);
        it('exists', () => {
          expect(footerWrapper.length).toBe(1);
        });
        describe('footer buttons', () => {
          const buttonWrapper = footerWrapper.find(Button);
          const signUpButton = buttonWrapper.find('button.toggleSignUp');
          it('contains 2 buttons', () => {
            expect(buttonWrapper.length).toBe(2);
          });
          it('contains 1 Close button', () => {
            expect(buttonWrapper.contains('Close')).toBe(true);
          });
          it('contains 1 state toggle button', () => {
            expect(signUpButton.length).toBe(1);
          });
        });
      });
    });
  });
});
