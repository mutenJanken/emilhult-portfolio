function Navbar() {
  return (
    <nav className="navbar">
      <a href="#aboutme" className="nav-buttons">
        About Me
      </a>
      <a href="#knowledge" className="nav-buttons">
        Knowledge
      </a>
      <a href="#projects" className="nav-buttons">
        Projects
      </a>
      {/* <a href="#socials" className="nav-buttons">
        Socials
      </a> */}
      <a href="assets/emilhultresume.pdf" className="nav-buttons">
        Resume
      </a>
      <a href="mailto:emilhult@live.se" className="nav-buttons">
        Contact Me
      </a>
    </nav>
  );
}

export default Navbar;
