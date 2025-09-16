// src/pages/Alumni/Events.jsx
import { useState } from "react";

// Hero image for Alumni > Events
import hero from "../../assets/images/Alumni-Events-01.png";

// Reuse the same three tile images you liked from The Latest page
import img2 from "../../assets/images/Latest-AlumniEvent-02.png";
import img3 from "../../assets/images/Latest-AlumniEvent-03.png";
import img4 from "../../assets/images/Latest-AlumniEvent-04.png";

export default function Events() {
  const [tab, setTab] = useState("all");
  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: "" });

  const open = (src, alt = "") => setLightbox({ open: true, src, alt });
  const close = () => setLightbox({ open: false, src: null, alt: "" });

  return (
    <main className="w-full bg-black">
      {/* ===== HERO ===== */}
      <section className="relative w-full h-[calc(100vh-72px)] overflow-hidden">
        <img
          src={hero}
          alt="Alumni Events - Marefat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 border-[6px] border-white" />

        {/* Title */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-serif text-white tracking-wide leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              ALUMNI EVENTS
            </h1>
            <div className="mt-6 h-[2px] w-40 mx-auto bg-white/80" />
          </div>
        </div>
      </section>

      {/* ===== TABS + EMPTY STATE ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-10 md:py-12">
          {/* Tabs */}
          <div className="flex items-center gap-0 border-b border-gray-200">
            {[
              { id: "all", label: "ALL EVENTS" },
              { id: "regional", label: "REGIONAL EVENTS" },
              { id: "reunions", label: "REUNIONS" },
            ].map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-6 md:px-10 py-3 text-sm tracking-wide uppercase ${
                  tab === t.id
                    ? "bg-neutral-900 text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {t.label}
                {idx < 2 && (
                  <span className="hidden md:inline-block ml-10 h-6 w-px align-middle bg-gray-300" />
                )}
              </button>
            ))}
          </div>

          {/* Content (empty state for now) */}
          <div className="py-10 md:py-12">
            <p className="text-gray-500">
              There are currently no upcoming Alumni Events. Please check back
              soon.
            </p>
          </div>
        </div>
      </section>

      {/* ===== GO FURTHER ===== */}
      <section className="w-full bg-black py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
          <h2 className="font-serif text-white text-3xl md:text-4xl">
            GO FURTHER
          </h2>
          <div className="mt-3 h-[2px] w-28 mx-auto bg-white/70" />
        </div>

        {/* Tiles */}
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Tile
            title="Alumni Association"
            img={img2}
            onClick={() => open(img2, "Alumni Association")}
          />
          <Tile
            title="Directory & Networking"
            img={img3}
            onClick={() => open(img3, "Directory & Networking")}
          />
          <Tile
            title="Alumni Awards"
            img={img4}
            onClick={() => open(img4, "Alumni Awards")}
          />
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightbox.open && (
        <button
          type="button"
          onClick={close}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center px-4"
          aria-label="Close image"
          title="Close"
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[88vh] max-w-[94vw] object-contain"
          />
          <span className="absolute top-4 right-5 text-white text-3xl md:text-4xl">
            ×
          </span>
        </button>
      )}
    </main>
  );
}

/* ---------- Small presentational helper for each tile ---------- */
function Tile({ title, img, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] cursor-pointer overflow-hidden rounded-md"
      title={title}
    >
      <img
        src={img}
        alt={title}
        className="
          absolute inset-0 w-full h-full object-cover object-center
          transform-gpu will-change-transform
          transition-[transform,filter] duration-300 ease-out
          group-hover:scale-[1.05] group-hover:grayscale group-hover:saturate-0
        "
      />
      <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/30" />
      <div className="absolute inset-0 flex items-end p-6">
        <h3 className="font-serif text-white text-2xl md:text-3xl drop-shadow">
          {title}
        </h3>
      </div>
    </div>
  );
}
