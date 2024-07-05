const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Convert inputs to numbers
  const numDividend = parseFloat(dividend);
  const numDivider = parseFloat(divider);

  // Clear previous classes and messages
  result.className = '';
  result.innerText = '';

  // Validate inputs
  if (isNaN(numDividend) || isNaN(numDivider)) {
    handleError("critical-error", "Something critical went wrong. Please reload the page");
    console.error("Error: Non-numeric input provided");
  } else if (numDivider === 0) {
    handleError("", "Division not performed. Invalid number provided. Try again");
    console.error("Error: Division by zero");
  } else if (dividend === '' || divider === '') {
    handleError("error-message", "Division not performed. Both values are required in inputs. Try again");
  } else {
    // Perform division and display result
    result.innerText = Math.floor(numDividend / numDivider);
  }
});

function handleError(className, message) {
  result.classList.add(className);
  result.innerText = message;
}
