import Profile from "@/components/Porfolio/profile";
import WorkExp from "@/components/Porfolio/work-exp";
import Projects from "@/components/Porfolio/projects";
import HeaderSocialIcon from "@/components/layout/header";

export default function Home() {
  return (
    <>
    <HeaderSocialIcon />
    
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground transition-colors duration-300">
      <Profile />
      <WorkExp />
      <Projects />
    </main>
    </>
  );
}
