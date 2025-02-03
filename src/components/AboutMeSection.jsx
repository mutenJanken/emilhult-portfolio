function AboutMeSection() {
  return (
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
            src={import.meta.env.BASE_URL + "src/assets/Images/Mecropped.jpeg"}
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
              development course at Nackademin. With a interest for data, and
              logic, I am pursuing a career in IT where I can develop and
              challenge my knowledge. During my studies, I have gained a good
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
              . I am looking forward to be able to apply these skills in a real
              work enviroment in the near future.
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
  );
}

export default AboutMeSection;
