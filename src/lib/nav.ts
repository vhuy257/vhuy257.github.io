export const navItems = [
  { id: "about", label: "Profile" },
  { id: "experience", label: "Experiences" },
  { id: "projects", label: "My Works" },
  { id: "contact", label: "Contact Me" },
] as const;

export type NavSectionId = (typeof navItems)[number]["id"];
