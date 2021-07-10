import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  place-content: center;
  background-color: ${(props) =>
    props.background ? props.background : "unset"};
  color: ${(props) => (props.color ? props.color : "inherit")};
  height: ${(props) => (props.height ? props.height : "100vh")};
`;

const Container = ({ children, background, color, height }) => {
  return (
    <ItemContainer background={background} color={color} height={height}>
      {children}
    </ItemContainer>
  );
};

export default Container;
