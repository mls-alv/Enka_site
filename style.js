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
// QUESTION
// ==========================

function openQuestion() {

  document
    .getElementById("questionModal")
    .classList.add("show");

}


function closeQuestion() {

  document
    .getElementById("questionModal")
    .classList.remove("show");

}


function sendQuestion() {

  const question =
    document.getElementById("questionText").value.trim();

  if (question === "") {

    alert("Écris d'abord ta question 💗");
    return;

  }

  alert(
    "Ta question a bien été enregistrée ! ✨\n\n" +
    "Dans la prochaine étape, on pourra créer le système qui permet de publier réellement les questions."
  );

  document.getElementById("questionText").value = "";

  closeQuestion();
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

  const choice = prompt(
    "Choisis ton thème :\n\n" +
    "1 = Rose\n" +
    "2 = Bleu\n" +
    "3 = Violet"
  );

  if (choice === "1") {

    applyTheme("girl");
    localStorage.setItem("enkaTheme", "girl");

  }

  else if (choice === "2") {

    applyTheme("boy");
    localStorage.setItem("enkaTheme", "boy");

  }

  else if (choice === "3") {

    applyTheme("neutral");
    localStorage.setItem("enkaTheme", "neutral");

  }

}


function resetTheme() {

  localStorage.removeItem("enkaTheme");

  applyTheme("girl");

}


// ==========================
// CATÉGORIES
// ==========================

function selectCategory(category) {

  alert(
    "Catégorie sélectionnée : " +
    category +
    "\n\nOn pourra ensuite afficher uniquement les questions de cette catégorie."
  );

}


// ==========================
// QUESTIONS
// ==========================

function readQuestion(button) {

  const card = button.closest(".question-card");

  const title = card.querySelector("h3").textContent.trim();

  alert(
    "Question :\n\n" +
    title +
    "\n\nLa page complète de la réponse sera ajoutée ensuite ✨"
  );

}


function showAll() {

  alert(
    "La page Explorer avec toutes les questions sera ajoutée ensuite."
  );

}


// ==========================
// RECHERCHE
// ==========================

function searchQuestions() {

  const input =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase();

  const cards =
    document.querySelectorAll(".question-card");

  cards.forEach(card => {

    const text =
      card.textContent.toLowerCase();

    if (text.includes(input)) {

      card.style.display = "";

    } else {

      card.style.display = "none";

    }

  });

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
// CHARGEMENT
// ==========================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const savedTheme =
      localStorage.getItem("enkaTheme");

    if (savedTheme) {

      applyTheme(savedTheme);

    }

  }
);


// Fermer les fenêtres en cliquant à l'extérieur

window.addEventListener(
  "click",
  function(event) {

    const questionModal =
      document.getElementById("questionModal");

    const profileModal =
      document.getElementById("profileModal");

    if (event.target === questionModal) {

      closeQuestion();

    }

    if (event.target === profileModal) {

      closeProfile();

    }

  }
);

/* ==========================
   QUESTIONS DYNAMIQUES
========================== */

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 50px 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.empty-state div {
  font-size: 40px;
  margin-bottom: 15px;
}

.empty-state h3 {
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--muted);
  font-size: 14px;
}


/* Petite animation des cartes */

.question-card {
  animation: questionAppear 0.25s ease;
}

@keyframes questionAppear {

  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}


/* Empêche le texte des boutons de bouger */

button {
  font-family: inherit;
}
