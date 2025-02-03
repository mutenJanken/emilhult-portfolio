function SocialsSection() {
  return (
    <section className="socials" id="socials">
      <h2 className="h2section">Socials</h2>
      <div className="socials-layout">
        <a href="https://github.com/mutenJanken" className="github-button">
          <img
            className="github-logo"
            src="./src/assets/Images/Github logo.png"
            alt="Bild inom knapp på github-logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/emil-hult-a47a87326/"
          className="linkedin-button"
        >
          <img
            className="linkedin-logo"
            src="./src/assets/Images/LinkedIn logo.png"
            alt="Bild inom knapp på linkedin-logo"
          />
        </a>
      </div>
    </section>
  );
}

export default SocialsSection;
