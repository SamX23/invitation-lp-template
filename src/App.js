import "./App.css";
import Nav from "./component/nav";
import Container from "./component/container";
import styled from "@emotion/styled";
import Footer from "./component/footer";

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
      <Container>
        <h1>Profile</h1>
      </Container>
      <Container>
        <h1>Description</h1>
      </Container>
      <Container>
        <h1>Gallery</h1>
      </Container>
      <Container>
        <h1>Maps</h1>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
