import React from 'react';
import { Affix, Menu, Icon } from 'antd';

export default class Navigation extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Affix>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Icon type="pushpin-o" />Projects
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="clock-circle-o" />Current Task
          </Menu.Item>
        </Menu>
      </Affix>
    );
  }
}

