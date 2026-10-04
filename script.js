// ==========================
// ENKA - SCRIPT
// ==========================


// ==========================
// THÈMES
// ==========================

const themes = {
  girl: {
    primary: "#e85d91",
    secondary: "#f8d9e6",
    background: "#fff9fc"
  },

  boy: {
    primary: "#4d7cff",
    secondary: "#dce7ff",
    background: "#f8faff"
  },

  neutral: {
    primary: "#8667d8",
    secondary: "#e8e0ff",
    background: "#faf9ff"
  }
};


function applyTheme(themeName) {

  const theme = themes[themeName];

  if (!theme) return;

  document.documentElement.style.setProperty(
    "--primary",
    theme.primary
  );

  document.documentElement.style.setProperty(
    "--secondary",
    theme.secondary
  );

  document.documentElement.style.setProperty(
    "--background",
    theme.background
  );
}


// ==========================
// DONNÉES
// ==========================

let questions = JSON.parse(
  localStorage.getItem("enkaQuestions")
) || [

  {
    id: Date.now() + 1,
    category: "Amitié",
    title: "Comment savoir si une personne est vraiment mon amie ?",
    description: "Une question que beaucoup de personnes se posent...",
    answer:
      "Une vraie amitié repose généralement sur le respect, la confiance et la possibilité d'être soi-même. Une personne peut être une vraie amie même si elle n'est pas toujours d'accord avec toi."
  },

  {
    id: Date.now() + 2,
    category: "École",
    title: "Comment gérer le stress avant un contrôle ?",
    description: "Quelques idées simples pour mieux gérer la pression.",
    answer:
      "Essaie de préparer tes affaires à l'avance, de réviser par petites sessions et de prendre quelques respirations lentes avant le contrôle. Tu n'as pas besoin d'être parfait(e) pour réussir."
  },

  {
    id: Date.now() + 3,
    category: "Bien-être",
    title: "Pourquoi est-ce que je me sens parfois perdu(e) ?",
    description: "Il est normal d'avoir parfois besoin de comprendre ce qu'on ressent.",
    answer:
      "Se sentir perdu(e) peut arriver lorsqu'on traverse beaucoup de changements ou qu'on réfléchit à son avenir. Prendre le temps d'identifier ce que tu ressens peut déjà aider."
  }

];


let currentCategory = "Toutes";


// ==========================
// SAUVEGARDE
// ==========================

function saveQuestions() {

  localStorage.setItem(
    "enkaQuestions",
    JSON.stringify(questions)
  );

}


// ==========================
// QUESTION
// ==========================

function openQuestion() {

  document
    .getElementById("questionModal")
    .classList.add("show");

  setTimeout(() => {

    document
      .getElementById("questionText")
      .focus();

  }, 100);

}


function closeQuestion() {

  document
    .getElementById("questionModal")
    .classList.remove("show");

}


// ==========================
// PUBLIER UNE QUESTION
// ==========================

function sendQuestion() {

  const textarea =
    document.getElementById("questionText");

  const questionText =
    textarea.value.trim();


  if (!questionText) {

    alert("Écris d'abord ta question 💗");

    textarea.focus();

    return;
  }


  let category = prompt(
    "Dans quelle catégorie veux-tu mettre ta question ?\n\n" +
    "Amitié\n" +
    "Amour\n" +
    "École\n" +
    "Famille\n" +
    "Bien-être\n" +
    "Autre"
  );


  if (!category) {

    category = "Autre";

  }


  const categories = [
    "Amitié",
    "Amour",
    "École",
    "Famille",
    "Bien-être",
    "Autre"
  ];


  const foundCategory =
    categories.find(
      item =>
        item.toLowerCase() ===
        category.trim().toLowerCase()
    );


  category =
    foundCategory || "Autre";


  const newQuestion = {

    id: Date.now(),

    category: category,

    title: questionText,

    description:
      "Question publiée sur enka.",

    answer:
      "Cette question vient d'être publiée. Une réponse pourra être ajoutée plus tard ✨"

  };


  questions.unshift(newQuestion);

  saveQuestions();

  renderQuestions();

  textarea.value = "";

  closeQuestion();


  alert(
    "Ta question a bien été publiée ! ✨"
  );


  document
    .getElementById("questionsList")
    .scrollIntoView({
      behavior: "smooth"
    });

}


// ==========================
// AFFICHER LES QUESTIONS
// ==========================

function renderQuestions() {

  const container =
    document.getElementById("questionsList");


  if (!container) return;


  container.innerHTML = "";


  const searchInput =
    document
      .getElementById("searchInput")
      ?.value
      .toLowerCase()
      .trim() || "";


  const filteredQuestions =
    questions.filter(question => {

      const matchesCategory =
        currentCategory === "Toutes" ||
        question.category === currentCategory;


      const searchableText =
        (
          question.title +
          " " +
          question.description +
          " " +
          question.category
        ).toLowerCase();


      const matchesSearch =
        searchableText.includes(searchInput);


      return (
        matchesCategory &&
        matchesSearch
      );

    });


  if (filteredQuestions.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        <div>💭</div>
        <h3>Aucune question trouvée</h3>
        <p>Essaie une autre recherche ou publie ta propre question.</p>
      </div>
    `;

    return;

  }


  filteredQuestions.forEach(question => {

    const article =
      document.createElement("article");

    article.className = "question-card";


    article.innerHTML = `

      <div class="question-top">

        <span class="tag">
          ${escapeHTML(question.category).toUpperCase()}
        </span>

        <span>♡</span>

      </div>

      <h3>
        ${escapeHTML(question.title)}
      </h3>

      <p>
        ${escapeHTML(question.description)}
      </p>

      <button onclick="readQuestion(${question.id})">
        Lire la réponse →
      </button>

    `;


    container.appendChild(article);

  });

}


// ==========================
// LIRE UNE QUESTION
// ==========================

function readQuestion(id) {

  const question =
    questions.find(
      item => item.id === id
    );


  if (!question) return;


  const answer =
    question.answer ||
    "Aucune réponse pour le moment.";


  alert(
    "💗 " +
    question.category +
    "\n\n" +

    question.title +

    "\n\n" +

    "Réponse :\n" +

    answer
  );

}


// ==========================
// CATÉGORIES
// ==========================

function selectCategory(category) {

  currentCategory = category;

  renderQuestions();


  const section =
    document.querySelector(
      ".questions-section"
    );


  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


// ==========================
// VOIR TOUT
// ==========================

function showAll() {

  currentCategory = "Toutes";

  const searchInput =
    document.getElementById(
      "searchInput"
    );


  if (searchInput) {

    searchInput.value = "";

  }


  renderQuestions();


  document
    .querySelector(".questions-section")
    .scrollIntoView({
      behavior: "smooth"
    });

}


// ==========================
// RECHERCHE
// ==========================

function searchQuestions() {

  renderQuestions();

}


// ==========================
// PROFIL
// ==========================

function showProfile() {

  document
    .getElementById("profileModal")
    .classList.add("show");

}


function closeProfile() {

  document
    .getElementById("profileModal")
    .classList.remove("show");

}


// ==========================
// CHANGER DE THÈME
// ==========================

function changeTheme() {

  const choice =
    prompt(
      "Choisis ton thème :\n\n" +
      "1 = Rose 🌸\n" +
      "2 = Bleu 💙\n" +
      "3 = Violet 💜"
    );


  if (choice === "1") {

    applyTheme("girl");

    localStorage.setItem(
      "enkaTheme",
      "girl"
    );

  }

  else if (choice === "2") {

    applyTheme("boy");

    localStorage.setItem(
      "enkaTheme",
      "boy"
    );

  }

  else if (choice === "3") {

    applyTheme("neutral");

    localStorage.setItem(
      "enkaTheme",
      "neutral"
    );

  }

}


// ==========================
// RESET THÈME
// ==========================

function resetTheme() {

  localStorage.removeItem(
    "enkaTheme"
  );

  applyTheme("girl");

}


// ==========================
// ACCUEIL
// ==========================

function goHome() {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}


// ==========================
// SÉCURITÉ HTML
// ==========================

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


// ==========================
// FERMETURE DES MODALES
// ==========================

window.addEventListener(
  "click",
  function(event) {

    const questionModal =
      document.getElementById(
        "questionModal"
      );

    const profileModal =
      document.getElementById(
        "profileModal"
      );


    if (
      event.target ===
      questionModal
    ) {

      closeQuestion();

    }


    if (
      event.target ===
      profileModal
    ) {

      closeProfile();

    }

  }
);


// ==========================
// TOUCHE ESC
// ==========================

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key !== "Escape") return;

    closeQuestion();

    closeProfile();

  }
);


// ==========================
// CHARGEMENT
// ==========================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    const savedTheme =
      localStorage.getItem(
        "enkaTheme"
      );


    if (savedTheme) {

      applyTheme(savedTheme);

    }


    renderQuestions();

  }
);
