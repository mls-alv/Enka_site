/* =========================================
   ENKA ♡ — STYLE
========================================= */

:root {
  --primary: #c9829b;
  --primary-dark: #a96079;
  --secondary: #f2dce3;
  --background: #fcf8f6;
  --card: #fffdfb;
  --text: #30282b;
  --muted: #8b7d82;
  --border: #eee1e5;
  --success: #8eae99;

  --shadow: 0 15px 40px rgba(100, 60, 72, 0.08);
  --soft-shadow: 0 8px 25px rgba(100, 60, 72, 0.06);

  --radius: 22px;
  --radius-small: 14px;
  --transition: 0.25s ease;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at 10% 5%, rgba(242, 220, 227, 0.55), transparent 25%),
    var(--background);
  color: var(--text);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  line-height: 1.6;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  border: 0;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--secondary);
  color: var(--primary-dark);
}


/* =========================================
   QUIZ
========================================= */

.quiz-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
  background:
    radial-gradient(circle at 20% 20%, var(--secondary), transparent 35%),
    rgba(252, 248, 246, 0.98);
  overflow-y: auto;
}

.quiz-box {
  width: min(650px, 100%);
  padding: 36px;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: rgba(255, 253, 251, 0.96);
  box-shadow: var(--shadow);
  animation: quizAppear 0.5s ease;
}

@keyframes quizAppear {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.quiz-logo {
  margin-bottom: 25px;
  color: var(--text);
  font-family: Georgia, serif;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}

.quiz-logo span {
  color: var(--primary);
}

.quiz-progress {
  height: 7px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 99px;
  background: var(--secondary);
}

.quiz-progress div {
  width: 12.5%;
  height: 100%;
  border-radius: inherit;
  background: var(--primary);
  transition: width 0.35s ease;
}

.quiz-step {
  margin-bottom: 32px;
  color: var(--muted);
  font-size: 13px;
  text-align: right;
}

.quiz-question {
  margin-bottom: 9px;
  font-family: Georgia, serif;
  font-size: clamp(28px, 5vw, 40px);
  line-height: 1.15;
}

.quiz-description {
  margin-bottom: 25px;
  color: var(--muted);
}

.quiz-options {
  display: grid;
  gap: 12px;
}

.quiz-option {
  width: 100%;
  padding: 17px 19px;
  border: 1px solid var(--border);
  border-radius: 17px;
  background: var(--card);
  color: var(--text);
  text-align: left;
  transition: var(--transition);
}

.quiz-option:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.quiz-option.selected {
  border-color: var(--primary);
  background: var(--secondary);
  box-shadow: 0 0 0 3px rgba(201, 130, 155, 0.1);
}

.quiz-option-title {
  display: block;
  font-weight: 700;
}

.quiz-option-subtitle {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
}

.quiz-multiple-note {
  margin-top: 10px;
  color: var(--muted);
  font-size: 12px;
}

.quiz-buttons {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 28px;
}


/* =========================================
   HEADER
========================================= */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(238, 225, 229, 0.8);
  background: rgba(252, 248, 246, 0.82);
  backdrop-filter: blur(18px);
}

.header-inner {
  width: min(1100px, calc(100% - 40px));
  min-height: 72px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  font-family: Georgia, serif;
  font-size: 27px;
  font-weight: 700;
}

.logo span {
  color: var(--primary);
}

.profile-button {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 44px;
  padding: 6px 13px 6px 7px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--card);
  color: var(--text);
  transition: var(--transition);
}

.profile-button:hover {
  transform: translateY(-1px);
  box-shadow: var(--soft-shadow);
}

.profile-button span:first-child {
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--secondary);
}


/* =========================================
   HERO
========================================= */

.hero {
  position: relative;
  width: min(1100px, calc(100% - 40px));
  min-height: 430px;
  margin: 40px auto 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 32px;
  background:
    radial-gradient(circle at 85% 20%, rgba(255,255,255,0.9), transparent 25%),
    linear-gradient(135deg, var(--secondary), #fffdfb 75%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 650px;
  padding: 75px 60px;
}

.ai-badge {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 7px 12px;
  border: 1px solid rgba(201, 130, 155, 0.2);
  border-radius: 999px;
  background: rgba(255,255,255,0.65);
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 700;
}

.hero h1 {
  margin-bottom: 18px;
  font-family: Georgia, serif;
  font-size: clamp(42px, 7vw, 70px);
  line-height: 0.98;
  letter-spacing: -2px;
}

.hero h1 span {
  color: var(--primary);
}

.hero p {
  max-width: 540px;
  margin-bottom: 28px;
  color: var(--muted);
  font-size: 17px;
}

.hero-decoration {
  position: absolute;
  color: rgba(201, 130, 155, 0.22);
  font-family: Georgia, serif;
  pointer-events: none;
}

.decoration-one {
  right: 12%;
  top: 15%;
  font-size: 110px;
  transform: rotate(12deg);
}

.decoration-two {
  right: 23%;
  bottom: 18%;
  font-size: 55px;
  transform: rotate(-15deg);
}


/* =========================================
   BUTTONS
========================================= */

.main-btn,
.secondary-btn {
  min-height: 46px;
  padding: 11px 19px;
  border-radius: 13px;
  font-weight: 700;
  transition: var(--transition);
}

.main-btn {
  background: var(--primary);
  color: white;
  box-shadow: 0 8px 20px rgba(169, 96, 121, 0.18);
}

.main-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.secondary-btn {
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
}

.secondary-btn:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.hero-btn {
  padding: 14px 22px;
}

.full-btn {
  width: 100%;
}


/* =========================================
   AI CARD
========================================= */

.ai-card-section {
  width: min(1000px, calc(100% - 40px));
  margin: -28px auto 50px;
  position: relative;
  z-index: 3;
}

.ai-card {
  display: flex;
  gap: 18px;
  padding: 21px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--card);
  box-shadow: var(--shadow);
}

.ai-avatar {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: var(--secondary);
  color: var(--primary-dark);
  font-size: 20px;
}

.ai-card-content {
  min-width: 0;
}

.ai-card-title {
  display: flex;
  align-items: baseline;
  gap: 9px;
}

.ai-card-title span {
  font-weight: 800;
}

.ai-card-title small {
  color: var(--muted);
}

.ai-card-content p {
  margin: 4px 0 10px;
  color: var(--muted);
}

.ai-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.ai-suggestion {
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--background);
  color: var(--primary-dark);
  font-size: 12px;
}


/* =========================================
   SEARCH
========================================= */

.search-section {
  width: min(850px, calc(100% - 40px));
  margin: 0 auto 55px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid var(--border);
  border-radius: 17px;
  background: var(--card);
  box-shadow: var(--soft-shadow);
}

.search-box > span {
  color: var(--primary);
  font-size: 24px;
}

.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  font-size: 16px;
}


/* =========================================
   SECTIONS
========================================= */

.section {
  width: min(1000px, calc(100% - 40px));
  margin: 0 auto 65px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.eyebrow {
  margin-bottom: 5px;
  color: var(--primary-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.section-heading h2,
.modal-card h2 {
  font-family: Georgia, serif;
  font-size: 31px;
  line-height: 1.15;
}

.text-button {
  background: transparent;
  color: var(--primary-dark);
  font-weight: 700;
}

.text-button:hover {
  text-decoration: underline;
}


/* =========================================
   CATEGORIES
========================================= */

.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.category {
  min-height: 105px;
  padding: 15px;
  border: 1px solid var(--border);
  border-radius: 19px;
  background: var(--card);
  color: var(--text);
  text-align: left;
  transition: var(--transition);
}

.category span {
  display: block;
  margin-bottom: 9px;
  font-size: 23px;
}

.category strong {
  font-size: 14px;
}

.category:hover,
.category.active {
  border-color: var(--primary);
  background: var(--secondary);
  transform: translateY(-2px);
}


/* =========================================
   QUESTIONS
========================================= */

.questions-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.question-card {
  position: relative;
  padding: 22px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--card);
  transition: var(--transition);
}

.question-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--soft-shadow);
}

.question-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 13px;
}

.question-category {
  width: fit-content;
  padding: 5px 9px;
  border-radius: 999px;
  background: var(--secondary);
  color: var(--primary-dark);
  font-size: 11px;
  font-weight: 800;
}

.question-time {
  color: var(--muted);
  font-size: 11px;
}

.question-card h3 {
  margin-bottom: 9px;
  font-family: Georgia, serif;
  font-size: 21px;
  line-height: 1.2;
}

.question-card p {
  display: -webkit-box;
  overflow: hidden;
  color: var(--muted);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.read-button {
  margin-top: 17px;
  padding: 0;
  background: transparent;
  color: var(--primary-dark);
  font-weight: 800;
}

.empty-state {
  grid-column: 1 / -1;
  padding: 50px 20px;
  border: 1px dashed var(--border);
  border-radius: 20px;
  color: var(--muted);
  text-align: center;
}


/* =========================================
   MODALS
========================================= */

.modal {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal.hidden {
  display: none;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(40, 30, 34, 0.35);
  backdrop-filter: blur(5px);
}

.modal-card {
  position: relative;
  z-index: 2;
  width: min(520px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  padding: 31px;
  border: 1px solid var(--border);
  border-radius: 26px;
  background: var(--card);
  box-shadow: var(--shadow);
  animation: modalIn 0.25s ease;
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.close-button {
  position: absolute;
  top: 14px;
  right: 15px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--background);
  color: var(--muted);
  font-size: 23px;
}

.modal-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  margin-bottom: 17px;
  border-radius: 15px;
  background: var(--secondary);
}

.modal-description {
  margin: 8px 0 24px;
  color: var(--muted);
}

.modal-card label {
  display: block;
  margin: 17px 0 7px;
  font-size: 13px;
  font-weight: 800;
}

.modal-card select,
.modal-card input,
.modal-card textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 13px;
  outline: 0;
  background: var(--background);
  color: var(--text);
}

.modal-card select,
.modal-card input {
  min-height: 46px;
  padding: 10px 13px;
}

.modal-card textarea {
  min-height: 135px;
  padding: 13px;
  resize: vertical;
}

.modal-card select:focus,
.modal-card input:focus,
.modal-card textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(201, 130, 155, 0.1);
}

.textarea-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 6px 0 19px;
  color: var(--muted);
  font-size: 11px;
}


/* =========================================
   READ MODAL
========================================= */

.read-card {
  width: min(600px, 100%);
}

.read-card > .question-category {
  margin-bottom: 13px;
}

.read-question {
  display: flex;
  gap: 13px;
  margin: 23px 0;
  padding: 18px;
  border-radius: 17px;
  background: var(--background);
}

.read-question span {
  color: var(--primary);
  font-size: 22px;
}

.answer-box {
  display: flex;
  gap: 13px;
  padding: 17px;
  border: 1px solid var(--border);
  border-radius: 17px;
  background: var(--secondary);
}

.answer-avatar {
  flex: 0 0 38px;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: var(--card);
  color: var(--primary-dark);
}

.answer-box strong {
  display: block;
  margin-bottom: 3px;
}

.answer-box p {
  color: var(--text);
  font-size: 14px;
}


/* =========================================
   PROFILE
========================================= */

.profile-preview {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 25px 0;
  padding: 15px;
  border-radius: 18px;
  background: var(--background);
}

.big-avatar {
  width: 65px;
  height: 65px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background: var(--secondary);
  font-size: 31px;
}

.profile-preview strong,
.profile-preview span {
  display: block;
}

.profile-preview span {
  color: var(--muted);
  font-size: 13px;
}

.avatar-choices {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 7px;
}

.avatar-choices button {
  aspect-ratio: 1;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--background);
  font-size: 20px;
  transition: var(--transition);
}

.avatar-choices button:hover,
.avatar-choices button.selected {
  border-color: var(--primary);
  background: var(--secondary);
  transform: translateY(-2px);
}

.profile-actions {
  display: flex;
  gap: 10px;
  margin-top: 25px;
}

.profile-actions > * {
  flex: 1;
}


/* =========================================
   MOBILE NAV
========================================= */

.mobile-nav {
  display: none;
}


/* =========================================
   FOOTER
========================================= */

footer {
  padding: 55px 20px 110px;
  border-top: 1px solid var(--border);
  background: rgba(255, 253, 251, 0.7);
  text-align: center;
}

.footer-logo {
  margin-bottom: 7px;
  font-family: Georgia, serif;
  font-size: 26px;
}

footer p {
  margin-bottom: 7px;
  color: var(--muted);
  font-size: 13px;
}

footer > span {
  color: var(--primary-dark);
  font-size: 11px;
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 760px) {

  .header-inner {
    width: calc(100% - 26px);
  }

  .hero {
    width: calc(100% - 26px);
    min-height: 430px;
    margin-top: 20px;
  }

  .hero-content {
    padding: 55px 25px;
  }

  .hero h1 {
    font-size: 47px;
  }

  .hero-decoration {
    opacity: 0.6;
  }

  .decoration-one {
    right: -10px;
    top: 14%;
  }

  .decoration-two {
    right: 10%;
    bottom: 12%;
  }

  .ai-card-section,
  .search-section,
  .section {
    width: calc(100% - 26px);
  }

  .categories {
    grid-template-columns: repeat(2, 1fr);
  }

  .questions-list {
    grid-template-columns: 1fr;
  }

  .mobile-nav {
    position: fixed;
    right: 12px;
    bottom: 12px;
    left: 12px;
    z-index: 200;
    display: flex;
    justify-content: space-around;
    padding: 7px;
    border: 1px solid var(--border);
    border-radius: 19px;
    background: rgba(255, 253, 251, 0.94);
    box-shadow: var(--shadow);
    backdrop-filter: blur(15px);
  }

  .mobile-nav button {
    min-width: 70px;
    padding: 6px 10px;
    border-radius: 13px;
    background: transparent;
    color: var(--muted);
  }

  .mobile-nav button:hover {
    background: var(--secondary);
    color: var(--primary-dark);
  }

  .mobile-nav span {
    display: block;
    font-size: 19px;
    line-height: 1.1;
  }

  .mobile-nav small {
    font-size: 10px;
  }

  .nav-plus {
    width: 30px;
    height: 30px;
    display: grid !important;
    place-items: center;
    margin: -17px auto 2px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    font-size: 22px !important;
  }

  .quiz-box {
    padding: 25px 19px;
    border-radius: 24px;
  }

  .quiz-question {
    font-size: 30px;
  }

  .profile-actions {
    flex-direction: column;
  }

  .avatar-choices {
    grid-template-columns: repeat(4, 1fr);
  }

  .modal-card {
    padding: 25px 20px;
  }
}

@media (max-width: 420px) {

  .profile-button #headerUsername {
    display: none;
  }

  .ai-card {
    padding: 16px;
  }

  .ai-card-title {
    flex-direction: column;
    gap: 0;
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
  }

  .quiz-buttons {
    flex-direction: column-reverse;
  }

  .quiz-buttons button {
    width: 100%;
  }
}


/* =========================================
   REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
             }
