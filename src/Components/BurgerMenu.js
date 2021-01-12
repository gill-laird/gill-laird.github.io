import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { Link, animateScroll } from "react-scroll";
import { COLORS } from "./Theme";

const BurgerCircle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 2vh;
  left: 2vw;
  width: 8vh;
  height: 8vh;
  background-color: transparent;
  border-radius: 50%;
  z-index: 98;
  cursor: pointer;
`;

const MenuBackground = styled.div`
  position: fixed;
  top: 0vh;
  left: 0vw;
  width: 40vw;
  height: 90vh;
  background: rgba(70, 70, 70, 0.9);
  border-right: 1px solid black;
  z-index: 50;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: transform 300ms ease-in-out;
  padding-bottom: 5vh;
`;

const Text = styled.div`
  font-size: 1rem;
  color: white;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

const BurgerDiv = styled.div`
  position: relative;
  width: 70%;
  height: 0px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: black;
  transform-origin: 1px;
  transition: all 300ms ease-in-out;
`;

const DarkenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: transparent;
  opacity: 0.2;
  z-index: 20;
  transition: transform 300ms ease-in-out;
`;

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const collapseFunction = () => {
    setOpen(!isOpen);
  };

  var topLineStyle = {
    transform: "rotate(46deg)",
  };
  var midLineStyle = {
    transform: "translateX(-100%)",
    opacity: "0",
  };
  var botLineStyle = {
    transform: "rotate(-46deg)",
  };

  return (
    <>
      <DarkenContainer
        style={!isOpen ? { transform: "translateX(-120%)" } : {}}
        onClick={() => collapseFunction()}
      />
      <BurgerCircle open={isOpen} onClick={() => collapseFunction()}>
        <BurgerDiv style={isOpen ? topLineStyle : {}} />
        <BurgerDiv style={isOpen ? midLineStyle : {}} />
        <BurgerDiv style={isOpen ? botLineStyle : {}} />
      </BurgerCircle>
      <MenuBackground style={!isOpen ? { transform: "translateX(-120%)" } : {}}>
        <Text onClick={animateScroll.scrollToTop}>Home</Text>
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
        <div style={{ height: "1vh" }} />
      </MenuBackground>
    </>
  );
};

export default BurgerMenu;
