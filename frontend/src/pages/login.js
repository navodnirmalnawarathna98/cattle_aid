import React from "react";
import { Button, Grid, GridRow, Image, Input } from "semantic-ui-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-layout">
      <div className="login-layout">
        <Grid>
          <GridRow
            style={{ fontSize: "small", marginTop: "50px", color: "#808080" }}
          >
            English (UK)
          </GridRow>
          <GridRow style={{ marginBottom: "50px" }}>
            <Image src={logo} size="medium" />
          </GridRow>
          <GridRow>
            <Input type="email" placeholder="email address" />
          </GridRow>
          <GridRow>
            <Input type="password" placeholder="password" />
          </GridRow>
          <GridRow>
            <Button color="green" as={Link} to="/">
              Log In
            </Button>
          </GridRow>
          <GridRow
            style={{ fontSize: "small", paddingTop: "0px", color: "#FAA0A0" }}
          >
            Forgotten Password?
          </GridRow>
          <GridRow>
            <Button inverted color="green" as={Link} to="/signup">
              Create new account
            </Button>
          </GridRow>
          <GridRow style={{ fontSize: "small", color: "#50c878" }}>
            Cattle Care
          </GridRow>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
