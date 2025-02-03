import "./index.scss";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      {/* <header className="header-group" id="navbar">
        <div className="text-container">
          <small className="syntax-style">{"/dev>"} </small>
          <h1>Emil Hult</h1>
        </div>
        <div className="text-container">
          <small className="syntax-style small">{" > "} </small>
          <h2 className="syntax-style text">Aspiring developer in training</h2>
        </div>
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
        </nav>
      </header> */}

      <footer>© Emil Hult - Nackademin</footer>
      <script src="https://cdn.jsdelivr.net/npm/pristinejs@1.1.0/dist/pristine.min.js"></script>
      <script src="index.js"></script>
    </>
  );
}

export default App;
