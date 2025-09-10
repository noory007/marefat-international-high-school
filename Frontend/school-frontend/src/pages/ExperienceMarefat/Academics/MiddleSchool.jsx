// src/pages/ExperienceMarefat/Academics/MiddleSchool.jsx
import m1 from "../../../assets/images/Experience-Marefat-M1.png";
import m2 from "../../../assets/images/Experience-Marefat-M2.png";
import m3 from "../../../assets/images/Experience-Marefat-M3.png";
import m4 from "../../../assets/images/Experience-Marefat-M4.png";

import TimBrownell from "../../../assets/images/Tim-Brownell.png";
import m5 from "../../../assets/images/Experience-Marefat-M5.png";
import m6 from "../../../assets/images/Experience-Marefat-M6.png";
import m7 from "../../../assets/images/Experience-Marefat-M7.png";
import m8 from "../../../assets/images/Experience-Marefat-M8.png";

export default function MiddleSchool() {
  return (
    <main className="w-full bg-white">
      {/* ==================== Collage hero (uses M1–M4) ==================== */}
      <section className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 border-[8px] border-black z-20" />
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
              src={m2}
              alt="Middle School — left"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Middle top */}
          <div className="relative">
            <img
              src={m1}
              alt="Middle School — center"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right tall (now M3) */}
          <div className="relative md:row-span-2">
            <img
              src={m3}
              alt="Middle School — right"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom wide (now M4) */}
          <div className="relative md:col-span-3 md:row-span-2">
            <img
              src={m4}
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
          <div className="flex justify-center items-center mb-6">
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
            <span className="mx-3 w-3 h-3 rotate-45 bg-[#cc2630]" />
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
          </div>

          <h1 className="font-serif leading-tight tracking-wide text-3xl md:text-5xl lg:text-[56px]">
            MIDDLE SCHOOL
          </h1>

          <div className="flex justify-center items-center mt-6">
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
            <span className="mx-3 w-3 h-3 rotate-45 bg-[#cc2630]" />
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
          </div>
        </div>
      </section>

      {/* ==================== Red quote block ==================== */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
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

      {/* ==================== Education / Tradition ==================== */}
      <section className="w-full bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
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

          <div className="lg:col-span-6 relative">
            <img
              src={m5}
              alt="Middle School classroom"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ==================== Speaking Your Mind ==================== */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <img
              src={m6}
              alt="Speaking your mind"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
          <div className="lg:col-span-6 flex items-center">
            <div>
              <h2 className="font-serif text-[34px] md:text-[44px] leading-tight text-gray-900">
                Speaking Your Mind; <br /> Finding Your Voice
              </h2>
              <div className="mt-4 h-[3px] w-44 bg-red-600" />
              <p className="mt-8 text-[18px] leading-8 text-gray-800">
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

      {/* ==================== Unplugging to Connect ==================== */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[34px] md:text-[44px] leading-tight text-gray-900">
              Unplugging to Connect
            </h2>
            <div className="mt-4 h-[3px] w-40 bg-red-600" />
            <p className="mt-8 text-[18px] leading-8 text-gray-800">
              In Middle School we choose to use technology deliberately,
              maximizing its benefits while minimizing the opportunities for its
              distractions. Students are taught how to be good digital citizens
              while navigating the pitfalls and promises of social media, and
              they are provided multiple opportunities to take a break from
              technology during the school day and even at home. In our widely
              popular Digital Fresh Start program, students pledge to put down
              their phones and limit exposure to social media; families are
              given tools to support a “digital detox” as part of a
              division-wide initiative on improving mental health.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src={m7}
              alt="Unplug to connect"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ==================== A Community Where Everyone Belongs ==================== */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <img
              src={m8}
              alt="Community & belonging"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
          <div className="lg:col-span-6 flex items-center">
            <div>
              <h2 className="font-serif text-[34px] md:text-[44px] leading-tight text-gray-900">
                A Community Where <br /> Everyone Belongs
              </h2>
              <div className="mt-4 h-[3px] w-52 bg-red-600" />
              <p className="mt-8 text-[18px] leading-8 text-gray-800">
                Middle School is a time when students begin to develop a greater
                sense of their own identity while learning to value each other.
                They are taught to affirm and uplift one another, to listen
                intently and deeply, and to have respectful conversations across
                differences. Numerous affinity groups and clubs, health and
                wellness classes, and peer-led groups provide abundant
                opportunities to grow socially and emotionally, preparing
                students to be part of a community of mutual concern and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== Class V Curriculum ==================== */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="font-serif text-[34px] md:text-[48px] text-gray-900">
            Class V Curriculum
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {/* ---- Left column ---- */}
            <div className="space-y-12">
              <CurriculumBlock
                title="English"
                text={
                  <>
                    Composition, creative writing, grammar and spelling;{" "}
                    <em>The Witch of Blackbird Pond</em>, <em>Prairie Lotus</em>
                    , <em>Hurricane Dancers</em>; short stories and poetry in
                    connection with work in United States history.
                  </>
                }
              />
              <CurriculumBlock
                title="History"
                text="The early history of the United States through 1790; related work in English; introduction to global geography."
              />
              <CurriculumBlock
                title="Modern Languages"
                text="Students begin their exploration of either French or Spanish language and culture or continue with their study of Mandarin."
                linkLabel="Modern Language Choices"
              />
              <CurriculumBlock
                title="Drama"
                text="Exploration of the craft of acting through the rehearsal and performance of an adapted play by Shakespeare at an assembly in the spring."
              />
              <CurriculumBlock
                title="Studio Art"
                text="Large group observational drawing sessions and, in small groups, rotation through three courses, each of which takes place over ten weeks."
                linkLabel="Class V Art Mini-Courses"
              />
              <CurriculumBlock
                title="Technology"
                text="In small groups, students rotate through three ten-week courses using the Snap programming language."
                linkLabel="Technology Mini-Courses"
              />
              <CurriculumBlock
                title="Athletics"
                text="Middle School Sports V–VIII is the introductory level of competitive sports at Marefat, focusing on skill building, teamwork and sportsmanship."
              />
            </div>

            {/* ---- Right column ---- */}
            <div className="space-y-12">
              <CurriculumBlock
                title="Mathematics"
                text="Development of number sense; computation with whole and rational numbers; data analysis and graphs; geometry; perimeter, area & volume; applications & problem-solving."
              />
              <CurriculumBlock
                title="Science"
                text="Exploration of electricity; wiring a household circuit; properties of matter; physical & chemical changes; chemistry; simple machines; sinking & floating."
              />
              <CurriculumBlock
                title="Reading and Writing Practicum"
                text="Two-year sequence for students who benefit from practice in expository writing; close reading; outlining; research and oral presentation."
              />
              <CurriculumBlock
                title="Music"
                text="Singing, solfège, theory fundamentals and group instrumental instruction; participation in ensembles and performances."
              />
              <CurriculumBlock
                title="Library"
                text="Development of personal reading taste through stories read aloud; pleasure reading; research skills via student projects; graphic-storytelling study."
              />
              <CurriculumBlock
                title="Physical Education"
                text="Progression from motor skills to sport-specific skills in increasingly complex game contexts; emphasis on SEL, collaboration, and sportsmanship."
              />
              <CurriculumBlock
                title="Health"
                text="Wellness themes integrated into advisory; human sexuality, substance abuse prevention, safety; age-appropriate national standards; self-defense classes."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small helper for curriculum blocks ---------- */
function CurriculumBlock({ title, text, linkLabel }) {
  return (
    <div>
      <h3 className="font-serif text-[26px] text-gray-900">{title}</h3>
      <div className="mt-2 h-[3px] w-12 bg-red-600" />
      <p className="mt-4 text-[17px] leading-8 text-gray-800">{text}</p>
      {linkLabel ? (
        <div className="mt-3">
          <span className="text-red-700 text-[15px] hover:underline cursor-pointer inline-flex items-center gap-2">
            {linkLabel}
            <span aria-hidden>›</span>
          </span>
        </div>
      ) : null}
    </div>
  );
}
