import { ArrowRight, MessageCircle, Mail, Send, Scissors, Zap, Rocket } from "lucide-react";
import ClipCard from "@/components/ClipCard";
import { Button } from "@/components/ui/button";
import clip1 from "@/assets/clip-1.jpg";
import clip2 from "@/assets/clip-2.jpg";
import clip3 from "@/assets/clip-3.jpg";

const clips = [
  { thumbnail: clip1, title: "Insane 1v5 clutch", metric: "320K", metricLabel: "views" },
  { thumbnail: clip2, title: "He didn't see this coming", metric: "120K", metricLabel: "views" },
  { thumbnail: clip3, title: "Funniest reaction of the week", metric: "+3K", metricLabel: "followers" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Scissors className="h-4 w-4" />
          </span>
          ClipLab
        </a>
        <a href="#offer">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </a>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-10 text-center sm:pt-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Now booking April creators
          </div>
          <h1 className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            We turn your streams into{" "}
            <span className="text-primary">viral short videos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            More views, more followers, more clips that actually perform.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <a href="#offer">
              <Button
                size="lg"
                className="group h-14 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-cta hover:bg-primary/90"
              >
                Get Your First Clip
                <ArrowRight className="ml-1 h-5 w-5 transition group-hover:translate-x-0.5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">Used by streamers & creators</p>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Real results
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Clips that actually go off
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A few recent edits and what they pulled in.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {clips.map((c) => (
            <ClipCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h2 className="mb-10 font-display text-3xl font-bold sm:text-4xl">What you get</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Scissors,
                title: "High-retention editing",
                desc: "Fast cuts, sharp captions, hooks in the first 2 seconds.",
              },
              {
                icon: Rocket,
                title: "Ready-to-post clips",
                desc: "Formatted for TikTok, Reels and YouTube Shorts.",
              },
              {
                icon: Zap,
                title: "Fast delivery",
                desc: "Most clips back in 24–48h, no chasing required.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card-dark"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <h2 className="mb-10 font-display text-3xl font-bold sm:text-4xl">How it works</h2>
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            { n: "01", t: "Send your content", d: "Drop your VODs, streams or raw footage." },
            { n: "02", t: "We edit clips that keep attention", d: "Hooks, captions, pacing, sound design." },
            { n: "03", t: "You post and grow", d: "Upload daily. Watch the numbers move." },
          ].map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-card p-6 shadow-card-dark"
            >
              <div className="mb-3 font-display text-3xl font-bold text-primary">{s.n}</div>
              <h3 className="mb-1 font-display text-lg font-semibold">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* OFFER */}
      <section id="offer" className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Simple offer</h2>
            <p className="mt-3 text-muted-foreground">Start small. Scale when it works.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-dark">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Try it
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold">1 paid test clip</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                One fully-edited clip so you can judge the quality.
              </p>
              <a href="#contact" className="mt-6">
                <Button variant="outline" className="w-full border-border bg-transparent hover:bg-secondary">
                  Start the test
                </Button>
              </a>
            </div>

            <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-7 shadow-cta">
              <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pack</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Pack of 10 clips</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enough volume to test what hits and what doesn't.
              </p>
              <a href="#contact" className="mt-6">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get the pack
                </Button>
              </a>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-dark">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Scale
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold">Monthly plan</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Steady weekly output. Built to actually grow your account.
              </p>
              <a href="#contact" className="mt-6">
                <Button variant="outline" className="w-full border-border bg-transparent hover:bg-secondary">
                  Talk to us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
          <h2 className="font-display text-balance text-4xl font-bold sm:text-5xl">
            Ready to grow your content?
          </h2>
          <a href="#" className="mt-8 inline-block">
            <Button
              size="lg"
              className="h-14 rounded-xl bg-primary px-10 text-base font-semibold text-primary-foreground shadow-cta hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-primary/60"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Discord
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-primary/60"
            >
              <Send className="h-4 w-4 text-primary" />
              WhatsApp
            </a>
            <a
              href="mailto:hello@cliplab.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-primary/60"
            >
              <Mail className="h-4 w-4 text-primary" />
              Email
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ClipLab. Edits that perform.</p>
          <p>Built for streamers & creators.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
