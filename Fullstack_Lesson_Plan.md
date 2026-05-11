# FULLSTACK — WEB DEVELOPMENT — 10-Day Intensive Training Program

_Master Lesson Plan_
_Stack: Git • HTML • CSS • JavaScript • React • Next.js • Prisma • PostgreSQL • GitHub Actions_
_Duration: 10 hours • 10 days × 1 hour_

## Contents

1. Program Overview

2. Learning Outcomes

3. Daily Schedule Template

4. Tools, Software & Accounts

5. Assessment & Capstone

6. Day-by-Day Lesson Plan

Day 1 — Git & GitHub: your first commit

Day 2 — HTML basics: a one-page personal card

Day 3 — CSS basics: style your page

Day 4 — JavaScript: variables, a function, and the console

Day 5 — DOM & events: make the page react

Day 6 — React: a tiny component with state

Day 7 — React: props and a small list

Day 8 — Next.js: your first page

Day 9 — Data: read one row with Prisma

Day 10 — Deploy & demo

7. Capstone Project Brief

8. Instructor Notes & Tips

## 1. Program Overview

This program introduces staff with little or no programming experience to the modern fullstack web stack across ten focused one-hour sessions. Each day pairs a short concept demo with a tight hands-on exercise, ending with a small artefact that the participant has built themselves. The course is project-driven: every concept is introduced when it is needed for that day's exercise, and concepts compound across days so that by Day 10 each learner has shipped a small live web page.

The pedagogical model is roughly 25% explanation, 75% practice. The hour is short, so instructors keep demos crisp (≤ 20 minutes) and protect the practice time. Worksheets in the accompanying workbook give a graded ramp from 'follow along' to 'figure it out yourself' and include optional homework for learners who want to go deeper between sessions.

### Course at a glance

| Title | Fullstack Web Development |
| --- | --- |
| Format | Instructor-led, in-person or virtual classroom |
| Duration | 10 hours (10 days × 1 hour) |
| Daily hours | 1 instructional hour per day |
| Class size | Recommended 8–16 learners per instructor |
| Level | Beginner — first taste of fullstack |
| Prerequisites | Basic computer literacy; no prior coding required |
| Final outcome | A small live web page each learner has built and deployed |

## 2. Learning Outcomes

This is an awareness-and-first-build program, not a deep mastery course. By the end of the ten one-hour sessions, every successful participant will be able to:

- Use Git on the command line for basic solo work: init, status, add, commit, and push to GitHub.
- Write a simple semantic HTML page and style it with hand-written CSS.
- Read and write small pieces of JavaScript: variables, functions, arrays, and a basic event handler.
- Recognise the shape of a React component and edit a small one with state and props.
- Recognise the shape of a Next.js project and add a simple page to it.
- Read a tiny Prisma schema and understand what a row in a PostgreSQL table represents.
- Deploy a small project to Vercel and open a public URL.
- Read an error message slowly and know where to look next when stuck.

Going deeper (full PR workflow, hooks, Server Actions, Auth, CI/CD pipelines, production-grade data modelling) is signposted as follow-up study, not covered in depth here.

## 3. Daily Schedule Template

Each one-hour session follows the same rhythm so participants can settle into a predictable cadence. Times below are offsets from the session start.

| Time | Block | Activity |
| --- | --- | --- |
| 00:00 – 00:05 | Recap & warm-up | One-sentence recap of yesterday; today's goal stated up front |
| 00:05 – 00:20 | Concept demo | Tight live-coding walk-through of the day's single core idea |
| 00:20 – 00:50 | Hands-on practice | Worksheet exercise; instructor circulates to unblock |
| 00:50 – 00:55 | Commit & push | Every learner commits today's work to GitHub before leaving |
| 00:55 – 01:00 | Wrap-up | One thing that worked / one thing stuck on; preview of tomorrow |

> **Protect the practice block** — At 60 minutes per day the only way learners retain anything is by typing it themselves. If the demo overruns, cut topics, not the hands-on time.

## 4. Tools, Software & Accounts

#### Required before Day 1

- Laptop with admin/install rights
- Node.js 20 LTS or newer
- Git 2.40+
- VS Code
- A modern browser with DevTools (Chrome, Edge, or Firefox)
- A GitHub account

#### Set up during the course

- A GitHub repository, created on Day 1 and used for the whole course
- A Vercel account, created on Day 10 to deploy the final project
- A Neon (or Supabase) free Postgres database, created on Day 9 — only if Day 9 is attempted live

#### Recommended VS Code extensions (install once, ignore the rest of the time)

- Prettier — formats your code on save
- Prisma — syntax highlighting for the Day 9 schema file

Anything beyond this list (linting, GitLens, snippet packs) is optional for the one-hour format and can be left for later.

## 5. Assessment & Capstone

Assessment is continuous and evidence-based. There are no traditional exams. Each day produces a tiny artefact committed to GitHub; the instructor spot-checks at the start of the next session and gives one-line written feedback.

#### Daily checks

- Today's commit pushed to the learner's GitHub repo before the session ends
- One-sentence wrap-up: what worked / what's stuck
- Optional homework noted (≤ 30 min between sessions, never required)

#### Final capstone (Day 10)

- One small Next.js page deployed to a public Vercel URL
- Repo on GitHub with at least one commit per day (10+ commits total)
- Reads one piece of data — either hard-coded, from a JSON file, or from a single Prisma row
- 2-minute live walk-through: open the URL, show the code, name one thing learned

#### Grading rubric

| Criterion | Weight | What we look for |
| --- | --- | --- |
| It runs | 40% | URL opens; page renders; no console errors |
| Git hygiene | 20% | A commit per day; messages describe the change |
| Code clarity | 15% | Readable structure; reasonable file names; no dead code |
| Stack coverage | 15% | Touches HTML, CSS, JS, React/Next, and a data read |
| Demo & reflection | 10% | Clear 2-min walk-through; honest self-assessment |

## 6. Day-by-Day Lesson Plan

Each day below follows the same compact structure for a 60-minute session: a single learning objective, the demo topics (≤ 20 min), the hands-on exercise (≤ 30 min), and a deliverable. Topics not listed here are deliberately out of scope for this format — flag them as follow-up reading. Instructors should treat the topics as a checklist of things participants must touch with their own hands, not just hear about.

## Day 1 — Git & GitHub: your first commit

> **Learning objective**
>
> - Learner can create a local Git repo, make a commit, and push it to GitHub.

### Demo (≤ 20 min)

- Why version control, in one sentence
- One-time setup: `git config --global user.name / user.email`
- The core loop: edit → `git add` → `git commit -m "..."` → `git push`
- Looking at history with `git log --oneline`

### Hands-on (≤ 30 min)

Create a folder `fullstack-journey/`, run `git init`, add a `README.md` with your name and one sentence about why you're here. Commit it. On GitHub, create a new empty public repo with the same name. Connect the remote and push.

#### Deliverable

Public GitHub repo containing `README.md` with your first commit visible on github.com.

#### Out of scope (signpost as follow-up)

Branches, pull requests, merging, recovery commands. We stay on `main` for the whole course.

## Day 2 — HTML basics: a one-page personal card

> **Learning objective**
>
> - Learner can write a small semantic HTML page that displays in a browser.

### Demo (≤ 20 min)

- The page skeleton: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Headings, paragraphs, lists, links, images (with `alt`)
- Semantic building blocks worth knowing: `<header>`, `<main>`, `<footer>`

### Hands-on (≤ 30 min)

Add an `index.html` to your Day 1 repo. Build a "personal card": your name in `<h1>`, a one-paragraph bio, a list of three things you'd like to build, one link to a site you like, and a `<footer>` with the year. Open it in the browser. Commit and push.

#### Deliverable

`index.html` committed alongside `README.md`; page renders in a browser.

#### Out of scope

Forms, accessibility deep-dive, navigation menus. Plenty to build on later.

## Day 3 — CSS basics: style your page

> **Learning objective**
>
> - Learner can link a CSS file and apply colour, font, and spacing.

### Demo (≤ 20 min)

- How CSS attaches: `<link rel="stylesheet" href="styles.css">`
- Two selectors: type (`h1`) and class (`.card`)
- The four properties you'll reach for first: `color`, `background`, `font-family`, `padding`/`margin`
- A glance at the box model

### Hands-on (≤ 30 min)

Add `styles.css` to the same folder and link it from `index.html`. Style the `body` (a readable font, a max-width, centred), the `h1` (a colour you like, a bigger `font-size`), and give the `<footer>` a different background. Reload the page after each change. Commit.

#### Deliverable

`styles.css` committed; page is visibly styled.

#### Out of scope

Flexbox, Grid, responsive design, media queries, CSS variables. Listed in the cheat-sheet for self-study.

## Day 4 — JavaScript: variables, a function, and the console

> **Learning objective**
>
> - Learner can run a small JavaScript file from an HTML page and read the output in DevTools.

### Demo (≤ 20 min)

- Attach a script: `<script src="app.js"></script>` before `</body>`
- `let` vs `const`, strings and numbers
- A function that takes input and returns output
- `console.log` and the Chrome/Edge DevTools Console (F12)

### Hands-on (≤ 30 min)

Create `app.js`. Define `function greet(name) { return "Hello, " + name + "!"; }`. Call it with your name and `console.log` the result. Add a number variable, do some arithmetic, log that too. Reload the page, open DevTools → Console, read what your code printed. Commit.

#### Deliverable

`app.js` committed; correct output visible in DevTools console.

#### Out of scope

Arrays/objects in depth, array methods, destructuring, spread, optional chaining. Mention as the next step.

## Day 5 — DOM & events: make the page react

> **Learning objective**
>
> - Learner can change page content in response to a button click.

### Demo (≤ 20 min)

- `document.querySelector('h1')` to grab an element
- Reading and changing `.textContent`
- `element.addEventListener('click', () => { ... })`

### Hands-on (≤ 30 min)

Add a `<button id="change">Surprise me</button>` to `index.html`. In `app.js`, on click, change the `<h1>` text to a new message (the current time via `new Date().toLocaleTimeString()` is a nice one). Reload, click, watch it update without refreshing. Commit.

#### Deliverable

Working click handler committed; heading updates on click.

#### Out of scope

Async/await, `fetch`, `localStorage`, forms, modules. Signposted for self-study.

## Day 6 — React: a tiny component with state

> **Learning objective**
>
> - Learner can scaffold a Vite React app and edit `App.jsx` to add state.

### Demo (≤ 20 min)

- `npm create vite@latest my-app -- --template react`, then `npm install`, `npm run dev`
- The three files that matter: `index.html`, `src/main.jsx`, `src/App.jsx`
- JSX in one breath: "looks like HTML, lives in JS"
- `useState` for a counter

### Hands-on (≤ 30 min)

In a new folder beside Day 1–5 (or a new repo if you prefer), create a Vite React app. Edit `App.jsx` so it renders your name and a button that increments a `count` using `useState`. Watch hot reload kick in. Commit.

#### Deliverable

Vite React project committed; counter works in the browser.

#### Out of scope

Lists/keys, controlled inputs, lifting state, splitting into many files. Today is purely "I made one component change state."

## Day 7 — React: props and a small list

> **Learning objective**
>
> - Learner can pass props into a component and render a list with `.map`.

### Demo (≤ 20 min)

- Pulling part of `App.jsx` into a `Greeting.jsx` that takes a `name` prop
- `props.name` vs destructuring `{ name }`
- `.map()` over an array to render multiple components
- The `key` prop in one sentence

### Hands-on (≤ 30 min)

Create `src/Greeting.jsx` that accepts `name` and renders "Hello, {name}!". In `App.jsx`, define `const names = ['Ana', 'Ben', 'Cara']` and render a `<Greeting>` for each using `.map(name => <Greeting key={name} name={name} />)`. Commit.

#### Deliverable

Multi-component React app rendering a list, committed.

#### Out of scope

`useEffect`, `useContext`, `useReducer`, React Router, custom hooks, controlled forms. All explicitly named as the next steps.

## Day 8 — Next.js: your first page

> **Learning objective**
>
> - Learner can create a Next.js project and add a second page with a link.

### Demo (≤ 20 min)

- `npx create-next-app@latest my-next-app` (App Router defaults)
- App Router structure: `app/page.tsx`, `app/layout.tsx`
- Adding a new page: create `app/about/page.tsx`
- Linking with `<Link href="/about">` from `next/link`

### Hands-on (≤ 30 min)

Create a Next.js app. Add `app/about/page.tsx` that renders a short "About me" paragraph. On the home page, add a `<Link href="/about">About</Link>`. Run `npm run dev`, click the link, see the page change without a full reload. Commit.

#### Deliverable

Next.js app with two pages and a working link, committed.

#### Out of scope

Server vs Client Components in depth, Server Actions, Route Handlers, metadata, environment variables. Deployment lands on Day 10.

## Day 9 — Data: read one row with Prisma

> **Learning objective**
>
> - Learner can run a Prisma migration and display one row from a real Postgres database.

### Demo (≤ 20 min)

- What a relational database is: rows in a table (sketch on whiteboard)
- Instructor demos: sign up for Neon, copy the connection string into `.env`
- `npx prisma init`, add a tiny `Note` model with `id` and `text`
- `npx prisma migrate dev --name init`
- `npx prisma studio` — add one row by hand
- In `app/page.tsx`: `const note = await prisma.note.findFirst()` then render `{note?.text}`

### Hands-on (≤ 30 min)

With the instructor walking the room, repeat the demo on your own Day 8 project. The goal is to follow along all the way to "my home page shows a string that came from a database I provisioned."

> **Pacing reality** — Day 9 is the densest day; expect mostly follow-along. The goal is exposure, not autonomy.

#### Deliverable

`prisma/schema.prisma`, the migration folder, and a home page that renders a value from Postgres — all committed.

#### Out of scope

Relations (1-to-many, many-to-many), SQL by hand, Server Actions, writes/updates/deletes, the Prisma Client singleton. All listed as essential follow-up.

## Day 10 — Deploy & demo

> **Learning objective**
>
> - Learner can deploy their project to Vercel and present a 2-minute walk-through.

### Demo (≤ 15 min)

- Vercel: sign in with GitHub, "Add New… → Project", import the repo
- Set the `DATABASE_URL` env var if you did Day 9
- Click Deploy; watch the build, open the public URL
- The 2-minute demo format: open URL → show one piece of code → name one thing you learned

### Hands-on (≤ 35 min — deploy then demo)

Deploy your project to Vercel. Open the public URL on your phone. Each learner then gives a 2-minute walk-through to the class.

#### Deliverable

A public Vercel URL + a 2-minute live demo.

#### Out of scope

Auth.js / sign-in, GitHub Actions / CI, branch protection, per-user data. Signposted as the natural next course.

## 7. Capstone Project Brief

The capstone in this short format is deliberately small: the goal is to *finish and deploy*, not to impress. Each learner ends the course with a public URL they can share. Anything bigger is a follow-up project.

### Minimum requirements

- A repo on GitHub with a commit from each of the ten sessions (10+ commits total)
- A Next.js project (from Day 8) that runs locally with `npm run dev`
- At least two pages connected by a working `<Link>` (Day 8)
- At least one piece of dynamic content — either a React `useState` interaction or a value read from Postgres (Day 6 or Day 9)
- Deployed to a public Vercel URL (Day 10)
- A 2-minute live walk-through on Day 10

### Stretch goals (optional, pick at most one)

- Style your pages with hand-written CSS so they look intentional
- Show real Postgres data via Prisma (`findFirst` is enough)
- Add a third page and a navigation menu
- Add your name and a photo to the deployed home page so it feels personal

### Suggested capstone ideas

Keep it minimal — one screen of useful content beats four half-finished pages.

| Idea | What it shows |
| --- | --- |
| Personal landing page | Your name, a paragraph, a list of links, deployed |
| "Today I learned" log | One page that lists a few notes you wrote during the course |
| Hello-from-Postgres | A Next.js home page that reads one row from a database |
| Counter / clicker | A React page with a single button and a counter |
| Quote of the day | A static page that picks a quote from a hard-coded array |

## 8. Instructor Notes & Tips

### Pacing

- The hour is the hard constraint. If the demo runs long, cut topics, not the hands-on time. Learners only retain what they typed themselves.
- Day 8 (Next.js) and Day 9 (Prisma) are the densest; have all the install commands, environment variables, and connection strings ready to paste into chat to save minutes.
- Pre-install Node, Git, and VS Code on a clean machine and time yourself running each day's exercise. If it doesn't fit in 30 minutes for you, it won't fit in 30 minutes for a beginner.
- It is fine — expected, even — to send learners home with a short follow-up (≤ 30 min) to finish that day's exercise. Keep it optional; the session itself must be self-contained.

### Common stumbling blocks

- PATH issues with Node and Git on Windows — install the official Git for Windows and use its bash shell. Sort this out before Day 1, not during it.
- DevTools never been opened before — show F12 (or Cmd+Opt+I) explicitly on Day 4. Several learners will not know this.
- The Day 9 Postgres signup eats time — pre-create Neon accounts if your org policy allows, or have the signup link, region choice, and connection-string copy step on a single slide.
- Server vs Client Components on Day 8 — don't open this can. If learners ask, the answer is "everything here runs on the server unless we say otherwise; come back to it later."
- Vercel build failing on Day 10 — usually a missing env var. Have a checklist slide for Day 10 with the two most common fixes.

### Encouraging good habits

- One commit per session, every session. Even if the work is trivial, push it.
- Insist on commit messages in the imperative mood ('add about page', not 'added about page').
- Make 'read the error message out loud' a class ritual for the first three days.
- End every session with the same one sentence: what worked / what's stuck.

### After the program

- This is an introductory course — graduates know the *names* of the pieces and have deployed once. They are not yet productive developers. Frame next steps that way.
- Provide a follow-up reading list pointing to the topics this course deliberately skipped: Git branching & PRs, Flexbox/Grid, JS array methods, React hooks (`useEffect`, `useContext`), Next.js Server Actions, Prisma relations, Auth.js, GitHub Actions CI.
- Offer a longer cohort (the original 10 × 6 hr programme) for staff who want to actually ship internal tools.
- Schedule one 30-minute check-in 30 days later to see who kept building.
