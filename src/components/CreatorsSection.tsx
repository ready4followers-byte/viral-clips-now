const creators = [
  {
    name: "AlarmingAmber",
    handle: "@alarmingamber",
    image: "/creators/01_AlarmingAmber_TikTok.jpg",
    platform: "TikTok",
    metric: "1M Followers",
    url: "https://www.tiktok.com/@alarmingamber"
  },
  {
    name: "PERF",
    handle: "@PERF88",
    image: "/creators/02_PERF_YouTube.jpg",
    platform: "YouTube",
    metric: "Shorts Creator",
    url: "https://www.youtube.com/@PERF88/shorts"
  },
  {
    name: "HitboTC",
    handle: "@HitboTC",
    image: "/creators/03_HitboTC_YouTube.jpg",
    platform: "YouTube",
    metric: "Variety Streamer",
    url: "https://www.youtube.com/@HitboTC/shorts"
  },
  {
    name: "Myelin Games",
    handle: "@MyelinGames",
    image: "/creators/04_MyelinGames_YouTube.jpg",
    platform: "YouTube",
    metric: "Aussie Creator",
    url: "https://www.youtube.com/@MyelinGames/featured"
  },
  {
    name: "sacred_toao",
    handle: "sacred_toao",
    image: "/creators/05_sacred_toao_Twitch.png",
    platform: "Twitch",
    metric: "Live Everyday",
    url: "https://www.twitch.tv/sacred_toao/"
  },
  {
    name: "GirlyBella",
    handle: "girlybella",
    image: "/creators/06_GirlyBella_Twitch.png",
    platform: "Twitch",
    metric: "Pro Player",
    url: "https://www.twitch.tv/girlybella"
  },
  {
    name: "SnowyFPS",
    handle: "snowyfps",
    image: "/creators/07_SnowyFPS_Twitch.png",
    platform: "Twitch",
    metric: "FPS Pro",
    url: "https://www.twitch.tv/snowyfps"
  },
  {
    name: "ChikenAU",
    handle: "chikenau",
    image: "/creators/08_ChikenAU_Twitch.png",
    platform: "Twitch",
    metric: "FPS Wizard",
    url: "https://www.twitch.tv/chikenau"
  }
];

const CreatorsSection = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-card/30">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Trusted by</p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Top Creators Trust HichamClips</h2>
      </div>
      
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...creators, ...creators].map((creator, i) => (
              <a
                key={i}
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-6 flex items-center gap-4 rounded-full border border-border bg-card/50 px-6 py-3 shadow-sm backdrop-blur transition hover:border-primary/50 hover:bg-card/80 hover:scale-105 active:scale-95"
              >
                <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">{creator.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight mt-1">{creator.metric}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
};

export default CreatorsSection;
