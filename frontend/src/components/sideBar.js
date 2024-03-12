import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SideBar = ({ visible, handelSideBar }) => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={() => handelSideBar(false)}
      vertical
      visible={visible}
      width="thin"
    >
      <Menu.Item as={Link} to="/">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/profile">
        <Icon name="user" />
        Profile
      </Menu.Item>
      <Menu.Item as={Link} to="/useractivities">
        <Icon name="folder open" />
        User Activities
      </Menu.Item>
      <Menu.Item as={Link} to="/usertreatmentdetails">
        <Icon name="treatment" />
        Treatment Details
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        <Icon name="bell" />
        Notification
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        <Icon name="help" />
        Help & Support
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        <Icon name="call" />
        Contact Us
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        <Icon name="setting" />
        Setting & Privacy
      </Menu.Item>
      <Menu.Item as={Link} to="/login">
        <Icon name="log out" />
        Log Out
      </Menu.Item>
    </Sidebar>
  );
};

export default SideBar;
