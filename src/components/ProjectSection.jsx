function ProjectSection() {
  return (
    <section className="projects" id="projects">
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
              https://api.github.com/..
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
        {/* Bowling Game project */}
        <div className="card-wrapper">
          <div className="text-container">
            <span className="syntax-style lang divsign">{"<"}</span>
          </div>
          <a
            className="card"
            href="https://github.com/mutenJanken/BowlingAlley"
          >
            <div>
              <div className="card-text-container">
                <h3 className="card-text-h3">Simulated Bowling Game</h3>
                <small className="card-text-small">
                  BowlingAlley is a console-based bowling simulation using
                  Entity Framework for data management. It features random score
                  generation and tracks match results. The code is structured
                  with design patterns like Singleton, Strategy, and Facade.
                </small>
              </div>
            </div>
          </a>
          <div className="text-container">
            <span className="syntax-style lang prop p">proj</span>
            <span className="syntax-style lang sign p">=</span>
            <span className="syntax-style lang sign p">{"{"}</span>
            <span className="syntax-style lang variable p">proj..</span>
            <span className="syntax-style lang sign p">{"}"}</span>
            <span className="syntax-style lang divsign">{"/>"}</span>
          </div>
        </div>

        {/* Portfolio project */}
        <div className="card-wrapper">
          <div className="text-container">
            <span className="syntax-style lang divsign">{"<"}</span>
          </div>
          <a
            className="card"
            href="https://github.com/mutenJanken/emilhult-portfolio"
          >
            <div className="card-text-container">
              <h3 className="card-text-h3">Portfolio Website</h3>
              <small className="card-text-small">
                A personal portfolio built with React, Sass, and HTML, featuring
                various sections and a navbar for easy navigation. Showcasing
                Projects, Skills, and a link to my resume.
              </small>
            </div>
          </a>
          <div className="text-container">
            <span className="syntax-style lang prop p">proj</span>
            <span className="syntax-style lang sign p">=</span>
            <span className="syntax-style lang sign p">{"{"}</span>
            <span className="syntax-style lang variable p">proj..</span>
            <span className="syntax-style lang sign p">{"}"}</span>
            <span className="syntax-style lang divsign">{"/>"}</span>
          </div>
        </div>

        {/* Listing project */}
        <div className="card-wrapper">
          <div className="text-container">
            <span className="syntax-style lang divsign">{"<"}</span>
          </div>
          <a className="card" href="https://github.com/mutenJanken/AdsADONET">
            <div className="card-text-container">
              <h3 className="card-text-h3">Listing app</h3>
              <small className="card-text-small">
                A WinForms application built with ADO.NET and T-SQL for data
                management.
              </small>
            </div>
          </a>
          <div className="text-container">
            <span className="syntax-style lang prop p">proj</span>
            <span className="syntax-style lang sign p">=</span>
            <span className="syntax-style lang sign p">{"{"}</span>
            <span className="syntax-style lang variable p">proj..</span>
            <span className="syntax-style lang sign p">{"}"}</span>
            <span className="syntax-style lang divsign">{"/>"}</span>
          </div>
        </div>

        {/* shotgun game project */}
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
                <h3 className="card-text-h3">Shotgun Game</h3>
                <small className="card-text-small">
                  A WinForms turn-based duel game with a scripted bot, built in
                  C# using OOP principles.
                </small>
              </div>
            </div>
          </a>
          <div className="text-container">
            <span className="syntax-style lang prop p">proj</span>
            <span className="syntax-style lang sign p">=</span>
            <span className="syntax-style lang sign p">{"{"}</span>
            <span className="syntax-style lang variable p">proj..</span>
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
  );
}

export default ProjectSection;
