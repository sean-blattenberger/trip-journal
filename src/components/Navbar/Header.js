import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";

const Header = () => {
  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <Navbar
          className="navbar-fixed blue-grey darken-4"
          brand={
            <LogoIcon>
              <Icon className="red-text text-lighten-2">card_travel</Icon>
            </LogoIcon>
          }
          right
        >
          <NavItem>
            <Link to="/">
              <Icon className="light-blue-text">view_module</Icon>
            </Link>
          </NavItem>
          <NavItem onClick={() => window.location.reload()}>
            <Icon className="light-blue-text">refresh</Icon>
          </NavItem>
          <NavItem>
            <Icon className="light-blue-text">info</Icon>
          </NavItem>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default Header;

const LogoIcon = styled.div`
  padding-left: 2rem;
`;
