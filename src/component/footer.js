import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
  background-color: azure;
  border-top: 2px dashed burlywood;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Truly developed with{" "}
        <span role="img" aria-label="love">
          {" "}
          ♥️{" "}
        </span>{" "}
        by <a href="https://samx23.github.io">Sami Kalammallah</a> ©{" "}
        {new Date().getFullYear()}
      </p>
    </FooterContainer>
  );
};

export default Footer;
