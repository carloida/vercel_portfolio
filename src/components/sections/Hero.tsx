import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface HeroProps {
  name: string;
  title: string;
  hero: {
    eyebrow: string;
    profileImage: {
      src: string;
      alt: string;
    };
    credentialLogos: Array<{
      label: string;
      detail: string;
      src: string;
      alt: string;
      layout: "wide" | "compact";
    }>;
    intro: string;
    actions: Array<{ label: string; href: string }>;
    credentials: string[];
    achievement: {
      label: string;
      title: string;
      description: string;
    };
    framework: Array<{ title: string; description: string }>;
    signalCards: Array<{ title: string; description: string }>;
  };
}

export function Hero({ name, title, hero }: HeroProps) {
  return (
    <header
      className="relative overflow-hidden border-b border-[hsl(var(--line))] bg-[hsl(var(--surface))]"
      id="home"
    >
      <div className="absolute inset-0 bg-grid-subtle opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top_right,rgba(30,52,84,0.12),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-content gap-12 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[hsl(var(--muted))]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-[clamp(3.3rem,7vw,5.9rem)] leading-[0.96] tracking-[-0.05em] text-[hsl(var(--foreground))]">
            {name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[hsl(var(--navy))]">
            {title}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[hsl(var(--muted))] sm:text-lg">
            {hero.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {hero.actions.map((action, index) => (
              <Button
                href={action.href}
                key={action.label}
                size="lg"
                variant={index === 0 ? "primary" : "secondary"}
              >
                {action.label}
              </Button>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {hero.credentials.map((credential) => (
              <li
                className="rounded-full border border-[hsl(var(--line-strong))] bg-white px-4 py-2 text-sm text-[hsl(var(--foreground))] shadow-soft"
                key={credential}
              >
                {credential}
              </li>
            ))}
          </ul>

          <aside className="mt-8 rounded-[1.7rem] border border-[hsl(var(--line-strong))] bg-white p-5 shadow-soft">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
              {hero.achievement.label}
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
              {hero.achievement.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted))] sm:text-base">
              {hero.achievement.description}
            </p>
          </aside>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <div className="space-y-5">
            <section className="rounded-[2rem] border border-[hsl(var(--line-strong))] bg-white p-6 shadow-panel">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white bg-[hsl(var(--navy))] shadow-panel ring-1 ring-[hsl(var(--line-strong))] sm:h-36 sm:w-36">
                  <Image
                    alt={hero.profileImage.alt}
                    className="h-full w-full object-cover object-center"
                    fill
                    priority
                    sizes="144px"
                    src={hero.profileImage.src}
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
                    Carlo Emilio Ida
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[hsl(var(--muted))]">
                    Analytics | Operations | Machine Learning
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-[hsl(var(--navy))]">
                    NUS MSc Business Analytics candidate with PMP-certified delivery experience.
                  </p>
                </div>
              </div>
            </section>

            <section
              aria-label="Credential logos"
              className="rounded-[2rem] border border-[hsl(var(--line-strong))] bg-white p-6 shadow-panel"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
                  Credentials
                </p>
                <span className="hidden h-px flex-1 bg-[hsl(var(--line))] sm:block" />
              </div>
              <div className="mt-5 grid gap-4">
                {hero.credentialLogos.map((credential) => (
                  <article
                    className={cn(
                      "rounded-[1.4rem] border border-[hsl(var(--line))] bg-[hsl(var(--surface))] p-4 transition-all duration-300 hover:border-[hsl(var(--line-strong))]",
                      credential.layout === "compact" && "sm:p-5"
                    )}
                    key={credential.label}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center overflow-hidden rounded-xl bg-white px-4 shadow-soft",
                        credential.layout === "wide" ? "h-24 sm:h-28" : "h-28 sm:h-32"
                      )}
                    >
                      <Image
                        alt={credential.alt}
                        className={cn(
                          "w-full object-contain object-center",
                          credential.layout === "wide" ? "max-h-20" : "max-h-24"
                        )}
                        height={credential.layout === "wide" ? 112 : 128}
                        sizes={credential.layout === "wide" ? "(min-width: 1024px) 380px, 80vw" : "220px"}
                        src={credential.src}
                        width={credential.layout === "wide" ? 460 : 240}
                      />
                    </div>
                    <h3 className="mt-3 text-center text-sm font-semibold tracking-[-0.01em] text-[hsl(var(--foreground))]">
                      {credential.label}
                    </h3>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[1.8rem] border border-[hsl(var(--line-strong))] bg-white p-5 shadow-soft">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
                Execution Approach
              </p>
              <div className="mt-5 space-y-4">
                {hero.framework.map((item, index) => (
                  <div
                    className="rounded-[1.3rem] border border-[hsl(var(--line))] bg-white p-4"
                    key={item.title}
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[hsl(var(--navy))] text-sm font-semibold text-white">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted))]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {hero.signalCards.map((card) => (
                <div
                  className="rounded-[1.5rem] border border-[hsl(var(--line))] bg-white p-5"
                  key={card.title}
                >
                  <p className="text-sm font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted))]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
