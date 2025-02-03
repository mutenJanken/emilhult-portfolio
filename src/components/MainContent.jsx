import AboutMeSection from "./AboutMeSection";
function MainContent() {
  return (
    <main className="main-container">
      <AboutMeSection />

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
            <span className="syntax-style lang sign p">{"("}</span>
            <span className="syntax-style lang sign p array">{"[]"}</span>
            <span className="syntax-style lang sign p">{");"}</span>
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
                https://api.github.com/users/emilhult/repos
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
            <span className="syntax-style lang sign p">{"}"}</span>
          </div>
          <div className="text-container indent4">
            <span className="syntax-style lang sign method p">getProjects</span>
            <span className="syntax-style lang sign p">{"();"}</span>
          </div>
          <div className="text-container indent2">
            <span className="syntax-style lang sign p">{"},"}</span>
            <span className="syntax-style lang sign p array">{"[]"}</span>
            <span className="syntax-style lang sign p">{");"}</span>
          </div>
          <div className="text-container indent2">
            <span className="syntax-style lang vartype p">return</span>
            <span className="syntax-style lang sign p">{"("}</span>
          </div>
          <div className="text-container indent4">
            <span className="syntax-style lang sign p">{"<>"}</span>
          </div>
        </div>

        <article className="projects-article-content">
          <div className="card-wrapper">
            <div className="text-container">
              <span className="syntax-style lang divsign">{"<"}</span>
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
              <span className="syntax-style lang prop p">projects</span>
              <span className="syntax-style lang sign p">=</span>
              <span className="syntax-style lang sign p">{"{"}</span>
              <span className="syntax-style lang variable p">projects</span>
              <span className="syntax-style lang sign p">{"}"}</span>
              <span className="syntax-style lang divsign">{"/>"}</span>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="text-container">
              <span className="syntax-style lang divsign">{"<"}</span>
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
              <span className="syntax-style lang prop p">projects</span>
              <span className="syntax-style lang sign p">=</span>
              <span className="syntax-style lang sign p">{"{"}</span>
              <span className="syntax-style lang variable p">projects</span>
              <span className="syntax-style lang sign p">{"}"}</span>
              <span className="syntax-style lang divsign">{"/>"}</span>
            </div>
          </div>
        </article>
        <div className="projects-layout">
          <div className="text-container indent4">
            <span className="syntax-style lang sign p">{"</>"}</span>
          </div>
          <div className="text-container indent2">
            <span className="syntax-style lang sign p">{");"}</span>
          </div>
          <div className="text-container">
            <span className="syntax-style lang sign p">{"}"}</span>
          </div>
          <div className="text-container">
            <span className="syntax-style lang vartype p">export default</span>
            <span className="syntax-style lang method">ProjectSection</span>
            <span className="syntax-style lang sign p">;</span>
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
  );
}

export default MainContent;
