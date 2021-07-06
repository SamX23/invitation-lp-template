import styled from "@emotion/styled";

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  place-content: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 0 10rem;
  color: white;
  font-size: 3rem;

  span {
    margin-left: 1rem;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const Nav = ({ children }) => {
  return (
    <Navbar>
      <div>LOGO</div>
      <div>
        <span>
          <a href="#profile">ITEM</a>
        </span>
        <span>
          <a href="#description">ITEM</a>
        </span>
        <span>
          <a href="#gallery">ITEM</a>
        </span>
        <span>
          <a href="#maps">ITEM</a>
        </span>
      </div>
    </Navbar>
  );
};

export default Nav;
