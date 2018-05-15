import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Header>
      <h1><span role="img" aria-label="Wilted Rose">🥀</span></h1>
      <nav>
        <NavLinks>
          <li>
            <Link className="tooltip" href="Home"><span role="img" aria-label="Home">🏠</span><span class="tooltiptext">Home</span></Link>
          </li>
          <li>
            <Link className="tooltip" href="Login"><span role="img" aria-label="Login">👨‍💻</span><span class="tooltiptext">Login</span></Link>
          </li>
        </NavLinks>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  top: 0;
  position: absolute;
  height: 10vh;
  min-width: 100vw;
  background: palevioletred;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.17);
  z-index: 999;
  h1 {
    font-weight: 300;
    margin-left: 2%;
  }
`;
const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: 50px;
`;
const Link = styled.a`
  text-decoration: underline;
  color: white;
  margin: 15px;
  :hover {
    cursor: pointer;
    color: cyan;
  }
`;
export default Navbar;
