export const navItems = [
  { id: "about", label: "Profile", shortLabel: "Profile" },
  { id: "projects", label: "My Works", shortLabel: "Works" },
  { id: "experience", label: "Experiences", shortLabel: "Experience" },
  { id: "contact", label: "Contact Me", shortLabel: "Contact" },
] as const;

export type NavSectionId = (typeof navItems)[number]["id"];
