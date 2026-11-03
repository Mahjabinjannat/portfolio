import { footer } from "@/content";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-3 pt-8 pb-12 text-[.88rem] text-muted">
      <span>{footer.copyright}</span>
      <ThemeToggle label={footer.switchTheme} />
    </footer>
  );
}
