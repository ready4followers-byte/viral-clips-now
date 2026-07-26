const creators = [
  { name: "HitboTC", followers: "384K", img: "/creators/hitbotc.png", link: "https://www.twitch.tv/hitbotc" },
  { name: "MyelinGames", followers: "283K", img: "/creators/myelingames.png", link: "https://www.youtube.com/@MyelinGames" },
  { name: "AlarmingAmber", followers: "131K", img: "/creators/alarmingamber.png", link: "https://www.twitch.tv/alarmingamber" },
  { name: "GirlyBella", followers: "106K", img: "/creators/girlybella.png", link: "https://www.twitch.tv/girlybella" },
  { name: "sacred_toao", followers: "96K", img: "/creators/sacred_toao.png", link: "https://www.twitch.tv/sacred_toao" },
  { name: "PERF", followers: "28K", img: "/creators/perf.png", link: "https://www.youtube.com/@PERF88" },
  { name: "SnowyFPS", followers: "25K", img: "/creators/snowyfps.png", link: "https://www.twitch.tv/SnowyFPS" },
  { name: "Yarkoe", followers: "14.6K", img: "/creators/yarkoe.jpg", link: "https://www.twitch.tv/yarkoe" },
];

const CreatorCard = ({ c }: { c: (typeof creators)[number] }) => (
  <a
    href={c.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex w-[160px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-6 transition hover:-translate-y-1 hover:border-primary/60 hover:bg-card/70 hover:shadow-cta"
  >
    <div className="relative">
      <div className="absolute -inset-1 rounded-full bg-primary/20 opacity-0 blur-md transition group-hover:opacity-100" />
      <img
        src={c.img}
        alt={c.name}
        loading="lazy"
        className="relative h-16 w-16 rounded-full object-cover ring-2 ring-primary/40 transition group-hover:ring-primary"
      />
    </div>
    <div className="text-center">
      <p className="text-sm font-bold leading-tight">{c.name}</p>
      <p className="mt-0.5 text-xs font-semibold text-primary">{c.followers}</p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">followers</p>
    </div>
  </a>
);

const CreatorsMarquee = () => {
  return (
    <section className="border-t border-border bg-background py-12 md:py-16">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Creators we edit for
        </p>
      </div>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0 gap-4 pr-4">
            {[...creators, ...creators].map((c, i) => (
              <CreatorCard key={i} c={c} />
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
            {[...creators, ...creators].map((c, i) => (
              <CreatorCard key={i} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsMarquee;
