import { CheckCircle, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex h-14 items-center px-4">
          <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <img src="/logo.png" alt="HichamClips" className="h-7 w-7 rounded-lg mix-blend-lighten" />
            <span>Hicham<span className="text-primary">Clips</span></span>
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20 md:py-32">

        {/* CONFIRMATION */}
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20">
            <CheckCircle className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">You're in.</h1>
          <p className="mt-4 text-base text-muted-foreground">
            Payment confirmed. One thing left to do.
          </p>
        </div>

        {/* NEXT STEP */}
        <div className="mx-auto mt-12 max-w-sm">
          <div className="rounded-3xl border border-primary/40 bg-card/50 p-8 text-center backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Next step</p>
            <p className="text-base text-muted-foreground mb-8">
              Join the Discord. You'll get a private channel — only you and I can see it. Share your stream and we get to work.
            </p>
            <Button asChild size="lg" className="w-full h-12 rounded-full font-bold text-base shadow-cta">
              <a href="https://discord.gg/NZe7EznF5M" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Join Discord
              </a>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>Private. Only you and Hicham can see it.</span>
            </div>
          </div>
        </div>

        {/* WHAT HAPPENS */}
        <div className="mx-auto mt-10 max-w-sm space-y-3">
          {[
            { n: "1", text: "You join and get a private channel" },
            { n: "2", text: "Share your stream or VOD" },
            { n: "3", text: "Get your clip in 24-48 hours" },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
                {s.n}
              </div>
              <span className="text-sm">{s.text}</span>
            </div>
          ))}
        </div>

        {/* BACK */}
        <div className="mt-12 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to HichamClips
          </a>
        </div>

      </main>

      <footer className="border-t border-border py-8">
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

export default ThankYou;
