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

export const projectsData = [
  {
    imageUrl: "/slider-7.png",
    demoLink: "/basilico",
  },
  {
    imageUrl: "/slider-1.jpg",
    demoLink: "/basilico/about",
  },
  {
    imageUrl: "/slider-2.jpg",
    demoLink: "/coffee-shop",
  },
  {
    imageUrl: "/css-tricky.png",
    techLink: "https://developer.chrome.com/docs/css-ui/animate-to-height-auto",
    techName: "Animate to height: auto; (and other intrinsic sizing keywords) in CSS",
  },
];

export const skillsData = new Map([
  ["React", "/react.svg"],
  ["Next.js", "/next.svg"],
  ["TypeScript", "/ts.svg"],
  ["JavaScript", "/js.svg"],
  ["Zustand", "/zustand.svg"],
  ["Redux", "/redux.svg"],
  ["Tailwind CSS", "/tailwind.svg"],
  ["HTML", "/html.svg"],
  ["CSS", "/css.svg"],
]);
