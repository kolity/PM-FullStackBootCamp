# Day 3 — Modern CSS: Flexbox, Grid & Responsive

## Lesson plan overview

> **Learning objective**
>
> - Learners can build responsive multi-section page layouts using Flexbox and CSS Grid.

### Morning block — Flexbox & CSS Grid

Topics covered:

- When to choose Flexbox vs Grid (1D vs 2D)
- Flex container: display, flex-direction, justify-content, align-items, gap
- Flex items: flex-grow, flex-shrink, flex-basis, order, align-self
- Grid container: display: grid, grid-template-columns/rows, gap
- Grid items: grid-column, grid-row, grid-area
- Common patterns: holy grail layout, card grid, navbar

### Afternoon block — Responsive design & polish

Topics covered:

- Mobile-first thinking
- Media queries: min-width / max-width breakpoints
- Responsive units: rem, em, %, vw, vh, clamp()
- Responsive images: max-width: 100%; height: auto;
- CSS variables (custom properties) for theming
- Transitions and simple hover animations

### Mini-project

Convert Day 2's profile into a fully responsive landing page with at least 4 breakpoints (≤480, ≤768, ≤1024, ≥1280) and a CSS Grid section.

#### Deliverable

Live preview opened on phone-sized and desktop-sized viewports demonstrated in standup.

---

## Worksheet — hands-on exercises

## Today at a glance

Your Day 2 page works on a desktop. But what happens when someone opens it on a phone? Today you'll fix that — and learn the two layout systems that all modern websites use. By the end of the day, your Personal Profile will look intentional at every size from 375px to 1280px wide.

#### Workflow for every exercise

- Read the entire exercise before you start coding.
- Open Chrome DevTools → toggle device toolbar (Ctrl/Cmd-Shift-M) and keep it open all day.
- Test at 375px, 768px, and 1280px after every change.
- Commit at logical points — at least once per exercise.
- If stuck for more than 10 minutes, ask a partner or the instructor.

#### Today's exercises

| # | Exercise | Time |
| --- | --- | --- |
| 3.1 | Flexbox warm-up — five mini-layouts | 30 min |
| 3.2 | CSS Grid card gallery | 45 min |
| 3.3 | Make Day 2's profile responsive | 60 min |
| 3.4 | Polish — variables, clamp() and hover | 30 min |

> **Mental model**
>
> - Flexbox = ONE direction (row OR column). Grid = TWO directions (rows AND columns). When you can't decide, ask: 'do I need things aligned both horizontally and vertically?' If yes, Grid. If no, Flexbox.

### Exercise 3.1 — Flexbox warm-up — five mini-layouts   (30 min)

Goal: build muscle memory for Flexbox by creating five small layouts in one file.

#### Step 1 — Set up a sandbox

In your fullstack-journey repo, create `flex-practice/index.html`. Add the basic HTML scaffold and link a `flex-practice/styles.css`. Inside the `<body>`, create five `<section>` blocks, each with a comment naming the layout and 3-4 dummy `<div>` children inside.

```html
<section class="layout-1">
```

<h2>1. Horizontal navbar</h2>

```html
<nav>
<span>Logo</span>
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
</nav>
</section>
<section class="layout-2">
```

<h2>2. Three equal cards</h2>

```html
<div class="cards">
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
</div>
</section>
<!-- repeat for layouts 3, 4, 5 -->
```

#### Step 2 — Build each layout

LAYOUT 1: Logo on the left, links on the right.

```css
.layout-1 nav {
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background: #f1f5f9;
}
```

LAYOUT 2: Three equal-width cards with a gap.

```css
.layout-2 .cards {
display: flex;
gap: 1rem;
}
.layout-2 .card {
flex: 1;
background: #dbeafe;
padding: 2rem;
text-align: center;
}
```

LAYOUT 3: A call-to-action box with text vertically AND horizontally centred.

```css
.layout-3 .cta {
display: flex;
justify-content: center;
align-items: center;
min-height: 200px;
background: #fef3c7;
font-size: 1.5rem;
font-weight: bold;
}
```

LAYOUT 4: A footer with three columns.

```css
.layout-4 footer {
display: flex;
gap: 2rem;
padding: 2rem;
background: #1e293b;
color: white;
}
.layout-4 footer > div { flex: 1; }
```

LAYOUT 5: A hero with text on the left, image on the right (50/50).

```css
.layout-5 .hero {
display: flex;
gap: 2rem;
align-items: center;
}
.layout-5 .hero > * { flex: 1; }
```

#### Reflection

In your own words: what does `flex: 1` do?

What's the difference between `justify-content` and `align-items`?

- [ ] All five layouts work and look intentional
- [ ] I have used `gap` instead of margin between flex items
- [ ] I can predict what `flex: 1` does on an element

### Exercise 3.2 — CSS Grid card gallery   (45 min)

Goal: build a responsive image gallery in one rule using CSS Grid.

#### Step 1 — Create the markup

Create `gallery/index.html` with a single `<main>` containing 6 `<article class="card">` elements:

```html
<main class="gallery">
<article class="card">
<img src="https://picsum.photos/seed/p1/400/300" alt="Random image 1">
<h3>Project One</h3>
<p>A short description of this project.</p>
<button>View →</button>
</article>
<!-- 5 more cards using different seeds -->
</main>
```

Tip: `https://picsum.photos/seed/<anything>/400/300` returns a placeholder image. Change the seed to get a different image.

#### Step 2 — The magic Grid rule

```css
.gallery {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 1.5rem;
padding: 2rem;
}
```

Open the page. Now resize the browser slowly from very wide to very narrow. Watch how the columns adapt — no media queries needed.

#### Step 3 — Style the cards

```css
.card {
background: white;
border-radius: 0.75rem;
overflow: hidden;
```

box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

```css
display: flex;
flex-direction: column;
}
.card img {
width: 100%;
height: 200px;
object-fit: cover;
}
```

.card h3, .card p {

```css
padding: 0 1.5rem;
}
.card h3 { margin-top: 1.25rem; }
.card button {
margin: 1rem 1.5rem 1.5rem;
align-self: flex-start;
padding: 0.5rem 1rem;
background: #2563eb;
color: white;
border: none;
border-radius: 0.375rem;
cursor: pointer;
}
```

#### Step 4 — Hover transition

```css
.card {
```

transition: transform 0.2s ease, box-shadow 0.2s ease;

```
}
.card:hover {
transform: translateY(-4px);
```

box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);

```
}
```

> **`auto-fit` vs `auto-fill`**
>
> - Both responsively wrap your grid. The practical difference: `auto-fit` lets surviving cards stretch to fill empty tracks; `auto-fill` keeps the empty tracks. Try replacing `auto-fit` with `auto-fill` and resize the window — you'll feel it immediately.

#### Reflection

How many breakpoints would you need to achieve this layout WITHOUT auto-fit + minmax?

- [ ] My gallery shows 1 column at narrow width
- [ ] My gallery shows 3-4 columns at wide width
- [ ] Cards lift on hover with a smooth transition
- [ ] I have committed and pushed `gallery/`

### Exercise 3.3 — Make Day 2's profile responsive   (60 min)

Goal: take the profile you built on Day 2 and make it look intentional at every screen size, mobile-first.

#### Step 1 — Add the viewport meta (verify)

In your `profile/index.html` `<head>`, make sure you have:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Without this, mobile browsers will pretend the screen is desktop-width and zoom out.

#### Step 2 — Reset and base mobile styles

In `profile/styles.css`, the rules at the top should assume a phone-width screen. Verify or add:

```css
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
font-family: system-ui, sans-serif;
line-height: 1.6;
color: var(--fg);
background: var(--bg);
padding: 1rem;
}
```

h1 { font-size: clamp(1.75rem, 6vw, 2.5rem); }

h2 { font-size: clamp(1.25rem, 4vw, 1.75rem); }

#### Step 3 — Make the navbar Flexbox

On mobile, links stack. On 600px+, they go inline.

```css
/* mobile (default) */
header { margin-bottom: 2rem; }
nav {
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-top: 1rem;
}
/* tablet+ */
@media (min-width: 600px) {
nav {
flex-direction: row;
gap: 1.5rem;
}
}
```

#### Step 4 — Project section as a Grid

Mobile: 1 column. Bigger screens: auto-fit grid.

```css
#projects {
display: grid;
grid-template-columns: 1fr;
gap: 1.5rem;
}
@media (min-width: 600px) {
#projects {
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
}
```

#### Step 5 — Wider container on bigger screens

Mobile: edge-to-edge with small padding. Tablet+: max-width with bigger padding.

```css
@media (min-width: 768px) {
body {
max-width: 70ch;
margin: 0 auto;
padding: 2rem;
}
}
@media (min-width: 1024px) {
body {
max-width: 85ch;
padding: 3rem 4rem;
}
}
```

#### Step 6 — Test in DevTools

- Open Chrome DevTools (F12) and toggle device toolbar (Ctrl/Cmd-Shift-M).
- Test these widths:
- 375px (iPhone SE) — single column, links stack, edge-to-edge
- 768px (iPad) — links inline, projects in 2 columns, max-width container
- 1280px (laptop) — projects in 3 columns, generous padding

#### Step 7 — Tick the no-horizontal-scroll test

At 375px, set `body { outline: 2px solid red; }` temporarily. If the red border extends past the screen, something is overflowing. Find it (often an image or a wide form input) and add `max-width: 100%`.

- [ ] My nav is stacked at 375px and inline at 768px
- [ ] My projects are 1 / 2 / 3 columns at 375 / 768 / 1280
- [ ] No horizontal scroll at any width
- [ ] My headings scale fluidly with clamp()

### Exercise 3.4 — Polish — variables, clamp() and hover   (30 min)

Goal: add the small details that turn a 'works on every screen' page into a 'looks designed' page.

#### Step 1 — Polish the project cards

Replace the article styles with this:

```css
#projects article {
background: var(--surface);
border-radius: 0.75rem;
padding: 1.5rem;
border: 1px solid var(--border);
```

transition: transform 0.2s ease, box-shadow 0.2s ease;

```
}
#projects article:hover {
transform: translateY(-4px);
```

box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

```css
}
#projects article h3 {
color: var(--accent);
margin-bottom: 0.5rem;
}
```

#### Step 2 — Smooth scrolling for nav links

Add to `html { }`:

```css
html {
scroll-behavior: smooth;
}
```

Now click your nav links — the page scrolls smoothly to each section.

#### Step 3 — Form polish

Make form inputs scale beautifully on big screens:

```css
input, textarea {
width: 100%;
padding: 0.75rem 1rem;
font-size: clamp(1rem, 1.5vw, 1.125rem);
}
button {
```

padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);

```
font-size: clamp(1rem, 1.5vw, 1.125rem);
}
```

#### Step 4 — Skip-link for accessibility

As the very first child of `<body>`, add:

```html
<a href="#main-content" class="skip-link">Skip to content</a>
```

And add an `id="main-content"` to your `<main>`. Then style the link:

```css
.skip-link {
position: absolute;
top: -3rem;
left: 0;
background: var(--accent);
color: white;
padding: 0.75rem 1rem;
text-decoration: none;
transition: top 0.2s ease;
z-index: 100;
}
.skip-link:focus {
top: 0;
}
```

Now press Tab on your page — the skip link slides in. Press Enter to skip past the nav. This is invisible to mouse users but priceless for keyboard users.

#### Step 5 — Commit and push

```bash
git add profile/ flex-practice/ gallery/
git commit -m "make profile responsive, add flex and grid practice"
git push
```

- [ ] My cards lift on hover with a smooth transition
- [ ] Smooth scroll works on nav clicks
- [ ] Form inputs scale with clamp()
- [ ] Skip link appears when I press Tab
- [ ] Everything is committed and pushed

## End of Day 3

Make sure all of these are true before you leave. Day 4 leaves CSS behind for now and starts JavaScript — your page will start doing things, not just showing things.

> **End-of-day checkpoint — tick when complete**
>
> - [ ] I have built five Flexbox layouts in flex-practice/.
> - [ ] I have built a responsive Grid gallery in gallery/.
> - [ ] My profile page works at 375
> - 768
> - 1280 widths.
> - [ ] I have used both Flexbox AND Grid in the same site.
> - [ ] I have at least one clamp() value for fluid typography.
> - [ ] Cards have hover transitions; no horizontal scroll on mobile.
> - [ ] Everything is committed and pushed to GitHub.

### Daily standup

Write one sentence for each.

#### One thing that worked today

#### One thing I'm still confused about

#### One thing I want to try tomorrow

## Day 3 cheat sheet

### Flexbox

| Property | What it does |   |   |   |
| --- | --- | --- | --- | --- |
| display: flex | Make this element a flex container |   |   |   |
| flex-direction: row | column | Set the main axis |   |   |
| justify-content: ... | Align items along the MAIN axis |   |   |   |
| → flex-start | flex-end | Pack to start or end |   |   |
| → center | Pack to centre |   |   |   |
| → space-between | space-around | space-evenly | Distribute with space |   |
| align-items: ... | Align items along the CROSS axis |   |   |   |
| → flex-start | center | flex-end | stretch | (stretch is the default) |
| gap: 1rem | Space between children |   |   |   |
| flex-wrap: wrap | Allow wrapping to new lines |   |   |   |
| flex: 1 1 240px | grow / shrink / basis |   |   |   |
| flex: 1 | Equal share of remaining space |   |   |   |

### Grid & Responsive

| Property | What it does |
| --- | --- |
| display: grid | Make this element a grid container |
| grid-template-columns: 1fr 2fr | Two columns; second is twice as wide |
| grid-template-columns: repeat(3, 1fr) | Three equal columns |
| repeat(auto-fit, minmax(240px, 1fr)) | Responsive grid in one rule |
| gap / row-gap / column-gap | Spacing between tracks |
| grid-column: span 2 | This item spans 2 columns |
| grid-column: 1 / -1 | Span from first to last column |
| @media (min-width: 600px) | Tablet+ breakpoint |
| @media (min-width: 768px) | Tablet landscape+ |
| @media (min-width: 1024px) | Laptop / desktop |
| clamp(1rem, 2vw, 2rem) | Fluid value: min, ideal, max |
| transition: transform 0.2s ease | Animate hover changes |
| transform: translateY(-4px) | Lift element by 4px |

### Stuck? Try this list

- Add a temporary `outline: 2px solid red;` to find which element is too wide.
- Open DevTools → toggle device toolbar → check at 375 / 768 / 1280.
- DevTools → Elements panel → click element → look at the box model diagram.
- If a flex child won't shrink, set `min-width: 0` on it (default is `auto`, which won't shrink).
- If grid items won't shrink past their content, set `minmax(0, 1fr)` instead of `1fr`.
- Search the exact problem in plain English: 'css flex item won't shrink'.
