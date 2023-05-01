const btnNode = document.querySelector(".btn-add");
const btnReset = document.querySelector(".btn-reset");
const counterNode = document.querySelector(".counter");

let counter = 0;

btnNode.addEventListener("click", function () {
  counter += 1;

  counterNode.innerText = counter;
});

btnReset.addEventListener("click", function () {
  counter = 0;
  counterNode.innerText = 0;
});
