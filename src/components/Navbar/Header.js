import React from "react";
import styled from "styled-components";
import { Navbar, NavItem, Icon } from "react-materialize";

const Header = () => {
  return (
    <Navbar
      className="navbar-fixed"
      brand={
        <LogoIcon>
          <Icon>card_travel</Icon>
        </LogoIcon>
      }
      right
    >
      <NavItem href="get-started.html">
        <Icon>search</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>view_module</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>refresh</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>more_vert</Icon>
      </NavItem>
    </Navbar>
  );
};

export default Header;

const LogoIcon = styled.div`
  padding-left: 2rem;
`