const Footer = () => {
  return (
    <footer>
      Truly developed with{" "}
      <span role="img" aria-label="love">
        ♥️
      </span>{" "}
      by <a href="https://samx23.github.io">Sami Kalammallah</a> ©{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
