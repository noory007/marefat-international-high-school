// src/pages/ExperienceMarefat/Academics/MiddleSchool.jsx
import l1 from "../../../assets/images/Experience-Marefat-L1.png";
import l2 from "../../../assets/images/Experience-Marefat-L2.png";
import l3 from "../../../assets/images/Experience-Marefat-L3.png";
import l4 from "../../../assets/images/Experience-Marefat-L4.png";

import TimBrownell from "../../../assets/images/Tim-Brownell.png";

import m5 from "../../../assets/images/Experience-Marefat-M5.png";
import m6 from "../../../assets/images/Experience-Marefat-M6.png";
import m7 from "../../../assets/images/Experience-Marefat-M7.png";
import m8 from "../../../assets/images/Experience-Marefat-M8.png";

export default function MiddleSchool() {
  return (
    <main className="w-full bg-white">
      {/* ===== Collage hero ===== */}
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

        {/* Centered white title banner */}
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

      {/* ===== Content + Red Quote (Tim Brownell) ===== */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left narrative */}
          <div className="lg:col-span-7 lg:pr-10 lg:border-r lg:border-gray-300">
            <div className="space-y-8 text-[18px] leading-8 text-gray-800">
              <p>
                In Middle School, our first priority is to support our students
                on their journey from childhood to young adulthood, with all the
                joys, frustrations, complexities and accomplishments that come
                with it. In this close-knit community, each girl is encouraged
                to develop a sense of her unique strengths as she masters
                complex new intellectual, emotional, social and physical skills.
              </p>

              <p>
                We believe that Middle School should be a time of spontaneity
                and exuberance, encountering adversity and exploring avenues to
                overcome it. We see this period as an essential moment for
                guidance from cherished adults, forging lifelong connections
                with new and old friends, and instilling a deep and unquenchable
                love of learning.
              </p>

              <p>
                Our Middle School program embraces a student’s freedom to ask
                questions and not always have the answer, to experience the
                delight of discovery through process and to challenge her own
                thinking and that of her peers. As our students grow, so do
                their responsibilities and independence, all in preparation for
                the challenges and demands of the Upper School.
              </p>
            </div>
          </div>

          {/* Right: big red quote */}
          <div className="lg:col-span-5">
            <div className="p-0 md:pl-8">
              <p className="font-serif text-red-700 text-[40px] md:text-[56px] leading-tight">
                “Our program embraces a student&apos;s freedom to ask questions
                and not always have the answer.”
              </p>

              <div className="mt-10 flex items-center gap-4">
                <img
                  src={TimBrownell}
                  alt="Tim Brownell"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="text-gray-900 font-semibold">
                    Tim Brownell
                  </div>
                  <div className="text-gray-600 text-sm">
                    Head of Middle School Student Life
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== An Education for the Future, Grounded in Tradition (M5) ===== */}
      <section className="w-full bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left panel */}
          <div className="lg:col-span-6 bg-gray-100 px-8 md:px-12 py-12 md:py-16">
            <h2 className="font-serif text-[30px] md:text-[40px] leading-tight text-gray-900">
              An Education for the
              <br className="hidden md:block" /> Future, Grounded in
              <br className="hidden md:block" /> Tradition
            </h2>

            <div className="mt-6 h-[3px] w-40 bg-red-600" />

            <div className="mt-8 text-[18px] leading-8 text-gray-800 space-y-6">
              <p>
                During Middle School, students transition from the playfulness
                of preadolescence to a more purposeful and scholarly life—all in
                a nurturing and supportive environment. Grounded firmly in the
                liberal arts, the curriculum is rigorous yet accessible. English
                classes tackle universal themes in classics like{" "}
                <em>The Odyssey</em> and <em>Great Expectations</em>, while
                developing skills in a modern language of their choice before
                bolstering it with Latin. Technology is also an integral part of
                Middle School, with computational thinking classes, including
                robotics or coding, required most years.
              </p>
            </div>
          </div>

          {/* Right full image (tall to match text) */}
          <div className="lg:col-span-6 relative min-h-[520px] md:min-h-[600px]">
            <img
              src={m5}
              alt="Middle School classroom"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Speaking Your Mind; Finding Your Voice (M6) ===== */}
      <section className="w-full bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: image */}
          <div className="lg:col-span-6 relative min-h-[420px] md:min-h-[560px]">
            <img
              src={m6}
              alt="Speaking your mind"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-serif text-[30px] md:text-[40px] leading-tight text-gray-900">
              Speaking Your Mind;
              <br className="hidden md:block" /> Finding Your Voice
            </h2>
            <div className="mt-6 h-[3px] w-40 bg-red-600" />

            <div className="mt-8 text-[18px] leading-8 text-gray-800 space-y-6">
              <p>
                Middle School is a time for students to find inner confidence,
                develop their own point of view and learn to express themselves
                in a thoughtful and respectful manner. From weekly community
                meetings where students present to their peers, to moments of
                expression through music, art and drama, to public speaking
                courses for all of Class VII and VIII, Middle Schoolers begin to
                unlock the power of their voices while learning to listen
                intently and purposefully to others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Unplugging to Connect (M7) ===== */}
      <section className="w-full bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-serif text-[30px] md:text-[40px] leading-tight text-gray-900">
              Unplugging to Connect
            </h2>
            <div className="mt-6 h-[3px] w-40 bg-red-600" />

            <div className="mt-8 text-[18px] leading-8 text-gray-800 space-y-6">
              <p>
                In Middle School we choose to use technology deliberately,
                maximizing its benefits while minimizing the opportunities for
                its distractions. Students are taught how to be good digital
                citizens while navigating the pitfalls and promises of social
                media, and they are provided multiple opportunities to take a
                break from technology during the school day and even at home. In
                our widely popular Digital Fresh Start program, students pledge
                to put down their phones and limit their exposure to social
                media. Parents are given tools to support their daughters when
                they choose to do a digital detox, as part of a division-wide
                initiative on improving mental health.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-6 relative min-h-[420px] md:min-h-[560px]">
            <img
              src={m7}
              alt="Phones boxed for a digital detox"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== A Community Where Everyone Belongs (M8) ===== */}
      <section className="w-full bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: large image */}
          <div className="lg:col-span-6 relative min-h-[420px] md:min-h-[560px]">
            <img
              src={m8}
              alt="Friends in the hallway"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: heading + underline + paragraph */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-serif text-[30px] md:text-[40px] leading-tight text-gray-900">
              A Community Where
              <br className="hidden md:block" /> Everyone Belongs
            </h2>

            <div className="mt-6 h-[3px] w-40 bg-red-600" />

            <div className="mt-8 text-[18px] leading-8 text-gray-800 space-y-6">
              <p>
                Middle School is a time when students begin to develop a greater
                sense of their own identity while learning to value each other.
                They are taught to affirm and uplift one another, to listen
                intently and deeply, and to have respectful conversations across
                differences. From our numerous affinity groups and clubs, to
                health and wellness classes and peer-led groups, Middle School
                students are given abundant opportunities to grow socially and
                emotionally, ultimately preparing them to be part of a community
                of mutual concern and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
