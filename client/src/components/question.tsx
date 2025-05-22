export const questions = [
  {
    question: "À quoi sert la balise <meta> dans un document HTML ?",
    answers: [
      { label: "", text: "Afficher du texte à l’écran", correct: false },
      { label: "", text: "Ajouter une image", correct: false },
      { label: "", text: "Fournir des métadonnées sur la page", correct: true },
      { label: "", text: "Insérer un tableau", correct: false }
    ]
  },
  {
    question: "Quelle balise est un conteneur sans signification sémantique ?",
    answers: [
      { label: "", text: "<section>", correct: false },
      { label: "", text: "<article>", correct: false },
      { label: "", text: "<div>", correct: true },
      { label: "", text: "<header>", correct: false }
    ]
  },
  {
    question: "Quelle syntaxe permet d’intégrer une image dans une page HTML ?",
    answers: [
      { label: "", text: '<img href="image.jpg">', correct: false },
      { label: "", text: '<img src="image.jpg" alt="Description">', correct: true },
      { label: "", text: '<image src="image.jpg">', correct: false },
      { label: "", text: '<a src="image.jpg">', correct: false }
    ]
  },
  {
    question: "Quelle différence entre id et class ?",
    answers: [
      { label: "", text: "id est partagé, class est unique", correct: false },
      { label: "", text: "id est unique, class peut être partagée", correct: true },
      { label: "", text: "Aucun rôle en CSS", correct: false },
      { label: "", text: "Les deux sont identiques", correct: false }
    ]
  },
  {
    question: "À quoi sert la balise <form> ?",
    answers: [
      { label: "", text: "Structurer une liste", correct: false },
      { label: "", text: "Créer un formulaire", correct: true },
      { label: "", text: "Insérer une vidéo", correct: false },
      { label: "", text: "Ajouter un menu", correct: false }
    ]
  },
  {
    question: "Quel attribut est obligatoire pour créer un lien hypertexte avec <a> ?",
    answers: [
      { label: "", text: "src", correct: false },
      { label: "", text: "alt", correct: false },
      { label: "", text: "href", correct: true },
      { label: "", text: "value", correct: false }
    ]
  },
  {
    question: "Quelle balise est utilisée pour une liste à puces ?",
    answers: [
      { label: "", text: "<ol>", correct: false },
      { label: "", text: "<ul>", correct: true },
      { label: "", text: "<li>", correct: false },
      { label: "", text: "<list>", correct: false }
    ]
  },
  {
    question: "Où place-t-on les métadonnées dans un document HTML ?",
    answers: [
      { label: "", text: "Dans la balise <body>", correct: false },
      { label: "", text: "Avant <!DOCTYPE>", correct: false },
      { label: "", text: "Dans la balise <head>", correct: true },
      { label: "", text: "Après la balise <footer>", correct: false }
    ]
  },
  {
    question: "Pourquoi l’attribut alt est-il important pour les images ?",
    answers: [
      { label: "", text: "Pour afficher un titre en survol", correct: false },
      { label: "", text: "Pour l’accessibilité et remplacer l’image si elle ne charge pas", correct: true },
      { label: "", text: "Pour indiquer le poids de l’image", correct: false },
      { label: "", text: "Pour aligner l’image", correct: false }
    ]
  },
  {
    question: "Quelle balise permet d’insérer un fichier audio ?",
    answers: [
      { label: "", text: "<sound>", correct: false },
      { label: "", text: "<audio>", correct: true },
      { label: "", text: "<music>", correct: false },
      { label: "", text: "<media>", correct: false }
    ]
  },
  {
    question: "Comment centrer horizontalement un élément en CSS avec Flexbox ?",
    answers: [
      { label: "", text: "justify-content: center;", correct: true },
      { label: "", text: "align-items: center;", correct: false },
      { label: "", text: "text-align: center;", correct: false },
      { label: "", text: "float: center;", correct: false }
    ]
  },
  {
    question: "Quel sélecteur utilise un point (.) en CSS ?",
    answers: [
      { label: "", text: "Type", correct: false },
      { label: "", text: "Identifiant", correct: false },
      { label: "", text: "Classe", correct: true },
      { label: "", text: "Balise", correct: false }
    ]
  },
  {
    question: "Quelle pseudo-classe est utilisée pour modifier un lien au survol ?",
    answers: [
      { label: "", text: ":focus", correct: false },
      { label: "", text: ":active", correct: false },
      { label: "", text: ":hover", correct: true },
      { label: "", text: ":visited", correct: false }
    ]
  },
  {
    question: "Quelle commande récupère les modifications sans les fusionner ?",
    answers: [
      { label: "", text: "git pull", correct: false },
      { label: "", text: "git push", correct: false },
      { label: "", text: "git clone", correct: false },
      { label: "D", text: "git fetch", correct: true }
    ]
  },
  {
    question: "Que fait git status ?",
    answers: [
      { label: "", text: "Affiche les fichiers supprimés", correct: false },
      { label: "", text: "Affiche l’état du dépôt (fichiers modifiés, en attente…)", correct: true },
      { label: "", text: "Fusionne les branches", correct: false },
      { label: "", text: "Lance le serveur Git", correct: false }
    ]
  },
  {
    question: "Quelle commande initialise un dépôt Git local ?",
    answers: [
      { label: "", text: "git start", correct: false },
      { label: "", text: "git init", correct: true },
      { label: "", text: "git create", correct: false },
      { label: "D", text: "git launch", correct: false }
    ]
  },
  {
    question: "Quelle commande permet de copier un dépôt distant en local ?",
    answers: [
      { label: "", text: "git pull", correct: false },
      { label: "", text: "git clone", correct: true },
      { label: "", text: "git fetch", correct: false },
      { label: "", text: "git copy", correct: false }
    ]
  },
  {
    question: "Que fait git push ?",
    answers: [
      { label: "", text: "Télécharge les fichiers du dépôt distant", correct: false },
      { label: "", text: "Envoie les commits locaux vers le dépôt distant", correct: true },
      { label: "", text: "Annule la dernière modification", correct: false },
      { label: "", text: "Crée un nouveau dépôt", correct: false }
    ]
  },
  {
    question: "Que fait la commande « say » sur un terminal de machine macOS ?",
    answers: [
      { label: "", text: "Rien !", correct: false },
      { label: "", text: "Dicte ce que je rentre dans le terminal", correct: true },
      { label: "", text: "Ouvre les portes des enfers !", correct: false },
      { label: "", text: "Arrête la simulation dans laquelle nous sommes.", correct: false }
    ]
  }
];

