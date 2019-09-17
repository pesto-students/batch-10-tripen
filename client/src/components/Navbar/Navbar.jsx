import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = {
    companyName: 'Tripen',
  };

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
            <Button>Log-in/Sign up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
