const btn = document.getElementById("btn");
const body = document.querySelector("body");
const value = document.querySelector("#color-value");
const copyBtn = document.querySelector(".copy-btn");

const colors = [0, 1, 2, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", pickRandomColor);

function pickRandomColor() {
  let hex = "#";

  for (i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colors.length);

    hex += colors[randomNumber];

    body.style.background = hex;
    value.innerHTML = hex;
  }

  
}
copyBtn.addEventListener("click", () => {
   
   navigator.clipboard.writeText(value.innerHTML);
   return alert(`Color ${value.innerHTML} copied to clipboard`);
 });