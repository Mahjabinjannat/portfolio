# Ahad Mahjabin Jannat — Portfolio

Personal portfolio of **Ahad Mahjabin Jannat**, a frontend developer and CSE graduate from Shahjalal University of Science and Technology (2024). It showcases live projects built with React, Next.js and TypeScript.

- **Live site:** _add URL after deploying_
- **GitHub:** [Mahjabinjannat](https://github.com/Mahjabinjannat)
- **LinkedIn:** [mahjabin-jannat](https://www.linkedin.com/in/mahjabin-jannat)
- **Email:** mahjabinjannat153@gmail.com

## Tech stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.4.4 | React framework, App Router, static prerendering |
| [React](https://react.dev) | 19.3.1 | UI components |
| [TypeScript](https://www.typescriptlang.org) | 5.9.3 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.3.3 | Styling |
| [Vercel](https://vercel.com) | — | Hosting |

Fonts: Spectral, Manrope and Hind Siliguri via `next/font/google`.

## Features

- Responsive layout from 360px phones to wide desktops
- Light and dark theme, following the system setting with a manual toggle
- One-click "Copy email" in the banner
- All content in a single `content.ts` file, so updating text never means touching components
- Optimised images with `next/image`
- Accessible: keyboard focus styles, alt text, reduced-motion support
- SEO metadata, Open Graph preview image, sitemap and robots.txt

## Getting started

Requires **Node.js 20 or newer** (`node -v` to check).

```bash
npm install     # install dependencies (first time only)
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build locally
```

## Project structure

```
app/
  layout.tsx        fonts, metadata, theme setup
  page.tsx          composes the page sections
  globals.css       design tokens (light + dark) and base styles
  opengraph-image.tsx, icon.tsx, sitemap.ts, robots.ts
components/         one component per section (Nav, Banner, Projects, …)
content.ts          all text, links, projects, education and skills
public/
  images/           project screenshots (.webp)
  files/            CV (PDF)
reference/
  design-draft.html approved visual design used as the build reference
CLAUDE.md           design and engineering brief
```

## Updating content

Everything lives in **`content.ts`**.

- **Add a project:** add an entry to `projects`, and put its screenshots in `public/images/` (desktop about 1280×800, optional mobile about 360×720, `.webp`).
- **Add the portrait:** save it as `public/images/portrait.webp` (4:5, about 800×1000) and set `profile.portrait` to `"/images/portrait.webp"`.
- **Add the CV:** save it as `public/files/ahad-mahjabin-jannat-cv.pdf` and set `profile.cvUrl` to `"/files/ahad-mahjabin-jannat-cv.pdf"`.

The portrait frame and the Download CV link stay hidden until these are set.

## Deploying

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repository. The defaults for Next.js work as they are.
3. After the first deploy, set `SITE_URL` in `content.ts` to the live URL (metadata, sitemap and robots use it), and add the URL to this README.
4. Optional: add a custom domain in Vercel → Project → Settings → Domains.

## License

Content, text and images © Ahad Mahjabin Jannat. The code may be used as a reference.
