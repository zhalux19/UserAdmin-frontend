import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyedNav = styled.nav`
  padding: 1rem 0;
`;

const Header = () => {

    const activeStyle = {color: "F15B2A"}

    return(
      <StyedNav>
        <NavLink to="/" exact activeStyle = {activeStyle}>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/createuser" activeStyle = {activeStyle}>
          Create user
        </NavLink>
        {" | "}
        <NavLink to="/viewusers" activeStyle = {activeStyle}>
          View users
        </NavLink>
      </StyedNav>
    )
  }
  
  export default Header