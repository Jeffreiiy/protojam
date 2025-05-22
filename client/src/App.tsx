import "./App.css";
import QuestionBox from "./components/QuestionBox.tsx";

function App() {
  return (
    <>
      <header>
          <h2 className="block-primary-main">PROTO<div className={"letterJ"}>J</div>AM</h2>
      </header>
      <main className="text-box">
        <section className="block-primary">
          <h2 className="block-primary-main">Protojam</h2>
          <p className="block-primary-sub">Votre questionnaire HTML/CSS/Git</p>
        </section>
        <QuestionBox />
      </main>
      <footer>
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </>
  );
}

export default App;
