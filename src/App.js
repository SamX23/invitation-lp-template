import "./App.css";
import Nav from "./component/nav";
import Container from "./layout/container";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Container>
        <h1>Bismillah</h1>
      </Container>
    </div>
  );
};

export default App;
