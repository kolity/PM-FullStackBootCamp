# Day 2 — HTML5 & CSS Fundamentals

## Lesson plan overview

> **Learning objective**
>
> - Learners can author semantic, accessible HTML pages and style them with clean, maintainable CSS.

### Morning block — Semantic HTML5

Topics covered:

- HTML document structure: DOCTYPE, html, head, body, meta
- Semantic elements: header, nav, main, section, article, aside, footer
- Text content: headings (h1–h6), paragraphs, lists (ul, ol, li), strong, em
- Links and images: anchor tags, alt text, relative vs absolute paths
- Forms basics: form, label, input types, button, fieldset, legend
- Accessibility primer: alt text, label association, landmark regions

### Afternoon block — CSS fundamentals

Topics covered:

- How CSS attaches to HTML: inline, internal, external
- Selectors: type, class, id, descendant, pseudo-class
- The box model: content, padding, border, margin
- Colors: hex, rgb, hsl; CSS named colors
- Typography: font-family, font-size, line-height, font-weight
- Display modes: block, inline, inline-block
- Specificity & cascade

### Mini-project

Build a 'Personal Profile' page using semantic HTML and CSS — must include header, nav, three content sections, contact form, and footer.

#### Deliverable

index.html + styles.css committed to GitHub.

---

## Worksheet — hands-on exercises

## Today at a glance

Yesterday you wired up version control. Today you'll fill that empty repo with a real, working web page — your first piece of public-facing work. By the end of the day you will have a Personal Profile page styled with your own CSS, committed to GitHub, and viewable on any browser.

#### Workflow for every exercise

- Read the entire exercise before opening your editor.
- Type the code yourself — no copy-pasting from the slides.
- Open the page in a browser as you work, and refresh after every change.
- If stuck for more than 10 minutes, ask a partner or the instructor.
- Commit your changes at logical points (don't wait until the end).

#### Today's exercises

| # | Exercise | Time |
| --- | --- | --- |
| 2.1 | Semantic HTML scaffold | 45 min |
| 2.2 | Style with CSS | 60 min |
| 2.3 | Forms & specificity | 30 min |
| 2.4 | Polish — variables and small details | 30 min |

> **Live preview**
>
> - VS Code's 'Live Server' extension auto-refreshes your browser every time you save. Install it once and you'll never go back. Right-click your index.html → 'Open with Live Server'.

### Exercise 2.1 — Semantic HTML scaffold   (45 min)

Goal: build a Personal Profile page using only semantic HTML. No styling yet — focus on meaning.

#### Step 1 — Create the file

In your fullstack-journey repo (cloned locally), create a new folder called `profile/` and inside it create `index.html`. Open it in VS Code.

#### Step 2 — Build the scaffold

Type out (don't copy-paste) the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Your Name · Profile</title>
</head>
<body>
<header>
<h1>Your Name</h1>
<nav>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
</nav>
</header>
<main>
<section id="about">
<h2>About me</h2>
<!-- 2 paragraphs + img go here -->
</section>
<section id="skills">
<h2>Skills</h2>
<!-- ul with at least 5 items -->
</section>
<section id="projects">
<h2>Projects</h2>
<!-- 2 article elements -->
</section>
</main>
<footer>
<p>© 2026 Your Name</p>
</footer>
</body>
</html>
```

#### Step 3 — Fill in the content

- In About: write 2 paragraphs and add an `<img>`. Use a real photo or any image online. CRITICAL: include `alt="..."` describing what's in the image.
- In Skills: write a `<ul>` with at least 5 `<li>` items.
- In Projects: create 2 `<article>` elements, each with an `<h3>` and a `<p>`.

#### Step 4 — Open it in the browser

Right-click the file → Open with Live Server. The page will look unstyled. That's expected — we'll style it next.

#### Self-check

Why is `<header>` better than `<div class="header">`?

What does the `alt` attribute do, and who benefits from it?

- [ ] My page has DOCTYPE, lang, charset, and viewport set
- [ ] I used <header>, <nav>, <main>, <section>, <footer>
- [ ] Every <img> on my page has alt text
- [ ] Heading levels go h1 → h2 → h3 (no skipping)

### Exercise 2.2 — Style with CSS   (60 min)

Goal: turn your unstyled page into something that looks intentional.

#### Step 1 — Create styles.css and link it

Create `styles.css` in the same folder. In your `<head>`, add:

```html
<link rel="stylesheet" href="styles.css">
```

#### Step 2 — Reset and base styles

Add these rules first (the order matters — more general rules at the top, more specific further down):

```css
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
font-family: system-ui, sans-serif;
line-height: 1.6;
color: #111827;
background: #f8fafc;
max-width: 70ch;
margin: 0 auto;
padding: 2rem 1rem;
}
```

Refresh the page. Notice how text is now readable, centered, and breathing.

#### Step 3 — Style the navigation

Make the nav links sit in a row with spacing between them, and remove the default underline:

```css
nav {
display: flex;
gap: 1rem;
margin-top: 0.5rem;
}
nav a {
text-decoration: none;
color: #2563eb;
font-weight: 500;
}
nav a:hover {
text-decoration: underline;
}
```

#### Step 4 — Section spacing

Sections shouldn't bump into each other. Add space between them:

```css
section {
margin: 3rem 0;
}
h2 {
margin-bottom: 1rem;
color: #2563eb;
}
img {
max-width: 100%;
height: auto;
border-radius: 0.5rem;
margin: 1rem 0;
}
```

#### Step 5 — Project cards

Make each `<article>` look like a card:

```css
article {
background: white;
border: 1px solid #e2e8f0;
border-radius: 0.5rem;
padding: 1.5rem;
margin-bottom: 1rem;
}
article h3 {
color: #2563eb;
margin-bottom: 0.5rem;
}
```

#### Step 6 — Footer

```css
footer {
margin-top: 4rem;
padding-top: 2rem;
border-top: 1px solid #e2e8f0;
color: #64748b;
font-size: 0.9rem;
text-align: center;
}
```

> **Read the box model in DevTools**
>
> - Right-click any element → Inspect → look at the colourful box on the right of DevTools. You'll see content (blue), padding (green), border (yellow), margin (orange). When something looks off, that's the first place to check.

- [ ] My page has visible spacing between sections
- [ ] My nav links are in a row, not stacked
- [ ] Project articles look like cards
- [ ] My image scales — never wider than its container

### Exercise 2.3 — Forms & specificity   (30 min)

Goal: add a contact form, then experiment with selector specificity.

#### Step 1 — Add a Contact section

Before your `<footer>`, add this section:

```html
<section id="contact">
<h2>Get in touch</h2>
<form>
<label for="name">Your name</label>
<input id="name" name="name" type="text" required>
<label for="email">Email</label>
<input id="email" name="email" type="email" required>
<label for="msg">Message</label>
<textarea id="msg" name="msg" rows="5" required></textarea>
<button type="submit">Send</button>
</form>
</section>
```

Add this nav link too: `<a href="#contact">Contact</a>` inside your `<nav>`.

#### Step 2 — Style the form

```css
form {
display: flex;
flex-direction: column;
gap: 0.5rem;
max-width: 30rem;
}
label {
font-weight: 500;
margin-top: 0.5rem;
}
input, textarea {
padding: 0.5rem 0.75rem;
border: 1px solid #cbd5e1;
border-radius: 0.375rem;
font: inherit;
}
input:focus, textarea:focus {
outline: none;
border-color: #2563eb;
}
button {
margin-top: 1rem;
padding: 0.6rem 1.2rem;
background: #2563eb;
color: white;
border: none;
border-radius: 0.375rem;
cursor: pointer;
font: inherit;
}
button:hover {
background: #1e40af;
}
```

#### Step 3 — Specificity experiment

Add a class to one of your nav links:

```html
<a href="#contact" class="primary">Contact</a>
```

Then add these THREE rules to your CSS:

a { color: red; }

nav a { color: green; }

nav a.primary { color: orange; }

Refresh. What colour is the Contact link? What colour are the others?

Why? Use the specificity tiers from the slides to explain:

Now reverse the order of the rules — put `nav a.primary` FIRST and `a` LAST. Does anything change? Why or why not?

> **Specificity beats source order**
>
> - More specific rules win regardless of where they appear in the file. Source order only breaks ties between equally-specific rules.

- [ ] My form has labels paired with inputs via for/id
- [ ] Required attributes are on every input that needs one
- [ ] Inputs change appearance when focused
- [ ] I understand which selector wins between three options

### Exercise 2.4 — Polish — variables and small details   (30 min)

Goal: refactor your CSS to use variables, and add the small details that make a page feel finished.

#### Step 1 — Extract colours into variables

At the top of your `styles.css`, add:

:root {

```css
--bg: #f8fafc;
--surface: #ffffff;
--fg: #111827;
--muted: #64748b;
--accent: #2563eb;
--accent-dark: #1e40af;
--border: #e2e8f0;
}
```

Now find every `#2563eb`, `#111827`, etc in your CSS and replace with `var(--accent)`, `var(--fg)`, etc. The page should look identical, but now you can change your whole colour scheme by editing one place.

#### Step 2 — Try a different palette

Change just the variable values to:

:root {

```css
--bg: #fef3c7;
--surface: #fffbeb;
--fg: #1e3a2e;
--muted: #6b7280;
--accent: #f59e0b;
--accent-dark: #b45309;
--border: #fde68a;
}
```

Refresh. Your whole site is now warm-toned — without touching any other rule. Pick whichever palette you prefer for your final version.

#### Step 3 — Small details that make a difference

- Add `scroll-behavior: smooth;` to `html { }` so anchor links scroll smoothly.
- Add a tiny transition to your hover states: `transition: background 0.15s ease;`
- Use `font-weight: 600` instead of bold for headings — it's softer.
- Use `border-radius` consistently — pick 0.375rem or 0.5rem and stick with it.
- Make the body padding bigger on larger screens (we'll do this properly with media queries on Day 3).

#### Step 4 — Commit and push

```bash
git add profile/
git commit -m "add personal profile page"
git push
```

Open your repo on GitHub. Click `profile/index.html`. GitHub renders it as text, but if you've enabled GitHub Pages on this repo (Settings → Pages → Deploy from main branch), your live URL will look like `https://<you>.github.io/fullstack-journey/profile/`.

- [ ] All my colours come from CSS variables
- [ ] My hover states have transitions
- [ ] I have committed and pushed everything
- [ ] Bonus: my page is live on GitHub Pages

## End of Day 2

Make sure all of these are true before you leave. Day 3 takes today's static page and makes it responsive — you'll want a solid base.

> **End-of-day checkpoint — tick when complete**
>
> - [ ] I have a profile page in my repo with semantic HTML5.
> - [ ] Every image has alt text and every input has a label.
> - [ ] I have used at least three different selector types (type, class, pseudo-class).
> - [ ] I can explain the box model in my own words.
> - [ ] I have refactored my colours into CSS variables.
> - [ ] My page is committed and pushed to GitHub.

### Daily standup

Write one sentence for each.

#### One thing that worked today

#### One thing I'm still confused about

#### One thing I want to try tomorrow

## Day 2 cheat sheet

Quick reference for tags and CSS properties you'll use most often. By Day 5 you won't need this any more.

### Semantic HTML5 elements

| Tag | Use it for |
| --- | --- |
| <header> | Site or page header — logo, title, intro |
| <nav> | Primary navigation links |
| <main> | The main content (one per page only) |
| <section> | Thematic group with its own heading |
| <article> | Self-contained content (post, card, comment) |
| <aside> | Tangentially related content (sidebar) |
| <footer> | Page or section footer |
| <h1> ... <h6> | Heading hierarchy — never skip a level |
| <ul> / <ol> / <li> | Unordered / ordered list items |
| <a href="..."> | Anchor — link to another page or section |
| <img src alt> | Image — alt is REQUIRED for accessibility |
| <form action method> | Form wrapper |
| <label for="id"> | Pair with an input via matching id |
| <input type required> | Form input — pick the right type |
| <button type="submit"> | Form submit button |

### CSS properties

| Property | What it controls |   |   |   |
| --- | --- | --- | --- | --- |
| color | Text colour |   |   |   |
| background / background-color | Background colour or image |   |   |   |
| font-family / font-size / font-weight | Typography |   |   |   |
| line-height | Vertical spacing within text |   |   |   |
| margin | Space OUTSIDE the box (pushes others away) |   |   |   |
| padding | Space INSIDE the box (between border and content) |   |   |   |
| border | Visible edge: 1px solid #ccc |   |   |   |
| border-radius | Rounded corners |   |   |   |
| width / max-width / height | Element size |   |   |   |
| box-sizing: border-box | Width includes padding + border |   |   |   |
| display: block | inline | flex | grid | How the element flows |
| text-align / text-decoration | Text alignment / underlines |   |   |   |
| :hover, :focus, :active | Pseudo-class states |   |   |   |
| var(--name) | Use a CSS variable |   |   |   |

### Stuck? Try this list

- Open DevTools → Elements → click the offending element. Read the Computed styles tab.
- Look at the Box Model diagram on the right of DevTools.
- Try adding `outline: 2px solid red;` to the broken element to see its actual size.
- Search the exact problem in plain English — 'css center div vertically'.
- Ask a partner — but show them what you've already tried.
