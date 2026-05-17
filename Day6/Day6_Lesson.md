# Day 6 — ReactJS: Components, Props & State

## Lesson plan overview

> **Learning objective**
>
> - Learners can structure a UI as components, pass data with props, and manage state with hooks.

### Morning block — React foundations

Topics covered:

- Why React? Component model, virtual DOM, reactivity
- Project setup with Vite (`npm create vite@latest`)
- Anatomy of a React app (main.jsx, App.jsx, index.html)
- JSX: rules, expressions, attributes, fragments
- Components: function components, composition, children
- Props: passing data down; prop destructuring

### Afternoon block — State and interactivity

Topics covered:

- useState hook: declaring, updating, functional updates
- Event handling in React (camelCase, synthetic events)
- Conditional rendering: && and ternary
- Lists and the `key` prop
- Controlled form inputs
- Lifting state up between siblings

### Mini-project

Re-implement Day 5's ToDo app as a React app with Vite. Each task is a component; state is managed in the parent.

#### Deliverable

React project pushed to GitHub.

---

## Worksheet — hands-on exercises

## Today at a glance

Yesterday you wrote your first interactive web app — but you had to manually update the DOM after every state change. Today you'll meet the framework that makes that pain go away. By the end of the day you'll have re-implemented your ToDo as a React app with proper components, props, and state.

#### Setup

- Verify Node.js: `node --version` should be v20+ or v22+.
- Install React DevTools browser extension (chromewebstore.google.com → 'React Developer Tools'). It adds React tabs to your DevTools.
- Today's app lives in a NEW folder: `react-todo/` — separate from yesterday's `todo-app/`.

#### Today's exercises

| # | Exercise | Time |
| --- | --- | --- |
| 6.1 | First React app with Vite | 20 min |
| 6.2 | Build a Counter component | 30 min |
| 6.3 | Props & lists — a Card gallery | 45 min |
| 6.4 | Re-implement the ToDo in React | 75 min |

> **Mental shift**
>
> - In React you describe WHAT the UI should look like for the current state. React figures out HOW to update the DOM. You never call appendChild, removeChild, classList.add, or innerHTML again.

### Exercise 6.1 — First React app with Vite   (20 min)

Goal: get a React app running locally. Identify each file and what it does.

#### Step 1 — Create the project

In your fullstack-journey repo (NOT inside any existing project folder):

```bash
npm create vite@latest react-todo -- --template react
cd react-todo
npm install
npm run dev
```

Vite prints a URL like `http://localhost:5173/`. Open it in your browser.

#### Step 2 — Edit and watch it reload

Open `src/App.jsx`. Find the `<h1>Vite + React</h1>` line. Change the text to your name. SAVE the file. Watch the browser update instantly without refreshing — that's Hot Module Reload.

#### Step 3 — Identify each file

In your own words, what does each file do?

```
`index.html`:
`src/main.jsx`:
`src/App.jsx`:
`package.json`:
```

#### Step 4 — Install React DevTools

After installing the browser extension, open DevTools. You should see two new tabs: 'Components' and 'Profiler'. Click 'Components'. You'll see your React tree. We'll use this all day.

- [ ] My React app is running on localhost
- [ ] Editing App.jsx hot-reloads the browser
- [ ] React DevTools 'Components' tab shows my tree
- [ ] I can explain what main.jsx does in one sentence

### Exercise 6.2 — Build a Counter component   (30 min)

Goal: write your first stateful component, then refactor it into its own file.

#### Step 1 — Replace App.jsx with a counter

```jsx
import { useState } from 'react';
export default function App() {
const [count, setCount] = useState(0);
return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>+</button>
<button onClick={() => setCount(count - 1)}>−</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
);
}
```

Save and watch the counter work in the browser. Click the buttons. Notice that the page DOES NOT reload — React surgically updates only the number.

#### Step 2 — Open React DevTools

In DevTools → Components tab, click on `App`. You'll see the state on the right: `count: 0`. Click `+` in your app. Watch the value change LIVE in DevTools. This is your superpower.

#### Step 3 — Refactor into its own file

Create `src/Counter.jsx` and move ALL the counter code into it. Then in App.jsx import and use it:

```jsx
// Counter.jsx
import { useState } from 'react';
export default function Counter() {
const [count, setCount] = useState(0);
return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>+</button>
<button onClick={() => setCount(count - 1)}>−</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
);
}
// App.jsx
import Counter from './Counter';
export default function App() {
return <Counter />;
}
```

#### Step 4 — Render TWO counters

In App.jsx, render `<Counter />` twice. Then click + on one of them. What happens to the other one?

WHY are they independent? What does that tell you about how state works?

> **State is per-instance**
>
> - Each <Counter /> has its OWN state. State lives in the component instance, not in the function definition. This is the foundation of why React components compose so well.

- [ ] My counter increments, decrements, and resets
- [ ] Counter is in its own file (Counter.jsx)
- [ ] Two <Counter /> instances are independent
- [ ] I can see state changes live in React DevTools

### Exercise 6.3 — Props & lists — a Card gallery   (45 min)

Goal: build a reusable Card component, render a list of them with props.

#### Step 1 — Create Card.jsx

```jsx
// Card.jsx
export default function Card({ title, description, imageUrl }) {
return (
<article className="card">
<img src={imageUrl} alt={title} />
<h3>{title}</h3>
<p>{description}</p>
</article>
);
}
```

#### Step 2 — Use it once in App.jsx

```jsx
import Card from './Card';
export default function App() {
return (
<main>
<h1>My Projects</h1>
<Card
title="Personal site"
description="Built on Day 2"
imageUrl="https://picsum.photos/seed/site/400/300"
/>
</main>
);
}
```

#### Step 3 — Style the cards (App.css)

```css
main {
max-width: 70rem;
margin: 0 auto;
padding: 2rem;
}
.card {
background: #fff;
border: 1px solid #e2e8f0;
border-radius: 0.75rem;
padding: 1.5rem;
```

box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

```css
}
.card img {
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 0.5rem;
margin-bottom: 1rem;
}
.gallery {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 1.5rem;
}
```

Make sure App.css is imported in main.jsx (it usually is by default).

#### Step 4 — Render a list of 5 cards

Define your data at the top of App.jsx and map over it:

```jsx
const projects = [
{ id: 1, title: "Personal site", description: "Built on Day 2", imageUrl: "https://picsum.photos/seed/p1/400/300" },
{ id: 2, title: "Responsive design", description: "Day 3", imageUrl: "https://picsum.photos/seed/p2/400/300" },
{ id: 3, title: "JS playground", description: "Day 4", imageUrl: "https://picsum.photos/seed/p3/400/300" },
{ id: 4, title: "ToDo app", description: "Day 5", imageUrl: "https://picsum.photos/seed/p4/400/300" },
{ id: 5, title: "React ToDo", description: "Today!", imageUrl: "https://picsum.photos/seed/p5/400/300" },
];
export default function App() {
return (
<main>
<h1>My Projects</h1>
<div className="gallery">
{projects.map(p => (
<Card
key={p.id}
title={p.title}
description={p.description}
imageUrl={p.imageUrl}
/>
))}
</div>
</main>
);
}
```

#### Step 5 — What happens without the key prop?

Remove `key={p.id}`. Save. Open DevTools → Console. What warning do you see?

Restore the key. Why does React need it?

> **Key must be stable**
>
> - Don't use the array index as a key (e.g. key={i}). If you reorder, insert, or delete items, React gets confused about which DOM element matches which data. Always use a real id from your data.

- [ ] Cards render in a responsive grid
- [ ] I have used the spread operator at least once
- [ ] Each Card has a stable key from p.id
- [ ] DevTools Components tree shows my Card list

### Exercise 6.4 — Re-implement the ToDo in React   (75 min)

Goal: rebuild Day 5's ToDo app using React components, props, and state. Don't add localStorage yet — that comes tomorrow with useEffect.

#### Step 1 — Plan the component tree

Before writing any code, sketch the tree on paper. Here's the answer:

```html
<App>                  ← owns the tasks state
<h1>My ToDo</h1>
<TaskInput />        ← controlled input + add button
<TaskList>           ← receives tasks, maps to TaskItems
<TaskItem />       ← one task: checkbox + text + delete
<TaskItem />
...
</TaskList>
</App>
```

#### Step 2 — App.jsx (state lives here)

```js
import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
export default function App() {
const [tasks, setTasks] = useState([]);
function addTask(text) {
```

setTasks([...tasks, { id: Date.now(), text, done: false }]);

```js
}
function toggleTask(id) {
setTasks(tasks.map(t =>
```

t.id === id ? { ...t, done: !t.done } : t

));

```jsx
}
function deleteTask(id) {
setTasks(tasks.filter(t => t.id !== id));
}
return (
<main>
<h1>My ToDo</h1>
<TaskInput onAdd={addTask} />
<TaskList
tasks={tasks}
onToggle={toggleTask}
onDelete={deleteTask}
/>
</main>
);
}
```

#### Step 3 — TaskInput.jsx (controlled input)

```jsx
import { useState } from 'react';
export default function TaskInput({ onAdd }) {
const [text, setText] = useState('');
function handleSubmit(e) {
e.preventDefault();
const trimmed = text.trim();
if (!trimmed) return;
onAdd(trimmed);
setText('');  // clear the input
}
return (
<form onSubmit={handleSubmit}>
<input
type="text"
value={text}
onChange={e => setText(e.target.value)}
placeholder="What needs doing?"
required
/>
<button type="submit">Add</button>
</form>
);
}
```

> **Controlled inputs**
>
> - The input's `value` comes FROM React state. Every keystroke fires onChange, which calls setText, which re-renders with the new value. React owns the input — that's what 'controlled' means.

#### Step 4 — TaskList.jsx and TaskItem.jsx

```js
// TaskList.jsx
import TaskItem from './TaskItem';
export default function TaskList({ tasks, onToggle, onDelete }) {
if (tasks.length === 0) {
```

return <p>No tasks yet. Add one above!</p>;

```jsx
}
return (
<ul>
{tasks.map(t => (
<TaskItem
key={t.id}
task={t}
onToggle={onToggle}
onDelete={onDelete}
/>
))}
</ul>
);
}
// TaskItem.jsx
export default function TaskItem({ task, onToggle, onDelete }) {
return (
<li className={task.done ? 'done' : ''}>
<input
type="checkbox"
checked={task.done}
onChange={() => onToggle(task.id)}
/>
<span>{task.text}</span>
<button onClick={() => onDelete(task.id)}>×</button>
</li>
);
}
```

#### Step 5 — Style it

```css
/* App.css */
main { max-width: 30rem; margin: 0 auto; padding: 2rem; }
form { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
form input { flex: 1; padding: 0.5rem; }
ul { list-style: none; padding: 0; }
li {
display: flex;
gap: 0.75rem;
align-items: center;
padding: 0.75rem;
border-bottom: 1px solid #e2e8f0;
}
li.done span {
text-decoration: line-through;
color: #64748b;
}
li button {
margin-left: auto;
background: none;
border: none;
color: #ef4444;
font-size: 1.2rem;
cursor: pointer;
}
```

#### Step 6 — Test it all

- Add 3 tasks. They appear instantly.
- Click the checkbox on one — it strikes through.
- Click the × on another — it disappears.
- Refresh the page. Tasks are GONE — that's expected, persistence comes Day 7.
- Open React DevTools → Components → click `App`. Watch tasks state change as you add/toggle/delete.

#### Step 7 — Commit and push

```bash
cd react-todo
git add .
git commit -m "build react todo app with components and props"
git push
```

- [ ] All four components are in separate files
- [ ] State (tasks) lives in App, not in children
- [ ] Add, toggle, delete all work
- [ ] Empty state shows when no tasks
- [ ] Every list item has a stable key from t.id
- [ ] Project pushed to GitHub

## End of Day 6

You've made the leap. Tomorrow you'll add useEffect to bring back localStorage persistence, learn React Router for multiple pages, and use Context to share state without prop drilling.

> **End-of-day checkpoint — tick when complete**
>
> - [ ] I have a working React ToDo app at /react-todo in my repo.
> - [ ] I can explain the difference between props and state.
> - [ ] I have used useState in at least three places today.
> - [ ] I never mutate state — I always create new arrays/objects.
> - [ ] Every list I render has a stable, unique key prop.
> - [ ] I am comfortable opening React DevTools and inspecting state.
> - [ ] Code committed and pushed to GitHub.

### Daily standup

Write one sentence for each.

#### One thing that worked today

#### One thing I'm still confused about

#### One thing I want to try tomorrow

## Day 6 cheat sheet

### Components & JSX

| Pattern | Meaning |
| --- | --- |
| function Foo() { return <jsx /> } | Define a component |
| export default function Foo() {...} | Export so others can import it |
| import Foo from './Foo' | Import a default export |
| <Foo /> | Use it (self-closing if no children) |
| <Foo>children here</Foo> | Use with children |
| {expression} | Embed JS in JSX |
| className="x" | Set CSS class (NOT class) |
| htmlFor="id" | Set <label for> (NOT for) |
| onClick={fn} | Click handler (camelCase) |
| onChange={e => ...} | Input change handler |
| <>...</> | Fragment — group without extra div |
| {cond && <X />} | Render X only if cond |
| {cond ? <A /> : <B />} | Render A or B |
| {items.map(i => <Item key={i.id} />)} | Render a list |

### State & immutable updates

| Pattern | Meaning |
| --- | --- |
| const [x, setX] = useState(initial) | Component state |
| setX(newValue) | Update state — re-renders |
| setX(prev => prev + 1) | Functional update (use prev) |
| setItems([...items, newItem]) | ADD to array (new array) |
| setItems(items.filter(i => i.id !== id)) | REMOVE from array |
| setItems(items.map(i => i.id === id ? {...i, done: true} : i)) | UPDATE one item |
| setUser({...user, name: 'X'}) | UPDATE one field of an object |
| // NEVER:  items.push(x); setItems(items) | Mutation — React won't see it |
| // NEVER:  user.name = 'X'; setUser(user) | Mutation — same problem |

### Stuck? Try this list

- Open React DevTools → Components → click your component to see its props and state.
- 'Cannot read properties of undefined' usually means a prop wasn't passed. Check the parent.
- State change but no re-render? You probably mutated. Check for `.push`, `.splice`, or direct assignment.
- 'Each child in a list should have a unique key' is literal — add key={item.id}.
- Input not updating? You probably forgot onChange or set value to a non-state variable.
- 'Too many re-renders' means you called setState directly in render. Wrap it in onClick or useEffect.
