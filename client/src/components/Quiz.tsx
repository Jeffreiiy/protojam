import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Quiz.css"; // Utilise le CSS existant de ton App.css

interface Answer {
  label: string;
  text: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [positions, setPositions] = useState<{
    q: { top: number; left: number };
    a: Array<{ top: number; left: number }>;
  } | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const generateRandomPositions = (q: Question) => {
    return {
      q: { top: 15 + Math.random() * 15, left: 10 + Math.random() * 60 },
      a: q.answers.map(() => ({
        top: 40 + Math.random() * 40,
        left: 5 + Math.random() * 80,
      })),
    };
  };

  const nextQuestion = () => {
    const newQuestion = getRandomQuestion();
    setCurrentQuestion(newQuestion);
    setPositions(generateRandomPositions(newQuestion));
    setSelectedAnswer(null);
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  if (!currentQuestion || !positions)
    return <div className="loading">Chargement...</div>;

  return (
    <div className="quiz-container">
      {" "}
      {/* Supprime le fond ici */}
      {/* Header conservé */}
      <header>
        <h1 className="logo">Protojam</h1>
      </header>
      {/* Question animée */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="question block-primary-main" // Utilise tes classes existantes
        style={{
          top: `${positions.q.top}%`,
          left: `${positions.q.left}%`,
        }}
      >
        {currentQuestion.question}
      </motion.div>
      {/* Réponses animées */}
      {currentQuestion.answers.map((answer, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className={`answer-btn ${selectedAnswer === index ? (answer.correct ? "correct" : "incorrect") : ""}`}
          style={{
            position: "absolute",
            top: `${positions.a[index].top}%`,
            left: `${positions.a[index].left}%`,
          }}
          onClick={() => {
            setSelectedAnswer(index);
            if (answer.correct) setScore(score + 1);
            setTimeout(nextQuestion, 1500);
          }}
          disabled={selectedAnswer !== null}
        >
          {answer.text}
        </motion.button>
      ))}
      {/* Score et footer conservés */}
      <div className="score-display">Score: {score}</div>
      <footer>
        Développé par
        <a
          href="https://www.wildcodeschool.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>une équipe de bras cassés</p>
        </a>
      </footer>
    </div>
  );
}
