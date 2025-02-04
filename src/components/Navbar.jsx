function Navbar() {
  return (
    <nav className="navbar">
      <a href="#aboutme" className="aboutme-button nav-buttons">
        About Me
      </a>
      <a href="#knowledge" className="knowledge-button nav-buttons">
        Knowledge
      </a>
      <a href="#projects" className="projects-button nav-buttons">
        Projects
      </a>
      <a href="#socials" className="socials-button nav-buttons">
        Socials
      </a>
      <a
        href="assets/emil-hult-resumé.pdf"
        className="resume-button nav-buttons"
      >
        Resume
      </a>
      <a
        href="mailto:emilhult@live.se"
        className="contactme-button nav-buttons"
      >
        Contact Me{" "}
      </a>
    </nav>
  );
}

export default Navbar;
