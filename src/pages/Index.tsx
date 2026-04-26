import { ArrowRight, Mail, CheckCircle, Pause, Shield, Clock, LayoutGrid, Star, Zap, Lock } from "lucide-react";
import ClipCard from "@/components/ClipCard";
import { Button } from "@/components/ui/button";
import TestimonialsSection from "@/components/TestimonialsSection";
import PayPalButton from "@/components/PayPalButton";
import { toast } from "sonner";

const clips = [
  {
    thumbnail: "https://img.youtube.com/vi/NrfE6ThDXJk/maxresdefault.jpg",
    title: "HitboTC",
    metric: "301K",
    metricLabel: "HitboTC",
    videoUrl: "https://www.youtube.com/shorts/NrfE6ThDXJk"
  },
  {
    thumbnail: "https://img.youtube.com/vi/vGOeYQfi8SM/maxresdefault.jpg",
    title: "Perf",
    metric: "288K",
    metricLabel: "Perf",
    videoUrl: "https://www.youtube.com/shorts/vGOeYQfi8SM"
  },
  {
    thumbnail: "https://img.youtube.com/vi/wx_PBL1Uy4U/maxresdefault.jpg",
    title: "Mylien",
    metric: "171K",
    metricLabel: "Mylien",
    videoUrl: "https://www.youtube.com/shorts/wx_PBL1Uy4U"
  },
  {
    thumbnail: "/dlou-thumb.png",
    title: "D-LOU",
    metric: "Viral",
    metricLabel: "D-LOU",
    videoUrl: "/videos/d-lou-clip.mp4"
  },
];

const benefits = [
  { icon: LayoutGrid, title: "Private Discord workspace" },
  { icon: Shield, title: "Fixed monthly price" },
  { icon: Clock, title: "24-48h delivery" },
  { icon: Zap, title: "High-retention clips" },
  { icon: Pause, title: "Pause anytime" },
  { icon: Star, title: "Made for your content" },
];

const faqs = [
  { q: "How long until I get my clips?", a: "Within 48 hours on average." },
  { q: "Do I need to send you anything?", a: "No. We go through your streams and find the best moments. Share timestamps if you want." },
  { q: "What if I don't like the edit?", a: "Tell us and we'll fix it. We adapt to your style." },
  { q: "Which platforms do you edit for?", a: "TikTok, YouTube Shorts, Instagram Reels." },
  { q: "Can I pause my subscription?", a: "Yes. Pause anytime, no questions asked." },
  { q: "What happens after I pay?", a: "You get a private Discord channel. Share your stream, we get to work." },
  { q: "Is my membership private?", a: "Completely. Only you and I have access to your channel. Nobody else can see you joined or anything we discuss." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex h-14 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <img src="/logo.png" alt="HichamClips" className="h-7 w-7 rounded-lg mix-blend-lighten" />
            <span>Hicham<span className="text-primary">Clips</span></span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </div>
          <Button size="sm" className="rounded-full px-5 text-sm font-bold shadow-cta" asChild>
            <a href="#pricing">Get started</a>
          </Button>
        </nav>
      </header>

      <main className="pt-14">

        {/* 1. HERO */}
        <section className="container mx-auto px-4 py-16 text-center md:py-24">
          <p className="mb-4 text-xs font-semibold text-muted-foreground tracking-widest uppercase">
            Simple editing subscription for creators
          </p>
          <h1 className="mx-auto max-w-2xl font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Short-form clips<br />for streamers
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg">
            Consistent clips delivered every 24-48 hours
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto h-12 rounded-full px-8 text-base font-bold shadow-cta">
              <a href="#pricing">Start today <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 rounded-full px-8 text-base font-bold" asChild>
              <a href="https://discord.gg/NZe7EznF5M" target="_blank" rel="noopener noreferrer">Join HichamClips</a>
            </Button>
          </div>
          <div className="mt-4">
            <a href="#pricing" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">
              See pricing
            </a>
          </div>
        </section>

        {/* 2. SOCIAL PROOF - clips only here */}
        <section id="work" className="border-t border-border bg-card/20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {clips.map((clip, i) => (
                <ClipCard key={i} {...clip} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section id="how-it-works" className="container mx-auto px-4 py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              The way content should've been done
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-3">
            {[
              { n: "1", title: "Subscribe", desc: "Subscribe to a plan and start." },
              { n: "2", title: "Send content", desc: "Share your stream or VOD." },
              { n: "3", title: "Receive clips", desc: "Get your clip in 24-48 hours." },
            ].map((step) => (
              <div key={step.n} className="flex items-center gap-6 rounded-2xl border border-border bg-card/40 px-7 py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  {step.n}
                </div>
                <div>
                  <span className="font-bold">{step.title}</span>
                  <span className="ml-3 text-sm text-muted-foreground">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. BENEFITS */}
        <section id="benefits" className="border-t border-border bg-card/20 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-display text-3xl font-bold sm:text-5xl">
                Better than freelancers.<br />Simpler than agencies.
              </h2>
            </div>
            <div className="mx-auto max-w-3xl grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <b.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">{b.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <div id="feedback"><TestimonialsSection /></div>

        {/* 7. PRICING */}
        <section id="pricing" className="border-t border-border bg-card/20 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-display text-3xl font-bold sm:text-5xl">
                One subscription. Consistent clips.
              </h2>
            </div>
            <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">

              {/* $150 Plan */}
              <div className="rounded-3xl border border-border bg-card/50 p-8 backdrop-blur shadow-card-dark flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Starter Plan</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$150</span>
                  <span className="text-muted-foreground text-sm">/ month</span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {[
                    "One active request at a time",
                    "48-72h delivery",
                    "Unlimited requests",
                    "Pause anytime",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PayPalButton
                    planId="P-2B857842VL922020CNHXHFPY"
                    planName="Starter Short-form Editing Plan"
                    amount="$150/month"
                  />
                </div>
              </div>

              {/* $300 Plan */}
              <div className="rounded-3xl border border-primary ring-1 ring-primary bg-card/50 p-8 backdrop-blur shadow-card-dark flex flex-col relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground whitespace-nowrap">
                  Most Popular
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pro Plan</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$300</span>
                  <span className="text-muted-foreground text-sm">/ month</span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {[
                    "One active request at a time",
                    "24-48h delivery",
                    "Unlimited requests",
                    "Pause anytime",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PayPalButton
                    planId="P-4HA70235CK889102BNHXGEKQ"
                    planName="Monthly Short-form Editing Plan"
                    amount="$300/month"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 className="font-display text-3xl font-bold sm:text-5xl">FAQ</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-2xl border border-border bg-card/40 p-5 cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-sm list-none">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA + CONTACT */}
        <section id="contact" className="border-t border-border bg-card/30 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mx-auto max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl">
              Start posting consistently<br />without editing yourself
            </h2>
            <div className="mt-8">
              <Button asChild size="lg" className="h-12 rounded-full px-10 text-base font-bold shadow-cta">
                <a href="#pricing">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://discord.gg/NZe7EznF5M"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-primary/60 transition-colors"
              >
                <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Message on Discord
              </a>
              <button
                onClick={() => { navigator.clipboard.writeText('hichamediting00@gmail.com'); toast.success('Email copied!'); }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-primary/60 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" /> hichamediting00@gmail.com
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>Your channel is private. Only you and Hicham can see it. No one else.</span>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-lg font-bold tracking-tight mb-3">
            <img src="/logo.png" alt="HichamClips" className="h-7 w-7 rounded-lg mix-blend-lighten" />
            <span>Hicham<span className="text-primary">Clips</span></span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} HichamClips. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
