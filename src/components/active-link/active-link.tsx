"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();
  const linkPath = (typeof href === "string" ? href : href.pathname) ?? "";
  const isActive =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`);
  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "text-action-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  );
};
