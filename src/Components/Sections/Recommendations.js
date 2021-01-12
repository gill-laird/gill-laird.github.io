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
  line-height: 1.5;
  padding-bottom: 20px;
`;

const QuoteText = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
  font-style: italic;
  text-align: center;
`;

const ByText = styled.div`
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
`;

const quotes = [
  {
    quote: `“Thank you so much – the cushions look great and I am very pleased”`,
    by: "Mandy, Cambridgeshire",
  },
  {
    quote: `“We are delighted with the chair: it looks and feels really good.”`,
    by: "John and Judy, Cambridgeshire",
  },
  {
    quote: `“First let me say how pleased we are with the finished result on the futon chairs (and of course on the earlier ones). Thank you for managing to deal with the unconventional construction of the chairs.”`,
    by: "Rita, Essex",
  },
  {
    quote: `“We are over joyed at the way the carver chair has turned out, it really looks brilliant, we could not imagine that it would turn out the way it has, once again thank you so very much.”`,
    by: "Malcolm and Sidna, Essex",
  },
];

const Recommendations = () => {
  const items = quotes.map((item, i) => (
    <div key={i}>
      <QuoteText>{item.quote}</QuoteText>
      <ByText>- {item.by}</ByText>
    </div>
  ));

  return (
    <Container id="recommendations">
      <Content>
        <HeaderText>Recommendations</HeaderText>
        {items}
      </Content>
    </Container>
  );
};

export default Recommendations;
