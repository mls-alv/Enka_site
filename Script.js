// ============================
// THÈMES
// ============================

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


// ============================
// ENVOYER UN MESSAGE
// ============================

function sendMessage() {

  const input =
    document.getElementById("messageInput");

  const text = input.value.trim();

  if (!text) return;


  // Message utilisateur

  addUserMessage(text);

  input.value = "";


  // Afficher "Enka écrit..."

  showTyping();


  // Réponse simulée

  setTimeout(() => {

    hideTyping();

    generateResponse(text);

  }, 1300);

}


// ============================
// AJOUT MESSAGE UTILISATEUR
// ============================

function addUserMessage(text) {

  const chat =
    document.getElementById("chatMessages");

  const message =
    document.createElement("div");

  message.className =
    "message user-message";

  message.innerHTML = `
    <div class="bubble">
      ${escapeHTML(text)}
    </div>
  `;

  chat.appendChild(message);

  scrollChat();

}


// ============================
// RÉPONSE D'ENKA
// ============================

function generateResponse(text) {

  const lowerText =
    text.toLowerCase();


  let response =
    "Merci de m'en parler. 💜 " +
    "On peut essayer de comprendre la situation ensemble. " +
    "Qu'est-ce qui te préoccupe le plus ?";


  if (
    lowerText.includes("ami") ||
    lowerText.includes("amie") ||
    lowerText.includes("amitié")
  ) {

    response =
      "Les amitiés peuvent parfois être compliquées. 🫶 " +
      "Si quelque chose te fait douter, tu peux essayer " +
      "d'en parler calmement avec cette personne et de lui expliquer " +
      "comment tu ressens la situation.";

  }


  else if (
    lowerText.includes("école") ||
    lowerText.includes("cours") ||
    lowerText.includes("contrôle") ||
    lowerText.includes("stress")
  ) {

    response =
      "Le stress scolaire peut vraiment peser. 🌱 " +
      "Essaie de prendre les choses une étape à la fois. " +
      "Si tu te sens dépassé(e), en parler à un parent, " +
      "un professeur ou une autre personne de confiance peut aussi aider.";

  }


  else if (
    lowerText.includes("triste") ||
    lowerText.includes("mal") ||
    lowerText.includes("déprim")
  ) {

    response =
      "Je suis désolée que tu traverses un moment difficile. 💜 " +
      "Tu n'as pas besoin de tout gérer seul(e). " +
      "Parler à une personne de confiance peut être une bonne première étape. " +
      "Et si tu te sens en danger ou que tu ne sais pas quoi faire, " +
      "demande rapidement de l'aide à un adulte de confiance ou aux services d'urgence.";

  }


  else if (
    lowerText.includes("amour") ||
    lowerText.includes("crush") ||
    lowerText.includes("amoureux")
  ) {

    response =
      "Les sentiments peuvent être assez compliqués à comprendre. 💗 " +
      "Tu peux prendre ton temps et essayer de te demander " +
      "ce que tu ressens vraiment et ce que tu souhaites dans cette situation.";

  }


  addEnkaMessage(response);

}


// ============================
// MESSAGE ENKA
// ============================

function addEnkaMessage(text) {

  const chat =
    document.getElementById("chatMessages");

  const message =
    document.createElement("div");

  message.className =
    "message enka-message";

  message.innerHTML = `
    <div class="message-avatar">
      ♡
    </div>

    <div class="bubble">
      ${text}
    </div>
  `;

  chat.appendChild(message);

  scrollChat();

}


// ============================
// SUGGESTIONS
// ============================

function useSuggestion(text) {

  const input =
    document.getElementById("messageInput");

  input.value = text;

  input.focus();

}


// ============================
// ENKA ÉCRIT
// ============================

function showTyping() {

  document
    .getElementById("typing")
    .classList.add("show");

  scrollChat();

}


function hideTyping() {

  document
    .getElementById("typing")
    .classList.remove("show");

}


// ============================
// SCROLL
// ============================

function scrollChat() {

  const chat =
    document.getElementById("chatMessages");

  setTimeout(() => {

    chat.scrollTop =
      chat.scrollHeight;

  }, 50);

}


// ============================
// TOUCHE ENTRÉE
// ============================

function handleKey(event) {

  if (
    event.key === "Enter" &&
    !event.shiftKey
  ) {

    event.preventDefault();

    sendMessage();

  }

}


// ============================
// NETTOYER LA CONVERSATION
// ============================

function clearChat() {

  const chat =
    document.getElementById("chatMessages");

  chat.innerHTML = `

    <div class="message enka-message">

      <div class="message-avatar">
        ♡
      </div>

      <div class="bubble">
        On recommence une nouvelle conversation. 💜
        <br><br>
        Qu'est-ce que tu aimerais me demander ?
      </div>

    </div>

  `;

}


// ============================
// PROFIL
// ============================

function openProfile() {

  document
    .getElementById("profileModal")
    .classList.add("show");

}


function closeProfile() {

  document
    .getElementById("profileModal")
    .classList.remove("show");

}


// ============================
// THÈME
// ============================

function changeTheme() {

  const choice = prompt(
    "Choisis ton thème :\n\n" +
    "1 = Rose\n" +
    "2 = Bleu\n" +
    "3 = Violet"
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


function resetTheme() {

  localStorage.removeItem("enkaTheme");

  applyTheme("girl");

}


// ============================
// ACCUEIL
// ============================

function goHome() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ============================
// SÉCURITÉ DU TEXTE
// ============================

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


// ============================
// FERMER MODAL
// ============================

window.addEventListener(
  "click",
  function(event) {

    const modal =
      document.getElementById("profileModal");

    if (event.target === modal) {

      closeProfile();

    }

  }
);


// ============================
// CHARGER LE THÈME
// ============================

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
