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

      <div className="relative mx-auto max-w-content px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_26rem]">
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
          </div>

          <aside className="animate-rise rounded-[2rem] border border-[hsl(var(--line-strong))] bg-white p-7 shadow-panel [animation-delay:120ms]">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white bg-[hsl(var(--navy))] shadow-panel ring-1 ring-[hsl(var(--line-strong))] sm:h-52 sm:w-52 lg:h-48 lg:w-48 xl:h-52 xl:w-52">
                <Image
                  alt={hero.profileImage.alt}
                  className="object-cover object-center"
                  fill
                  priority
                  sizes="(min-width: 1280px) 208px, 192px"
                  src={hero.profileImage.src}
                />
              </div>
              <p className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
                Carlo Emilio Ida
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[hsl(var(--muted))]">
                Analytics | Operations | Machine Learning
              </p>
              <p className="mt-4 max-w-xs text-sm font-medium leading-6 text-[hsl(var(--navy))]">
                NUS MSc Business Analytics candidate with PMP-certified delivery experience.
              </p>
            </div>
          </aside>
        </div>

        <section
          aria-label="Credential logos"
          className="mt-12 animate-rise rounded-[2rem] border border-[hsl(var(--line-strong))] bg-white p-5 shadow-panel [animation-delay:180ms] sm:p-6"
        >
          <div className="grid items-center gap-4 md:grid-cols-3">
            {hero.credentialLogos.map((credential) => (
              <div
                className="flex h-28 items-center justify-center rounded-[1.35rem] border border-[hsl(var(--line))] bg-[hsl(var(--surface))] px-5 shadow-soft sm:h-32"
                key={credential.label}
                title={credential.label}
              >
                <Image
                  alt={credential.alt}
                  className={cn(
                    "w-full object-contain object-center",
                    credential.layout === "wide" ? "max-h-24" : "max-h-28"
                  )}
                  height={credential.layout === "wide" ? 120 : 132}
                  sizes="(min-width: 768px) 30vw, 80vw"
                  src={credential.src}
                  width={credential.layout === "wide" ? 500 : 260}
                />
              </div>
            ))}
          </div>
        </section>

        <aside className="mt-8 animate-rise rounded-[1.7rem] border border-[hsl(var(--line-strong))] bg-white p-5 shadow-soft [animation-delay:220ms]">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[hsl(var(--muted))]">
            {hero.achievement.label}
          </p>
          <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
            {hero.achievement.title}
          </h2>
          <p className="mt-3 max-w-5xl text-sm leading-7 text-[hsl(var(--muted))] sm:text-base">
            {hero.achievement.description}
          </p>
        </aside>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {hero.framework.map((item, index) => (
            <article
              className="rounded-[1.5rem] border border-[hsl(var(--line))] bg-white p-5 shadow-soft"
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
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {hero.signalCards.map((card) => (
            <article
              className="rounded-[1.5rem] border border-[hsl(var(--line))] bg-white/75 p-5 shadow-soft"
              key={card.title}
            >
              <p className="text-sm font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted))]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </header>
  );
}
