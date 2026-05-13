const themeToggle = document.querySelector("#themeToggle");


function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);

  themeToggle.textContent = nextTheme === "dark" ? "Use Light Theme" : "Use Dark Theme";
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "Use Light Theme" : "Use Dark Theme";
}

loadSavedTheme();

themeToggle.addEventListener("click", toggleTheme);
