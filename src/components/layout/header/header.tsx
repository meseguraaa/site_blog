import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActiveLink } from "@/components/active-link";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant={"secondary"}>
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
