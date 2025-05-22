import "./App.css";
import Quiz from "./components/Quiz"
import { questions } from "./components/question"

function App() {
  return (
    <>
      <header>
        <h1 className="logo">Protojam</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li>

          </li>
        </ul>
      </nav>

      <main className="text-box">

        <hgroup className="block-primary">
          
          <h2 className="block-primary-main">Protojam</h2>
          
          <p className="block-primary-sub">Votre questionnaire HTML/CSS/Git</p>
          
        </hgroup>
        <p>prêt ?</p>
        <Quiz questions={questions} />
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
