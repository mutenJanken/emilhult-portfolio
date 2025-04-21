function AboutMeSection() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="scroll-parent">
        <a href="#navbar" className="scroll-up-button nav-buttons">
          ⬆ Scroll Up
        </a>
      </div>
      <div className="chat-bubble">
        <div className="chat-bubble pic">
          <img className="profile-pic" src="Images/me.jpeg" alt="Bild på mig" />
        </div>
        <div className="aboutme-layout">
          <div className="p-layout">
            <div className="text-container">
              <small className="syntax-style lang vartype">{"string "} </small>
              <h2 className="h2section">aboutMe</h2>
              <small className="syntax-style lang sign">=</small>
              <small className="syntax-style lang quotation">&quot;{"Currently..."}&quot;</small>
              <small className="syntax-style lang sign">;</small>
            </div>
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
              {/* <span className="syntax-style lang sign">{">"}</span> */}
              {/* <span className="lang quotation">&quot;</span> */}
              Currently a student in the{" "}
              <strong>
                <em className="highlight-word">.NET</em>
              </strong>{" "}
              development program at Nackademin. With a knack for logic and problem-solving, I am pursuing a
              career in IT where I can grow and challenge my knowledge. So far, I've gained experience in
              backend development with{" "}
              <strong>
                <em className="highlight-word">C#</em>
              </strong>
              , database management with{" "}
              <strong>
                <em className="highlight-word">SQL </em>
                using
                <em className="highlight-word">{" Entity framework "}</em>and
                <em className="highlight-word">{" ADO.NET"}</em>
              </strong>
              . Combining this with{" "}
              <strong>
                <em className="highlight-word">ASP.NET</em>
              </strong>{" "}
              to handle frontend{" "}
              <strong>
                <em className="highlight-word">API</em>
              </strong>{" "}
              calls and utilizing{" "}
              <strong>
                <em className="highlight-word">Microsoft Azure</em>
              </strong>{" "}
              as cloud-based backend solution for data storage.
              <p>
                I've also gained experience in Frontend development using{" "}
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
                  and <em className="highlight-word">React. </em>
                </strong>
              </p>
              <p className="internship-period">
                <strong> <em> Internship period: November 2025 - May 2026.</em></strong>
              <div className="internship-period text ">
                Seeking an opportunity where I can grow and hopefully make some meaningful
                contributions along the way. 
              </div>
              </p>
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
              <span className="syntax-style lang quotation">Hockey</span>
              <span className="syntax-style lang quotation">&quot;</span>
              <span className="syntax-style lang sign">,</span>
              <span className="syntax-style lang quotation">&quot;</span>
              <span className="syntax-style lang quotation">Exercise</span>
              <span className="syntax-style lang quotation">&quot;</span>
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
  );
}

export default AboutMeSection;
