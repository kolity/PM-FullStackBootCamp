import { createContext, useContext, useState, useEffect } from 'react';
import {
  Home as HomeIcon,
  ListTodo,
  Settings as SettingsIcon,
  Plus,
  Trash2,
  Moon,
  Sun,
  Check,
} from 'lucide-react';

// ════════════════════════════════════════════════════════════════════
//  DAY 7 — Hooks, Context & Routing — teaching demo
// ════════════════════════════════════════════════════════════════════
//  Everything from Day 7 in one running app:
//    1. useEffect with a dependency array
//    2. Custom hook (useLocalStorage)
//    3. Context (ThemeContext — no prop drilling)
//    4. Routing (Routes / NavLink / useNavigate)
//
//  In a real project these would be ~6 files. Kept in one file here
//  so the relationships between the pieces are easy to follow.
// ════════════════════════════════════════════════════════════════════


// ── 1. Custom hook ─────────────────────────────────────────────────
// In a real app this calls window.localStorage. In this sandbox we
// use an in-memory Map so the demo still runs — the API and lesson
// are identical. To use the real thing, replace memoryStore with
// localStorage and add JSON.parse / JSON.stringify.
const memoryStore = new Map();

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    return memoryStore.has(key) ? memoryStore.get(key) : initial;
  });

  useEffect(() => {
    memoryStore.set(key, value);
  }, [key, value]);

  return [value, setValue];
}


// ── 2. Context ─────────────────────────────────────────────────────
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);


// ── 3. Routing ─────────────────────────────────────────────────────
// react-router-dom isn't in this sandbox; the API below mirrors it
// (Router / useLocation / useNavigate / NavLink) so the teaching
// code is honest about what you'd write in a real project.
const RouterContext = createContext();

function Router({ children }) {
  const [path, setPath] = useState('/');
  return (
    <RouterContext.Provider value={{ path, navigate: setPath }}>
      {children}
    </RouterContext.Provider>
  );
}

const useLocation = () => useContext(RouterContext).path;
const useNavigate = () => useContext(RouterContext).navigate;

function NavLink({ to, children, icon: Icon }) {
  const path = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const active = path === to;

  const base = 'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors';
  const activeCls = theme === 'light' ? 'bg-stone-900 text-stone-50' : 'bg-stone-50 text-stone-900';
  const idleCls = theme === 'light'
    ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
    : 'text-stone-400 hover:text-stone-50 hover:bg-stone-800';

  return (
    <button onClick={() => navigate(to)} className={`${base} ${active ? activeCls : idleCls}`}>
      {Icon && <Icon size={15} />}
      {children}
    </button>
  );
}


// ── 4. Pages ───────────────────────────────────────────────────────
function HomePage() {
  const { theme } = useTheme();
  const muted = theme === 'light' ? 'text-stone-600' : 'text-stone-400';
  const border = theme === 'light' ? 'border-stone-200' : 'border-stone-800';

  return (
    <div className="max-w-2xl">
      <p className={`text-xs uppercase tracking-[0.2em] mb-3 ${muted}`}>Day 7</p>
      <h1 className="text-4xl md:text-5xl font-serif mb-5 leading-tight">
        Hooks, Context &amp; Routing.
      </h1>
      <p className={`text-lg leading-relaxed ${muted}`}>
        A small app that demonstrates everything from today — a custom
        <code className="text-base mx-1">useLocalStorage</code> hook, a
        <code className="text-base mx-1">ThemeContext</code> any descendant
        can read, and route-driven page swaps with active link styling.
      </p>
      <div className="grid grid-cols-3 gap-3 mt-12">
        <Stat label="Routes" value="3" border={border} muted={muted} />
        <Stat label="Contexts" value="2" border={border} muted={muted} />
        <Stat label="Hooks used" value="4" border={border} muted={muted} />
      </div>
    </div>
  );
}

function Stat({ label, value, border, muted }) {
  return (
    <div className={`p-4 rounded-md border ${border}`}>
      <div className="text-3xl font-serif">{value}</div>
      <div className={`text-[10px] uppercase tracking-[0.2em] mt-1 ${muted}`}>{label}</div>
    </div>
  );
}

function TasksPage() {
  const [tasks, setTasks] = useLocalStorage('tasks', [
    { id: 1, text: 'Read the useEffect docs', done: true },
    { id: 2, text: 'Build the mini-project', done: false },
  ]);
  const [draft, setDraft] = useState('');
  const { theme } = useTheme();

  function add() {
    if (!draft.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: draft.trim(), done: false }]);
    setDraft('');
  }
  function toggle(id) {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }
  function remove(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  const muted = theme === 'light' ? 'text-stone-600' : 'text-stone-400';
  const border = theme === 'light' ? 'border-stone-200' : 'border-stone-800';
  const fieldCls = theme === 'light'
    ? 'bg-white text-stone-900 border-stone-200 focus:border-stone-500'
    : 'bg-stone-900 text-stone-100 border-stone-800 focus:border-stone-500';

  return (
    <div className="max-w-2xl">
      <p className={`text-xs uppercase tracking-[0.2em] mb-3 ${muted}`}>useLocalStorage</p>
      <h1 className="text-4xl font-serif mb-2">Tasks.</h1>
      <p className={`${muted} mb-8`}>
        Stored via the custom hook — survives a refresh in the real app.
      </p>

      <div className="flex gap-2 mb-6">
        <input
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && add()}
          placeholder="What needs doing?"
          className={`flex-1 px-4 py-2 rounded-md border outline-none ${fieldCls}`}
        />
        <button
          onClick={add}
          className={`px-4 py-2 rounded-md font-medium flex items-center gap-2 ${
            theme === 'light' ? 'bg-stone-900 text-stone-50' : 'bg-stone-50 text-stone-900'
          }`}
        >
          <Plus size={16} /> Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.length === 0 && (
          <li className={`text-sm italic ${muted}`}>No tasks yet.</li>
        )}
        {tasks.map(t => (
          <li key={t.id} className={`flex items-center gap-3 p-3 rounded-md border ${border}`}>
            <button
              onClick={() => toggle(t.id)}
              aria-label={t.done ? 'Mark as not done' : 'Mark as done'}
              className={`w-5 h-5 rounded border flex items-center justify-center ${border} ${
                t.done ? (theme === 'light' ? 'bg-stone-900 border-stone-900' : 'bg-stone-50 border-stone-50') : ''
              }`}
            >
              {t.done && (
                <Check
                  size={12}
                  className={theme === 'light' ? 'text-stone-50' : 'text-stone-900'}
                />
              )}
            </button>
            <span className={`flex-1 ${t.done ? `line-through ${muted}` : ''}`}>{t.text}</span>
            <button
              onClick={() => remove(t.id)}
              aria-label="Delete task"
              className={`${muted} hover:text-red-500 transition-colors`}
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SettingsPage() {
  const { theme, toggle } = useTheme();
  const muted = theme === 'light' ? 'text-stone-600' : 'text-stone-400';
  const border = theme === 'light' ? 'border-stone-200' : 'border-stone-800';

  return (
    <div className="max-w-2xl">
      <p className={`text-xs uppercase tracking-[0.2em] mb-3 ${muted}`}>ThemeContext</p>
      <h1 className="text-4xl font-serif mb-2">Settings.</h1>
      <p className={`${muted} mb-8`}>
        This toggle calls <code>useTheme()</code> — it doesn't receive theme
        as a prop. The whole tree updates anyway.
      </p>

      <div className={`flex items-center justify-between p-5 rounded-md border ${border}`}>
        <div>
          <div className="font-medium mb-1">Appearance</div>
          <div className={`text-sm ${muted}`}>
            Currently {theme}. Provided by ThemeContext.
          </div>
        </div>
        <button
          onClick={toggle}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium ${
            theme === 'light' ? 'bg-stone-900 text-stone-50' : 'bg-stone-50 text-stone-900'
          }`}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          Switch to {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
    </div>
  );
}


// ── 5. Layout (NavBar + page outlet) ───────────────────────────────
function Layout({ children }) {
  const { theme } = useTheme();
  const bg = theme === 'light' ? 'bg-stone-50' : 'bg-stone-950';
  const text = theme === 'light' ? 'text-stone-900' : 'text-stone-100';
  const border = theme === 'light' ? 'border-stone-200' : 'border-stone-800';
  const subtle = theme === 'light' ? 'text-stone-500' : 'text-stone-400';

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-200`}>
      <header className={`border-b ${border}`}>
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg">Day 7</span>
            <span className={`text-xs uppercase tracking-[0.2em] ${subtle}`}>
              · Hooks &amp; Routing
            </span>
          </div>
          <div className="flex items-center gap-1">
            <NavLink to="/" icon={HomeIcon}>Home</NavLink>
            <NavLink to="/tasks" icon={ListTodo}>Tasks</NavLink>
            <NavLink to="/settings" icon={SettingsIcon}>Settings</NavLink>
          </div>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">{children}</main>
    </div>
  );
}


// ── 6. Routes (would be <Routes> in react-router-dom) ──────────────
function Pages() {
  const path = useLocation();
  switch (path) {
    case '/tasks':    return <TasksPage />;
    case '/settings': return <SettingsPage />;
    case '/':
    default:          return <HomePage />;
  }
}


// ── 7. App — provider order matters ────────────────────────────────
//  Router ─── must wrap everything that calls useNavigate / useLocation
//    └── ThemeProvider ─── must wrap everything that calls useTheme
//          └── Layout (NavBar + page content)
export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Pages />
        </Layout>
      </ThemeProvider>
    </Router>
  );
}