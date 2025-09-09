// src/pages/ExperienceMarefat/Academics/UpperSchool.jsx
import u1 from "../../../assets/images/Experience-Marefat-U1.png";
import u2 from "../../../assets/images/Experience-Marefat-U2.png";
import u3 from "../../../assets/images/Experience-Marefat-U3.png";
import u4 from "../../../assets/images/Experience-Marefat-U4.png";

export default function UpperSchool() {
  return (
    <main className="w-full bg-white">
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
              src={u1}
              alt="Upper School — left"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Middle top */}
          <div className="relative">
            <img
              src={u2}
              alt="Upper School — center"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right tall */}
          <div className="relative md:row-span-2">
            <img
              src={u3}
              alt="Upper School — right"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom wide */}
          <div className="relative md:col-span-3 md:row-span-2">
            <img
              src={u4}
              alt="Upper School — bottom"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Centered white title banner (moved further up) */}
        <div
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[110%]
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
            UPPER SCHOOL
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
