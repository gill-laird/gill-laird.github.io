import "./App.css";
import styled from "@emotion/styled/macro";
import Menu from "./Components/Menu";
import BurgerMenu from "./Components/BurgerMenu";
import Content from "./Components/Content";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: fixed;
  top: 0px;
  right: 0px;
`;

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Wrapper className="App">
      {isMobile ? <BurgerMenu /> : <Menu />}
      <Content mobile={isMobile} />
    </Wrapper>
  );
}

export default App;
