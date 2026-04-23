import { ArrowRight, MessageCircle, Mail, Send, Scissors, Zap, Star, Clock, CheckCircle } from "lucide-react";
import ClipCard from "@/components/ClipCard";
import { Button } from "@/components/ui/button";
import CreatorsSection from "@/components/CreatorsSection";
import { useState } from "react";
import { toast } from "sonner";

const clips = [
  {
    thumbnail: "/src/assets/dlou-thumb.png",
    title: "Epic D-LOU Gameplay",
    metric: "Viral",
    metricLabel: "D-LOU",
    videoUrl: "/videos/d-lou-clip.mp4"
  },
  {
    thumbnail: "https://img.youtube.com/vi/NrfE6ThDXJk/maxresdefault.jpg",
    title: "The shark was actually there",
    metric: "301K",
    metricLabel: "HitboTC",
    videoUrl: "https://www.youtube.com/shorts/NrfE6ThDXJk"
  },
  {
    thumbnail: "https://img.youtube.com/vi/vGOeYQfi8SM/maxresdefault.jpg",
    title: "Perfect timing / Clutch",
    metric: "288K",
    metricLabel: "Perf",
    videoUrl: "https://www.youtube.com/shorts/vGOeYQfi8SM"
  },
  {
    thumbnail: "https://img.youtube.com/vi/wx_PBL1Uy4U/maxresdefault.jpg",
    title: "Best gaming setup highlights",
    metric: "171K",
    metricLabel: "Mylien",
    videoUrl: "https://www.youtube.com/shorts/wx_PBL1Uy4U"
  }
];

const plans = [
  {
    id: "test-clip",
    title: "1 Test Clip",
    price: "$15",
    desc: "One fully-edited clip. Perfect if you want to judge the quality before committing.",
    cta: "Order Now",
    popular: false,
    paypal: "https://www.paypal.com/ncp/payment/98LUGPDDM555A"
  },
  {
    id: "pack-10",
    title: "Pack of 10",
    price: "$150",
    desc: "10 clips from your VODs. Enough volume to find what hits and build momentum.",
    cta: "Buy Pack",
    popular: true,
    paypal: "https://www.paypal.com/ncp/payment/PE8QR3RFQXY5Q"
  },
  {
    id: "monthly",
    title: "Monthly Plan",
    price: "$300",
    desc: "Consistent weekly output. Built to actually grow your channel month over month.",
    cta: "Get Started",
    popular: false,
    paypal: "https://www.paypal.com/ncp/payment/DJDET5A6ETN4A"
  }
];

const howItWorks = [
  { icon: CheckCircle, title: "Pick a plan & pay", desc: "Choose the package that fits your schedule. Quick checkout via PayPal." },
  { icon: MessageCircle, title: "Tell us your vision", desc: "Join Discord and share your content style, goals, or any specific moments you want. Optional — we can work it out ourselves." },
  { icon: Clock, title: "We do the work", desc: "We go through your latest streams, find the best moments, and edit them into high-retention clips. No effort needed from you." },
  { icon: Zap, title: "Review & post", desc: "Clips delivered in Discord within 48h. Request tweaks if needed, then post and grow." },
];

const Index = () => {
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlanClick = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setTimeout(() => {
      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPlan) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://n8n.srv1269197.hstgr.cloud/webhook/fbe4752e-87c4-4317-88a9-3ec4cdb035fb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          plan: selectedPlan.title,
          price: selectedPlan.price,
          source: "HichamClips Portfolio",
          timestamp: new Date().toISOString(),
        }),
      });
      window.location.href = selectedPlan.paypal;
    } catch {
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-glow">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Scissors className="h-5 w-5" />
            </div>
            <span>Hicham<span className="text-primary">Clips</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it works</a>
            <a href="#offers" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild size="sm" className="rounded-full shadow-cta transition-transform hover:scale-105">
            <a href="#offers">Get Started</a>
          </Button>
        </nav>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="container mx-auto px-4 py-16 text-center md:py-24">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            <span>Now booking {currentMonth} creators</span>
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            Turn your long-form streams into <span className="text-primary">premium shorts</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            High-retention video editing for streamers & creators. We repurpose your VODs into viral TikToks, Reels, and Shorts so you can focus on the stream.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full px-8 text-lg font-bold shadow-cta transition-transform hover:scale-105">
              <a href="#offers">See Pricing <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button variant="outline" size="lg" className="h-14 rounded-full px-8 text-lg font-bold transition-transform hover:scale-105" asChild>
              <a href="#examples">View Portfolio</a>
            </Button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <div className="flex items-center gap-2"><Star className="h-5 w-5 fill-primary text-primary" /> <span className="font-bold">Top-Rated Editor</span></div>
            <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary" /> <span className="font-bold">48h Delivery</span></div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="examples" className="container mx-auto px-4 py-20">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Real results</p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Portfolio Showcase</h2>
            </div>
            <Button variant="ghost" className="group text-primary hover:text-primary hover:bg-primary/10" asChild>
              <a href="https://www.youtube.com/@HichamClips" target="_blank" rel="noopener noreferrer">
                See more on YouTube <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clips.map((clip, index) => (
              <ClipCard key={index} {...clip} />
            ))}
          </div>
        </section>

        {/* TRUSTED CREATORS */}
        <CreatorsSection />

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="container mx-auto px-4 py-24">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Simple process</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">How it works</h2>
            <p className="mt-4 text-muted-foreground">From zero to viral clips in 4 steps.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex flex-col gap-4 rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-3xl font-bold text-primary/20">0{i + 1}</span>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MEET THE EDITOR */}
        <section className="container mx-auto px-4 py-24">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Behind the edits</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Meet the Editor</h2>
          </div>
          <div className="mx-auto max-w-4xl flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            <div className="shrink-0">
              <img
                src="/editor-image.png"
                alt="Hicham — Video Editor"
                className="h-64 w-64 rounded-3xl object-cover shadow-xl ring-2 ring-primary/20"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-bold">Hicham</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">Video Editor & Clip Specialist</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I've been editing content for streamers and creators for years — cutting VODs into the kind of shorts that actually stop the scroll. I know what hooks people, what pacing keeps them watching, and how to make every second count.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Every clip I deliver is crafted by hand — no templates, no shortcuts. Just clean, high-retention edits built to grow your channel.
              </p>
              <Button asChild className="mt-8 rounded-full px-8 shadow-cta">
                <a href="#offers">Work With Me</a>
              </Button>
            </div>
          </div>
        </section>

        {/* OFFERS */}
        <section id="offers" className="container mx-auto px-4 py-24">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Pick your plan</h2>
            <p className="mt-4 text-muted-foreground">Choose below — you'll fill your details and pay in the next step.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border ${
                  selectedPlan?.id === plan.id
                    ? 'border-primary ring-2 ring-primary'
                    : plan.popular
                    ? 'border-primary ring-1 ring-primary'
                    : 'border-border'
                } bg-card/50 p-8 backdrop-blur shadow-card-dark transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.id === 'monthly' ? '/mo' : ''}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex-1">{plan.desc}</p>
                <Button
                  className={`mt-8 rounded-full h-12 font-bold ${plan.popular ? 'bg-primary shadow-cta' : 'bg-secondary'}`}
                  onClick={() => handlePlanClick(plan)}
                >
                  {selectedPlan?.id === plan.id ? '✓ Selected' : plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* ORDER FORM */}
        <section id="order-form" className="container mx-auto px-4 pb-24">
          <div className={`mx-auto max-w-xl transition-all duration-300 ${selectedPlan ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <div className="rounded-3xl border border-border bg-card/50 p-8 backdrop-blur shadow-xl">
              {selectedPlan ? (
                <div className="mb-6 flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 px-4 py-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Selected plan</p>
                    <p className="font-bold">{selectedPlan.title} — {selectedPlan.price}</p>
                  </div>
                  <button onClick={() => setSelectedPlan(null)} className="text-xs text-muted-foreground underline hover:text-foreground">
                    Change
                  </button>
                </div>
              ) : (
                <div className="mb-6 rounded-xl border border-border bg-card/30 px-4 py-3 text-center text-sm text-muted-foreground">
                  Select a plan above to unlock this form
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-60">Your Name</label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-60">Social Handle</label>
                    <input
                      name="handle"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                      placeholder="@yourchannel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-60">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !selectedPlan}
                  className="w-full rounded-xl h-14 text-lg font-bold shadow-cta transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Zap className="h-5 w-5 animate-pulse" /> Redirecting to PayPal...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" /> Continue to Payment
                    </span>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  You'll be redirected to PayPal to complete payment securely.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border bg-card/30 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Have questions first?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Not ready to buy yet? Reach out and I'll answer anything.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hichamediting00@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium hover:border-primary/60 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" /> hichamediting00@gmail.com
              </a>
              <a
                href="https://discord.gg/NZe7EznF5M"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium hover:border-primary/60 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> Discord
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-bold tracking-tight mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Scissors className="h-5 w-5" />
            </div>
            <span>Hicham<span className="text-primary">Clips</span></span>
          </div>
          <p className="text-muted-foreground">© {new Date().getFullYear()} HichamClips. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
