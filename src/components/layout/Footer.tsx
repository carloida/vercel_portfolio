import Link from "next/link";

import type { NavItem } from "@/types/portfolio";

interface FooterProps {
  name: string;
  items: NavItem[];
}

export function Footer({ name, items }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[hsl(var(--navy))] text-white">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-lg font-semibold tracking-[-0.02em]">{name}</p>
          <p className="mt-2 text-sm text-slate-300">
            Data, analytics, and operations portfolio.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-slate-300">
          {items.map((item) => (
            <Link className="transition-colors hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-slate-400">
          (c) {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
