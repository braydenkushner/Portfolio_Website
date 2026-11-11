# Brayden Kushner — Portfolio

A React + Vite site with two pages (Projects, About) plus a project-detail
template, matching the "Bold Modern" dark design you picked.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Things to fill in before you publish

Everything content-related lives in `src/data/` as plain arrays — adding a
new job, project, or organization is adding one object to the array, no
layout code to touch.

1. **Headshot photo** — add a photo file at `public/images/headshot.jpg`
   (any image works, but a square-ish crop looks best). Until it's there,
   the hero sections show a `[photo]` placeholder automatically.
2. **Resume** — add your resume PDF at `public/resume.pdf`. The About page's
   "Download" button and embedded preview both point to that path.
3. **Project photos** — each project in `src/data/projects.js` has an
   `image` field pointing at `public/images/projects/<name>.jpg`. Add a file
   at that path for each project, or change the path to wherever you'd
   rather keep them. Missing images fall back to a `[picture]` placeholder.
4. **Placeholder text** — anything in `[brackets]` across `src/data/*.js`
   (project summaries, dates, honors, certificates, Sigma Pi / THON
   summaries) is a stand-in for you to replace with the real text.
5. **Links** — the `url` field in `src/data/experience.js`, the LinkedIn
   buttons (currently `href="#"` in `src/pages/About.jsx` and
   `src/pages/Projects.jsx`), and the certificate `pdfUrl`s in
   `src/data/honorsAndCertificates.js` all need real URLs.
6. **Project detail pages** — `src/pages/ProjectDetail.jsx` is one shared
   template for every project (title, date, overview, picture). If you want
   a distinct "Skills"-style page type for some projects later, duplicate
   this file and add a second route in `src/App.jsx`.

## Deploying for free

This project builds to static files, so any of the free hosts we discussed
work. Netlify is the easiest if you want the About page's "Contact" email
link to also work as an actual form later:

1. Push this folder to a GitHub repo.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an
   existing project** → pick your repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy — Netlify gives you a free `your-site.netlify.app` URL, with a
   custom domain option later if you want one.

Vercel and Cloudflare Pages both work the same way (same build command and
output folder); pick whichever you'd rather manage.

## Structure

```
src/
  data/           content arrays — edit these, not the components
  components/     Header, Footer, CollapsibleSection
  pages/          Projects.jsx, About.jsx, ProjectDetail.jsx
  App.jsx         routes
  App.css         shared styles (colors, cards, buttons, layout)
  index.css       fonts + global resets
```
