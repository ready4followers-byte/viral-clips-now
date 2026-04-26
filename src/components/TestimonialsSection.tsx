import { useEffect, useRef, useState } from "react";

const testimonials = [
  { img: "/t1.png", alt: "chikenau" },
  { img: "/t2.png", alt: "SnowyFPS" },
  { img: "/t3.png", alt: "PERF" },
  { img: "/t4.png", alt: "Sacred" },
  { img: "/t5.png", alt: "HitboTC" },
];

const total = testimonials.length;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (i: number) => {
    setCurrent((i + total) % total);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => goTo(current + 1), 5000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current]);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Real feedback</p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">What creators say</h2>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-visible">
          {/* 3D stage */}
          <div className="relative flex items-center justify-center h-[220px] sm:h-[320px] md:h-[380px]">
            {testimonials.map((t, i) => {
              const offset = ((i - current + total) % total);
              const pos = offset > total / 2 ? offset - total : offset;

              let transform = "";
              let opacity = 0;
              let zIndex = 0;
              let scale = 1;

              if (pos === 0) {
                transform = "translateX(0) scale(1)";
                opacity = 1;
                zIndex = 10;
                scale = 1;
              } else if (pos === -1 || pos === total - 1) {
                transform = "translateX(-62%) scale(0.78)";
                opacity = 0.3;
                zIndex = 5;
              } else if (pos === 1 || pos === -(total - 1)) {
                transform = "translateX(62%) scale(0.78)";
                opacity = 0.3;
                zIndex = 5;
              } else {
                opacity = 0;
                zIndex = 0;
                transform = pos < 0 ? "translateX(-120%) scale(0.6)" : "translateX(120%) scale(0.6)";
              }

              return (
                <div
                  key={i}
                  onClick={() => pos !== 0 && goTo(i)}
                  style={{
                    position: "absolute",
                    width: "clamp(260px, 46%, 480px)",
                    transform,
                    opacity,
                    zIndex,
                    transition: "all 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: pos !== 0 ? "pointer" : "default",
                  }}
                >
                  <img
                    src={t.img}
                    alt={t.alt}
                    className={`w-full rounded-2xl object-contain shadow-xl border ${pos === 0 ? "border-primary/40 ring-1 ring-primary/20" : "border-border"}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
