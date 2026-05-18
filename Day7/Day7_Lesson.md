# Day 7 — React: Hooks, Context & Routing

## Lesson plan overview

> **Learning objective**
>
> - Learners can build multi-page React apps with shared state and side effects.

### Morning block — Effects, context, custom hooks

Topics covered:

- useEffect: dependencies, cleanup, common patterns
- Fetching data inside useEffect
- useContext: avoiding prop drilling
- useReducer: when state grows complex
- Custom hooks: useLocalStorage, useFetch as examples
- Performance basics: useMemo, useCallback (briefly)

### Afternoon block — Routing & app structure

Topics covered:

- React Router v6+: BrowserRouter, Routes, Route, Link, NavLink
- URL parameters with useParams; query strings with useSearchParams
- Programmatic navigation with useNavigate
- Nested routes and layouts
- Folder structure for medium apps (features vs components)

### Mini-project

Multi-page React app: Home, Tasks, Settings. Use Context to share user preferences across pages.

#### Deliverable

Routing works; theme toggle persists via Context + localStorage.

---

## Worksheet — hands-on exercises

## Today at a glance

Your React ToDo from yesterday works — but it forgets everything on refresh. Today you'll fix that with useEffect, then promote your single-page app into a multi-page app with React Router, and add a global theme via Context. By the end of the day you'll have a polished React SPA with persistence, three routes, and a light/dark toggle that survives a hard refresh.

#### Workflow

- Continue working in yesterday's react-todo/ folder.
- Run `npm run dev` and keep React DevTools Components tab open.
- Commit at logical points — at least once per exercise.
- If stuck for more than 10 minutes, ask a partner or the instructor.

#### Today's exercises

| # | Exercise | Time |
| --- | --- | --- |
| 7.1 | useEffect & localStorage persistence | 30 min |
| 7.2 | Custom hook — useLocalStorage | 30 min |
| 7.3 | Multi-page app with React Router | 60 min |
| 7.4 | Theme via Context | 45 min |

> **Effects run AFTER render**
>
> - useEffect runs after React commits the DOM. So inside the effect, the page reflects the new state. Don't use it for anything that should happen synchronously during render — only side effects like fetching, subscriptions, timers, or persistence.

### Exercise 7.1 — useEffect & localStorage persistence   (30 min)

Goal: bring back the persistence you had on Day 5 — but now with React. Two effects: one to LOAD on mount, one to SAVE on change.

#### Step 1 — Load tasks on mount

Open `src/App.jsx`. Add an effect that loads tasks from localStorage when the app first mounts. Replace the bare `useState([])` with this two-step pattern:

```js
import { useState, useEffect } from 'react';
export default function App() {
const [tasks, setTasks] = useState([]);
// load on mount
useEffect(() => {
const raw = localStorage.getItem('tasks');
if (raw) setTasks(JSON.parse(raw));
}, []);
// ... rest of component
}
```

#### Step 2 — Save tasks on every change

Add a SECOND effect that saves whenever tasks change:

```
useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
```

#### Step 3 — Test it

- Add 3 tasks. Refresh the page. Tasks should reappear.
- Open DevTools → Application → Local Storage → confirm 'tasks' key exists with your data.
- Open React DevTools → Components → click `App`. Watch the tasks state.

> **Watch for the empty-then-fill flicker**
>
> - On first mount, tasks is `[]`. The second effect immediately saves `[]` over your real data, then the FIRST effect loads — but the data was already overwritten! To avoid this, initialise state lazily: `useState(() => { const r = localStorage.getItem('tasks'); return r ? JSON.parse(r) : [] })`. We'll fix this properly in Exercise 7.2.

#### Reflection

Why do we use TWO useEffects instead of one combined effect?

What does the empty array `[]` as the second argument mean?

What does `[tasks]` as the second argument mean?

- [ ] Tasks survive a page refresh
- [ ] DevTools Application tab shows 'tasks' in localStorage
- [ ] I have two separate useEffects — load and save
- [ ] I can explain what `[]` vs `[tasks]` does

### Exercise 7.2 — Custom hook — useLocalStorage   (30 min)

Goal: extract the load/save pattern into a reusable hook that fixes the empty-flicker bug from 7.1.

#### Step 1 — Create the hook

Create `src/useLocalStorage.js`:

```js
import { useState, useEffect } from 'react';
export function useLocalStorage(key, initialValue) {
// Lazy initialiser — runs ONCE, before first render
const [value, setValue] = useState(() => {
const raw = localStorage.getItem(key);
```

return raw ? JSON.parse(raw) : initialValue;

```
});
// Save whenever value (or key) changes
useEffect(() => {
localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);
return [value, setValue];
}
```

#### Step 2 — Use it in App.jsx

Replace your useState + two useEffects with a single line:

```js
import { useLocalStorage } from './useLocalStorage';
export default function App() {
const [tasks, setTasks] = useLocalStorage('tasks', []);
// ... addTask, toggleTask, deleteTask all work unchanged
}
```

Save and refresh. Tasks should still persist — but no flicker, and your App.jsx is now 4 lines lighter.

#### Step 3 — Verify it really is reusable

Use the same hook for something else. Add a count of completed tasks that persists too:

```js
const [completedCount, setCompletedCount] = useLocalStorage('completed-count', 0);
```

(You don't need to wire this to your UI — just confirm the hook works for primitives too. You can remove it after testing.)

> **The 'use' prefix is mandatory**
>
> - React uses the name to enforce hook rules. A function called `getLocalStorage` cannot call useState or useEffect — React will warn. Always start custom hooks with `use`.

#### Reflection

Why does `useState(() => expensiveFn())` only call the function once, but `useState(expensiveFn())` calls it on every render?

Could you put the 'load from localStorage' logic INSIDE useEffect instead of in a lazy initialiser? Why or why not?

- [ ] useLocalStorage hook is in its own file
- [ ] App.jsx uses it instead of useState + useEffect
- [ ] No flicker on first load
- [ ] I tested the hook works for at least two different keys

### Exercise 7.3 — Multi-page app with React Router   (60 min)

Goal: turn your single-page app into a three-page app with shared layout. The ToDo list moves to /tasks; you'll add a Home and Settings page.

#### Step 1 — Install React Router

```bash
npm install react-router-dom
```

#### Step 2 — Create the page components

Create three new files in `src/pages/` (you'll need to make the folder).

```html
`src/pages/Home.jsx`:
export default function Home() {
return (
<section>
<h1>Welcome</h1>
```

<p>This is your task manager. Visit Tasks to manage them.</p>

```js
</section>
);
}
`src/pages/Tasks.jsx` — move ALL your existing ToDo logic here:
import { useLocalStorage } from '../useLocalStorage';
import TaskInput from '../TaskInput';
import TaskList from '../TaskList';
export default function Tasks() {
const [tasks, setTasks] = useLocalStorage('tasks', []);
function addTask(text) {
```

setTasks([...tasks, { id: Date.now(), text, done: false }]);

```js
}
function toggleTask(id) {
```

setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));

```jsx
}
function deleteTask(id) {
setTasks(tasks.filter(t => t.id !== id));
}
return (
<section>
<h1>My Tasks</h1>
<TaskInput onAdd={addTask} />
<TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
</section>
);
}
`src/pages/Settings.jsx` — placeholder for now:
export default function Settings() {
return (
<section>
<h1>Settings</h1>
<p>Theme toggle coming soon.</p>
</section>
);
}
```

#### Step 3 — Create a Layout with shared NavBar

```jsx
`src/Layout.jsx`:
import { NavLink, Outlet } from 'react-router-dom';
export default function Layout() {
return (
<div className="app">
<nav className="navbar">
<NavLink to="/" end>Home</NavLink>
<NavLink to="/tasks">Tasks</NavLink>
<NavLink to="/settings">Settings</NavLink>
</nav>
<main>
<Outlet />
</main>
</div>
);
}
```

`<Outlet />` is where the matched route's component renders. The NavBar appears on every page; only the main area swaps.

#### Step 4 — Wire up routes in App.jsx

Replace the contents of `src/App.jsx`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Home />} />
<Route path="tasks" element={<Tasks />} />
<Route path="settings" element={<Settings />} />
</Route>
</Routes>
</BrowserRouter>
);
}
```

#### Step 5 — Style the NavBar

```css
.navbar {
display: flex;
gap: 1.5rem;
padding: 1rem 2rem;
border-bottom: 1px solid #e2e8f0;
margin-bottom: 2rem;
}
.navbar a {
color: #64748b;
text-decoration: none;
font-weight: 500;
}
.navbar a.active {
color: #2563eb;
}
`<NavLink>` automatically adds `class="active"` to the current route's link.
```

#### Step 6 — Test

- Click each NavLink — the URL and content should change without a full page reload.
- Active link should be highlighted blue.
- On /tasks, your existing ToDo functionality should still work.
- Press the browser BACK button — it should work like a normal site.
- [ ] All three routes work and show distinct content
- [ ] NavBar appears on every page
- [ ] Active link is visually highlighted
- [ ] Browser back/forward buttons work
- [ ] Tasks still persist when navigating away and back

### Exercise 7.4 — Theme via Context   (45 min)

Goal: add a light/dark theme toggle in Settings, broadcast via Context to the whole app, and persist via your useLocalStorage hook.

#### Step 1 — Create the Theme Context

```jsx
`src/ThemeContext.jsx`:
import { createContext, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
const [theme, setTheme] = useLocalStorage('theme', 'light');
function toggle() {
setTheme(theme === 'light' ? 'dark' : 'light');
}
return (
<ThemeContext.Provider value={{ theme, toggle }}>
{children}
</ThemeContext.Provider>
);
}
// Custom hook for easy consumption
export function useTheme() {
return useContext(ThemeContext);
}
```

#### Step 2 — Wrap the app in the Provider

In `src/App.jsx`, wrap your `<BrowserRouter>` with `<ThemeProvider>`:

```jsx
import { ThemeProvider } from './ThemeContext';
export default function App() {
return (
<ThemeProvider>
<BrowserRouter>
{/* ...routes as before */}
</BrowserRouter>
</ThemeProvider>
);
}
```

#### Step 3 — Apply the theme in Layout

Update `src/Layout.jsx` to read the theme and apply it as a className:

```jsx
import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from './ThemeContext';
export default function Layout() {
const { theme } = useTheme();
return (
<div className={`app theme-${theme}`}>
<nav className="navbar">
<NavLink to="/" end>Home</NavLink>
<NavLink to="/tasks">Tasks</NavLink>
<NavLink to="/settings">Settings</NavLink>
</nav>
<main>
<Outlet />
</main>
</div>
);
}
```

#### Step 4 — Build the toggle in Settings

```jsx
import { useTheme } from '../ThemeContext';
export default function Settings() {
const { theme, toggle } = useTheme();
return (
<section>
<h1>Settings</h1>
<p>Current theme: <strong>{theme}</strong></p>
<button onClick={toggle}>
Switch to {theme === 'light' ? 'dark' : 'light'}
</button>
</section>
);
}
```

#### Step 5 — Style the two themes

In your CSS, define styles for both themes:

```css
.theme-light {
--bg: #f8fafc;
--fg: #111827;
--surface: #ffffff;
--border: #e2e8f0;
--muted: #64748b;
--accent: #2563eb;
}
.theme-dark {
--bg: #0f172a;
--fg: #f1f5f9;
--surface: #1e293b;
--border: #334155;
--muted: #94a3b8;
--accent: #06b6d4;
}
.app {
min-height: 100vh;
background: var(--bg);
color: var(--fg);
```

transition: background 0.3s ease, color 0.3s ease;

```
}
main { padding: 0 2rem; }
```

Then update any other rules (cards, inputs, buttons) to use these variables — `background: var(--surface)` instead of `background: white`.

#### Step 6 — Test it all

- Go to Settings → click toggle. Theme switches everywhere — Home, Tasks, Settings.
- Refresh the page. Theme persists.
- DevTools → Application → Local Storage → 'theme' key shows 'light' or 'dark'.
- React DevTools → Components → click any consumer → see the ThemeContext value.

#### Step 7 — Commit

```bash
git add .
git commit -m "add useEffect, custom hooks, routing, and theme context"
git push
```

- [ ] Theme toggle works on Settings page
- [ ] Theme applies to all three pages
- [ ] Theme persists across refresh
- [ ] I used my own useLocalStorage hook for theme too
- [ ] Code committed and pushed to GitHub

## End of Day 7

You're now writing real React. Tomorrow you'll meet Next.js — the framework built on React that adds server-side rendering, file-based routing (without React Router), and server actions. The skills from today carry forward: hooks, components, props, state — they're all still the same.

> **End-of-day checkpoint — tick when complete**
>
> - [ ] Tasks persist via my custom useLocalStorage hook.
> - [ ] I have three working routes —
> - , /tasks , /settings.
> - [ ] NavBar appears on every page with active highlighting.
> - [ ] Theme is shared via Context and toggleable in Settings.
> - [ ] Theme persists across page refresh.
> - [ ] Code committed and pushed to GitHub.

### Daily standup

Write one sentence for each.

#### One thing that worked today

#### One thing I'm still confused about

#### One thing I want to try tomorrow

## Day 7 cheat sheet

### Hooks

| Pattern | What it does |
| --- | --- |
| useEffect(fn, []) | Run once on mount; cleanup on unmount |
| useEffect(fn, [value]) | Run on mount AND when value changes |
| useEffect(fn, [a, b, c]) | Run when ANY dependency changes |
| useEffect(() => () => cleanup, []) | Cleanup function returned |
| useState(() => initial()) | Lazy init — runs only once |
| function useThing() { ... } | Custom hook (name MUST start with 'use') |
| useContext(MyContext) | Read the nearest provider's value |

### Context & Routing

| Pattern | What it does |
| --- | --- |
| createContext(defaultValue) | Declare a Context |
| <Context.Provider value={x}> | Make value available to descendants |
| useContext(Context) | Read the nearest provider's value |
| <BrowserRouter> | Wrap your app for routing |
| <Routes><Route /></Routes> | URL → component map |
| <Route path="/x" element={<X />} /> | One route |
| <Route path="/x/:id" /> | Dynamic param — id is in useParams() |
| <Route index element={<Home />} /> | Default child of parent route |
| <Link to="/x">Go</Link> | Navigate without full page reload |
| <NavLink to="/x">Go</NavLink> | Same as Link, with active class |
| <Outlet /> | Where nested routes render |
| useParams() | { id } from a /:id route |
| useNavigate() | navigate('/path') programmatically |
| useLocation() | Read current URL info |

### Stuck? Try this list

- 'Infinite re-render' = a useEffect with no dependency array, or a setState called during render.
- Effect not firing? Check the dependency array — does it include the value you're reading inside?
- Effect firing too often? You probably included an object/array that's recreated every render.
- 'useContext returned undefined'? Your component isn't wrapped in the Provider. Check the tree in React DevTools.
- Routes not matching? Path is case-sensitive and trailing slashes matter. Check exact spelling.
- Active link not highlighting? You used <Link> instead of <NavLink>, or your CSS targets `a:hover` not `.active`.
