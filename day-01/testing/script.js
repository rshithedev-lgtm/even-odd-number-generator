const evenBtn = document.getElementById("evenBtn");
const oddBtn = document.getElementById("oddBtn");
const result = document.getElementById("result");

let number = 0;

evenBtn.addEventListener("click", () => {
  number++;

  if (number % 2 === 0) {
    result.textContent = number + " is EVEN";
  }
});

oddBtn.addEventListener("click", () => {
  number++;

  if (number % 2 !== 0) {
    result.textContent = number + " is ODD";
  }
});
result.textContent = "Not matching, try again";
