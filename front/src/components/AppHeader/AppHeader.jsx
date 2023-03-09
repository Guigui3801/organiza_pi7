import React from 'react';
import { Layout, Menu, Button } from 'antd';
import './AppHeader.styles.scss';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo">MY WEBSITE</div>
      <div className="nav">
        <Menu className="menu" theme="dark" mode="horizontal">
          <Menu.Item key="1">HOME</Menu.Item>
          <Menu.Item key="2">ABOUT</Menu.Item>
          <Menu.Item key="3">SERVICES</Menu.Item>
          <Menu.Item key="4">CONTACT</Menu.Item>
        </Menu>
        <Button className="btn" type="primary">GET STARTED</Button>
      </div>
    </Header>
  );
};

export default AppHeader;
