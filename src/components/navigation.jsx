import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">
              <Icon type="pushpin-o" />Projects
            </Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/test">
              <Icon type="clock-circle-o" />Current Task
            </Link>
          </Menu.Item>
        </Menu>
      </Affix>
    );
  }
}

