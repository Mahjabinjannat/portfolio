# Ahad Mahjabin Jannat — Portfolio

Personal portfolio for a fresher frontend developer (CSE, SUST, 2024). Audience: recruiters and hiring managers for junior frontend roles and internships. The page must get them to the projects fast and make contacting her effortless.

## Source of truth

- **Visual reference:** `reference/design-draft.html`. Open it in a browser. Match its layout, spacing, type and colors closely. It is a static mockup: images are inlined as base64 there; in the project use the files in `public/images/`.
- **Content:** `content.ts`. Every piece of text, link and image path comes from here. Never hard-code copy in components.

## Stack

Already set up in this folder. Run `npm install`, then `npm run dev`. Do not run create-next-app.

| Package | Version | Purpose |
|---|---|---|
| next | 16.4.4 | React framework, App Router, static prerendering |
| react / react-dom | 19.3.1 | UI components |
| typescript | 5.9.3 | Types (strict mode) |
| tailwindcss + @tailwindcss/postcss | 4.3.3 | Styling; tokens wired up in `app/globals.css` via `@theme` |

- Fonts via `next/font/google` (Spectral, Manrope, Hind Siliguri), already in `app/layout.tsx`.
- Images via `next/image`.
- Static site, no backend, no database. Deploy on Vercel.
- Do not add other libraries (no UI kits, no animation or icon packages) without asking.
- Tailwind classes available from the tokens: `bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-teal`, `text-thread`, `bg-surface`, `bg-banner`, `text-on-banner`, `font-serif`, `font-sans`, `font-bn`.

## Structure

```
app/
  layout.tsx        fonts, metadata (done); add theme script
  page.tsx          composes the sections in order
  globals.css       design tokens, light + dark (done)
components/
  Nav.tsx
  Banner.tsx        includes ContactBar (copy email + mailto)
  Projects.tsx      ProjectCard with desktop shot + optional phone overlay
  About.tsx
  Education.tsx
  Skills.tsx
  OffScreen.tsx
  Contact.tsx
  Footer.tsx        includes theme toggle
content.ts
public/images/      screenshots (.webp)
public/files/       CV PDF goes here later
```

Keep components small and flat. Server components by default; only the copy-email button and theme toggle need `"use client"`.

## Section order

1. Nav — monogram "A.M.J", links: Projects, About, Education, and an "Email me" pill (mailto)
2. Banner — teal panel: status badge, name (last name italic, indented), lede, location, contact bar (email · Copy email · Email me), links (LinkedIn, GitHub, Download CV, See my projects), fan of 3 phone screenshots on the right
3. Selected projects — alternating image left/right on desktop; phone mockup overlaps the desktop shot on the inner side
4. About — portrait (arched top) + bio + 3 facts
5. Education — degree card with years, school, highlighted thesis; two "how I keep learning" notes below
6. Skills — three columns
7. Off the screen — Reading, Travelling
8. Contact — large heading, email link, LinkedIn/GitHub
9. Footer — copyright + theme toggle

## Design tokens

| Token | Light | Dark |
|---|---|---|
| paper (bg) | #F5F6F2 | #12161B |
| ink (text) | #1C2027 | #E9ECE6 |
| muted | #5C6573 | #9BA4AE |
| line | #D9DDD6 | #2A3038 |
| teal (accent) | #0F5A52 | #5FB7AA |
| thread (gold highlight) | #D9A02B | #E8B54A |
| surface (cards) | #FFFFFF | #191E24 |
| banner bg | #0F5A52 | #123F3A |

- Fonts: **Spectral** (serif — headings, name, lede, bio), **Manrope** (sans — body, UI), **Hind Siliguri** (Bengali text only).
- Content width max 1080px; side padding 16px mobile, 40px from 720px.
- Desktop section heads use a 260px label column + content column; subsequent blocks indent 300px to align.
- Radii: banner 28px, cards 20px, screenshots 6px, pills fully rounded.
- Dark mode: follow `prefers-color-scheme`, with a manual toggle that sets `data-theme` on `<html>`.

## Rules

- Voice: first person ("my projects", "I built"), plain words, sentence case.
- One motion moment only: the banner phones fan in on load. Respect `prefers-reduced-motion`. No scroll-reveal animations.
- No ALL-CAPS labels, no emoji, no gradients, no "→" on links.
- Accessible: visible focus rings (gold outline), alt text on every image, semantic headings, AA contrast.
- Responsive down to 360px with no horizontal scroll. Banner phones sit below the text on mobile.
- External links open in a new tab with `rel="noopener"`.
- If `profile.cvUrl` is null, hide the Download CV link. If `profile.portrait` or `profile.avatar` is null, hide that image (don't show an empty box).
- Banner avatar: when `profile.avatar` is set, show it as a 44px round photo with a 2px gold (`thread`) ring, inline before the status badge.

## SEO

- Title: "Ahad Mahjabin Jannat — Frontend Developer"
- Meta description from `profile.lede`
- Open Graph image: generate one later (1200×630) from the banner
- Add `sitemap.ts` and `robots.ts`

## Pending

- [ ] CV PDF → `public/files/`, set `profile.cvUrl`
- [ ] Book Vibe: hero book on the live site should be swapped for a neutral title, then retake `bookvibe-desktop.webp`
- [ ] Custom domain (optional)
