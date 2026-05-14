# Day 5 — DOM, Events & Async JavaScript

## Lesson plan overview

> **Learning objective**
>
> - Learners can build interactive pages that fetch data from APIs and persist state in the browser.

### Morning block — DOM & events

Topics covered:

- The DOM tree; document.querySelector / querySelectorAll
- Reading and changing element content / attributes / classes
- Creating and removing elements (createElement, append, remove)
- Event listeners: addEventListener, event object, propagation
- Form events: submit, input, change
- localStorage and sessionStorage

### Afternoon block — Asynchronous JavaScript

Topics covered:

- The event loop (intuitive view)
- Callbacks → Promises (.then / .catch / .finally)
- async / await syntax
- Fetch API: GET and POST, headers, JSON
- Error handling with try/catch in async code
- ES Modules: import / export

### Mini-project

Promote Day 4's ToDo to a real web app: HTML UI, persists to localStorage. Bonus: fetch a 'quote of the day' from a public API.

#### Deliverable

Live page with full CRUD on tasks.

---

## Worksheet — hands-on exercises

## Today at a glance

Yesterday your code only ran in the terminal. Today you put it into a real web page that responds to clicks, saves to localStorage, and talks to the wider internet. By the end of the day you'll have a fully functional ToDo web app with persistence and one API call — deployed and shareable.

#### Workflow

- Open VS Code with Live Server installed (right-click index.html → Open with Live Server).
- Keep DevTools open — Console tab visible — at all times.
- Predict, then run. The gap between expectation and reality is the lesson.
- Commit at logical points (don't wait until the end).
- If stuck for more than 10 minutes, ask a partner or the instructor.

#### Today's exercises

| # | Exercise | Time |
| --- | --- | --- |
| 5.1 | DOM scavenger hunt | 30 min |
| 5.2 | Promote your ToDo to a real web app | 75 min |
| 5.3 | Async with fetch — the inspire button | 45 min |

> **Re-render, don't surgically update**
>
> - When task data changes, throw away the old list and rebuild it from the array. Don't try to find one <li> and patch it. This is the same pattern React uses — and it eliminates a whole class of bugs.

### Exercise 5.1 — DOM scavenger hunt   (30 min)

Goal: get comfortable with the DOM API by completing five small tasks on a sandbox page.

#### Setup

In `js-practice/`, create a folder `dom-hunt/` with `index.html` and `script.js`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>DOM Hunt</title>
<style>
body { font-family: system-ui; max-width: 40rem; margin: 2rem auto; padding: 1rem; }
.active { background: #fef3c7; padding: 0.25rem 0.5rem; border-radius: 4px; }
button { padding: 0.5rem 1rem; cursor: pointer; }
</style>
</head>
<body>
<h1>Hunt</h1>
<p id="status">Hello</p>
<button id="toggle">Toggle highlight</button>
<input id="echo" type="text" placeholder="type here">
<p>You typed: <span id="output"></span></p>
<button id="add">Add item</button>
<ul id="list"></ul>
<p id="self-destruct">I'll disappear in 2 seconds...</p>
<script src="script.js"></script>
</body>
</html>
```

#### Tasks — fill in script.js

TASK 1: Change the text of the first <h1> to 'Hello DOM'.

```
document.querySelector('h1').textContent = 'Hello DOM';
```

TASK 2: When the 'Toggle highlight' button is clicked, toggle a class 'active' on the <p id="status">.

```js
const toggleBtn = document.querySelector('#toggle');
const status = document.querySelector('#status');
toggleBtn.addEventListener('click', () => {
status.classList.toggle('active');
});
```

TASK 3: As the user types in the input, show what they typed in the <span id="output">. Use the 'input' event.

Write your own code here:

TASK 4: When 'Add item' is clicked, create a new <li> with text 'Item N' (where N is a counter) and append it to the <ul>.

Write your own code here:

TASK 5: After 2 seconds, remove the <p id="self-destruct"> from the DOM. Use setTimeout.

Write your own code here:

#### Reflection

What's the difference between `textContent` and `innerHTML`? When would you use which?

- [ ] All five tasks work in the browser
- [ ] DevTools Console shows no errors
- [ ] I can read e.target.value from an input event
- [ ] I have used createElement + append at least once

### Exercise 5.2 — Promote your ToDo to a real web app   (75 min)

Goal: take Day 4's todo.js logic and put a real UI on it. Persist with localStorage so tasks survive a refresh.

#### Step 1 — Folder setup

Create a new folder `todo-app/` in your repo. Inside, create three files: `index.html`, `styles.css`, `app.js`.

#### Step 2 — HTML structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>My ToDo</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>My ToDo</h1>
<form id="add-form">
<input id="task-input" type="text"
placeholder="What needs doing?" required>
<button type="submit">Add</button>
</form>
<div class="filters">
<button data-filter="all">All</button>
<button data-filter="open">Open</button>
<button data-filter="done">Done</button>
</div>
<ul id="list"></ul>
```

<p id="empty">No tasks yet. Add one above!</p>

```html
<script src="app.js"></script>
</body>
</html>
```

#### Step 3 — Style it (styles.css)

Reuse the variables and basics from Day 2. Add a .done class that strikes through the text:

```css
.task.done .text {
text-decoration: line-through;
color: var(--muted);
}
.task {
display: flex;
align-items: center;
gap: 0.75rem;
padding: 0.75rem;
border-bottom: 1px solid var(--border);
}
.task .delete {
margin-left: auto;
background: none;
border: none;
color: var(--red, #ef4444);
cursor: pointer;
font-size: 1.2rem;
}
.filters { display: flex; gap: 0.5rem; margin: 1rem 0; }
.filters button.active { background: var(--accent); color: white; }
```

#### Step 4 — Application logic (app.js)

Build it in this order. Don't write all of it at once — get each step working first.

#### 4a. State + localStorage helpers

```js
// state
let tasks = load();
let filter = 'all';
// elements
const form = document.querySelector('#add-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#list');
const empty = document.querySelector('#empty');
const filterButtons = document.querySelectorAll('.filters button');
function load() {
const raw = localStorage.getItem('tasks');
```

return raw ? JSON.parse(raw) : [];

```js
}
function save() {
localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

#### 4b. The render function

This is the heart of the app. Re-render the entire list every time state changes.

```js
function render() {
list.innerHTML = '';
const visible = tasks.filter(t => {
if (filter === 'open') return !t.done;
if (filter === 'done') return t.done;
return true;
});
empty.hidden = visible.length > 0;
visible.forEach(t => {
const li = document.createElement('li');
li.className = 'task' + (t.done ? ' done' : '');
li.dataset.id = t.id;
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = t.done;
checkbox.addEventListener('change', () => toggleTask(t.id));
const span = document.createElement('span');
span.className = 'text';
span.textContent = t.text;
const del = document.createElement('button');
del.className = 'delete';
del.textContent = '×';
del.addEventListener('click', () => deleteTask(t.id));
li.append(checkbox, span, del);
list.append(li);
});
// highlight active filter
filterButtons.forEach(b => {
b.classList.toggle('active', b.dataset.filter === filter);
});
}
```

#### 4c. Actions

```js
function addTask(text) {
```

tasks.push({ id: Date.now(), text, done: false });

save();

render();

```js
}
function toggleTask(id) {
tasks = tasks.map(t =>
```

t.id === id ? { ...t, done: !t.done } : t

);

save();

render();

```js
}
function deleteTask(id) {
tasks = tasks.filter(t => t.id !== id);
save();
render();
}
```

#### 4d. Wire up events

```js
form.addEventListener('submit', (e) => {
e.preventDefault();
const text = input.value.trim();
if (!text) return;
addTask(text);
input.value = '';
});
filterButtons.forEach(b => {
b.addEventListener('click', () => {
filter = b.dataset.filter;
render();
});
});
// initial paint
render();
```

#### Step 5 — Test everything

- Add 3 tasks. Refresh the page. They should still be there.
- Tick one task. Check 'Done' filter — only that one shows.
- Delete a task. Check 'Open' filter.
- Open DevTools → Application → Local Storage → see your `tasks` key.
- [ ] I can add, toggle, and delete tasks
- [ ] Tasks persist across page refresh
- [ ] Filters work and show the active filter highlighted
- [ ] Empty state shows when there are no tasks

### Exercise 5.3 — Async with fetch — the inspire button   (45 min)

Goal: add a 'Need inspiration?' button that fetches a random quote from a public API and displays it.

#### Step 1 — Add the markup

Inside `<body>`, just below the `<h1>`, add:

```html
<section id="quote-section">
<button id="quote-btn">Need inspiration?</button>
<blockquote id="quote" hidden></blockquote>
</section>
```

#### Step 2 — Style it

#quote-section { margin: 1rem 0 2rem; }

```css
#quote {
margin-top: 1rem;
padding: 1rem 1.5rem;
background: var(--surface, #fff);
border-left: 4px solid var(--accent);
font-style: italic;
}
#quote.loading { opacity: 0.5; }
```

#quote.error  { border-color: var(--red, #ef4444); color: #b91c1c; }

#### Step 3 — Write the fetch function

Add to your app.js:

```js
const quoteBtn = document.querySelector('#quote-btn');
const quoteBox = document.querySelector('#quote');
async function fetchQuote() {
// show loading state
quoteBox.hidden = false;
quoteBox.className = 'loading';
quoteBox.textContent = 'Loading...';
try {
const res = await fetch('https://api.quotable.io/random');
if (!res.ok) {
throw new Error('HTTP ' + res.status);
}
const data = await res.json();
quoteBox.className = '';
quoteBox.textContent = `"${data.content}" — ${data.author}`;
} catch (err) {
quoteBox.className = 'error';
quoteBox.textContent = "Couldn't fetch a quote: " + err.message;
}
}
quoteBtn.addEventListener('click', fetchQuote);
```

#### Step 4 — Test the failure case

In DevTools → Network tab → click 'Throttle' → select 'Offline'. Click your button. The error path should run and you should see the friendly message — NOT a crash.

> **Always handle the error case**
>
> - Network calls fail in production all the time. Wifi drops, APIs go down, rate limits hit. A working error path is what separates real apps from demos.

#### Step 5 — Backup API (in case quotable.io is down)

If api.quotable.io isn't reachable from your network, swap to one of these CORS-enabled APIs:

- https://api.adviceslip.com/advice → returns { slip: { advice } }
- https://catfact.ninja/fact → returns { fact, length }
- https://uselessfacts.jsph.pl/api/v2/facts/random → returns { text }

#### Step 6 — Deploy your app

Two simple options to share your live app:

- VERCEL: in your repo's `todo-app/` folder, run `npx vercel`. Sign up if needed. Confirm. You get a URL.
- GITHUB PAGES: in repo Settings → Pages → Source → Deploy from main → /(root). Your URL is `https://<you>.github.io/fullstack-journey/todo-app/`.

#### Step 7 — Commit and push

```bash
git add .
git commit -m "build interactive todo app with localStorage and API"
git push
```

- [ ] Quote button fetches a real quote and displays it
- [ ] Loading state shows briefly while fetching
- [ ] Going offline triggers the error path (no crash)
- [ ] My app is deployed at a public URL

## End of Day 5

This is a milestone. You now have all the pieces to build a real working web app: HTML for structure, CSS for design, JavaScript for behaviour, fetch for data, localStorage for persistence. Tomorrow you'll learn React — and you'll see how it makes today's manual re-rendering far cleaner.

> **End-of-day checkpoint — tick when complete**
>
> - [ ] I have a deployed ToDo app at a public URL.
> - [ ] Tasks persist across refresh, browser close, and reopen.
> - [ ] All filters work — All
> - Open
> - Done.
> - [ ] The Inspire button fetches and displays a real quote.
> - [ ] Going offline triggers a friendly error message, not a crash.
> - [ ] Code committed and pushed to GitHub.

### Daily standup

Write one sentence for each.

#### One thing that worked today

#### One thing I'm still confused about

#### One thing I want to try tomorrow

## Day 5 cheat sheet

### DOM

| Pattern | What it does |
| --- | --- |
| document.querySelector('.x') | First match (one node, or null) |
| document.querySelectorAll('.x') | All matches (NodeList — use forEach) |
| document.getElementById('x') | Match by id (faster, returns one) |
| el.textContent | Read or write text safely |
| el.innerHTML | Read or write HTML (XSS risk!) |
| el.classList.add('x') | Add a class |
| el.classList.remove('x') | Remove a class |
| el.classList.toggle('x') | Toggle a class on/off |
| el.dataset.id | Read data-id attribute |
| el.setAttribute('name', 'val') | Set any attribute |
| document.createElement('li') | Create a new element |
| parent.append(child) | Add child as last |
| parent.prepend(child) | Add child as first |
| el.remove() | Remove from DOM |
| el.hidden = true | Hide element (sets [hidden]) |

### Events, storage & async

| Pattern | What it does |
| --- | --- |
| el.addEventListener('click', fn) | Listen for an event |
| el.removeEventListener('click', fn) | Stop listening |
| e.target | The element that fired the event |
| e.currentTarget | The element the listener is on |
| e.preventDefault() | Stop default browser behavior |
| e.stopPropagation() | Stop event bubbling up |
| localStorage.setItem(key, str) | Save a string (use JSON.stringify) |
| localStorage.getItem(key) | Read a string (or null) |
| localStorage.removeItem(key) | Delete one key |
| localStorage.clear() | Delete EVERYTHING (careful) |
| JSON.stringify(obj) | Serialize to string |
| JSON.parse(str) | Deserialize string to object |
| async function name() { ... } | Function that returns a Promise |
| await fetch(url) | Wait for HTTP request |
| await res.json() | Parse response body as JSON |
| if (!res.ok) throw new Error(...) | Always check before parsing |
| try { ... } catch (err) { ... } | Handle errors gracefully |
| setTimeout(fn, ms) | Run fn after ms milliseconds |

### Stuck? Try this list

- Open DevTools → Console. Read every red error from top to bottom.
- `querySelector` returned null? You probably ran the script before the DOM existed. Move the <script> tag to the END of <body>.
- Click handler not firing? You probably attached it before the element existed. Same fix.
- localStorage data missing on refresh? Check Application → Local Storage in DevTools — is the key actually there?
- Fetch failing? Check Network tab — is the request going out? What's the status code?
- Mysterious '[object Object]' string? You forgot JSON.stringify before saving.
