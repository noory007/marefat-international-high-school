// src/pages/ExperienceMarefat/Academics/MiddleSchool.jsx
import l1 from "../../../assets/images/Experience-Marefat-L1.png";
import l2 from "../../../assets/images/Experience-Marefat-L2.png";
import l3 from "../../../assets/images/Experience-Marefat-L3.png";
import l4 from "../../../assets/images/Experience-Marefat-L4.png";
// TIP: Replace these with your actual Middle School images when ready,
// e.g. M1/M2/M3/M4 files.

export default function MiddleSchool() {
  return (
    <main className="w-full bg-white">
      {/* Collage hero */}
      <section className="relative w-full overflow-hidden">
        {/* Outer frame */}
        <div className="pointer-events-none absolute inset-0 border-[8px] border-black z-20" />

        {/* Mosaic */}
        <div
          className="
            grid gap-4
            grid-cols-1
            md:grid-cols-3
            auto-rows-[220px]
            md:auto-rows-[260px]
          "
        >
          {/* Left tall */}
          <div className="relative md:row-span-2">
            <img
              src={l2}
              alt="Middle School — left"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Middle top */}
          <div className="relative">
            <img
              src={l1}
              alt="Middle School — center"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right tall */}
          <div className="relative md:row-span-2">
            <img
              src={l4}
              alt="Middle School — right"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom wide */}
          <div className="relative md:col-span-3 md:row-span-2">
            <img
              src={l3}
              alt="Middle School — bottom"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Centered white title banner (same vertical feel as Lower School) */}
        <div
          className="
            absolute left-1/2
            top-[42%] md:top-[38%] lg:top-[37%]
            -translate-x-1/2 -translate-y-1/2
            z-30
            w-[88%] md:w-[60%] lg:w-[48%]
            bg-white/95 text-center
            py-10 md:py-12 px-6 md:px-10
            shadow-xl outline outline-1 outline-black/10
          "
        >
          {/* top ornament */}
          <div className="flex justify-center items-center mb-6">
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
            <span className="mx-3 w-3 h-3 rotate-45 bg-[#cc2630]" />
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
          </div>

          <h1 className="font-serif leading-tight tracking-wide text-3xl md:text-5xl lg:text-[56px]">
            MIDDLE SCHOOL
          </h1>

          {/* bottom ornament */}
          <div className="flex justify-center items-center mt-6">
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
            <span className="mx-3 w-3 h-3 rotate-45 bg-[#cc2630]" />
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
          </div>
        </div>
      </section>
    </main>
  );
}
