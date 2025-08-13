import { FileUser } from "lucide-react";

interface HeaderProps {
  onTitleClick: () => void;
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
}

export default function Header({ onTitleClick, onAboutClick, onSkillsClick, onProjectsClick }: HeaderProps) {
  return (
    <header className="fixed top-0 p-4 flex justify-between w-full bg-violet-400 z-10">
      <h1 onClick={onTitleClick} className="flex items-center gap-2 md:text-2xl text-xl font-semibold">
        <FileUser /> JinHyun Portfolio
      </h1>
      <div className="flex gap-6 md:text-xl text-base font-semibold">
        <button onClick={onAboutClick}>About Me</button>
        <button onClick={onSkillsClick}>Skills</button>
        <button onClick={onProjectsClick}>Projects</button>
      </div>
    </header>
  );
}
