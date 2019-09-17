import React, { Component } from 'react';
import { Menu, Button, Icon, Modal } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = {
    companyName: 'Tripen',
    loginModalIsOpen: false,
  };
  showModal = () => () =>
    this.setState({ size: 'mini', loginModalIsOpen: true });
  closeModal = () => this.setState({ loginModalIsOpen: false });
  render() {
    return (
      <Menu>
        <Menu.Item header>{this.state.companyName}</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>
              <Icon name="plus"></Icon>
              Create Timeline
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button onClick={this.showModal('mini')}>Log-in/Sign up</Button>

            <Modal
              size="mini"
              open={this.state.loginModalIsOpen}
              onClose={this.closeModal}
            >
              <Modal.Header>Delete Your Account</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete your account</p>
              </Modal.Content>
              <Modal.Actions>
                <Button negative>No</Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Yes"
                />
              </Modal.Actions>
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
