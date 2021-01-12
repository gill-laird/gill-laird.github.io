import React from "react";
import styled from "@emotion/styled/macro";
import Welcome from "./Sections/Welcome";
import AboutMe from "./Sections/AboutMe";
import Upholstery from "./Sections/Upholstery";
import Seating from "./Sections/Seating";
import Gallery from "./Sections/Gallery";
import Order from "./Sections/Order";
import Pricing from "./Sections/Pricing";
import Recommendations from "./Sections/Recommendations";
import Links from "./Sections/Links";
import { COLORS } from "./Theme";

const Background = styled.div`
  top: 0;
  bottom: 0;
  width: 70%;
  position: absolute;
  right: 0;
  background-color: ${COLORS.GREY2};
`;

const Content = ({ mobile }) => {
  var mobileStyle = {
    width: "100%",
  };

  return (
    <Background style={mobile ? mobileStyle : {}}>
      <Welcome mobile={mobile} />
      <AboutMe mobile={mobile} />
      <Upholstery mobile={mobile} />
      <Seating mobile={mobile} />
      <Gallery />
      <Recommendations />
      <Pricing />
      <Order />
      <Links />
    </Background>
  );
};

export default Content;
