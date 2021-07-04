import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
`;

const Container = ({ children }) => {
  return <ItemContainer>{children}</ItemContainer>;
};

export default Container;
