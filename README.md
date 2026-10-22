# AI Automation Portfolio

A one-page portfolio for my AI automation consulting work. It lists the services I offer and walks through three of my workflows. It ends with a way to book a call. It's built with React, Vite and Tailwind CSS, and it's deployed to GitHub Pages at [janrizmlibres.github.io/automation-portfolio](https://janrizmlibres.github.io/automation-portfolio/).

## What's on the page

- A header whose headline types itself out and rewrites in a loop.
- A profile section with my portrait and background.
- Six service cards, from workflow automation to training and support.
- Three case studies. They are a UGC ads generator with Sora 2 built in n8n, and a client onboarding workflow and a lead follow-up system built in Make.com.
- A contact section with email and a Calendly link to book a consultation.

The look is dark, in Tailwind's zinc and teal scales, with hover effects on the cards.

## Running it

You need Node.js and npm.

```bash
git clone https://github.com/janrizmlibres/automation-portfolio.git
cd automation-portfolio
npm install
npm run dev
```

| Script | What |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

## Changing the content

The text, images and links live in the components under `src/components/`, and the images in `src/assets/`. The colors come from the zinc and teal scales in `tailwind.config.js`. `index.html.old` is the earlier plain-HTML version of the page, kept for reference.

## License

MIT. See [LICENSE](LICENSE).
