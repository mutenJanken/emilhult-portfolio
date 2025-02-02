import "./index.scss";

function App() {
  return (
    <>
      <header className="header-group" id="navbar">
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
        {/* <div className="weather-parent">
          <form className="weatherform">
            <input
              type="text"
              className="cityinput"
              placeholder="Enter a city"
              spellCheck="false"
            />
            <button type="submit" className="weather-button nav-buttons">
              Weather
            </button>
          </form>
          <div className="weather-card"></div>
        </div> */}
      </header>
      <main className="main-container">
        <section className="aboutme" id="aboutme">
          <div className="scroll-parent">
            <a href="#navbar" className="scroll-up-button nav-buttons">
              ⬆ Scroll Up
            </a>
          </div>
          <div className="text-container">
            <small className="syntax-style lang vartype">{"string "} </small>
            <h2 className="h2section">aboutMe</h2>
            <small className="syntax-style lang sign">=</small>
            <small className="syntax-style lang quotation">
              &quot;{"Hello! My..."}&quot;
            </small>
            <small className="syntax-style lang sign">;</small>
          </div>
          <div className="chat-bubble">
            <div className="chat-bubble pic">
              <img
                className="profile-pic"
                src="src/assets/Images/Mecropped.jpeg"
                alt="Bild på mig"
              />
            </div>
            <div className="aboutme-layout">
              <div className="p-layout">
                <div className="console-writeline-container">
                  <span className="syntax-style lang class">Console</span>
                  <span className="syntax-style lang sign">.</span>
                  <span className="syntax-style lang method">WriteLine</span>
                  <span className="syntax-style lang sign">{"("}</span>
                  <span className="syntax-style lang variable">aboutMe</span>
                  <span className="syntax-style lang sign">{")"}</span>
                  <span className="syntax-style lang sign">;</span>
                </div>
                <p className="aboutme-p">
                  <span className="syntax-style lang sign">{">"}</span>
                  {/* <span className="lang quotation">&quot;</span> */}
                  Hello! My name is Emil Hult, and I am a student in the{" "}
                  <strong>
                    <em className="highlight-word">.NET</em>
                  </strong>{" "}
                  development course at Nackademin. With a passion for data, and
                  logic, I am pursuing a career in IT where I can develop and
                  challenge my skills. During my studies, I have gained a solid
                  understanding of backend development with{" "}
                  <strong>
                    <em className="highlight-word">C#</em>
                  </strong>
                  , database management with{" "}
                  <strong>
                    <em className="highlight-word">SQL</em>
                  </strong>
                  , and frontend development with{" "}
                  <strong>
                    <em className="highlight-word">HTML</em>
                  </strong>
                  ,{" "}
                  <strong>
                    <em className="highlight-word">CSS</em>
                  </strong>
                  ,{" "}
                  <strong>
                    <em className="highlight-word">Javascript</em>
                  </strong>
                  <strong>
                    {" "}
                    and <em className="highlight-word">React</em>
                  </strong>
                  . I am looking forward to be able to apply these skills in a
                  real work enviroment in the near future.
                  {/* <span className="lang quotation">&quot;</span> */}
                </p>
                <div>
                  <span className="syntax-style lang vartype">string</span>
                  <span className="syntax-style lang array">{"[]"}</span>
                  <span className="syntax-style lang variable">Interests</span>
                  <span className="syntax-style lang sign">=</span>
                  <span className="syntax-style lang sign">{"{"}</span>
                  <span className="syntax-style lang quotation">&quot;</span>
                  <span className="syntax-style lang quotation">Books</span>
                  <span className="syntax-style lang quotation">&quot;</span>
                  <span className="syntax-style lang sign">,</span>
                  <span className="syntax-style lang quotation">&quot;</span>
                  <span className="syntax-style lang quotation">Exercise</span>
                  <span className="">&quot;</span>
                  <span className="syntax-style lang sign">,</span>
                  <span className="syntax-style lang quotation">&quot;</span>
                  <span className="syntax-style lang quotation">Guitar</span>
                  <span className="syntax-style lang quotation">&quot;</span>
                  <span className="syntax-style lang sign">{"}"}</span>
                  <span className="syntax-style lang sign">;</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="knowledge" id="knowledge">
          <div className="text-container">
            <span className="syntax-style lang list">List</span>
            <span className="syntax-style lang sign">{"<"}</span>
            <span className="syntax-style lang vartype">Images</span>
            <span className="syntax-style lang sign">{">"}</span>
            <h2 className="h2section">knowledge</h2>
            <span className="syntax-style lang sign">=</span>
            <span className="syntax-style lang vartype">new</span>
            <span className="syntax-style lang sign">{"()"}</span>
            <span className="syntax-style lang sign">{"{..."}</span>
          </div>
          <div>
            <img
              className="logos"
              src="src/assets/Images/CSharpimg.png"
              alt="Bild på C# logo"
              title="C#"
            />
            <img
              className="logos"
              src="src/assets/Images/T-SQLimg.png"
              alt="Bild på SQL logo"
              title="T-SQL"
            />
            <img
              className="logos"
              src="src/assets/Images/HTML img.png"
              alt="Bild på HTML logo"
              title="HTML"
            />
            <img
              className="logos"
              src="src/assets/Images/CSS img.png"
              alt="Bild på CSS logo"
              title="CSS"
            />
            <img
              className="logos"
              src="src/assets/Images/Javascipt img.png"
              alt="Bild på Javascript logo"
              title="Javascript"
            />
            <img
              className="logos"
              src="src/assets/Images/React-img.png"
              alt="Bild på React logo"
              title="React"
            />
            <span className="syntax-style lang sign">{"...};"}</span>
          </div>
        </section>

        <section className="projects" id="projects">
          {/* const response = await fetch("https://github.com/emilhult/projects") */}
          <div className="projects-layout">
            <div className="text-container">
              <span className="syntax-style lang vartype p">function</span>
              <span className="syntax-style lang method p">ProjectSection</span>
              <span className="syntax-style lang sign p">{"() {"}</span>
            </div>
            <div className="text-container indent2">
              <span className="syntax-style lang vartype p">const</span>
              <span className="syntax-style lang sign p">{"["}</span>
              <span className="syntax-style lang variable p">projects</span>
              <span className="syntax-style lang sign p">{","}</span>
              <span className="syntax-style lang method p">setProjects</span>
              <span className="syntax-style lang sign p">{"] ="}</span>
              <span className="syntax-style lang method p">useState</span>
              <span className="syntax-style lang sign p">{"([]);"}</span>
            </div>
            <div className="text-container indent2">
              <span className="syntax-style lang method p">useEffect</span>
              <span className="syntax-style lang sign p">{"(() => {"}</span>
            </div>
            <div className="text-container indent4">
              <span className="syntax-style lang vartype p">async</span>
              <span className="syntax-style lang vartype p">function</span>
              <span className="syntax-style lang method p">getProjects</span>
              <span className="syntax-style lang sign p">{"() {"}</span>
            </div>
            <div className="text-container indent6">
              <span className="syntax-style lang vartype p">const</span>
              <span className="syntax-style lang variable p">res</span>
              <span className="syntax-style lang sign p">=</span>
              <span className="syntax-style lang vartype p">await</span>
              <span className="syntax-style lang method p">fetch</span>
              <span className="syntax-style lang sign p">{"("}</span>
              <span className="syntax-style lang quotation p">&quot;</span>
              <a className="http-link" href="https://github.com/mutenJanken">
                <span className="syntax-style lang quotation text p">
                  https://github.com/emilhult/projects
                </span>
              </a>
              <span className="syntax-style lang quotation p">&quot;</span>
              <span className="syntax-style lang sign p">{");"}</span>
            </div>
            <div className="text-container indent6">
              <span className="syntax-style lang vartype p">const</span>
              <span className="syntax-style lang variable p">projects</span>
              <span className="syntax-style lang sign p">=</span>
              <span className="syntax-style lang vartype p">await</span>
              <span className="syntax-style lang variable p">res</span>
              <span className="syntax-style lang sign p">.</span>
              <span className="syntax-style lang method p">json</span>
              <span className="syntax-style lang sign p">{"("}</span>
              <span className="syntax-style lang sign p">{");"}</span>
            </div>
          </div>
          <div className="text-container">
            <span className="syntax-style lang method">setProjects</span>
            <span className="syntax-style lang sign">{"("}</span>
            <h2 className="h2section">projects</h2>
            <span className="syntax-style lang sign">{");"}</span>
          </div>
          <div className="projects-layout">
            <div className="text-container indent4">
              <span className="syntax-style lang sign">{"};"}</span>
            </div>
            <div className="text-container indent2">
              <span className="syntax-style lang sign">{"}, []);"}</span>
            </div>
            <div className="text-container indent2">
              <span className="syntax-style lang vartype">return</span>
              <span className="syntax-style lang sign">{"("}</span>
            </div>
            <div className="text-container indent4">
              <span className="syntax-style lang sign">{"<>"}</span>
            </div>
          </div>

          <article className="projects-article-content">
            <div className="text-container">
              <span className="syntax-style lang sign">{"<"}</span>
            </div>
            <a
              className="card"
              href="https://github.com/mutenJanken/ShotgunRefractored"
            >
              {/* <div>
                <img
                  className="shotgun-png"
                  src="src/assets/Images/ShotgunGamePic.png"
                  alt="Bild på shotgun spel"
                />
              </div> */}
              <div>
                <div className="card-text-container">
                  <h3 className="card-text">Shotgun Game</h3>
                  <small className="card-text">
                    A WinForms turn-based duel game with a scripted bot, built
                    in C# using OOP principles.
                  </small>
                </div>
              </div>
            </a>
            <div className="text-container">
              <span className="syntax-style lang sign">{"/>"}</span>
            </div>
            <div className="text-container">
              <span className="syntax-style lang sign">{"<"}</span>
            </div>
            <a className="card" href="https://github.com/mutenJanken/AdsADONET">
              {/* <div>
                <img
                  className="shotgun-png"
                  src="src/assets/Images/Listing App.png"
                  alt="Bild på listing app"
                />
              </div> */}
              <div className="card-text-container">
                <h3 className="card-text">Listing app</h3>
                <small className="card-text">
                  A WinForms application built with ADO.NET and T-SQL for data
                  management.
                </small>
              </div>
            </a>
            <div className="text-container">
              <span className="syntax-style lang sign">{"/>"}</span>
            </div>
          </article>
          <div className="projects-layout">
            <div className="text-container indent4">
              <span className="syntax-style lang sign">{"</>"}</span>
            </div>
            <div className="text-container indent2">
              <span className="syntax-style lang sign">{");"}</span>
            </div>
            <div className="text-container">
              <span className="syntax-style lang vartype">return</span>
              <span className="syntax-style lang sign">{"}"}</span>
            </div>
            <div className="text-container">
              <span className="syntax-style lang vartype">export</span>
              <span className="syntax-style lang vartype">default</span>
              <span className="syntax-style lang method">ProjectSection</span>
              <span className="syntax-style lang sign">;</span>
            </div>
          </div>
        </section>
        {/* <section className="reference" id="reference">
          <h2 className="h2section">Reference</h2>
          <article>
            <div className="reference-content">
              <h2 className="h2reference">Past Experience</h2>
              <h3>
                Logistikcentrum, Danderyds sjukhus AB, JIT(Just in time)
                Implementerare
              </h3>
              <p>
                Implementering av beställningstjänsten JIT på diverse kliniker
                och avdelningar på Danderyds sjukhus.{" "}
              </p>
              <p>December 2022 – Augusti 2024</p>
              <h3>Logistikcentrum, Danderyds sjukhus AB– Vaktmästare JIT</h3>
              <p>Inom produktionen.</p>
              <p>November 2020 - December 2022</p>
            </div>
            <div className="reference-content">
              <h2 className="h2reference">Education</h2>
              <h3>Nackademin, Solna– 2024-2026</h3>
              <p>Programutvecklare .NET</p>
              <h3>Marina Läroverket, Stocksund– 2009-2012</h3>
              <p>Marinteknik</p>
            </div>
          </article>
        </section> */}
        <section className="socials" id="socials">
          <h2 className="h2section">Socials</h2>
          <div className="socials-layout">
            <a href="https://github.com/mutenJanken" className="github-button">
              <img
                className="github-logo"
                src="src/assets/Images/Github logo.png"
                alt="Bild inom knapp på github-logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/emil-hult-a47a87326/"
              className="linkedin-button"
            >
              <img
                className="linkedin-logo"
                src="src/assets/Images/LinkedIn logo.png"
                alt="Bild inom knapp på linkedin-logo"
              />
            </a>
          </div>
        </section>
        {/* <section className="contactme" id="contactme">
          <h2 className="h2section">Contact Me</h2>
          <form id="form1" noValidate>
            <article className="contact-me-form">
              <div className="input-parent">
                <label htmlFor="emailaddress" className="label">
                  Enter emailaddress
                </label>
                <input
                  type="email"
                  className="emailaddress "
                  id="emailaddress"
                  placeholder="emailaddress@something.com"
                  required
                  data-pristine-required-message="Whoopsie, cannot be left empty"
                  data-pristine-email-message="Enter a valid email address"
                  spellCheck="false"
                />
              </div>
              <div className="input-parent">
                <label htmlFor="message" className="label">
                  Enter message
                </label>
                <textarea
                  className="message"
                  name="message"
                  id="message"
                  placeholder="Write message here"
                  required
                  data-pristine-required-message="Whoopsie, cannot be left empty"
                  data-pristine-minlength="20"
                  data-pristine-minlength-message="Must be atleast 20 characters"
                  spellCheck="false"
                ></textarea>
              </div>
              <div className="send-parent">
                <button type="submit" className="send-button nav-buttons">
                  Send Message
                </button>
              </div>
            </article>
          </form>
        </section> */}
      </main>
      <footer>© Emil Hult - Nackademin</footer>
      <script src="https://cdn.jsdelivr.net/npm/pristinejs@1.1.0/dist/pristine.min.js"></script>
      <script src="index.js"></script>
    </>
  );
}

export default App;
