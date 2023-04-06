// (A) PROPERTIES 
// (A1) QUESTIONS & ANSWERS
// Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
data: [
  {
    q : "Shrek e' vita, Shrek è?",
    o : [
      "Amore",
      "Carmen",
      "Odio",
      "Brutto"
    ],
    a : 0 //parte da 0
  },
  {
    q : "Quante zampe ha John?",
    o : [
      "2",
      "4",
      "3",
      "6"
    ],
    a : 1
  },
  {
    q : "Vanessa e' la fidanzata di?",
    o : [
      "Cristian",
      "Cosmin",
      "Cristian e Cosmin",
      "Nessuno dei due"
    ],
    a : 2
  },
  {
    q : "Raluca preferisce?",
    o : [
      "Mangiare",
      "Dormire",
      "Guardare le serie",
      "Tutti e tre"
    ],
    a : 2
  },
  {
    q : "Su Fortine, Cristian e'",
    o : [
      "Forte ma non sa costruire",
      "Scarso ma sa costruire come un PRO",
      "Forte e sa costruire come un PRO",
      "Scarso come mai nessuno"
    ],
    a : 2
  },
  {
    q : "Carmen e' una",
    o : [
      "Sorella",
      "Trasformers (Uomo macchina)",
      "Pagliaccia",
      "Dormigliona"
    ],
    a : 2
  },
  {
    q : "Come si chiamano le tartarughe di Cosmin e Vanessa?",
    o : [
      "Mariana e Soani",
      "Davide e Carmen",
      "Raluca e Shrek",
      "Christina e Destry"
    ],
    a : 3
  },
  {
    q : "Fortnite e' stato creato nel",
    o : [
      "2014",
      "2015",
      "2016",
      "2017"
    ],
    a : 3
  },
  {
    q : "Il fidanzato di Raluca si chiama",
    o : [
      "Davide",
      "Daniele",
      "Dante",
      "Damiano"
    ],
    a : 3
  },
  
  {
    q : "Come si chiama il protagonista di Tokyo Ghoul?",
    o : [
      "Eren Yeager ",
      "Ken Kaneki",
      "Tanjiro",
      "Gigetto"
    ],
    a : 1
  },
  {
    q : "Quante ore al giorno passa Cristian davanti al telefono?",
    o : [
      "0",
      "1",
      "7",
      "24"
    ],
    a : 3
  },
  {
    q : "2+2 fa",
    o : [
      "4",
      "5",
      "8",
      "22"
    ],
    a : 1
  },
  {
    q : "Papà e'",
    o : [
      "Rumeno",
      "Russo",
      "Ungherese",
      "Arabo"
    ],
    a : 2
  },
  {
    q : "Vanessa sa cantare",
    o : [
      "Si",
      "Si, ovvio",
      "Si, nessuno è brava quanto lei",
      "Si, se dicessimo no Co&Cri = dead"
    ],
    a : 2
  },
  ,{
    q : "Cristian odia",
    o : [
      "Andare a scuola",
      "Mangiare la verdura",
      "Tutti e tre",
      "Stare al buio"
    ],
    a : 2
  },

  ]
,

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: () => {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: () => {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => quiz.select(label));
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: (option) => {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
