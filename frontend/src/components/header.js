import React, { useState, useEffect } from 'react';
import "../style.scss";
import { Dropdown, Grid, GridColumn, GridRow, Icon, Image } from "semantic-ui-react";
import logo from "../assets/images/logo.png";

const Header = ({ handelSideBar = null }) => {
  const friendOptions = [
    {
      key: "Cattle 01",
      text: "Cattle 01",
      value: "Cattle 01",
      image: { avatar: true, src: "https://react.semantic-ui.com/images/avatar/small/rachel.png" },
    },
    {
      key: "Cattle 02",
      text: "Cattle 02",
      value: "Cattle 02",
      image: { avatar: true, src: "https://react.semantic-ui.com/images/avatar/small/lindsay.png" },
    },
    {
      key: "Cattle 03",
      text: "Cattle 03",
      value: "Cattle 03",
      image: { avatar: true, src: "https://react.semantic-ui.com/images/avatar/small/matthew.png" },
    },
    {
      key: "Cattle 04",
      text: "Cattle 04",
      value: "Cattle 04",
      image: { avatar: true, src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg" },
    },
  ];

 // State to hold the selected cattle, defaulting to "Cattle 01" or a saved value from localStorage
 const [selectedCattle, setSelectedCattle] = useState(localStorage.getItem('selectedCattle') || "Cattle 01");

 // Handler for saving the selected option in localStorage and updating state
 const handleDropdownChange = (e, { value }) => {
   localStorage.setItem('selectedCattle', value);
   setSelectedCattle(value); // Update the state with the new selection
 };

 useEffect(() => {
   // Update the component state based on the current value in localStorage upon component mount
   const savedCattle = localStorage.getItem('selectedCattle');
   if (savedCattle) {
     setSelectedCattle(savedCattle);
   }
 }, []);

  return (
    <div className="header">
      <Grid>
        <GridRow>
          <GridColumn width={2}>
            <Icon className="align-justify" name="align justify" onClick={handelSideBar} />
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
              value={selectedCattle} // Use the state to control the value
              className="custom-dropdown"
              onChange={handleDropdownChange}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Header;
