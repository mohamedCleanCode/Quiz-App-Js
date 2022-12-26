let infoAboutLeft = document.querySelector(".info-about-left");
let queContainer = document.querySelector(".question");
let answersContainer = document.querySelector(".answers");
let num = 1;
let length;

fetch("./db.json")
  .then((res) => res.json())
  .then((data) => {
    length = data.length;
    updateInfoAboutLeft(data.length);
    setDataInDom(data);
  });

// Start button
// let startBtn = document.querySelector(".start button");
// startBtn.addEventListener("click", (e) => {
//   e.target.parentElement.remove();
//   setInterval(() => {
//     timer();
//   }, 1000);
// });

// Timer function
const timer = () => {
  let count = document.querySelector(".countdown .count");
  count.innerHTML = count.innerHTML - 1;
};

// Set data in DOM
const setDataInDom = (arr) => {
  let oldQue = [];
  let randomQue = arr[Math.floor(Math.random() * arr.length)];
  oldQue.push(randomQue.id);
  if (oldQue.includes()) {
    setDataInDom(arr);
  } else {
    queContainer.innerHTML = `
                    <span class="question-number">${num}.</span>
                <p class="question-title">${randomQue.question}...</p>
    `;
    num++;
    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");
      div.className = "answer";
      let input = document.createElement("input");
      let label = document.createElement("label");
      input.type = "radio";
      input.id = `${randomQue.incorrect_answers[i]}`;
      input.name = "answer";
      input.dataset.answer = `${randomQue.incorrect_answers[i]}`;
      label.htmlFor = `${randomQue.incorrect_answers[i]}`;
      label.innerHTML = `${randomQue.incorrect_answers[i]}`;
      div.appendChild(input);
      div.appendChild(label);
      answersContainer.appendChild(div);
    }
  }
};

// Update info-about-left
const updateInfoAboutLeft = (num1) => {
  infoAboutLeft.innerHTML = `<p>${num1} Of ${num1} Questions</p>`;
};
