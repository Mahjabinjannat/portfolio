# Full build prompt for Claude Code

Paste everything inside the box below into Claude Code, run from this folder after `npm install`.

---

```
Build my portfolio website end to end in this folder.

CONTEXT
- Read CLAUDE.md first. It is the design and engineering brief: stack, structure, section order, design tokens and rules. Follow it exactly.
- Read content.ts. It holds every piece of text, link and image path. Never hard-code copy in components; always read from content.ts.
- Open reference/design-draft.html. It is the approved visual design. Match its layout, spacing, typography, colors and behaviour closely. Images are inlined as base64 there; in this project use the files in public/images/ instead.
- The Next.js 16 + React 19 + TypeScript + Tailwind 4 project is already set up. Fonts are loaded in app/layout.tsx and design tokens are in app/globals.css (Tailwind classes like bg-paper, text-ink, text-muted, border-line, text-teal, bg-banner, font-serif, font-sans, font-bn). Do NOT run create-next-app and do NOT add new dependencies.

BUILD, IN THIS ORDER
1. Nav: "A.M.J" monogram; links Projects, About, Education; an "Email me" pill (mailto). Hide About and Education links under 600px.
2. Banner: teal rounded panel. Small round avatar (profile.avatar, 44px, gold ring) next to the status badge, name with the last name italic and indented, lede, location line, contact bar (email address, "Copy email" button that shows "Copied" for ~2s, "Email me" button), then links LinkedIn, GitHub, Download CV, See my projects. On the right, three phone screenshots (fitlog, bazar, devstack mobile) fanned out and cropped at the bottom edge. On mobile the phones sit below the text.
3. Selected projects: one ProjectCard per entry in content.projects. Desktop screenshot with the mobile screenshot overlapping it as a phone frame on the inner side (only when image.mobile exists). Alternate image left/right on desktop; stack on mobile. Title (with Bengali name in font-bn when present), kind, description, tag pills, "Visit live site" and "View code" links. Under the list: "More experiments and practice projects are on my GitHub."
4. About: portrait (profile.portrait) with arched top, 4:5, bio paragraphs, three facts.
5. Education: degree card with years, "Graduated 2024", school, highlighted thesis; two "how I keep learning" notes below.
6. Skills: three columns from content.skills.
7. Off the screen: Reading and Travelling.
8. Contact: large heading, email link, LinkedIn and GitHub.
9. Footer: copyright and a theme toggle.

BEHAVIOUR
- Server components by default. Only the copy-email button and theme toggle use "use client".
- Theme: follow prefers-color-scheme by default; the toggle sets data-theme on <html>, saves the choice in localStorage (wrapped in try/catch), and an inline script in layout.tsx applies it before paint so there is no flash.
- Hide the Download CV link while profile.cvUrl is null.
- The only animation is the banner phones fanning in on load; disable it under prefers-reduced-motion. No scroll animations.
- External links open in a new tab with rel="noopener".
- Use next/image for every image with correct width/height and descriptive alt text from content.ts.

QUALITY CHECKS (do all, fix what fails)
- Compare the page against reference/design-draft.html at 1280px and 390px wide and fix differences.
- No horizontal scroll at 360px.
- Visible focus ring on every link and button; logical heading order (one h1).
- Text contrast meets WCAG AA in both light and dark mode.
- npm run build passes with no errors or type warnings.

SEO AND SHARING
- Metadata: title "Ahad Mahjabin Jannat — Frontend Developer", description from profile.lede, Open Graph and Twitter card tags.
- app/opengraph-image.tsx (1200x630) styled like the banner: teal background, her name, role, and the open-to-work line.
- app/icon.tsx favicon using the "A.M.J" monogram.
- app/sitemap.ts and app/robots.ts (use a SITE_URL constant I can change later).

FINISH
- Keep README.md accurate if anything changes.
- Initialise git if needed and commit with a clear message.
- Give me a short summary of what you built, anything you could not match from the draft, and the exact steps to push to GitHub and deploy on Vercel.

Work through the sections in order. After the Nav and Banner, show me a summary and wait for my "continue" before building the rest.
```

---

Want it built in one go with no pause? Delete the last line of the prompt.
