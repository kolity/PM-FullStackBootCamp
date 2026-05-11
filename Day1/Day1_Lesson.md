# Day 1 — Git, GitHub & Developer Workflow

## Lesson plan overview

> **Learning objective**
>
> - Learners can initialize repositories, manage branches, push to GitHub, and collaborate via pull requests.

### Morning block — Version control fundamentals

Topics covered:

- Why version control? Common dev pain points without it
- Git mental model: working directory, staging area, repository
- Configuring identity: git config user.name / user.email
- Core commands: git init, status, add, commit, log, diff
- Ignoring files with .gitignore
- Inspecting history: git log --oneline --graph --all

### Afternoon block — Collaboration with GitHub

Topics covered:

- Creating a remote repository on GitHub
- Connecting local to remote: git remote add, push, pull, fetch
- Branching strategy: feature branches, main branch protection
- Merging vs rebasing (intro level)
- Pull Requests: opening, reviewing, merging
- Collaborative workflow: clone → branch → commit → push → PR → merge

### Mini-project

Initialize a personal repo, commit a starter HTML page, create a feature branch, push to GitHub, and open a Pull Request.

#### Deliverable

GitHub repo with at least one merged PR and a README.md.

#### Cheat-sheet

```bash
git init / git clone <url>
git status / git add . / git commit -m 'msg'
git push / git pull / git fetch
git branch / git checkout -b <name> / git merge <name>
git log --oneline --graph --decorate --all
```

---

## Worksheet — hands-on exercises

## Today at a glance

Today is about turning Git from 'magic' into a tool you reach for without thinking. Every exercise builds on the previous one, so don't skip ahead. By the end of the day you will own a public GitHub repository with a merged Pull Request — your first piece of evidence that you are a developer.

#### Workflow for every exercise

- Read the entire exercise before opening your terminal.
- Do the work on your own machine — no copy-pasting from the slides.
- If stuck for more than 10 minutes, ask a partner or the instructor.
- Commit and push to GitHub when finished.
- Tick the box and move on.

#### Today's exercises

| # | Exercise | Time |
| --- | --- | --- |
| 1.1 | Configure your identity & first commit | 30 min |
| 1.2 | Push to GitHub | 30 min |
| 1.3 | Branches and pull requests | 60 min |
| 1.4 | Recovering from mistakes | 30 min |

> **Self-marking**
>
> - Don't move on until your code does what the exercise says. The point isn't to write something that 'looks like' the answer — it's to make it work and to understand why.

### Exercise 1.1 — Configure your identity & first commit   (30 min)

Goal: set up Git on your machine and create your first repository.

#### Step 1 — Verify Git is installed

In your terminal, type:

```bash
git --version
```

You should see something like 'git version 2.40.x'. If you see 'command not found', install Git from git-scm.com first.

#### Step 2 — Tell Git who you are

Run these commands, replacing the values with your real name and the email you use on GitHub:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "[email protected]"
git config --global init.defaultBranch main
```

These settings are saved once per machine. You won't need to repeat them.

#### Step 3 — Create your first repository

```bash
mkdir hello-git
cd hello-git
git init
echo "# Hello Git" > README.md
```

Now check the status:

```bash
git status
```

Git tells you that README.md is 'untracked'. Stage and commit it:

```bash
git add README.md
git commit -m "add readme"
git log
```

#### Reflection

In your own words: what did `git add` do, and what did `git commit` do?

Look at the output of `git log`. What three pieces of information does each entry contain?

- [ ] My terminal shows a git version number
- [ ] I have run all three `git config --global` commands
- [ ] I have a folder called hello-git with a README.md inside
- [ ] `git log` shows my first commit with my name and email

### Exercise 1.2 — Push to GitHub   (30 min)

Goal: connect your local repo to GitHub and push your work.

#### Step 1 — Create an empty GitHub repository

- Open github.com in your browser and sign in.
- Click the '+' icon in the top right → 'New repository'.
- Name it `hello-git`. Set it to Public.
- CRITICAL: do NOT tick 'Add a README', 'Add .gitignore', or 'Choose a license'. Keep it completely empty.
- Click 'Create repository'. GitHub will show you instructions — keep that tab open.

> **Why empty?**
>
> - If GitHub creates a README and your local repo also has one, you have two unrelated histories. They can be reconciled but it's annoying. Easier to keep one side empty until they're connected.

#### Step 2 — Connect local to remote and push

Back in your terminal, in the hello-git folder, run (replacing <YOU> with your GitHub username):

```bash
git remote add origin https://github.com/<YOU>/hello-git.git
git branch -M main
git push -u origin main
```

If asked for a password: GitHub no longer accepts your account password from the command line. You need a Personal Access Token (PAT). Generate one at github.com → Settings → Developer settings → Personal access tokens → Tokens (classic). Use it as the password.

#### Step 3 — Verify

Refresh your repo page on github.com. You should see your README rendered with the heading 'Hello Git'.

- [ ] My repo is visible on github.com
- [ ] README.md renders with my heading
- [ ] I can see my commit listed under the 'commits' tab

#### Reflection

What is the difference between `git commit` and `git push`?

### Exercise 1.3 — Branches and pull requests   (60 min)

Goal: practice the workflow you'll use every day from now on.

#### Step 1 — Create a feature branch

From your hello-git folder, on the main branch, create and switch to a new branch:

```bash
git checkout -b feature/about-page
```

Verify with `git status` that you're on the new branch.

#### Step 2 — Add a new file

Create a new file `about.html` in the same folder. Add this content (or write your own):

```html
<!DOCTYPE html>
<html>
<head><title>About me</title></head>
<body>
<h1>Hi, I'm <YOUR NAME></h1>
<p>I'm learning fullstack development.</p>
<p>This is my first branch.</p>
</body>
</html>
```

#### Step 3 — Commit and push the branch

```bash
git add about.html
git commit -m "add about page"
git push -u origin feature/about-page
```

Notice the `-u origin feature/about-page` — you only need that the FIRST time you push a new branch. After that, plain `git push` works.

#### Step 4 — Open a Pull Request on GitHub

- Go to your repo on github.com.
- You should see a yellow banner: 'feature/about-page had recent pushes. Compare & pull request'.
- Click 'Compare & pull request'.
- Write a clear title (e.g. 'Add about page') and a 1-2 sentence description.
- Click 'Create pull request'.

#### Step 5 — Self-review

On your open PR, click the 'Files changed' tab. Hover over a line of your new file — a blue '+' icon appears. Click it and add one comment about something you'd improve later (e.g., 'should add a profile picture').

This is exactly how teammates review each other's code.

#### Step 6 — Merge

- Go back to the 'Conversation' tab of the PR.
- Click the green 'Merge pull request' button → 'Confirm merge'.
- After merging, click 'Delete branch' (the cleanup step).

#### Step 7 — Sync your local repo

Your local main is now behind. Pull the merged changes back:

```bash
git checkout main
git pull
git branch -d feature/about-page
```

Now look at the history graph:

```bash
git log --oneline --graph --decorate --all
```

> **Why branches?**
>
> - If you commit straight to main every time, you lose the ability to review, undo, or work on two ideas at once. Get the branch habit early — even when working alone.

- [ ] My PR was merged on GitHub
- [ ] about.html is visible on the main branch on GitHub
- [ ] My local `git log --graph` shows the merge
- [ ] My feature branch is deleted both locally and remotely

#### Reflection

Why did you `git push -u origin feature/about-page` for the first push, but only `git push` would work after?

### Exercise 1.4 — Recovering from mistakes   (30 min)

Goal: see each of these recovery commands once, on a throwaway commit, so you've used them before you need them in anger.

#### Setup — make a deliberate mess

On main in your hello-git folder:

```bash
echo "this is wrong" > mistake.txt
git add mistake.txt
git commit -m "oops"
```

Now you have a commit you want to undo. Try the recovery commands below.

#### A. Undo the most recent commit but keep the changes

```bash
git reset --soft HEAD~1
```

`HEAD~1` means 'one commit before HEAD'. `--soft` means 'keep my files, just rewind history'. Run `git status` — mistake.txt is back in the staging area, ready to be re-committed or unstaged.

#### B. Discard uncommitted changes to a file

First, modify a tracked file:

```bash
echo "broken stuff" >> README.md
git status
```

Now restore it to the last committed version:

```bash
git checkout -- README.md
# or in newer Git versions:
git restore README.md
```

Your changes to README.md are gone. (Be careful — this is destructive.)

#### C. Compare what changed between two commits

```bash
git log --oneline
git diff HEAD~1 HEAD
```

Read the diff. Lines starting with `-` were removed; lines starting with `+` were added.

#### D. View the full history graph

```bash
git log --oneline --graph --decorate --all
```

This is your X-ray of the project. Use it whenever you're confused about where you are.

#### Final cleanup

Get rid of the mistake.txt file completely:

```bash
git reset HEAD mistake.txt   # unstage if still staged
rm mistake.txt
```

- [ ] I have used `git reset --soft HEAD~1` at least once
- [ ] I have used `git checkout -- <file>` or `git restore <file>` at least once
- [ ] I have read the output of `git diff` and understood + and -
- [ ] I can run `git log --oneline --graph --decorate --all` from memory

## End of Day 1

Before you leave today, make sure all of these are true. If any aren't, ask the instructor before walking out — Day 2 builds on this.

> **End-of-day checkpoint — tick when complete**
>
> - [ ] I have a public GitHub repository with at least one merged pull request.
> - [ ] I can explain the difference between staged, unstaged, and committed changes.
> - [ ] I have run `git log --oneline --graph --all` and understand the output.
> - [ ] My commits have meaningful messages in the imperative mood.
> - [ ] I know what to do when I want to undo my last commit.
> - [ ] I have generated a Personal Access Token and pushed at least once with it.

### Daily standup

Write one sentence for each. We'll share these in the closing standup.

#### One thing that worked today

#### One thing I'm still confused about

#### One thing I want to try tomorrow

## Day 1 cheat sheet

Print this page and stick it on your monitor. By Day 5 you won't need it any more.

| What you want | Command |
| --- | --- |
| Initialize a new repo | git init |
| Clone someone else's repo | git clone <url> |
| See what's changed | git status |
| Stage one file | git add <file> |
| Stage everything | git add . |
| Commit with a message | git commit -m "add nav bar" |
| See your history | git log --oneline --graph --all |
| Compare staged vs last commit | git diff --cached |
| Compare last two commits | git diff HEAD~1 HEAD |
| Create + switch to a branch | git checkout -b feature/x |
| Switch to existing branch | git checkout main |
| Push a NEW branch to GitHub | git push -u origin feature/x |
| Push subsequent commits | git push |
| Pull latest from remote | git pull |
| Undo last commit (keep changes) | git reset --soft HEAD~1 |
| Discard uncommitted file changes | git checkout -- <file> |
| Delete a local branch | git branch -d feature/x |

### Stuck? Try this list

- Read the error message slowly, out loud.
- Look at what `git status` says — it usually tells you the next move.
- Run `git log --oneline --graph --all` to see where you are.
- Search the exact error string (without your filenames) on Google.
- Ask a partner — but bring the error message and what you've tried.
