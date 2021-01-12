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
  padding: 20px;
`;

const HeaderText = styled.div`
  font-size: 2rem;
  padding-bottom: 20px;
`;

const BodyText = styled.div`
  font-size: 1.2rem;
  white-space: pre-line;
  line-height: 1.5;
`;

const Pricing = () => {
  var text = `Obviously it would be impossible to quote for upholstery work without seeing the item in question, but Gill is happy to give free quotations and advise on the extent of the work required.

With chair seating there are some sample prices below but beware – Grandma’s old chair that you always thought was rush seating may turn out to be seagrass, Danish cord or even wrapped straw! Please use the prices below as a guide but always ask for a specific quote for the work you need done.

CHAIR SEATING GUIDE:

\u2022 Chair cane – from £1 per frame hole (Depending on pattern and size)
\u2022 Pre-woven cane – £25 per panel plus cane @ £1 per linear inch
\u2022 Seagrass – 35p per square inch
\u2022 Fibre rush – 40p per square inch
\u2022 Fresh rush – from 45p to 55p per square inch (Depending on diameter of coils)
\u2022 Danish Cord – 40p to 50p per square inch
\u2022 “Reel Rush” – 45p per square inch`;

  var tempText = `Price guidelines coming soon... 
  
  Call Gill on 01799 531522 or email on gilllairdchairs@gmail.com for a free quote
  `;

  return (
    <Container id="pricing">
      <Content>
        <HeaderText>Pricing</HeaderText>
        <BodyText>{tempText}</BodyText>
      </Content>
    </Container>
  );
};

export default Pricing;
