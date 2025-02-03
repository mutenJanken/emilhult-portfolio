import AboutMeSection from "./AboutMeSection";
import KnowledgeSection from "./KnowledgeSection";
import ProjectSection from "./ProjectSection";
import SocialsSection from "./SocialsSection";

function MainContent() {
  return (
    <main className="main-container">
      <AboutMeSection />
      <KnowledgeSection />
      <ProjectSection />
      <SocialsSection />

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
