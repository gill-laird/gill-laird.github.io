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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  padding: 20px;
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
`;

const HeaderText = styled.div`
  font-size: 2rem;
  margin: 0;
`;

const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BodyText = styled.div`
  font-size: 1rem;
  white-space: pre-line;
  margin: 0;
  line-height: 1.5;
`;

const BoldBodyText = styled.div`
  font-size: 1.2rem;
  white-space: pre-line;
  margin: 0;
  line-height: 1.5;
  font-weight: bold;
  margin-top: 20px;
`;

const QuoteText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  white-space: pre-line;
  font-style: italic;
  border-left: solid grey 5px;
  background-color: ${COLORS.BLACKT};
`;

const AboutMe = ({ mobile }) => {
  var mobileStyle = {
    flexDirection: "column",
    marginTop: "2vh",
    padding: "2rem",
  };

  var text1 = `
Gill has always been involved in various crafts, but was introduced to upholstery 25 years ago and subsequently went to adult education classes and then to London Metropolitan University (formerly London School of Furniture) to complete City & Guilds.`;
  var text2 = `Professional Associations`;
  var text3 = `Member of The Basketmakers’ Association
City & Guilds Level 2 Furniture – Modern Upholstery
City & Guilds Level 2 Furniture – Traditional Upholstery
First Prize – Worshipful Company of Upholsterers (2002)`;

  var quote = `“From then I have been upholstering for other people, starting with friends and family and recommendations to make a business where I have upholstered or made items for all types of seating including all types of transport including
– making up seat covers to go in the Sally B B42 airplane;
– repairing motorbike seats,
– repairing awnings and making seating for boats;
– repairing and replacing seating for vintage vehicles;
– even repairing seats for ride-on lawnmowers and quad bikes!!!!
Though the main part of my work is for seating for the house.” `;

  return (
    <Container id="about">
      <Content style={mobile ? mobileStyle : {}}>
        <Vertical>
          <HeaderText>Meet Gill</HeaderText>
          <BodyTextContainer>
            <BodyText>{text1}</BodyText>
            <BoldBodyText>{text2}</BoldBodyText>
            <BodyText>{text3}</BodyText>
          </BodyTextContainer>
        </Vertical>
        <QuoteText>{quote}</QuoteText>
      </Content>
    </Container>
  );
};

export default AboutMe;
