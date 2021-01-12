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
  line-height: 1.5;
  white-space: pre-line;
`;

const Order = () => {
  var text = `Gill will recover your furniture for you, i.e. she will take off the material that is on there now, make any repairs necessary and then recover with your choice of beautiful new material. (Gill does not make “loose covers” to go over existing pieces.)

Here’s the process step by step:

\u2022 Give Gill a call (01799 531522 or email: gilllairdchairs@gmail.com) and arrange an appointment in your home or wherever the furniture is that needs working on. (Gill is based near Saffron Walden in Essex.)

\u2022 You can have a chat about what you would like and Gill will advise on the extent of the work needed. Then she will be able to give you a quote. You can also discuss suitable fabrics and Gill can supply samples. Some items may be fine with recovering – removing the old top cover, replacing wadding and fixing new fabric – but some items may need partial or full re-upholstery and restoration work.

\u2022 Gill will arrange to collect the furniture from you, do the work, and return them looking beautiful! 

Quotes, delivery, and collection are all free!`;

  return (
    <Container id="order">
      <Content>
        <HeaderText>How to order</HeaderText>
        <BodyText>{text}</BodyText>
      </Content>
    </Container>
  );
};

export default Order;
