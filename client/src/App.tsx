import "./App.css";
import QuestionBox from "./components/QuestionBox";
import "./components/QuestionBox.css";
import Titles from "./components/Title";
import "./components/Titles.css";

function App() {
  return (
    <>
      <header>
        <Titles />
        <h2 className="block-primary-main3">Protojam</h2>
      </header>
      <main className="text-box">
        <section className="block-primary">
          <p className="block-primary-sub">
            Votre questionnaire{" "}
            <span className="block-primary-main2">
              H<span className="t">T</span>ML/C<span className="s">S</span>S/Gi
              <span className="t">t</span>
            </span>
          </p>
        </section>
        <QuestionBox />
      </main>
    </>
  );
}

export default App;
