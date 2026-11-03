// All site content lives here. Components read from this file only.
// To add a project or change text, edit this file — no component changes needed.

export type Project = {
  slug: string;
  title: string;
  titleBn?: string; // optional Bengali name, shown next to the title
  kind: string; // one-line category shown under the title
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl: string;
  image: { desktop: string; mobile?: string; alt: string; mobileAlt?: string };
};

// Change this to the real address after deploying. Used by metadata, sitemap and robots.
export const SITE_URL = "https://ahad-mahjabin-jannat.vercel.app";

export const profile = {
  name: { first: "Ahad Mahjabin", last: "Jannat" },
  role: "Frontend developer",
  lede: "Frontend developer building clear, responsive web apps with React, Next.js and TypeScript.",
  location: "CSE graduate from SUST, based in Sylhet, Bangladesh and working remotely.",
  status: "Open to junior frontend roles and internships",
  email: "mahjabinjannat153@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/mahjabin-jannat",
    github: "https://github.com/Mahjabinjannat",
  },
  cvUrl: null as string | null, // TODO: set to "/files/ahad-mahjabin-jannat-cv.pdf" when the PDF is added
  portrait: "/images/portrait.webp" as string | null, // 4:5, shown in About with an arched top
  avatar: "/images/avatar.webp" as string | null, // square, shown small and round in the banner
  portraitAlt: "Portrait of Ahad Mahjabin Jannat",
};

export const nav = {
  monogram: "A.M.J",
  ariaLabel: "Main",
  tabBarLabel: "Sections",
  links: [
    { label: "Projects", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  email: "Email me",
};

export const banner = {
  copyEmail: "Copy email",
  copied: "Copied",
  email: "Email me",
  linkedin: "LinkedIn",
  github: "GitHub",
  downloadCv: "Download CV",
  seeProjects: "See my projects",
  projectsHref: "#work",
};

export const projectsSection = {
  heading: "Selected projects",
  intro: "Live apps I designed and built end to end. Each links to the working site and its source on GitHub.",
  visitLive: "Visit live site",
  viewCode: "View code",
  more: { before: "More experiments and practice projects are on ", link: "my GitHub", after: "." },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a Computer Science and Engineering graduate who likes turning ideas into small, useful web apps. Most of my work is in the JavaScript ecosystem: React and Next.js on the front, TypeScript throughout, and Tailwind for fast, responsive layouts. My thesis was in Human-Computer Interaction, so I care about how an interface works for the person using it, not only how it looks.",
    "I graduated in 2024 and I'm now looking for my first full-time role as a frontend developer. Until then I keep building: every project on this page is live, and I keep my problem-solving sharp on online judges. I learn quickly and I enjoy picking up new tools.",
  ],
  facts: [
    { value: "4 live projects", label: "Built end to end" },
    { value: "BSc in CSE, 2019–2024", label: "SUST, Sylhet" },
    { value: "Bangla, English, Arabic, Hindi", label: "Languages" },
  ],
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    titleBn: "বাজার দর",
    kind: "Market price tracker for Bangladesh",
    description:
      "A Bengali-language app for checking daily prices of essentials like rice, oil and fish. Shows price changes against yesterday, last week and last month, and compares prices across markets.",
    tags: ["Next.js 16", "TypeScript", "Better Auth", "MongoDB", "Tailwind"],
    liveUrl: "https://bazar-dor-six-pi.vercel.app/",
    codeUrl: "https://github.com/Mahjabinjannat/bazard-dor",
    image: {
      desktop: "/images/bazar-desktop.webp",
      mobile: "/images/bazar-mobile.webp",
      alt: "Bazar Dor homepage with categories, a live price ticker and today's price increases",
      mobileAlt: "Bazar Dor homepage on a phone",
    },
  },
  {
    slug: "fitlog",
    title: "FitLog",
    kind: "Workout planning and tracking",
    description:
      "Browse a workout library, build a personal plan and save favorites. Each workout has its own page with equipment, sets, reps, calories and step-by-step instructions.",
    tags: ["Next.js", "TypeScript", "Context API", "Tailwind"],
    liveUrl: "https://my-fitness-log-app.vercel.app",
    codeUrl: "https://github.com/Mahjabinjannat/my-fitness-log-app",
    image: {
      desktop: "/images/fitlog-desktop.webp",
      mobile: "/images/fitlog-mobile.webp",
      alt: "FitLog workout library in its dark theme",
      mobileAlt: "FitLog on a phone",
    },
  },
  {
    slug: "book-vibe",
    title: "Book Vibe",
    kind: "Book discovery and reading lists",
    description:
      "Explore books, open detailed pages for each title, and keep a personal Wishlist and Read list that stay in sync across pages.",
    tags: ["Next.js", "TypeScript", "JSON Server", "Tailwind"],
    liveUrl: "https://book-vibe-project-gamma.vercel.app/",
    codeUrl: "https://github.com/Mahjabinjannat/Book-Vibe-Project",
    image: {
      desktop: "/images/bookvibe-desktop.webp",
      alt: "Book Vibe homepage with a featured book and the book collection",
    },
  },
  {
    slug: "devstack",
    title: "DevStack",
    kind: "Build-your-own tech stack picker",
    description:
      "Developers browse technologies by category, compare ratings and difficulty, and assemble a personal stack they can edit or clear in one place.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    liveUrl: "https://a05-dev-stack-sigma.vercel.app",
    codeUrl: "https://github.com/Mahjabinjannat/A05_DevStack",
    image: {
      desktop: "/images/devstack-desktop.webp",
      mobile: "/images/devstack-mobile.webp",
      alt: "DevStack with technology cards and the Your Stack panel",
      mobileAlt: "DevStack on a phone",
    },
  },
];

export const education = {
  heading: "Education",
  intro: "Where the foundations came from, and how I keep learning.",
  thesisLabel: "Thesis area",
  degree: "BSc in Computer Science and Engineering",
  school: "Shahjalal University of Science and Technology, Sylhet",
  years: "2019–2024",
  note: "Graduated 2024",
  thesis: "Human-Computer Interaction (HCI)",
  learning: [
    {
      title: "Building projects",
      text: "I learn a new tool by shipping something with it, then deploying it so anyone can try it.",
    },
    {
      title: "Problem solving",
      text: "I practice algorithms and data structures on online judges to keep my fundamentals sharp.",
    },
  ],
};

export const skillsHeading = "Skills";

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { group: "Frameworks and UI", items: ["React", "Next.js (App Router)", "Tailwind CSS", "Vite", "HeroUI"] },
  { group: "Tools and services", items: ["Git and GitHub", "REST APIs", "Better Auth, OAuth", "MongoDB", "Vercel"] },
];

export const offScreenHeading = "Off the screen";

export const offScreen = [
  {
    title: "Reading",
    text: "I usually have a book on the go, mostly fiction with the occasional non-fiction pick. I like keeping track of what I've read and what's next, which is where Book Vibe came from.",
  },
  {
    title: "Travelling",
    text: "I love exploring new places, from the tea gardens around Sylhet to cities I've only read about. Seeing how people get around somewhere unfamiliar keeps me thinking about the person on the other side of the screen.",
  },
];

export const contact = {
  heading: "Have a project or a role in mind? Let's talk.",
  linkedin: "LinkedIn",
  github: "GitHub",
};

export const footer = {
  copyright: "© 2026 Ahad Mahjabin Jannat",
  switchTheme: "Switch theme",
};
