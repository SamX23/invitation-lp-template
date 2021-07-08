import "./App.css";
import Nav from "./component/nav";
import Container from "./component/container";
import styled from "@emotion/styled";
import Footer from "./component/footer";

const HeroElement = styled.div`
  background-image: url("/assets/bg-main.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

const ProfileElement = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const App = () => {
  return (
    <div className="App">
      <Nav />
      <HeroElement>
        <Container>
          <span>Virtual Wedding Invitation</span>
          <h1>Sami & Rifka</h1>
          <span>07-01-2017</span>
        </Container>
      </HeroElement>
      <Container>
        <ProfileElement>
          <h1>Profile</h1>
          <h1>Profile</h1>
          <h1>Profile</h1>
        </ProfileElement>
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
