// Drop-down menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const dropDown = document.getElementById("dropdown");

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // Toggle icons
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    // Toggle dropdown
    dropDown.classList.toggle("hidden");
  }
});

//Landing page animation
const messages = [
  "🛰️ ACCESSING USER PROFILE...",
  "> Name: Georgina Akumiah",
  "> Identity: Front-End Developer 💻",
  "> Currently: Breaking things in React, fixing them in TypeScript",
  "> Fun fact: My VSCode theme is on the marketplace (FemmeAura)💜",
];

const textEl = document.getElementById("typewriter-text");
const cursor = document.getElementById("cursor");

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";
let typedLines = [];

function typeLine() {
  if (lineIndex >= messages.length) {
    // Animation complete — but do nothing else for now
    return;
  }

  currentLine = messages[lineIndex];

  if (charIndex <= currentLine.length) {
    const visibleLine = currentLine.slice(0, charIndex++);
    const fullText = [...typedLines, visibleLine].join("<br>");
    textEl.innerHTML = fullText;
    setTimeout(typeLine, 50);
  } else {
    typedLines.push(currentLine);
    charIndex = 0;
    lineIndex++;
    setTimeout(typeLine, 800);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeLine();
});
