// Main varibles
let infoAboutLeft = document.querySelector(".info-about-left");
let queContainer = document.querySelector(".question");
let answersContainer = document.querySelector(".answers");
let questions = [];
let num = 1;

fetch("./db.json")
  .then((res) => res.json())
  .then((data) => {
    questions = data;
  });

// Start button
let startBtn = document.querySelector(".start button");
startBtn.addEventListener("click", (e) => {
  e.target.parentElement.remove();
  setInterval(() => {
    timer();
  }, 1000);

  setDataInDom(questions);
  updateInfoAboutLeft(num, questions.length);
  clickingAnswer();
});

// Timer function
const timer = () => {
  let count = document.querySelector(".countdown .count");
  count.innerHTML = count.innerHTML - 1;
};

// Set data in DOM
const setDataInDom = (questions) => {
  let oldQue = [];
  let randomQue = questions[Math.floor(Math.random() * questions.length)];
  oldQue.push(randomQue.id);
  queContainer.innerHTML = `
                    <span class="question-number">${num}.</span>
                <p class="question-title">${randomQue.question}...</p>
    `;
  for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.className = "answer";
    let input = document.createElement("input");
    let label = document.createElement("label");
    input.type = "radio";
    input.id = `${randomQue.incorrect_answers[i]}`;
    input.name = "answer";
    input.dataset.answer = `${randomQue.correct_answer}`;
    label.htmlFor = `${randomQue.incorrect_answers[i]}`;
    label.innerHTML = `${randomQue.incorrect_answers[i]}`;
    div.appendChild(input);
    div.appendChild(label);
    answersContainer.appendChild(div);
  }
};

// Update info-about-left
const updateInfoAboutLeft = (num1, num2) => {
  infoAboutLeft.innerHTML = `<p>${num1} Of ${num2} Questions</p>`;
  num++;
};

// Cliking on answer function
const clickingAnswer = () => {
  let answers = document.querySelectorAll(".answer label");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      let input = e.target.previousElementSibling.dataset.answer;
      if (e.target.innerHTML === input) {
        e.target.parentElement.classList.add("good");
        answers.forEach((ele) => {
          if (!ele.parentElement.classList.contains("good")) {
            ele.parentElement.classList.add("bad");
          }
        });
      } else {
        answers.forEach((ele) => {
          if (ele.innerHTML === input) {
            ele.parentElement.classList.add("good");
          } else {
            ele.parentElement.classList.add("bad");
          }
        });
      }
    });
  });
};
