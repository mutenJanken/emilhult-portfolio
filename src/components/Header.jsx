import Navbar from "./Navbar";
function Header() {
  return (
    <header className="header-group" id="navbar">
      <div className="text-container">
        <small className="syntax-style">{"/dev>"} </small>
        <h1>Emil Hult</h1>
      </div>
      <div className="text-container">
        <small className="syntax-style small">{" > "} </small>
        <h2 className="syntax-style text">Aspiring developer in training</h2>
      </div>
      <Navbar />
      {/* <nav className="navbar">
        <a href="#aboutme" className="aboutme-button nav-buttons">
          About Me
        </a>
        <a href="#knowledge" className="knowledge-button nav-buttons">
          Knowledge
        </a>
        <a href="#projects" className="projects-button nav-buttons">
          Projects
        </a>
        <a
          href="src/assets/Emil Hult Resumé.pdf
          "
          className="resume-button nav-buttons"
        >
          Resume
        </a>
        <a href="#socials" className="socials-button nav-buttons">
          Socials
        </a>
        <a
          href="mailto:emilhult@live.se"
          className="contactme-button nav-buttons"
        >
          Contact Me{" "}
        </a>
      </nav> */}
    </header>
  );
}

export default Header;
