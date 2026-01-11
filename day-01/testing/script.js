const evenBtn = document.getElementById("evenBtn");
const oddBtn = document.getElementById("oddBtn");
const result = document.getElementById("result");

function getRandomSixDigit() {
  return Math.floor(Math.random() * 900000) + 100000;
}

evenBtn.addEventListener("click", () => {
  let num = getRandomSixDigit();

  // make sure it's EVEN
  if (num % 2 !== 0) {
    num = num + 1;
  }

  result.textContent = num + " is EVEN";
});

oddBtn.addEventListener("click", () => {
  let num = getRandomSixDigit();

  // make sure it's ODD
  if (num % 2 === 0) {
    num = num + 1;
  }

  result.textContent = num + " is ODD";
});
