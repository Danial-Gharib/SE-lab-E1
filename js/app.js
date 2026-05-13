const themeToggle = document.querySelector("#themeToggle");


function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

loadSavedTheme();

themeToggle.addEventListener("click", toggleTheme);
