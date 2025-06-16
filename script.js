// Key elements from the DOM
const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");
const colorCodeText = document.getElementById("color-code");
const history = document.getElementById("history");

// Array to keep track of color history
let colorHistory = [];

// Function to generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update the history bar with recent colors
function updateHistory(color) {
  // Add the new color to the beginning of the array
  colorHistory.unshift(color);

  // Keep only the last 5 colors
  if (colorHistory.length > 5) colorHistory.pop();

  // Update the HTML inside the history container
  history.innerHTML = colorHistory
    .map((c) => `<span class="history-box" style="background:${c}"></span>`)
    .join("");
}

// Event listener for button click
changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomColor();

  // Change the color box and button background
  colorBox.style.backgroundColor = randomColor;
  changeColorBtn.style.backgroundColor = randomColor;

  // Update the displayed color code
  colorCodeText.textContent = randomColor;

  // Update the history swatches
  updateHistory(randomColor);
});
