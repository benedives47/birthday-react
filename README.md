# Birthday Strawberry Matcha — React + Vite

A complete mobile-first birthday website built with React, Vite, Tailwind CSS v4, Framer Motion, React Icons, and React Confetti.

## Features

- Strawberry Matcha visual theme
- Responsive mobile layout
- Hero scrapbook photo
- Story timeline
- Polaroid gallery with hover animation
- Fullscreen photo modal
- Diary-style letter
- Animated gift box
- Music player
- Scroll progress navigation
- Floating decorative elements
- Birthday confetti
- Replay button
- Back to top button
- GitHub Pages-ready Vite base path

## 1. Install

```bash
npm install
```

## 2. Start development

```bash
npm run dev
```

## 3. Add your photos

Open:

```text
src/data/siteData.js
```

Change the paths/content there.

Put actual photos in:

```text
public/photos/
```

For example:

```text
public/photos/hero.jpg
public/photos/01.jpg
public/photos/02.jpg
...
```

Then update `siteData.js`.

## 4. Add music

Put your song at:

```text
public/music/birthday.mp3
```

The browser requires a user interaction before audio can play on most phones, so the music player is intentionally click-to-play.

## 5. GitHub Pages

This project assumes the repository is:

```text
birthday-react
```

and therefore uses:

```js
base: "/birthday-react/"
```

If your GitHub repository has a different name, change the `base` value in `vite.config.js`.

Build:

```bash
npm run build
```

The output is generated in:

```text
dist/
```

## Project structure

```text
birthday-strawberry-matcha/
├─ public/
│  ├─ photos/
│  └─ music/
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ hooks/
│  ├─ sections/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## Important

The SVG images included in `public/photos` are only local placeholders so the project works immediately. Replace them with your real photos before publishing.
