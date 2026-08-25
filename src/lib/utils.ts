import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const workExpsData = [
  {
    companyName: "Lotte Innovation",
    position: "Frontend Developer",
    description: [
      "Develop the UI/UX for the website lottemart.vn, creating a dynamic and responsive design using React, Tailwind CSS, and TypeScript.",
      "Implement login functionality with social networking services, utilizing Next.js, Redux Thunk, and Next Authentication.",
      "Create the business logic functions for the Cart Page, ensuring smooth and efficient checkout process.",
      "Ensure the website is optimized for search engines and has a fast loading time.",
      "Provide regular reports to the team and management.",
    ],
  },
  {
    companyName: "TagWW",
    position: "Frontend Developer",
    description: [
      "Develop an Admin Dashboard System for User Management, creating a dynamic and responsive design using React, Tailwind CSS, and TypeScript.",
      "Implement login functionality with social networking services, utilizing Next.js, Redux Thunk, and Next Authentication.",
      "Create the business logic functions for the User Management Page, ensuring smooth and efficient user management process.",
      "Ensure the website is optimized for search engines and has a fast loading time.",
      "Provide regular reports to the team and management.",
    ],
  },
  {
    companyName: "Isobar Commerce",
    position: "Frontend Developer",
    description: [
      "Collaborated on projects using React, Tailwind CSS, and TypeScript.",
      "Contributed as a front-end developer specializing in Magento platform theme UI.",
      "Implement login functionality with social networking services, utilizing Next.js, Redux Thunk, and Next Authentication.",
      "Create the business logic functions for the User Management Page, ensuring smooth and efficient user management process.",
      "Ensure the website is optimized for search engines and has a fast loading time.",
      "Provide regular reports to the team and management.",
    ],
  },
  {
    companyName: "Gianty",
    position: "Frontend Developer",
    description: [
      "Developed an Intranet Social Network Website for the company, creating a dynamic and responsive design using React, Tailwind CSS, and TypeScript.",
      "Implement login functionality with social networking services, utilizing Next.js, Redux Thunk, and Next Authentication.",
      "Create the business logic functions for the User Management Page, ensuring smooth and efficient user management process.",
      "Ensure the website is optimized for search engines and has a fast loading time.",
      "Provide regular reports to the team and management.",
    ],
  },
];

export type ProjectCategory = "web-template" | "cms-dashboard" | "technical-tips";

export const projectCategoryMeta: Record<
  ProjectCategory,
  { label: string; icon: string; className: string }
> = {
  "web-template": {
    label: "Web Template",
    icon: "mdi:web",
    className:
      "bg-sky-500/90 text-white border-sky-500/20",
  },
  "cms-dashboard": {
    label: "CMS Dashboard",
    icon: "mdi:view-dashboard-outline",
    className:
      "bg-emerald-600/90 text-white border-emerald-600/20",
  },
  "technical-tips": {
    label: "Technical Tips",
    icon: "mdi:lightbulb-on-outline",
    className:
      "bg-amber-500/90 text-white border-amber-500/20",
  },
};

export const projectsData = [
  {
    title: "Basilico Home",
    imageUrl: "/slider-7.png",
    demoLink: "/basilico",
    category: "web-template" as ProjectCategory,
  },
  {
    title: "Basilico About",
    imageUrl: "/slider-1.jpg",
    demoLink: "/basilico/about",
    category: "web-template" as ProjectCategory,
  },
  {
    title: "Coffee Shop",
    imageUrl: "/slider-2.jpg",
    demoLink: "/coffee-shop",
    category: "web-template" as ProjectCategory,
  },
  {
    title: "Basilico Sushi",
    imageUrl: "/slider-8.png",
    demoLink: "/basilico/sushi",
    category: "web-template" as ProjectCategory,
  },
  {
    title: "Animate to height: auto",
    imageUrl: "/css-tricky.png",
    techLink: "https://developer.chrome.com/docs/css-ui/animate-to-height-auto",
    techName: "Animate to height: auto; (and other intrinsic sizing keywords) in CSS",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "Safe dangerouslySetInnerHTML",
    imageUrl: "/tech-trick-2.png",
    techLink: "https://dev.to/hijazi313/using-dangerouslysetinnerhtml-safely-in-react-and-nextjs-production-systems-115n?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo",
    techName: "Using dangerouslySetInnerHTML Safely in React and Next.js Production Systems",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "React Server Components",
    imageUrl: "/tip-rsc.png",
    techLink: "https://react.dev/reference/rsc/server-components",
    techName: "How Server Components work in React and when to use them with Client Components",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "Next.js App Router caching",
    imageUrl: "/css-tricky.png",
    techLink: "https://nextjs.org/docs/app/guides/caching",
    techName: "Understand request memoization, data cache, full route cache, and the router cache",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "View Transitions API",
    imageUrl: "/tip-view-transitions.png",
    techLink: "https://developer.chrome.com/docs/web-platform/view-transitions",
    techName: "Smooth same-document and cross-document transitions with the View Transitions API",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "CSS :has() selector",
    imageUrl: "/css-tricky.png",
    techLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/:has",
    techName: "Parent and relational selectors with :has() for cleaner interactive UI styles",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "TanStack Query essentials",
    imageUrl: "/tip-tanstack-query.png",
    techLink: "https://tanstack.com/query/latest/docs/framework/react/overview",
    techName: "Async state, caching, and refetch patterns for React data fetching",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "TypeScript utility types",
    imageUrl: "/css-tricky.png",
    techLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
    techName: "Pick, Omit, Partial, Required, and other utility types that keep props tidy",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "Web Vitals in practice",
    imageUrl: "/tip-web-vitals.png",
    techLink: "https://web.dev/articles/vitals",
    techName: "LCP, INP, and CLS: what they measure and how to improve Core Web Vitals",
    category: "technical-tips" as ProjectCategory,
  },
  {
    title: "All SVG Icons",
    imageUrl: "/all_svg_icons.png",
    demoLink: "https://allsvgicons.com/",
    category: "web-template" as ProjectCategory,
  },
  {
    title: "SaaS Admin Template",
    imageUrl: "/saas-template.png",
    demoLink: "https://saas-template.vhuy2571990.workers.dev",
    category: "cms-dashboard" as ProjectCategory,
  },
  {
    title: "SmileCare Dental CMS",
    imageUrl: "/dental-dashboard.png",
    demoLink: "https://dental-fe.vhuy2571990.workers.dev/dashboard",
    category: "cms-dashboard" as ProjectCategory,
  },
];

export const skillsData = new Map([
  ["React", "/react.svg"],
  ["Next.js", "/next.svg"],
  ["Vite", "/vite.svg"],
  ["TypeScript", "/ts.svg"],
  ["JavaScript", "/js.svg"],
  ["Zustand", "/zustand.svg"],
  ["Redux", "/redux.svg"],
  ["Tailwind CSS", "/tailwind.svg"],
  ["HTML", "/html.svg"],
  ["CSS", "/css.svg"],
]);
