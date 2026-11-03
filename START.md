# Getting started with Claude Code

1. Unzip this folder and open it in your terminal.
2. Run `npm install`, then `npm run dev` and open http://localhost:3000 to check the setup works.
3. Run `claude` in the folder.
4. Paste the full prompt from PROMPT.md (builds everything), or this shorter first step:

> Read CLAUDE.md and content.ts, and open reference/design-draft.html to see the target design. The Next.js project, fonts and design tokens are already set up. Build the site to match the draft, section by section, reading all content from content.ts. Start with Nav and Banner, then stop so I can review in the browser.

5. Review with `npm run dev`, then continue one section at a time: "Now build the Projects section", and so on.
6. Commit to git after each section you approve.
7. When it looks right: push to GitHub and import the repo in Vercel.

## Adding things later

- **Photo:** save as `public/images/portrait.webp` (4:5, about 800×1000), then set `portrait` in `content.ts`.
- **CV:** save as `public/files/ahad-mahjabin-jannat-cv.pdf`, then set `cvUrl` in `content.ts`.
- **New project:** add an entry to `projects` in `content.ts` and drop its screenshot in `public/images/`.
