import React, { useState } from "react";
import { Sidebar, Segment } from "semantic-ui-react";
import SideBar from "../components/sideBar";
import ProfileContent from "./profileContent";

const Profile = () => {
  const [visible, setVisible] = useState(false);

  const handelSideBar = () => {
    setVisible(!visible);
  };

  return (
    <div className="side-bar">
      <Sidebar.Pushable as={Segment}>
        <SideBar visible={visible} handelSideBar={handelSideBar} />
        <Sidebar.Pusher dimmed={visible}>
          <ProfileContent handelSideBar={handelSideBar} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default Profile;
