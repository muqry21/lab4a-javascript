const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultOutput = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim();

  // Check for empty/whitespace-only input or non-numeric strings
  if (rawValue === "" || Number.isNaN(Number(rawValue))) {
    resultOutput.textContent = "Please enter a valid number!";
    return;
  }

  const numericValue = Number(rawValue);

  if (numericValue < 10) {
    resultOutput.textContent = "The number is lower than 10";
  } else if (numericValue > 10) {
    resultOutput.textContent = "The number is higher than 10";
  } else {
    resultOutput.textContent = "The number is equal to 10";
  }
}

checkButton.addEventListener("click", checkInput);