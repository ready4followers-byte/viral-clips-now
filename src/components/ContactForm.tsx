import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

// Google Apps Script Web App URL (ends with /exec). Set after deploying the script.
const ENDPOINT = "https://script.google.com/macros/s/AKfycbxjLj2cmJFwDg_mwhJjEqdIh5l_Fgn6VOWEVWYmxUMinfJluhLHW4N8Tux8Z3ovoLmXgA/exec";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", channel: "", format: "Both", message: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Name and email are required.");
      return;
    }
    setSending(true);
    try {
      // text/plain body = no CORS preflight (Apps Script friendly)
      await fetch(ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ ...form, source: "hichamclips.com" }),
      });
      setDone(true);
      toast.success("Sent! We'll reach out soon.");
      setForm({ name: "", email: "", channel: "", format: "Both", message: "" });
    } catch {
      toast.error("Something went wrong. DM us on Discord instead.");
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-primary/40 bg-card/50 p-8 text-center backdrop-blur">
        <CheckCircle className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 font-display text-2xl font-bold">Thanks — we got it.</h3>
        <p className="mt-2 text-sm text-muted-foreground">We'll get back to you shortly. Check your email or Discord.</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground";

  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-3 rounded-3xl border border-border bg-card/40 p-6 backdrop-blur text-left sm:p-8">
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={inputCls} placeholder="Your name *" value={form.name} onChange={set("name")} />
        <input className={inputCls} type="email" placeholder="Email *" value={form.email} onChange={set("email")} />
      </div>
      <input className={inputCls} placeholder="Twitch / YouTube channel" value={form.channel} onChange={set("channel")} />
      <select className={inputCls} value={form.format} onChange={set("format")}>
        <option value="Both">What do you need? — Both</option>
        <option value="Long-form">Long-form (full YouTube videos)</option>
        <option value="Short-form">Short-form (shorts / reels / tiktoks)</option>
      </select>
      <textarea className={inputCls} rows={3} placeholder="Tell us about your streams (optional)" value={form.message} onChange={set("message")} />
      <button
        type="submit"
        disabled={sending}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-cta transition hover:opacity-90 disabled:opacity-60"
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {sending ? "Sending..." : "Get started"}
      </button>
      <p className="text-center text-xs text-muted-foreground">We reply within 24h. No spam, ever.</p>
    </form>
  );
};

export default ContactForm;
