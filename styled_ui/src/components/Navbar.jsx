import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  height: 120px;
  background-color: #000;
`;
const Logo = styled.div`
  height: 60px;
  position: absolote;
  top: 24px;
  left: 30px;
  height: 60px;
`;
const Links = styled.div`
  font-weight: 300;
  position: absolute;
  font-weight: 300;
  top: 24px;
  right: 40 px;
  letter-spacing: 1px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  padding: 15px 30px;
  border-radius: 2px;

  @media all and (max-width: 820px) {
    padding: 10px 5px;
    font-size: 10px;
  }
  @media all and (max-width: 620px) {
    display: none;
  }
`;
const A = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 50px;
  cursor: pointer;

  @media all and (max-width: 620px) {
    margin-left: 20px;
  } ;
`;
export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <img
          width="60px"
          src="https://learn.masaischool.com/img/logo-navbar.svg"
          alt="logo.png"
        />
      </Logo>
      <Links>
        <Button>Try Now</Button>
        <A>About Us</A>
        <A>FAQ</A>
        <A>Login</A>
      </Links>
    </NavbarWrapper>
  );
};
