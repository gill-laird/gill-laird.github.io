import React from "react";
import styled from "@emotion/styled/macro";
import { MyGallery } from "./ImageGallery";
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
  height: 70%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 20px;
`;

const HeaderText = styled.div`
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const Gallery = () => {
  return (
    <Container id="gallery">
      <Content>
        <HeaderText>Gallery</HeaderText>
        <MyGallery />
      </Content>
    </Container>
  );
};

export default Gallery;
