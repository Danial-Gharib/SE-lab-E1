# Static Frontend with Automatic Deployment

## 1. Project Information

Repository: https://github.com/Danial-Gharib/SE-lab-E1  
Live Website: https://danial-gharib.github.io/SE-lab-E1/  
Project Type: Static Frontend  
Deployment Target: GitHub Pages  

---

## 2. Team Members

- Danial Gharib — 400105155
- Mohammad Payam Taebi — 400104867

This project was completed as a team project. The development process was managed through Git, GitHub branches, pull requests, conflict resolution, GitHub Projects, GitHub Actions, and GitHub Pages.

---

## 3. Project Description

This project is a static frontend website developed for the Software Engineering Lab assignment. The website presents the project workflow, Git-based collaboration process, deployment pipeline, task management board, and useful Git commands.

The goal was not only to create a static website, but also to practice a complete Git and GitHub workflow. This included meaningful commits, multiple branches, pull requests, conflict resolution, protected branch workflow, GitHub Actions, and automatic deployment using GitHub Pages.

The final website contains several project-related frontend sections, including:

- Static homepage
- Interactive Git command cheat sheet
- Branching workflow visualizer
- Deployment pipeline timeline
- Team task board section
- Light/dark theme toggle
- Responsive design improvements

---

## 4. Technologies Used

The project uses the following technologies:

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Projects
- GitHub Actions
- GitHub Pages

No backend framework or server-side application is used. The project is a pure static frontend.

---

## 5. Live Deployment

The deployed website is available at:

https://danial-gharib.github.io/SE-lab-E1/

The website is deployed automatically using GitHub Actions and GitHub Pages. After approved changes are merged into the `main` branch, the deployment workflow runs and publishes the latest static version of the project.

---

## 6. Repository Structure

```text
SE-lab-E1/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── index.html
├── .gitignore
└── README.md
```

Main files:

- `index.html`: contains the static page structure.
- `css/styles.css`: contains layout, responsive styling, hover effects, and light/dark theme styles.
- `js/app.js`: contains interactive behavior such as command filtering, search, and theme switching.
- `.github/workflows/deploy.yml`: contains the GitHub Actions workflow for deployment.
- `.gitignore`: prevents unnecessary files from being tracked.
- `README.md`: contains the experiment report and Git theory answers.

---

## 7. Git Workflow

The project was developed using a branch-based Git workflow. Changes were not made directly as one large update. Instead, separate branches were created for the initial project shell, deployment configuration, UI improvements, feature development, report updates, and conflict-resolution practice.

The general workflow was:

1. Create or switch to a meaningful branch.
2. Implement a focused change.
3. Check the working tree using `git status`.
4. Stage changes using `git add`.
5. Commit the staged changes with a meaningful commit message.
6. Push the branch to GitHub.
7. Open a pull request.
8. Review and merge the branch into `dev` or `main`.
9. Deploy the final static site through GitHub Actions and GitHub Pages.

The main development flow was:

```text
local development → feature branch → pull request → dev → pull request → main → GitHub Actions → GitHub Pages
```

The `dev` branch was used as the integration branch before final changes were merged into `main`.

---

## 8. Branching Strategy

The repository used multiple meaningful branches during development.

| Branch | Purpose |
|---|---|
| `main` | Production branch connected to GitHub Pages deployment. |
| `dev` | Integration branch used before merging final changes into `main`. |
| `feature/project-shell` | Created the initial static frontend project shell. |
| `feature/github-pages-deploy` | Added the GitHub Actions deployment workflow. |
| `feature/theme-toggle-polish` | Improved the theme toggle text and UI. |
| `feature/html-title-a` | Used as one side of the first intentional conflict scenario. |
| `feature/html-title-b` | Used as the other side of the first intentional conflict scenario. |
| `feature/site-improvements` | Added major frontend improvements: Git cheat sheet, workflow visualizer, deployment timeline, task board, theme toggle, and responsive polish. |
| `conflict/readme-workflow-a` | Used as one side of the second intentional conflict scenario. |
| `conflict/readme-workflow-b` | Used as the other side of the second intentional conflict scenario and its final conflict resolution. |
| `report` | Used for README/report-related updates. |

This branching strategy made the development process clearer and helped separate feature development, deployment setup, report writing, and conflict-resolution work.

---

## 9. Commit History Summary

The repository contains more than 20 meaningful commits. The commits were created for specific development steps instead of vague or generic updates.

The commit history includes work for:

- Repository initialization
- `.gitignore` creation
- Static frontend project shell
- GitHub Pages deployment workflow
- README formatting
- Live page URL update
- UI improvements
- First conflict setup and resolution
- Interactive Git command cheat sheet
- JavaScript rendering for Git command cards
- Search and filtering behavior
- Branching workflow visualizer
- Deployment pipeline timeline
- Team task board section
- Theme toggle with `localStorage`
- Responsive layout improvements
- Second README conflict setup and resolution

Examples of meaningful commits:

```text
initialize repo with README and gitignore files.
Create static frontend project shell
Added Github Pages deployment workflow.
Improve theme toggle button text
Update HTML page title for week one project
Resolve HTML page title conflict
Add Git command cheat sheet section
Render Git command cheat sheet cards
Style Git command cheat sheet
Add branching workflow visualizer section
Style branching workflow visualizer
Add deployment pipeline timeline section
Style deployment pipeline timeline
Add team task board section
Style team task board
Persist theme preference with localStorage
Add dark theme styling
Improve responsive navigation layout
Improve mobile card layout
Add hover polish to project cards
Resolve README workflow summary conflict
```

The commit history therefore satisfies the assignment requirement of at least 20 meaningful commits.

---

## 10. Pull Request Workflow

Pull requests were used to merge work between branches. The project includes pull requests for the initial frontend shell, deployment workflow, UI updates, feature additions, conflict resolution, and integration.

Important merged pull requests include:

| PR | Title | Source Branch | Target Branch |
|---|---|---|---|
| #4 | Create static frontend project shell | `feature/project-shell` | `dev` |
| #5 | Added Github Pages deployment workflow | `feature/github-pages-deploy` | `dev` |
| #6 | merge dev into main | `dev` | `main` |
| #7 | added page url to readme | `report` | `dev` |
| #9 | Improve theme toggle button text | `feature/theme-toggle-polish` | `dev` |
| #10 | Update HTML page title for week one project | `feature/html-title-b` | `dev` |
| #11 | Feature/html title a | `feature/html-title-a` | `dev` |
| #12 | Dev | `dev` | `main` |
| #13 | revised styles for hover animation | `dev` | `main` |
| #23 | Feature/site improvements | `feature/site-improvements` | `dev` |
| #24 | Update README workflow summary for branch strategy | `conflict/readme-workflow-a` | `dev` |
| #25 | Resolve README workflow summary conflict | `conflict/readme-workflow-b` | `dev` |

This workflow shows that changes were not handled as one direct update. Instead, branches and pull requests were used to organize and integrate the project.

---

## 11. Conflict Resolution Report

At least two conflicts were intentionally created and resolved during development.

### Conflict 1: HTML Page Title Conflict

Branches involved:

- `feature/html-title-a`
- `feature/html-title-b`

File involved:

- `index.html`

Cause of conflict:

Both branches edited the HTML page title in the same part of `index.html`. Since Git could not automatically decide which title should remain, a merge conflict occurred.

Resolution:

The conflict was resolved manually by editing the conflicted section of `index.html`, removing the Git conflict markers, and keeping the final title that best matched the project. The resolution was then committed with a meaningful commit message.

Evidence:

- PR #10
- PR #11
- Commit: `Resolve HTML page title conflict`

### Conflict 2: README Workflow Summary Conflict

Branches involved:

- `conflict/readme-workflow-a`
- `conflict/readme-workflow-b`

File involved:

- `README.md`

Cause of conflict:

Both branches edited the same workflow summary paragraph in `README.md`.

One branch changed the paragraph to focus on:

- Feature branches
- Pull requests
- Code review

The other branch changed the same paragraph to focus on:

- GitHub Actions
- GitHub Pages
- Protected branches
- Deployment control

Resolution:

The conflict was resolved manually by combining both explanations into one complete workflow summary:

> This project uses feature branches, pull requests, code review, protected branches, GitHub Actions, and GitHub Pages to manage development and automate deployment.

Evidence:

- PR #24
- PR #25
- Commit: `Resolve README workflow summary conflict`

These two conflict-resolution examples satisfy the assignment requirement of resolving at least two conflicts.

---

## 12. GitHub Project / Kanban Board

A GitHub Project board was used to organize the work. The board helped track implementation, documentation, conflict resolution, and final submission tasks.

Project board name:

```text
SE-lab-HW1
```

Board columns:

```text
Backlog
Ready
In progress
In review
Done
```

Examples of tracked tasks:

- Add interactive Git command cheat sheet
- Add branching workflow visualizer
- Add deployment pipeline timeline
- Add theme toggle with localStorage
- Add team task board section to frontend
- Complete README experiment report
- Add Git theory answers to README
- Create and resolve second merge conflict
- Finalize submission evidence and video checklist
- Project base shell
- Add GitHub Actions deployment workflow
- Enable GitHub Pages
- Improve UI

The board was used to separate not-started work, active work, review-stage work, and completed work.

---

## 13. GitHub Actions Deployment

The project uses GitHub Actions for automatic deployment.

The workflow file is located at:

```text
.github/workflows/deploy.yml
```

The workflow is named:

```text
Deploy static site to GitHub Pages
```

The workflow runs on pushes to the `main` branch:

```yaml
on:
  push:
    branches:
      - main

  workflow_dispatch:
```

This means deployment starts automatically when approved changes are merged into `main`. The workflow can also be started manually from the GitHub Actions tab using `workflow_dispatch`.

The deployment job performs these steps:

1. Checkout the repository using `actions/checkout@v4`.
2. Configure GitHub Pages using `actions/configure-pages@v5`.
3. Upload the static site artifact using `actions/upload-pages-artifact@v3`.
4. Deploy the artifact using `actions/deploy-pages@v4`.

The workflow uses the following permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Because this is a pure static frontend project, no build command is required. The workflow uploads the repository root as the static site artifact.

---

## 14. GitHub Pages Deployment

The deployed website is available at:

https://danial-gharib.github.io/SE-lab-E1/

The deployment is connected to the `main` branch through GitHub Actions. After changes are merged into `main`, the workflow publishes the latest static version to GitHub Pages.

The live website includes:

- Homepage
- Team section
- Git command cheat sheet
- Branching workflow visualizer
- Deployment timeline
- Task board section
- Theme toggle
- Responsive layout

---

## 15. Main Branch Protection

The assignment requires the `main` branch to be protected so that changes are merged through pull requests instead of uncontrolled direct pushes.

The intended protection rule for this project is:

- Branch name pattern: `main`
- Pull request required before merging: enabled
- Direct development should happen on feature branches and `dev`
- Final integration into `main` should happen through pull request

Before final submission, the branch protection settings should be checked from:

```text
Repository Settings → Branches → Branch protection rules
```

Status before final submission:

```text
To be verified before final recording.
```

---

## 16. Implemented Website Features

The final website includes the following sections and features.

### Static Homepage

The website has a static homepage built with HTML, CSS, and JavaScript. It introduces the project and presents the development process.

### Interactive Git Command Cheat Sheet

A searchable and filterable Git command cheat sheet was added. Users can search commands and filter them by categories such as setup, branching, committing, merging, remote operations, and undo commands.

The feature uses JavaScript to render command cards dynamically and filter them based on user input.

### Branching Workflow Visualizer

A visual workflow section explains how the team used feature branches, the `dev` branch, the protected `main` branch, and GitHub Pages deployment.

The visualizer shows the flow:

```text
feature branches → dev → main → GitHub Pages
```

### Deployment Pipeline Timeline

A deployment timeline explains the path from local development to GitHub Pages:

```text
Develop locally → Push feature branch → Open PR → Merge to main → Run GitHub Actions → Publish on GitHub Pages
```

This section connects the frontend work to the GitHub Actions deployment process.

### Team Task Board Section

The website includes a static task board showing project tasks in columns such as:

- Todo
- In Progress
- Review
- Done

This section mirrors the project management workflow used during development.

### Theme Toggle

A light/dark theme toggle was implemented using JavaScript. The selected theme is saved in `localStorage`, so the user’s preference remains after refreshing the page.

### Responsive Design

The website was improved for desktop and mobile screens. Navigation links, cards, timelines, and task board columns were adjusted to remain readable on smaller screens.

### Hover and UI Polish

Additional hover effects and layout polish were added to improve the user experience and make the website feel more complete.

---

## 17. Final Test Checklist

Before final submission, the following checks are used:

- [x] Static website opens successfully.
- [x] GitHub Pages URL works.
- [x] Git command cheat sheet search works.
- [x] Git command category filters work.
- [x] Branching workflow visualizer is visible.
- [x] Deployment pipeline timeline is visible.
- [x] Team task board is visible.
- [x] Theme toggle works.
- [x] Theme preference remains after refresh.
- [x] Website layout is responsive.
- [x] More than 20 meaningful commits exist.
- [x] More than 3 meaningful branches exist.
- [x] At least 2 conflicts were resolved.
- [x] Pull requests were used for merging.
- [x] GitHub Actions workflow exists.
- [x] GitHub Pages deployment works.
- [x] Main branch protection verified.
- [x] Final `dev` to `main` pull request completed.
- [x] Latest GitHub Actions deployment checked after final merge.
- [x] Final video recorded.

---

## 18. Assignment Requirements Checklist

| Requirement | Status | Evidence |
|---|---|---|
| Static frontend implemented | Done | `index.html`, `css/styles.css`, `js/app.js` |
| Git used during development | Done | Commit history |
| `.gitignore` used | Done | `.gitignore` file |
| At least 20 meaningful commits | Done | More than 20 commits in Git history |
| At least 3 meaningful branches | Done | `main`, `dev`, feature branches, conflict branches |
| At least 2 conflicts resolved | Done | HTML title conflict and README workflow conflict |
| Pull requests used | Done | PR #4, #5, #6, #7, #9, #10, #11, #12, #13, #23, #24, #25 |
| GitHub Project / Kanban board used | Done | `SE-lab-HW1` project board |
| GitHub Actions used | Done | `.github/workflows/deploy.yml` |
| GitHub Pages deployment | Done | Live website URL |
| Main branch protected | Donen | GitHub branch protection settings |
| README report written | Done | This README |
| Theory questions answered | Done | Git theory section |
| Video recorded | Done | Submitted separately |

---

## 19. Git Theory Questions

The answers to the required Git theory questions are written in this section.

### 19.1 What is the `.git` folder? What information is stored in it? Which command creates it?

The `.git` folder is the internal database of a Git repository. It is created when a directory becomes a Git repository.

It stores the information Git needs to track the project, including:

- Commit history
- Branches
- Tags
- Staging area information
- Repository configuration
- Object database
- References to commits and branches
- Remote repository information

The `.git` folder is created with:

```bash
git init
```

It is also created automatically when cloning an existing repository:

```bash
git clone <repository-url>
```

Without the `.git` folder, the project directory is just a normal folder and Git cannot track its history.

---

### 19.2 What does atomic mean in atomic commit and atomic pull request?

An atomic commit is a commit that contains one logical change. It should be small, focused, and meaningful.

For example, this is atomic:

```text
Add theme toggle button
```

This is not atomic:

```text
Add theme toggle, fix README, change navbar, update deployment workflow
```

The second example is weak because it mixes unrelated changes. If a bug appears later, it becomes harder to understand which change caused it.

An atomic pull request follows the same idea. It should contain one focused feature, fix, or improvement. A good pull request is easier to review, test, and merge.

In this project, separate pull requests were used for tasks such as the project shell, GitHub Pages deployment, UI improvements, site improvements, and conflict resolution.

---

### 19.3 What is the difference between `fetch`, `pull`, `merge`, `rebase`, and `cherry-pick`?

#### `git fetch`

`git fetch` downloads new data from the remote repository but does not merge it into the current branch.

Example:

```bash
git fetch origin
```

It updates remote-tracking branches such as `origin/main` or `origin/dev`, but the local working branch does not change automatically.

Use it when you want to inspect remote changes before applying them.

#### `git pull`

`git pull` downloads changes from the remote repository and applies them to the current branch.

It is basically:

```text
git fetch + git merge
```

Example:

```bash
git pull origin dev
```

This fetches changes from `origin/dev` and merges them into the current local branch.

#### `git merge`

`git merge` combines another branch into the current branch.

Example:

```bash
git merge feature/site-improvements
```

If both branches changed different files or different parts of the same file, Git may merge automatically. If both changed the same lines, a conflict may happen.

Merge preserves the branch history and can create a merge commit.

#### `git rebase`

`git rebase` moves or reapplies commits from one branch on top of another branch.

Example:

```bash
git rebase dev
```

It creates a cleaner linear history, but it rewrites commit history. Because of that, it should be used carefully, especially on shared branches.

#### `git cherry-pick`

`git cherry-pick` applies one specific commit from another branch onto the current branch.

Example:

```bash
git cherry-pick <commit-hash>
```

It is useful when we do not want to merge an entire branch but only want one specific commit.

#### Summary

| Command | Main Purpose |
|---|---|
| `fetch` | Download remote changes without applying them |
| `pull` | Download and apply remote changes |
| `merge` | Combine another branch into the current branch |
| `rebase` | Replay commits on top of another branch |
| `cherry-pick` | Apply one specific commit from another branch |

---

### 19.4 What is the difference between `reset`, `revert`, `restore`, `switch`, and `checkout`?

#### `git reset`

`git reset` is used to move the current branch pointer or unstage changes.

Example for unstaging a file:

```bash
git reset README.md
```

It can also move branch history:

```bash
git reset --hard <commit-hash>
```

`reset --hard` is dangerous because it can remove local changes and rewrite history.

#### `git revert`

`git revert` creates a new commit that reverses the effect of a previous commit.

Example:

```bash
git revert <commit-hash>
```

Unlike `reset`, it does not delete history. It is safer for shared branches because the previous commit remains in history and the reversal is recorded as a new commit.

#### `git restore`

`git restore` is used to discard changes in files or restore files from a specific state.

Example:

```bash
git restore index.html
```

This discards unstaged local changes in `index.html`.

It can also unstage a file:

```bash
git restore --staged README.md
```

#### `git switch`

`git switch` is used to switch between branches.

Example:

```bash
git switch dev
```

It can also create and switch to a new branch:

```bash
git switch -c feature/new-section
```

This command is more focused and clearer than `checkout` for branch switching.

#### `git checkout`

`git checkout` is an older command that can do multiple things, including switching branches and restoring files.

Examples:

```bash
git checkout dev
```

```bash
git checkout -- README.md
```

Because `checkout` has multiple responsibilities, newer Git versions introduced `switch` and `restore` to make commands clearer.

#### Summary

| Command | Main Purpose |
|---|---|
| `reset` | Unstage changes or move branch history |
| `revert` | Safely undo a commit by creating a new commit |
| `restore` | Restore files or unstage files |
| `switch` | Switch branches |
| `checkout` | Older command for switching branches or restoring files |

---

### 19.5 What is stage/index? What does `stash` do?

The stage, also called the index, is the intermediate area between the working directory and the repository history.

The normal commit flow is:

```text
working directory → staging area/index → commit
```

When a file is modified, it is first only changed in the working directory. To include it in the next commit, it must be added to the staging area:

```bash
git add README.md
```

Then the staged changes can be committed:

```bash
git commit -m "Update README"
```

The staging area allows us to choose exactly which changes should be included in a commit. This helps create atomic commits.

#### `git stash`

`git stash` temporarily saves uncommitted changes without creating a normal commit.

Example:

```bash
git stash
```

This is useful when we are in the middle of some work but need to switch branches or pull changes.

To restore the stashed changes:

```bash
git stash pop
```

To list stashes:

```bash
git stash list
```

So, `stash` is a temporary storage area for unfinished work.

---

### 19.6 What does snapshot mean? What is its relationship with commit?

A snapshot is the saved state of the project at a specific point in time.

In Git, a commit is a snapshot of the tracked files in the repository. When we make a commit, Git records the state of the files that were staged at that moment.

A commit contains:

- A snapshot of the project files
- A commit message
- Author information
- Time information
- A reference to the previous commit or commits

The relationship is:

```text
commit = saved snapshot + metadata
```

Git does not think of history only as a list of file differences. Conceptually, each commit represents a snapshot of the project. This allows the repository to move back and forth between different states of the project.

Example:

```bash
git commit -m "Add deployment pipeline timeline"
```

This commit stores a snapshot of the project after the deployment timeline was added.

---

### 19.7 What is the difference between local repository and remote repository?

A local repository is the Git repository stored on a developer’s own computer. It contains the working directory, branches, commits, and the `.git` folder.

A remote repository is hosted somewhere outside the local machine, such as GitHub. It is used for collaboration, backup, pull requests, and deployment workflows.

In this project:

```text
Local repository: the repository cloned on each team member's computer
Remote repository: https://github.com/Danial-Gharib/SE-lab-E1
```

Common commands connecting local and remote repositories include:

```bash
git clone <repository-url>
```

```bash
git push origin <branch>
```

```bash
git pull origin <branch>
```

```bash
git fetch origin
```

#### Summary

| Repository Type | Description |
|---|---|
| Local repository | Exists on the developer’s computer |
| Remote repository | Exists on GitHub or another hosting service |
| Local branches | Branches available locally |
| Remote branches | Branches tracked from the remote repository |
| `git push` | Sends local commits to remote |
| `git pull` | Gets remote commits and applies them locally |
| `git fetch` | Gets remote information without merging automatically |

The local repository is where development happens. The remote repository is where the team shares, reviews, merges, and deploys the project.