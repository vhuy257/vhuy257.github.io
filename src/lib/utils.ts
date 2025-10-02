import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const workExpsData = [
  {
    companyName: "Lotte Data Communication",
    position: "Frontend Developer",
    description: [
      "Develop the UI/UX for the website lottemart.vn.",
      "Utilize Next.js, Redux Thunk, and Next Authentication in the development process.",
      "Implement login functionality with social networking services, utilizing Tailwind CSS and TypeScript.",
      "Create the business logic functions for the Cart Page.",
    ],
  },
  {
    companyName: "TagWW",
    position: "Frontend Developer",
    description: [
      "Develop an Admin Dashboard System for User Management.",
      "Utilize React, Next.js, Redux Thunk, Next Authentication, and TypeScript, with Chakra UI for the UI components.",
      "Implement React custom hooks for data fetching and interceptors.",
      "Create business logic functions for managing user roles and assets.",
      "Write unit tests using Cypress.",
    ],
  },
  {
    companyName: "Isobar Commerce",
    position: "Frontend Developer",
    description: [
      "Collaborated on projects using React Router DOM, Ant Design, Material Design, and TypeScript.",
      "Contributed as a front-end developer specializing in Magento platform theme UI.",
      "Utilized Next.js, Redux Thunk, and Next Authentication in project development.",
      "Implemented React Progressive Web App (PWA) features.",
      "Resolved various front-end bugs.",
      "Provided regular reports to Team Leader and Manager.",
    ],
  },
  {
    companyName: "Gianty",
    position: "Frontend Developer",
    description: [
      "Designed and developed an Intranet Social Network Website for the company, enhancing UI/UX, and also spearheaded the development of the primary company website gnt.co.jp.",
      "Established and upheld front-end standards documentation, overseeing the production of JavaScript, HTML, and CSS.",
      "Identified and resolved front-end bugs to ensure optimal performance.",
      "Developed a Hybrid App for internal Human Resource management tasks such as check-in/out and absence requests, as well as addressed bugs within the application.",
    ],
  },
];

export const projectsData = [
  {
    imageUrl: "/slider-1.jpg",
    demoLink: "/basilico/about",
  },
  {
    imageUrl: "/slider-2.jpg",
    demoLink: "/coffee-shop",
  },
  {
    imageUrl: "/slider-3.jpg",
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
