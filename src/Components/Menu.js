import React from "react";
import styled from "@emotion/styled/macro";
import { Link, animateScroll } from "react-scroll";
import { COLORS } from "./Theme";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  padding-top: 20%;
`;

const HeadingText = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 20px;
  color: ${COLORS.BLACK};
`;

const ContactText = styled.div`
  font-size: 1.2rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  color: ${COLORS.BLACK};
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

const MenuBackground = styled.div`
  width: 30%;
  height: 100%;
  background: ${COLORS.GREY1};
  position: fixed;
  top: 0px;
  left: 0px;
`;

const Menu = () => {
  return (
    <MenuBackground>
      <HeadingText>Gill Laird</HeadingText>
      <ContactText>01799 531522</ContactText>
      <ContactText>gilllairdchairs@gmail.com</ContactText>
      <LinkContainer>
        <Link to="about" smooth={true} duration={1000}>
          <Text>Meet Gill</Text>
        </Link>
        <Link to="upholstery" smooth={true} duration={1000}>
          <Text>Upholstery</Text>
        </Link>
        <Link to="seating" smooth={true} duration={1000}>
          <Text>Seating</Text>
        </Link>
        <Link to="gallery" smooth={true} duration={1000}>
          <Text>Gallery</Text>
        </Link>
        <Link to="recommendations" smooth={true} duration={1000}>
          <Text>Recommendations</Text>
        </Link>
        <Link to="pricing" smooth={true} duration={1000}>
          <Text>Pricing</Text>
        </Link>
        <Link to="order" smooth={true} duration={1000}>
          <Text>How to order</Text>
        </Link>
        <Link to="link" smooth={true} duration={1000}>
          <Text>Links</Text>
        </Link>
      </LinkContainer>
    </MenuBackground>
  );
};

export default Menu;
