import React from "react";
import "../style.scss";

import {
  Dropdown,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Image,
} from "semantic-ui-react";
import logo from "../assets/images/logo.png";

const Header = ({ handelSideBar = null }) => {
  const friendOptions = [
    {
      key: "Cattle 01",
      text: "Cattle 01",
      value: "Cattle 01",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/rachel.png",
      },
    },
    {
      key: "Cattle 02",
      text: "Cattle 02",
      value: "Cattle 02",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
      },
    },
    {
      key: "Cattle 03",
      text: "Cattle 03",
      value: "Cattle 03",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/matthew.png",
      },
    },
    {
      key: "Cattle 04",
      text: "Cattle 04",
      value: "Cattle 04",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
      },
    },
  ];

  return (
    <div className="header">
      <Grid>
        <GridRow>
          <GridColumn width={2}>
            <Icon
              className="align-justify"
              name="align justify"
              onClick={handelSideBar}
            />
          </GridColumn>
          <GridColumn
            width={4}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Image src={logo} size="small" />
          </GridColumn>
          <GridColumn
            width={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "40px",
              marginTop: "10px",
            }}
          >
            <Dropdown
              inline
              options={friendOptions}
              defaultValue={friendOptions[0].value}
              className="custom-dropdown"
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Header;
