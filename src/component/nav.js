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

  span {
    margin-left: 1rem;
  }
`;

const Nav = ({ children }) => {
  return (
    <Navbar>
      <div>LOGO</div>
      <div>
        <span>ITEM</span>
        <span>ITEM</span>
        <span>ITEM</span>
        <span>ITEM</span>
      </div>
    </Navbar>
  );
};

export default Nav;
