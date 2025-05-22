import "./App.css";

function App() {
  return (
    <>
      <header>
          <h2 className="block-primary-main">PROTO<div className={"letterJ"}>J</div>AM</h2>
      </header>

      <nav className="navbar">
        <ul>
          <li>

          </li>
        </ul>
      </nav>

      <main className="text-box">

        <hgroup className="block-primary">

          <p className="block-primary-sub">Votre questionnaire HTML/CSS/Git</p>
        </hgroup>
        <p>prêt ?</p>
          <button className={"btnStart"} type={"button"}>Commencer</button>
      </main>

      <footer>
        Développé par
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
            <p>une équipe de bras cassés</p>
        </a>
      </footer>
    </>
  );
}

export default App;
