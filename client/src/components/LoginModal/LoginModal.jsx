import React, { Component, Fragment } from 'react';
import { Button, Modal } from 'semantic-ui-react';

export default class LoginModal extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });

  render() {
    return (
      <Fragment>
        <Modal size="mini" open={this.props.open} onClose={this.close}>
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
      </Fragment>
    );
  }
}
