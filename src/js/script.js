function calculate(operation) {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const resultDisplay = document.getElementById("result");

  if (num1 === "" || num2 === "") {
    resultDisplay.textContent = "Error: Please fill in both inputs";
    return;
  }

  const number1 = Number(num1);
  const number2 = Number(num2);

  if (isNaN(number1) || isNaN(number2)) {
    resultDisplay.textContent = "Invalid input";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = number1 + number2;
      break;

    case "subtract":
      result = number1 - number2;
      break;

    case "multiply":
      result = number1 * number2;
      break;

    case "divide":
      if (number2 === 0) {
        resultDisplay.textContent = "Error: Cannot divide by zero";
        return;
      }
      result = number1 / number2;
      break;
  }

  resultDisplay.textContent = "Result: " + result;
}

