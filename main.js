// Start button
let startBtn = document.querySelector(".start button");
startBtn.addEventListener("click", (e) => {
  e.target.parentElement.remove();
  setInterval(() => {
    timer();
  }, 1000);
});

// Timer function
const timer = () => {
  let count = document.querySelector(".countdown .count");
  count.innerHTML = count.innerHTML - 1;
};
// fetch("./db.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
