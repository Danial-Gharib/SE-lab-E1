const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("preferred-theme", theme);

  if (!themeToggle) return;

  const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");
  const themeToggleText = themeToggle.querySelector(".theme-toggle-text");

  if (theme === "dark") {
    if (themeToggleIcon) themeToggleIcon.textContent = "☀️";
    if (themeToggleText) {
      themeToggleText.textContent = "Light";
    } else {
      themeToggle.textContent = "Use Light Theme";
    }
  } else {
    if (themeToggleIcon) themeToggleIcon.textContent = "🌙";
    if (themeToggleText) {
      themeToggleText.textContent = "Dark";
    } else {
      themeToggle.textContent = "Use Dark Theme";
    }
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("preferred-theme") || "light";
  applyTheme(savedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";

    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

loadSavedTheme();


// =========================
// Git Command Cheat Sheet
// =========================

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
    command: 'git commit -m "message"',
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

  const searchText = commandSearch
    ? commandSearch.value.toLowerCase().trim()
    : "";

  const filteredCommands = gitCommands.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;

    const matchesSearch =
      item.command.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  if (filteredCommands.length === 0) {
    commandGrid.innerHTML = `
      <p class="empty-state">No Git command matched your search.</p>
    `;
    return;
  }

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