// src/pages/About/OurMission.jsx
import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/images/OurMission.png";

export default function OurMission() {
  const schoolName = "MAREFAT INTERNATIONAL SCHOOL";

  // ⬇️ Added two more lines; feel free to tweak wording
  const missionLines = [
    "The Marefat International School challenges",
    "students of adventurous intellect and",
    "diverse backgrounds to think",
    "critically and creatively, and to act",
    "with courage and integrity.",
    "to pursue knowledge with curiosity and joy,",
    "and to contribute responsibly to their communities.",
  ];

  const NAV_H = 72; // update if your navbar height differs

  const driverRef = useRef(null);
  const [vh, setVh] = useState(() => window.innerHeight);
  const heroH = Math.max(200, vh - NAV_H);

  const [progress, setProgress] = useState(0);
  const [revealCount, setRevealCount] = useState(0);
  const [showStatement, setShowStatement] = useState(false);

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!driverRef.current) return;
      const rect = driverRef.current.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const passed = Math.min(
        Math.max(window.innerHeight - rect.top, 0),
        total
      );
      setProgress(total > 0 ? passed / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const BANNER_PHASE = 0.3;
  const bannerT = Math.max(0, Math.min(1, progress / BANNER_PHASE));
  const bannerLiftPx = heroH * 0.7 + NAV_H;
  const bannerOffset = bannerT * bannerLiftPx;

  const STATEMENT_START = 0.34;
  const statementActive = progress >= STATEMENT_START;
  const statementPhase = Math.max(
    0,
    Math.min(1, (progress - STATEMENT_START) / (1 - STATEMENT_START))
  );

  useEffect(() => {
    setShowStatement(statementActive);
    const n = missionLines.length;
    setRevealCount(
      Math.max(0, Math.min(n, Math.floor(statementPhase * (n + 0.0001))))
    );
  }, [statementActive, statementPhase, missionLines.length]);

  const grayscaleOn = bannerT > 0.9 || showStatement;

  return (
    <main className="w-full">
      {/* ===== STICKY HERO ===== */}
      <section className="relative sticky top-[72px] h-[calc(100vh-72px)] overflow-hidden">
        <img
          src={heroImage}
          alt="Our Mission - Marefat International School"
          className={
            "absolute inset-0 w-full h-full object-cover z-0 transition-[filter] duration-700 ease-out " +
            (grayscaleOn ? "grayscale" : "grayscale-0")
          }
        />
        <div
          className={
            "absolute inset-0 z-10 transition-colors duration-700 " +
            (grayscaleOn ? "bg-black/45" : "bg-black/35")
          }
        />
        <div className="pointer-events-none absolute inset-0 z-20 border-[8px] border-black" />

        {/* ===== WHITE STATEMENT (no underline) ===== */}
        <div
          className={
            "absolute inset-0 z-50 flex items-center justify-center px-6 transition-opacity duration-500 " +
            (showStatement ? "opacity-100" : "opacity-0 pointer-events-none")
          }
        >
          <div className="max-w-[1200px] text-center text-white">
            {/* Top ornament */}
            <div className="flex justify-center items-center mb-6">
              <span className="h-[3px] w-28 bg-white/40" />
              <span className="mx-3 w-3 h-3 rotate-45 bg-white/40" />
              <span className="h-[3px] w-28 bg-white/40" />
            </div>

            {/* Lines (underline removed) */}
            <div className="font-serif leading-tight tracking-wide space-y-3">
              {missionLines.map((line, i) => {
                const visible = i < revealCount;
                return (
                  <div
                    key={i}
                    className={
                      "transition-all duration-400 will-change-transform " +
                      (visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3")
                    }
                    style={{
                      transitionDelay: visible ? `${i * 60}ms` : "0ms",
                      fontSize: "clamp(1.2rem, 2.2vw + 1rem, 56px)",
                    }}
                  >
                    {line}
                  </div>
                );
              })}
            </div>

            {/* Bottom ornament */}
            <div className="flex justify-center items-center mt-6">
              <span className="h-[3px] w-28 bg-white/40" />
              <span className="mx-3 w-3 h-3 rotate-45 bg-white/40" />
              <span className="h-[3px] w-28 bg-white/40" />
            </div>
          </div>
        </div>

        {/* ===== RED BANNER (slides up and hides under nav) ===== */}
        <div
          className="absolute left-1/2 top-1/2 z-40 w-full px-4"
          style={{
            transform: `translate(-50%, -50%) translateY(${-bannerOffset}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          <div className="relative mx-auto w-[92%] max-w-[1180px] bg-[#cc2630] text-white text-center px-6 sm:px-8 md:px-12 py-8 md:py-12 shadow-xl outline outline-2 outline-[#b61f26]">
            <div className="absolute top-5 left-0 right-0 flex justify-center items-center">
              <span className="h-[3px] w-24 md:w-28 bg-white/30" />
              <span className="mx-3 w-3 h-3 rotate-45 bg-white/30" />
              <span className="h-[3px] w-24 md:w-28 bg-white/30" />
            </div>

            <h1 className="font-serif leading-tight tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              {schoolName}
            </h1>
            <p className="mt-5 font-serif tracking-widest text-lg sm:text-xl md:text-2xl">
              OUR MISSION
            </p>

            <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center">
              <span className="h-[3px] w-24 md:w-28 bg-white/30" />
              <span className="mx-3 w-3 h-3 rotate-45 bg-white/30" />
              <span className="h-[3px] w-24 md:w-28 bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Driver for scroll-controlled animation length */}
      <section
        ref={driverRef}
        className="bg-white"
        style={{ height: `${missionLines.length * 65}vh` }}
      />
    </main>
  );
}
