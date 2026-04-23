import { CheckCircle, MessageCircle, Send, Scissors, ArrowRight, Clock, FileVideo, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Join the Discord",
    desc: "Click the button below to join our private client server. This is where we'll talk and deliver your clips.",
  },
  {
    icon: FileVideo,
    step: "02",
    title: "Tell us your vision",
    desc: "Let us know your content style, what kind of clips you want, and any specific moments or timestamps you have in mind. Optional — we can figure it out ourselves too.",
  },
  {
    icon: Clock,
    step: "03",
    title: "We handle everything",
    desc: "We go through your latest streams, find the best moments worth clipping, edit them, and deliver them directly to you in Discord within 48h.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Review & post",
    desc: "You review the clips. Request changes if anything needs tweaking, then post and watch the views roll in.",
  },
];

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex h-16 items-center px-4">
          <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Scissors className="h-5 w-5" />
            </div>
            <span>Hicham<span className="text-primary">Clips</span></span>
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Payment confirmed!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Welcome to HichamClips. Here's exactly what happens next — read this so we can get started fast.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-10 text-center font-display text-2xl font-bold">Your next steps</h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Step {s.step}</p>
                  <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-xl rounded-3xl border border-primary/30 bg-primary/5 p-10 text-center">
          <h2 className="font-display text-2xl font-bold">Ready? Join the Discord now</h2>
          <p className="mt-3 text-muted-foreground">
            This is where you'll send your VODs, get your clips, and chat directly with me.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 w-full rounded-full text-lg font-bold shadow-cta">
            <a href="https://discord.gg/NZe7EznF5M" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Join Discord
            </a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            Already on Discord? Search for <span className="font-bold text-foreground">hicham_joui</span> and send a DM.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold">Quick answers</h2>
          <div className="space-y-4">
            {[
              {
                q: "How long until I get my clips?",
                a: "Within 48 hours. For Pack of 10, clips are delivered in batches so you can start posting while we keep working."
              },
              {
                q: "What if I don't like the edit?",
                a: "The first few clips are all about understanding your vision and style. If something's off, just tell me — we'll tweak it until it feels right. With time we fully adapt to what works on your channel."
              },
              {
                q: "Do I need to send anything?",
                a: "Not necessarily. We go through your latest streams ourselves and pick the best moments. But if you have specific timestamps or moments in mind, share them and we'll prioritize those."
              },
              {
                q: "Can I give feedback on the style?",
                a: "Absolutely — that's the most important part early on. Tell us your vibe, what you like, what you don't. The goal is to match your vision perfectly over time."
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/30 p-6">
                <h3 className="font-bold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to site */}
        <div className="mt-16 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to HichamClips
          </a>
        </div>
      </main>

      <footer className="mt-16 border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Send className="h-4 w-4" />
          <span>Questions? Email <strong>hichamediting00@gmail.com</strong></span>
        </div>
        <p>© {new Date().getFullYear()} HichamClips. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ThankYou;
