import React from "react";
import styled from "@emotion/styled/macro";
import { COLORS } from "../Theme";

const Container = styled.div`
  background-color: ${COLORS.GREY2};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 5vh;
  padding-top: 5vh;
`;

const Content = styled.div`
  background-color: ${COLORS.GREY0};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  padding: 20px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  line-height: 1.5;
`;

const HeaderText = styled.div`
  font-size: 2rem;
  padding-bottom: 2rem;
`;

const BodyText = styled.div`
  font-size: 1.2rem;
  white-space: pre-line;
`;

const Image = styled.img`
  object-fit: cover;
  width: 40%;
  max-height: 40vh;
  margin-left: 5%;
`;

const Upholstery = ({ mobile }) => {
  var mobileStyle = {
    flexDirection: "column",
    marginTop: "2vh",
    padding: "2rem",
  };
  var text = `We offer a full upholstery service – both traditional and modern. We can supply everything from the webbing to top quality fabrics from Linwood Fabrics and Weymss Houles. As each chair is different, we offer a free estimate.

Upholstery tools and materials are available – including foam, button making, webbing, tacks, etc.`;

  return (
    <Container id="upholstery">
      <Content style={mobile ? mobileStyle : {}}>
        <TextContent>
          <HeaderText>Upholstery</HeaderText>
          <BodyText>{text}</BodyText>
        </TextContent>
        <Image src="./img/uphol_edited.jpeg" />
      </Content>
    </Container>
  );
};

export default Upholstery;
