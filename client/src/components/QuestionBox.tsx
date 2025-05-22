import { useState } from "react";

const questions = [
  {
    question: "À quoi sert la balise <meta> dans un document HTML ?",
    answers: [
      { label: "A", text: "Afficher du texte à l’écran", correct: false },
      { label: "B", text: "Ajouter une image", correct: false },
      {
        label: "C",
        text: "Fournir des métadonnées sur la page",
        correct: true,
      },
      { label: "D", text: "Insérer un tableau", correct: false },
    ],
  },
  {
    question: "Quelle balise est un conteneur sans signification sémantique ?",
    answers: [
      { label: "A", text: "<section>", correct: false },
      { label: "B", text: "<article>", correct: false },
      { label: "C", text: "<div>", correct: true },
      { label: "D", text: "<header>", correct: false },
    ],
  },
  {
    question: "Quelle syntaxe permet d’intégrer une image dans une page HTML ?",
    answers: [
      { label: "A", text: '<img href="image.jpg">', correct: false },
      {
        label: "B",
        text: '<img src="image.jpg" alt="Description">',
        correct: true,
      },
      { label: "C", text: '<image src="image.jpg">', correct: false },
      { label: "D", text: '<a src="image.jpg">', correct: false },
    ],
  },
  {
    question: "Quelle différence entre id et class ?",
    answers: [
      { label: "A", text: "id est partagé, class est unique", correct: false },
      {
        label: "B",
        text: "id est unique, class peut être partagée",
        correct: true,
      },
      { label: "C", text: "Aucun rôle en CSS", correct: false },
      { label: "D", text: "Les deux sont identiques", correct: false },
    ],
  },
  {
    question: "À quoi sert la balise <form> ?",
    answers: [
      { label: "A", text: "Structurer une liste", correct: false },
      { label: "B", text: "Créer un formulaire", correct: true },
      { label: "C", text: "Insérer une vidéo", correct: false },
      { label: "D", text: "Ajouter un menu", correct: false },
    ],
  },
  {
    question:
      "Quel attribut est obligatoire pour créer un lien hypertexte avec <a> ?",
    answers: [
      { label: "A", text: "src", correct: false },
      { label: "B", text: "alt", correct: false },
      { label: "C", text: "href", correct: true },
      { label: "D", text: "value", correct: false },
    ],
  },
  {
    question: "Quelle balise est utilisée pour une liste à puces ?",
    answers: [
      { label: "A", text: "<ol>", correct: false },
      { label: "B", text: "<ul>", correct: true },
      { label: "C", text: "<li>", correct: false },
      { label: "D", text: "<list>", correct: false },
    ],
  },
  {
    question: "Où place-t-on les métadonnées dans un document HTML ?",
    answers: [
      { label: "A", text: "Dans la balise <body>", correct: false },
      { label: "B", text: "Avant <!DOCTYPE>", correct: false },
      { label: "C", text: "Dans la balise <head>", correct: true },
      { label: "D", text: "Après la balise <footer>", correct: false },
    ],
  },
  {
    question: "Pourquoi l’attribut alt est-il important pour les images ?",
    answers: [
      { label: "A", text: "Pour afficher un titre en survol", correct: false },
      {
        label: "B",
        text: "Pour l’accessibilité et remplacer l’image si elle ne charge pas",
        correct: true,
      },
      { label: "C", text: "Pour indiquer le poids de l’image", correct: false },
      { label: "D", text: "Pour aligner l’image", correct: false },
    ],
  },
  {
    question: "Quelle balise permet d’insérer un fichier audio ?",
    answers: [
      { label: "A", text: "<sound>", correct: false },
      { label: "B", text: "<audio>", correct: true },
      { label: "C", text: "<music>", correct: false },
      { label: "D", text: "<media>", correct: false },
    ],
  },
  {
    question:
      "Comment centrer horizontalement un élément en CSS avec Flexbox ?",
    answers: [
      { label: "A", text: "justify-content: center;", correct: true },
      { label: "B", text: "align-items: center;", correct: false },
      { label: "C", text: "text-align: center;", correct: false },
      { label: "D", text: "float: center;", correct: false },
    ],
  },
  {
    question: "Quel sélecteur utilise un point (.) en CSS ?",
    answers: [
      { label: "A", text: "Type", correct: false },
      { label: "B", text: "Identifiant", correct: false },
      { label: "C", text: "Classe", correct: true },
      { label: "D", text: "Balise", correct: false },
    ],
  },
  {
    question:
      "Quelle pseudo-classe est utilisée pour modifier un lien au survol ?",
    answers: [
      { label: "A", text: ":focus", correct: false },
      { label: "B", text: ":active", correct: false },
      { label: "C", text: ":hover", correct: true },
      { label: "D", text: ":visited", correct: false },
    ],
  },
  {
    question: "Quelle commande récupère les modifications sans les fusionner ?",
    answers: [
      { label: "A", text: "git pull", correct: false },
      { label: "B", text: "git push", correct: false },
      { label: "C", text: "git clone", correct: false },
      { label: "D", text: "git fetch", correct: true },
    ],
  },
  {
    question: "Que fait git status ?",
    answers: [
      { label: "A", text: "Affiche les fichiers supprimés", correct: false },
      {
        label: "B",
        text: "Affiche l’état du dépôt (fichiers modifiés, en attente…)",
        correct: true,
      },
      { label: "C", text: "Fusionne les branches", correct: false },
      { label: "D", text: "Lance le serveur Git", correct: false },
    ],
  },
  {
    question: "Quelle commande initialise un dépôt Git local ?",
    answers: [
      { label: "A", text: "git start", correct: false },
      { label: "B", text: "git init", correct: true },
      { label: "C", text: "git create", correct: false },
      { label: "D", text: "git launch", correct: false },
    ],
  },
  {
    question: "Quelle commande permet de copier un dépôt distant en local ?",
    answers: [
      { label: "A", text: "git pull", correct: false },
      { label: "B", text: "git clone", correct: true },
      { label: "C", text: "git fetch", correct: false },
      { label: "D", text: "git copy", correct: false },
    ],
  },
  {
    question: "Que fait git push ?",
    answers: [
      {
        label: "A",
        text: "Télécharge les fichiers du dépôt distant",
        correct: false,
      },
      {
        label: "B",
        text: "Envoie les commits locaux vers le dépôt distant",
        correct: true,
      },
      { label: "C", text: "Annule la dernière modification", correct: false },
      { label: "D", text: "Crée un nouveau dépôt", correct: false },
    ],
  },
  {
    question: "Que fait la commande « say » sur un terminal de machine macOS ?",
    answers: [
      { label: "A", text: "Rien !", correct: false },
      {
        label: "B",
        text: "Dicte ce que je rentre dans le terminal",
        correct: true,
      },
      { label: "C", text: "Ouvre les portes des enfers !", correct: false },
      {
        label: "D",
        text: "Arrête la simulation dans laquelle nous sommes.",
        correct: false,
      },
    ],
  },
];

function QuestionBox() {
  const [clickCount, setClickCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  return questionCount < questions.length ? (
    <section className="questionBox">
      <h2>Question</h2>
      <p>{questions[questionCount].question}</p>

      <ul className="questionList">
        <li>
          <button
            className="question one block-primary-main-2"
            type="button"
            onClick={() => {
              setClickCount(clickCount + 1);
              if (questions[questionCount].answers[0].correct) {
                setQuestionCount(questionCount + 1);
              }
            }}
          >
            <p className="textOne">
              {questions[questionCount].answers[0].text}
            </p>
          </button>
        </li>
        <li>
          <button
            className="question two block-primary-main-2"
            type="button"
            onClick={() => {
              setClickCount(clickCount + 1);

              if (questions[questionCount].answers[1].correct) {
                setQuestionCount(questionCount + 1);
              }
            }}
          >
            <p className="textTwo">
              {questions[questionCount].answers[1].text}
            </p>
          </button>
        </li>
        <li>
          <button
            className="question three block-primary-main-2"
            type="button"
            onClick={() => {
              setClickCount(clickCount + 1);

              if (questions[questionCount].answers[2].correct) {
                setQuestionCount(questionCount + 1);
              }
            }}
          >
            <p className="textThree">
              {" "}
              {questions[questionCount].answers[2].text}
            </p>
          </button>
        </li>
        <li>
          <button
            className="question four block-primary-main-2"
            type="button"
            onClick={() => {
              setClickCount(clickCount + 1);

              if (questions[questionCount].answers[3].correct) {
                setQuestionCount(questionCount + 1);
              }
            }}
          >
            <p className="textFour">
              {" "}
              {questions[questionCount].answers[3].text}
            </p>
          </button>
        </li>
      </ul>
    </section>
  ) : (
    <h3>
      {" "}
      Bravo, ça ne t'a pris que {clickCount} clicks pour repondre aux{" "}
      {questionCount} questions !
    </h3>
  );
}

export default QuestionBox;
