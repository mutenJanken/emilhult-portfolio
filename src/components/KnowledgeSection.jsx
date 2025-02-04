function KnowledgeSection() {
  return (
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
        <img className="logos" src="src/assets/Images/favicon.png" alt="" />
        <img
          className="logos"
          src="./src/assets/images/csharp.png"
          alt="Bild på C# logo"
          title="C#"
        />
        <img
          className="logos"
          src="./src/assets/images/tsql.png"
          alt="Bild på SQL logo"
          title="T-SQL"
        />
        <img
          className="logos"
          src="./src/assets/images/html.png"
          alt="Bild på HTML logo"
          title="HTML"
        />
        <img
          className="logos"
          src="./src/assets/images/css.png"
          alt="Bild på CSS logo"
          title="CSS"
        />
        <img
          className="logos"
          src="./src/assets/images/javascipt.png"
          alt="Bild på Javascript logo"
          title="Javascript"
        />
        <img
          className="logos"
          src="./src/assets/images/react.png"
          alt="Bild på React logo"
          title="React"
        />
        <span className="syntax-style lang sign">{"...};"}</span>
      </div>
    </section>
  );
}

export default KnowledgeSection;
