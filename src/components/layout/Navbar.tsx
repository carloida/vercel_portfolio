"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/portfolio";

interface NavbarProps {
  items: NavItem[];
  brand: string;
  initials: string;
  cta: {
    label: string;
    href: string;
  };
}

export function Navbar({ items, brand, initials, cta }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto max-w-content border transition-all duration-300",
          isOpen ? "rounded-[2rem] lg:rounded-full" : "rounded-full",
          isScrolled
            ? "border-[hsl(var(--line-strong))] bg-white/[0.92] shadow-soft backdrop-blur-xl"
            : "border-[hsl(var(--line))] bg-white/80 backdrop-blur-md"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5">
          <Link className="flex items-center gap-3" href="#home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[hsl(var(--navy))] text-sm font-semibold tracking-[0.16em] text-white">
              {initials}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-[0.01em] text-[hsl(var(--foreground))]">
                {brand}
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-[hsl(var(--muted))]">
                Portfolio
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <Link
                className="rounded-full px-4 py-2 text-sm text-[hsl(var(--muted))] transition-colors duration-200 hover:bg-slate-100 hover:text-[hsl(var(--foreground))]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--line))] text-[hsl(var(--foreground))] transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                  isOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                  isOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
          id="mobile-navigation"
        >
          <div className="overflow-hidden">
            <div className="border-t border-[hsl(var(--line))] px-4 py-4">
              <div className="grid gap-2">
                {items.map((item) => (
                  <Link
                    className="rounded-2xl px-4 py-3 text-sm text-[hsl(var(--muted))] transition-colors duration-200 hover:bg-slate-100 hover:text-[hsl(var(--foreground))]"
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button
                className="mt-4 w-full"
                href={cta.href}
                onClick={() => setIsOpen(false)}
                size="lg"
              >
                {cta.label}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
