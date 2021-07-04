import "./App.css";
import Nav from "./component/nav";
import Container from "./component/container";
import styled from "@emotion/styled";

const HeroElement = styled.div``;

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Container>
        <HeroElement>
          <h1>Bismillah</h1>
        </HeroElement>
      </Container>
    </div>
  );
};

export default App;
