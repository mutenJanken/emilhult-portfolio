import AboutMeSection from "./AboutMeSection";
import KnowledgeSection from "./KnowledgeSection";
import ProjectSection from "./ProjectSection";
function MainContent() {
  return (
    <main className="main-container">
      <AboutMeSection />
      <KnowledgeSection />
      <ProjectSection />

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
