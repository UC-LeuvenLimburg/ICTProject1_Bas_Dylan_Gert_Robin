const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

let inputSequence = [];

window.addEventListener("keydown", function (event) {
  inputSequence.push(event.key);

  if (inputSequence.length > konamiCode.length) {
    inputSequence.shift();
  }

  if (inputSequence.toString() === konamiCode.toString()) {
    window.location.href = "nav.html";
  }
});
