import styled from "styled-components";

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10rem;
  color: white;
  height: 4rem;

  h1,
  span {
    font-size: 2rem;
  }

  span {
    margin-left: 1rem;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const RSVP = styled.button`
  text-transform: uppercase;
  font-weight: bolder;
  background-color: unset;
  color: white;
  border: 2px dashed white;
  height: 100%;
  width: 5rem;
  padding: 0 1rem;
  margin: 0 1rem;
`;

const Nav = ({ children }) => {
  return (
    <Navbar>
      <h1>LOGO</h1>
      <div>
        <span>
          <a href="#profile">Profile</a>
        </span>
        <span>
          <a href="#description">Description</a>
        </span>
        <span>
          <a href="#gallery">Gallery</a>
        </span>
        <span>
          <a href="#maps">Maps</a>
        </span>
      </div>
      <RSVP>test</RSVP>
    </Navbar>
  );
};

export default Nav;
