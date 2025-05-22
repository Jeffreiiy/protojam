import "./App.css";
import QuestionBox from "./components/QuestionBox";
import "./components/QuestionBox.css";
import Titles from "./components/Titles";
import "./components/Titles.css";

function App() {
  return (
    <>
      <header>
        <Titles />
      </header>
      <main className="text-box">
        <hgroup className="block-primary">
          <p className="block-primary-sub">Votre questionnaire HTML/CSS/Git</p>
        </hgroup>

        <QuestionBox />
      </main>
    </>
  );
}

export default App;
