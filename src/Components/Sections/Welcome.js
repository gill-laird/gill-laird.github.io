import React from "react";
import styled from "@emotion/styled/macro";
import { COLORS } from "../Theme";

// From menu for mobile version
//#region
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

//#endregion

const Container = styled.div`
  background-color: ${COLORS.GREY2};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 5vh;
`;

const Content = styled.div`
  background-color: ${COLORS.GREY0};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const HeaderText = styled.div`
  font-size: 2.5rem;
  font-style: italic;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const BodyText = styled.div`
  font-size: 1.2rem;
  white-space: pre-line;
  text-align: left;
  margin-bottom: 10px;
`;

const Image = styled.img`
  object-fit: cover;
  max-height: 50vh;
`;

const Welcome = ({ mobile }) => {
  var mobileStyle = {
    flexDirection: "column",
    marginTop: "2vh",
    padding: "2rem",
  };

  var text = `
\u2022Rush, seagrass, chair caning, Danish cord

\u2022Tools and materials including button making

\u2022Foam and cushions interiors

\u2022Fabrics and trimmings

\u2022Tuition in chair seating, upholstery and associated crafts`;

  return (
    <Container>
      {mobile ? (
        <>
          <HeadingText>Gill Laird</HeadingText>
          <ContactText>01799 531522</ContactText>
          <ContactText>gilllairdchairs@gmail.com</ContactText>
        </>
      ) : (
        <></>
      )}
      <HeaderText>Beautiful, traditional, and modern upholstery</HeaderText>
      <Content style={mobile ? mobileStyle : {}}>
        <BodyText>
          {text} <br />
          <br />
          <br />
          <b>Contact for a free, no obligation quotation</b>
        </BodyText>
        <Image src="./img/collage.jpeg" />
      </Content>
    </Container>
  );
};

export default Welcome;
