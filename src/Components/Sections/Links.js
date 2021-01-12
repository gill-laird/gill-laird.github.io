import React from "react";
import styled from "@emotion/styled/macro";
import { COLORS } from "../Theme";

const Container = styled.div`
  background-color: ${COLORS.GREY2};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 5vh;
  padding-top: 5vh;
`;

const Content = styled.div`
  background-color: ${COLORS.GREY0};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 20px;
`;

const HeaderText = styled.div`
  font-size: 2rem;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const LinkText = styled.a`
  font-size: 1.2rem;
  white-space: pre-line;
  padding-bottom: 10px;
  color: black;
`;

const Links = () => {
  return (
    <Container id="link">
      <Content>
        <HeaderText>Links</HeaderText>
        <LinkText
          href={"http://www.paragoncourses.co.uk/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Paragon School of Furniture Restoration
        </LinkText>
        <LinkText
          href={"https://linwoodfabric.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          The Linwood Fabric Company Limited
        </LinkText>
        <LinkText
          href={"https://www.moons.co.uk/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Moons Fabrics
        </LinkText>
        <LinkText
          href={"https://www.rossfabrics.co.uk/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ross Fabrics
        </LinkText>
        <LinkText
          href={"https://www.toolbank.com/default.aspx?rid=1208"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Toolbank
        </LinkText>
      </Content>
    </Container>
  );
};

export default Links;
