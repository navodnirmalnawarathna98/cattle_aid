import React, { useState } from "react";
import { Sidebar, Segment } from "semantic-ui-react";
import HomePageContent from "./homePageContent";
import SideBar from "../components/sideBar";

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  const handelSideBar = () => {
    setVisible(!visible);
  };

  return (
    <div className="side-bar">
      <Sidebar.Pushable as={Segment}>
        <SideBar visible={visible} handelSideBar={handelSideBar} />
        <Sidebar.Pusher dimmed={visible}>
          <HomePageContent handelSideBar={handelSideBar} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default HomePage;
