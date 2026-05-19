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



const gitCommands = [
  {
    command: "git init",
    category: "setup",
    description: "Creates a new local Git repository in the current directory."
  },
  {
    command: "git clone <url>",
    category: "setup",
    description: "Copies an existing remote repository to your local machine."
  },
  {
    command: "git status",
    category: "committing",
    description: "Shows changed, staged, and untracked files."
  },
  {
    command: "git add <file>",
    category: "committing",
    description: "Adds file changes to the staging area."
  },
  {
    command: "git commit -m \"message\"",
    category: "committing",
    description: "Saves a snapshot of staged changes with a meaningful message."
  },
  {
    command: "git branch",
    category: "branching",
    description: "Lists local branches in the repository."
  },
  {
    command: "git checkout -b <branch>",
    category: "branching",
    description: "Creates and switches to a new branch."
  },
  {
    command: "git switch <branch>",
    category: "branching",
    description: "Switches from the current branch to another branch."
  },
  {
    command: "git merge <branch>",
    category: "merging",
    description: "Combines changes from another branch into the current branch."
  },
  {
    command: "git rebase <branch>",
    category: "merging",
    description: "Reapplies commits on top of another branch to create a cleaner history."
  },
  {
    command: "git fetch origin",
    category: "remote",
    description: "Downloads remote updates without merging them into the current branch."
  },
  {
    command: "git pull origin <branch>",
    category: "remote",
    description: "Fetches remote changes and merges them into the current branch."
  },
  {
    command: "git push origin <branch>",
    category: "remote",
    description: "Uploads local branch commits to the remote repository."
  },
  {
    command: "git restore <file>",
    category: "undo",
    description: "Discards local unstaged changes in a file."
  },
  {
    command: "git reset",
    category: "undo",
    description: "Moves changes out of the staging area or moves branch history depending on options."
  },
  {
    command: "git revert <commit>",
    category: "undo",
    description: "Creates a new commit that reverses the effect of a previous commit."
  },
  {
    command: "git stash",
    category: "undo",
    description: "Temporarily saves uncommitted changes without committing them."
  }
];

const commandGrid = document.getElementById("commandGrid");
const commandSearch = document.getElementById("commandSearch");
const commandFilters = document.getElementById("commandFilters");

let activeCategory = "all";

function renderCommands() {
  if (!commandGrid) return;

  const searchText = commandSearch ? commandSearch.value.toLowerCase().trim() : "";

  const filteredCommands = gitCommands.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;

    const matchesSearch =
      item.command.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  commandGrid.innerHTML = filteredCommands
    .map(
      (item) => `
        <article class="command-card">
          <span class="command-category">${item.category}</span>
          <code>${item.command}</code>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

  if (filteredCommands.length === 0) {
    commandGrid.innerHTML = `
      <p class="empty-state">No Git command matched your search.</p>
    `;
  }
}

if (commandSearch) {
  commandSearch.addEventListener("input", renderCommands);
}

if (commandFilters) {
  commandFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    activeCategory = button.dataset.category;

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    renderCommands();
  });
}

renderCommands();


const themeToggle = document.getElementById("themeToggle");
const themeToggleIcon = document.querySelector(".theme-toggle-icon");
const themeToggleText = document.querySelector(".theme-toggle-text");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("preferred-theme", theme);

  if (themeToggleIcon && themeToggleText) {
    if (theme === "dark") {
      themeToggleIcon.textContent = "☀️";
      themeToggleText.textContent = "Light";
    } else {
      themeToggleIcon.textContent = "🌙";
      themeToggleText.textContent = "Dark";
    }
  }
}

const savedTheme = localStorage.getItem("preferred-theme") || "light";
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}


