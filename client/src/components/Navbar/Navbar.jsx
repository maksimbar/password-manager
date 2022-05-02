import React, { useState, useEffect } from "react";
import {
  Nav,
  Li,
  Ul,
  StyledLink,
  UserDetails,
  Span,
  Button,
} from "./Navbar.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
    setUser(null);
  };

  return (
    user && (
      <Nav>
        <Ul>
          <UserDetails>
            <Span>{`Hello,  ${user?.result.email}!`}</Span>
            <Button onClick={logout}>Log out</Button>
          </UserDetails>

          <Li>
            <StyledLink to="/vault">My Vault</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/generator">Generator</StyledLink>
          </Li>
        </Ul>
      </Nav>
    )
  );
};

export default Navbar;
