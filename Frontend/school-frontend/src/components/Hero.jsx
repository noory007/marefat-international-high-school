// src/components/Hero.jsx
import { useEffect, useState } from "react";

// Footer (placed at the very bottom of this page)
import Footer from "./Footer";

// === images used for the sections that come AFTER your current block ===
import mainHero from "../assets/images/Main-02.png"; // right-side image (big)
import lowerImg from "../assets/images/Main-03.png"; // Lower School
import middleImg from "../assets/images/Main-04.png"; // Middle School
import upperImg from "../assets/images/Main-05.png"; // Upper School
import bigNews from "../assets/images/Main-06.png"; // large news post
import smallNews1 from "../assets/images/Main-07.png"; // small post 1
import smallNews2 from "../assets/images/Main-08.png"; // small post 2

const messages = [
  "We believe in the power of every young mind.",
  "We believe Marefat learning lasts a lifetime.",
  "We believe in shaping a world for the greater good.",
  "We believe academic excellence is the first step.",
  "We believe character is the heart of true success.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* =========================================================
          YOUR ORIGINAL BLOCK — UNCHANGED
          ========================================================= */}
      <section className="bg-red-700 py-8 md:py-12 px-4">
        {/* White window with white border holding video and text */}
        <div className="max-w-8xl mx-auto border-8 border-white bg-white flex flex-col md:flex-row overflow-hidden">
          {/* Video: roughly 3/4 of the width on larger screens */}
          <div className="w-full md:w-3/4">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source
                src="/src/assets/videos/Marefat-International-High-School.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Text: roughly 1/4 of the width */}
          <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
            <p className="text-4xl md:text-5xl font-serif leading-snug text-gray-900 text-center transition-opacity duration-500 ease-in-out">
              <span className="text-red-700 font-semibold">
                {messages[index].split(" ")[0] +
                  " " +
                  messages[index].split(" ")[1]}
              </span>
              {" " + messages[index].split(" ").slice(2).join(" ")}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 1 — Split layout: text left, image right (Main-02.png)
          ========================================================= */}
      <section className="relative w-full min-h-[76vh] lg:min-h-[84vh] bg-black text-white">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: copy */}
          <div className="relative px-6 sm:px-10 py-10 sm:py-14 lg:py-20 flex items-center bg-black">
            <div className="max-w-[680px]">
              <h1 className="font-serif text-[36px] leading-tight sm:text-[44px] lg:text-[54px]">
                A School for the
                <br />
                Intellectually
                <br />
                Adventurous
              </h1>

              <div className="mt-6 h-[3px] w-56 bg-red-600" />

              <p className="mt-6 text-[15px] sm:text-[16px] leading-7 text-gray-200">
                We believe academically curious, socially engaged girls are our
                best hope for the future. We celebrate and cultivate that power,
                enabling our students to grow into their authentic selves and
                lead lives of purpose.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-sm tracking-wide hover:bg-gray-100 transition"
                >
                  ABOUT MAREFAT <span>›</span>
                </a>
                <a
                  href="/about/mission"
                  className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-sm tracking-wide hover:bg-gray-100 transition"
                >
                  OUR MISSION <span>›</span>
                </a>
                <a
                  href="/about#vision"
                  className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-sm tracking-wide hover:bg-gray-100 transition"
                >
                  STRATEGIC VISION <span>›</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[360px] lg:min-h-[84vh]">
            <img
              src={mainHero}
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — An Education to Last a Lifetime (Main-03/04/05)
          ========================================================= */}
      <section className="relative w-full bg-white">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-0">
          {/* Left: three tall tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <SchoolTile
              img={lowerImg}
              title="Creating the foundation in"
              link="Lower School"
              href="/experience/academics/lower-school"
            />
            <SchoolTile
              img={middleImg}
              title="Forging your own path in"
              link="Middle School"
              href="/experience/academics/middle-school"
            />
            <SchoolTile
              img={upperImg}
              title="Becoming your best self in"
              link="Upper School"
              href="/experience/academics/upper-school"
            />
          </div>

          {/* Right: text block */}
          <div className="px-6 sm:px-10 py-12 lg:py-16 flex items-center">
            <div>
              <h2 className="font-serif text-[38px] leading-[1.1] sm:text-[44px] lg:text-[52px] text-gray-900">
                An Education to Last
                <br />a Lifetime
              </h2>
              <div className="mt-5 h-[2px] w-36 bg-red-600" />
              <p className="mt-6 text-[16px] leading-7 text-gray-700">
                At Marefat, our students learn to challenge assumptions,
                collaborate with others and think for themselves. From
                Kindergarten through Class XII, they relish exploring the wealth
                of information available to them and rejoice in this life of the
                mind. Our rigorous curriculum is fashioned by the expertise of
                our highly skilled faculty and built on the work of their gifted
                predecessors. We believe the best preparation for our students
                is an education that combines a traditional liberal arts
                foundation with an ever-evolving program that meets the
                innovations and challenges of the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — School Highlights (Main-06/07/08)
          ========================================================= */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="flex items-end gap-6">
            <h3 className="font-serif text-[36px] sm:text-[42px] text-gray-900">
              School Highlights
            </h3>
            <div className="flex-1 h-[2px] bg-red-600" />
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Big feature */}
            <article className="relative group overflow-hidden min-h-[420px] md:min-h-[520px]">
              <img
                src={bigNews}
                alt="Feature"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                <div className="text-white/80 text-[12px] tracking-wide">
                  ILLUMINATION FROM JANE FOLEY FRIED{" "}
                  <span className="mx-2">|</span> APRIL 7, 2025
                </div>
                <h4 className="mt-2 text-white font-serif text-2xl">
                  What I Will Miss the Most
                </h4>
              </div>
            </article>

            {/* Two small posts */}
            <div className="space-y-6">
              <SmallPost
                img={smallNews1}
                category="GENERAL NEWS"
                date="JANUARY 14, 2025"
                title="BevHacks 2025"
              />
              <SmallPost
                img={smallNews2}
                category="ILLUMINATION FROM JANE FOLEY FRIED"
                date="DECEMBER 2, 2024"
                title="Peace, Power, Purpose"
              />

              <div className="pt-2">
                <a
                  href="/latest/news"
                  className="inline-flex items-center gap-2 text-[14px] tracking-wide text-gray-800 hover:text-red-600"
                >
                  MORE MAREFAT NEWS <span>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= FOOTER ONLY ON THIS PAGE ========= */}
      <Footer />
    </main>
  );
}

/* ---------------- helpers for tiles and small posts ---------------- */

function SchoolTile({ img, title, link, href }) {
  return (
    <a
      href={href}
      className="relative block min-h-[420px] md:min-h-[520px] overflow-hidden group"
      title={link}
    >
      <img
        src={img}
        alt={link}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-white/95 p-6">
        <p className="text-gray-700 font-serif text-[22px] leading-7">
          {title}
          <br />
          <span className="text-gray-900 underline underline-offset-4 decoration-1 inline-flex items-center gap-1">
            {link} <span className="inline-block">›</span>
          </span>
        </p>
      </div>
    </a>
  );
}

function SmallPost({ img, category, date, title }) {
  return (
    <article className="grid grid-cols-[140px_1fr] gap-4 items-start">
      <div className="relative w-full h-[110px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="text-[11px] tracking-wider text-gray-500 uppercase">
          {category} <span className="mx-2">|</span> {date}
        </div>
        <h5 className="mt-1 text-gray-900 hover:text-red-600 cursor-pointer">
          {title}
        </h5>
      </div>
    </article>
  );
}
