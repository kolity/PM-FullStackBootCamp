# Day 4 — JavaScript Language Fundamentals

## Lesson plan overview

> **Learning objective**
>
> - Learners can read and write idiomatic modern JavaScript: variables, control flow, functions, arrays, and objects.

### Morning block — Core language

Topics covered:

- let, const, var: scoping rules
- Primitive types: string, number, boolean, null, undefined, bigint, symbol
- Operators: arithmetic, comparison, logical, ternary, nullish coalescing
- Control flow: if/else, switch, truthy/falsy values
- Loops: for, while, do-while, for...of, for...in
- Functions: declarations, expressions, arrow functions, default params

### Afternoon block — Collections & ES2020+

Topics covered:

- Arrays: indexing, length, push/pop/shift/unshift, slice/splice
- Array methods: forEach, map, filter, reduce, find, some, every, includes
- Objects: literal syntax, property access, methods
- Destructuring: arrays and objects
- Spread (...) and rest parameters
- Template literals and tagged templates
- Optional chaining (?.) and nullish coalescing (??)

### Mini-project

Build a console-based ToDo manager: add, list, mark done, delete, filter. Pure JS, no UI.

#### Deliverable

todo.js script demonstrating all five operations.

---

## Worksheet — hands-on exercises

## Today at a glance

For three days you've been making pages look good. Today you start making them DO things. Pure JavaScript — no HTML, no CSS, no browser. By the end of today, you'll have built a working ToDo manager that runs in your terminal. Tomorrow we'll put a UI on it.

#### Setup before you start

- Verify Node.js is installed: in your terminal, run `node --version`. You should see v20+ or higher.
- If not, download from nodejs.org (LTS) and install.
- Create a new folder in your fullstack-journey repo: `js-practice/`.
- All today's exercises live as separate files inside js-practice/.
- Run each file with `node <filename>.js` from inside that folder.

#### Today's exercises

| # | Exercise | Time |
| --- | --- | --- |
| 4.1 | Variables, types & operators — predict the output | 30 min |
| 4.2 | Functions & control flow | 45 min |
| 4.3 | Arrays of objects — map, filter, reduce | 60 min |
| 4.4 | Console ToDo manager | 45 min |

> **The most important habit**
>
> - PREDICT every output before you run the code. Write down what you think the answer is, then run it. The gap between your prediction and reality is exactly where you learn — and notice it.

### Exercise 4.1 — Variables, types & operators — predict the output   (30 min)

Goal: build instinct for JavaScript's quirks before they bite you in production.

#### Step 1 — Set up the playground

In `js-practice/`, create `playground.js`. Run it with `node playground.js`.

#### Step 2 — Predict, then run

For EACH line below, write your prediction in the answer space, THEN type it into your file and run it. Don't skip ahead — the surprise IS the lesson.

console.log(typeof 42);

console.log(typeof "42");

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof []);

```
console.log(1 == "1");
console.log(1 === "1");
console.log("3" + 2);
console.log("3" - 2);
console.log(0 || "default");
console.log("" ?? "fallback");
console.log(null ?? "fallback");
console.log(undefined ?? "fallback");
```

#### Step 3 — Mark which surprised you

List THREE results that surprised you most:

Why does `"3" + 2` give a different answer from `"3" - 2`?

What's the difference between `||` and `??`? When would you use each?

> **typeof null === 'object'?**
>
> - Yes — it's a 50-year-old bug from JavaScript's first implementation that can never be fixed without breaking the web. Just remember: typeof null is 'object'. To check for null, use `value === null` directly.

- [ ] My playground.js runs with `node playground.js`
- [ ] I predicted EVERY line before running it
- [ ] I can explain why `"3" + 2` and `"3" - 2` differ
- [ ] I know the difference between `||` and `??`

### Exercise 4.2 — Functions & control flow   (45 min)

Goal: write small, focused functions that do one thing well. Test each one before moving on.

#### Setup

Create `utils.js` in `js-practice/`. At the bottom, add a 'demo' section that calls each function with at least 3 inputs and prints results.

#### Function 1 — isEven(n)

Returns true if n is even, false otherwise.

```js
function isEven(n) {
// your code here
}
console.log(isEven(2));   // true
console.log(isEven(7));   // false
console.log(isEven(0));   // true
```

#### Function 2 — fizzBuzz(n)

Returns 'Fizz' for multiples of 3, 'Buzz' for 5, 'FizzBuzz' for both, otherwise the number itself.

```js
function fizzBuzz(n) {
// your code here
}
console.log(fizzBuzz(3));   // 'Fizz'
console.log(fizzBuzz(5));   // 'Buzz'
console.log(fizzBuzz(15));  // 'FizzBuzz'
console.log(fizzBuzz(7));   // 7
```

#### Function 3 — gradeLetter(score)

Returns 'A' (≥90), 'B' (80-89), 'C' (70-79), 'D' (60-69), 'F' (<60). Use early returns.

#### Function 4 — countVowels(str)

Returns the number of vowels (a, e, i, o, u) in a string. Case-insensitive.

```js
function countVowels(str) {
// hint: use a loop, or the array .filter() method
}
console.log(countVowels("Hello World"));  // 3
console.log(countVowels("BCDFG"));        // 0
console.log(countVowels("AEIOU"));        // 5
```

#### Function 5 — reverseString(str)

Returns the reversed string. Bonus: do it WITHOUT using the built-in `.reverse()`.

```js
function reverseString(str) {
// your code here
}
console.log(reverseString("hello"));  // 'olleh'
console.log(reverseString(""));       // ''
```

#### Reflection

Did you reach for if/else for gradeLetter, or use a switch? Which felt cleaner?

How many ways did you find to write reverseString? List at least two.

- [ ] All five functions work for at least 3 different inputs each
- [ ] I used early return at least once
- [ ] I used both function declaration and arrow function syntax

### Exercise 4.3 — Arrays of objects — map, filter, reduce   (60 min)

Goal: master the three array methods you'll use every single day for the rest of your career.

#### Setup

Create `staff.js` and paste in this dataset at the top:

```js
const staff = [
{ id: 1, name: "Aisha", role: "designer",  salary: 4200, active: true  },
{ id: 2, name: "Bilal", role: "developer", salary: 5500, active: true  },
{ id: 3, name: "Carla", role: "developer", salary: 5800, active: false },
{ id: 4, name: "Dimah", role: "manager",   salary: 7200, active: true  },
{ id: 5, name: "Ehsan", role: "developer", salary: 6100, active: true  },
];
```

#### Task 1 — Active developers (names only)

Use `.filter()` then `.map()`. Return an array of strings.

```js
const activeDevs = /* your code */;
console.log(activeDevs);
// Expected: ['Bilal', 'Ehsan']
```

#### Task 2 — Total active monthly salary

Use `.filter()` then `.reduce()`. Return a single number.

```js
const totalActiveSalary = /* your code */;
console.log(totalActiveSalary);
// Expected: 23000
```

#### Task 3 — Highest paid person's name

Use `.reduce()`. Return a single string.

```js
const highestPaid = /* your code */;
console.log(highestPaid);
// Expected: 'Dimah'
```

#### Task 4 — Group staff by role

Return an object: { designer: [...names], developer: [...names], manager: [...names] }. Use `.reduce()`.

```js
const byRole = /* your code */;
console.log(byRole);
// Expected:
// { designer: ['Aisha'],
//   developer: ['Bilal', 'Carla', 'Ehsan'],
//   manager: ['Dimah'] }
```

#### Task 5 — 10% raise for developers (immutable!)

Return a NEW array. Don't mutate the original. Verify the original is unchanged.

```js
const raised = /* your code */;
console.log(raised);
```

console.log(staff[1].salary);  // should still be 5500

> **Immutability discipline**
>
> - The wrong instinct: `staff[i].salary *= 1.1`. The right move: `staff.map(p => p.role === 'developer' ? { ...p, salary: p.salary * 1.1 } : p)`. React, Redux, and Next.js all assume your data is immutable. Build the habit now.

#### Reflection

In one sentence: when do you use `.map()` vs `.filter()` vs `.reduce()`?

Why is mutation dangerous? Give a scenario where mutating `staff` would cause a bug.

- [ ] All 5 tasks return the expected output
- [ ] I have used map, filter, AND reduce in this file
- [ ] I have NEVER mutated the staff array
- [ ] I have chained methods at least once: filter().map() etc.

### Exercise 4.4 — Console ToDo manager   (45 min)

Goal: build a working ToDo manager in pure JavaScript. Tomorrow you'll put a UI on it; today, prove the logic works.

#### Setup

Create `todo.js`. The data lives in a single array; each task is `{ id, text, done }`.

```js
let tasks = [];
let nextId = 1;
```

#### Function 1 — addTask(text)

Appends a new task with auto-incremented id. Returns the new task.

```js
function addTask(text) {
const task = { id: nextId++, text, done: false };
tasks.push(task);
return task;
}
```

#### Function 2 — listTasks()

Prints every task on its own line, formatted like `[3] ✓ Buy milk` or `[3]   Buy milk`.

```js
function listTasks() {
if (tasks.length === 0) {
console.log("(no tasks)");
return;
}
tasks.forEach(t => {
const mark = t.done ? "✓" : " ";
console.log(`[${t.id}] ${mark} ${t.text}`);
});
}
```

#### Function 3 — completeTask(id)

Marks the task with given id as done. Returns true if found, false if not.

#### Function 4 — deleteTask(id)

Removes the task with given id. Use `.filter()` (immutable) or `.findIndex() + splice()` (mutable). Pick one and stick with it.

#### Function 5 — filterTasks(status)

Where status is 'open' or 'done'. Prints only matching tasks using the same format as listTasks.

#### Demo sequence at the bottom

Add this exact sequence to the bottom of your file. Running `node todo.js` should print all the expected output.

console.log("--- adding tasks ---");

addTask("Buy milk");

addTask("Push code");

addTask("Read JS book");

listTasks();

console.log("\n--- completing tasks ---");

completeTask(1);

completeTask(3);

listTasks();

console.log("\n--- only open ---");

filterTasks("open");

console.log("\n--- only done ---");

filterTasks("done");

console.log("\n--- after delete ---");

deleteTask(2);

listTasks();

#### Expected output

--- adding tasks ---

```
[1]   Buy milk
[2]   Push code
[3]   Read JS book
--- completing tasks ---
[1] ✓ Buy milk
[2]   Push code
[3] ✓ Read JS book
--- only open ---
[2]   Push code
--- only done ---
[1] ✓ Buy milk
[3] ✓ Read JS book
--- after delete ---
[1] ✓ Buy milk
[3] ✓ Read JS book
```

- [ ] My todo.js runs end-to-end with `node todo.js`
- [ ] Output matches the expected output exactly
- [ ] All five operations work — add, list, complete, delete, filter
- [ ] Code is committed and pushed to GitHub

## End of Day 4

Tomorrow you'll wrap a UI around today's logic. The cleaner your todo.js is now, the easier tomorrow will be.

> **End-of-day checkpoint — tick when complete**
>
> - [ ] I have a js-practice/ folder in my repo with all today's files.
> - [ ] I can read unfamiliar JS code and predict its output most of the time.
> - [ ] I have used map, filter, and reduce in real working code.
> - [ ] I never modify input arrays — I always return new ones.
> - [ ] My ToDo demo runs end-to-end with `node todo.js`.
> - [ ] Code committed and pushed to GitHub.

### Daily standup

Write one sentence for each.

#### One thing that worked today

#### One thing I'm still confused about

#### One thing I want to try tomorrow

## Day 4 cheat sheet

### Variables, types & operators

| Pattern | Meaning |
| --- | --- |
| const x = 5 | Declare a value that won't reassign |
| let x = 5 | Declare a value that will change |
| typeof x | Returns the type as a string |
| x === y | Strict equality (use this!) |
| x !== y | Strict inequality |
| x ?? fallback | Use fallback only if x is null/undefined |
| x?.prop | Read x.prop only if x exists |
| `Hello ${name}` | Template literal with interpolation |
| x++ / x-- | Increment / decrement |
| x += 5 | Add 5 to x in place (also -= *= /=) |

### Arrays & objects

| Pattern | Meaning |
| --- | --- |
| arr.push(x) | Add x to end (mutates) |
| arr.length | Number of items |
| arr[0] / arr[arr.length - 1] | First / last item |
| arr.includes(x) | Boolean — does array contain x |
| arr.indexOf(x) | Index of x, or -1 if not found |
| arr.map(fn) | New array — transform each item |
| arr.filter(fn) | New array — keep matches |
| arr.reduce(fn, init) | Collapse to single value |
| arr.find(fn) | First matching item, or undefined |
| arr.findIndex(fn) | Index of first match, or -1 |
| arr.forEach(fn) | Run fn on each (no return) |
| arr.sort((a, b) => a - b) | Sort numbers ascending |
| [...a, ...b] | Concatenate arrays |
| { ...obj, key: val } | Copy obj, override key |
| const { a, b } = obj | Destructure object |
| const [x, y] = arr | Destructure array |
| Object.keys(obj) | Array of keys |
| Object.values(obj) | Array of values |
| Object.entries(obj) | Array of [key, value] pairs |

### Stuck? Try this list

- Read the error message slowly. 'TypeError: Cannot read properties of undefined' means a variable was undefined where you expected a value.
- Add `console.log(x)` just before the broken line. Is x what you think it is?
- Comment out half your code. Does the error still happen? Bisect.
- Search the EXACT error string (without your variable names) on Google.
- Explain the bug to a partner in plain English. (Rubber duck debugging.)
- Ask your instructor — but bring the error message and what you've tried.
