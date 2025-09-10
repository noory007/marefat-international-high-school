// src/pages/ExperienceMarefat/Academics/LowerSchool.jsx
import l1 from "../../../assets/images/Experience-Marefat-L1.png";
import l2 from "../../../assets/images/Experience-Marefat-L2.png";
import l3 from "../../../assets/images/Experience-Marefat-L3.png";
import l4 from "../../../assets/images/Experience-Marefat-L4.png";

import l5 from "../../../assets/images/Experience-Marefat-L5.png";
import l6 from "../../../assets/images/Experience-Marefat-L6.png";
import l7 from "../../../assets/images/Experience-Marefat-L7.png";

import l8 from "../../../assets/images/Experience-Marefat-L8.png";
import l9 from "../../../assets/images/Experience-Marefat-L9.png";
import l10 from "../../../assets/images/Experience-Marefat-L10.png";
import l11 from "../../../assets/images/Experience-Marefat-L11.png";

import MariaAnnaZimmermann from "../../../assets/images/Maria-Anna-Zimmermann.png";

export default function LowerSchool() {
  return (
    <main className="w-full bg-white">
      {/* ===== Collage hero (L1–L4) ===== */}
      <section className="relative w-full overflow-hidden">
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
              src={l1}
              alt="Lower School — left"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Middle top */}
          <div className="relative">
            <img
              src={l2}
              alt="Lower School — center"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right tall */}
          <div className="relative md:row-span-2">
            <img
              src={l3}
              alt="Lower School — right"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom wide */}
          <div className="relative md:col-span-3 md:row-span-2">
            <img
              src={l4}
              alt="Lower School — bottom"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Outer frame */}
        <div className="pointer-events-none absolute inset-0 border-[8px] border-black z-20" />

        {/* Centered white title banner (nudged a bit down to feel centered) */}
        <div
          className="
            absolute left-1/2
            top-[44%] md:top-[39%] lg:top-[37%]
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
            LOWER SCHOOL
          </h1>

          <div className="flex justify-center items-center mt-6">
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
            <span className="mx-3 w-3 h-3 rotate-45 bg-[#cc2630]" />
            <span className="h-[3px] w-24 md:w-28 bg-[#cc2630]" />
          </div>
        </div>
      </section>

      {/* ===== Quote + Head of Lower (L5) ===== */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: paragraphs */}
          <div className="lg:col-span-7">
            <div className="space-y-8 text-[18px] leading-8 text-gray-800">
              <p>
                Marefat students have an intrinsic desire to learn, and our
                mission in the Lower School is to fuel that enthusiasm. With
                energy, moxie, and wonder, our girls skip into school each
                morning, eager to greet their classmates and to embrace the joys
                and challenges of the day ahead as they build and strengthen
                their humanity and intellect.
              </p>
              <p>
                In a warm and supportive environment, our girls learn to take
                risks, learn from mistakes, stretch their imaginations, and
                expand their boundaries. Our experienced faculty ensures that
                each girl is known, heard, and valued. The adults encourage the
                natural inquisitiveness of their students, cultivating the start
                of a lifelong joy of discovery, exploration, and learning.
              </p>
            </div>
          </div>

          {/* Right: big red quote */}
          <div className="lg:col-span-5">
            <div className="bg-[#faf7f7] p-8 md:p-10 border border-gray-200">
              <p className="font-serif text-red-700 text-3xl md:text-[42px] leading-tight">
                “With energy, moxie, and wonder, our girls skip into school each
                morning, eager to greet their classmates…”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={MariaAnnaZimmermann}
                  alt="Maria-Anna Zimmermann"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="text-gray-900 font-semibold">
                    Maria-Anna Zimmermann
                  </div>
                  <div className="text-gray-600 text-sm">
                    Head of Lower School
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width image divider (L5) */}
          <div className="lg:col-span-12 mt-6">
            <div className="relative w-full h-[340px] md:h-[420px]">
              <img
                src={l5}
                alt="Lower School community"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Small School, Big Program (L6) ===== */}
      <section className="w-full bg-[#f7f7f7] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 leading-[1.1]">
              Small School,
              <br /> Big Program
            </h2>
            <div className="mt-5 h-[3px] w-40 bg-red-600" />

            <div className="mt-8 space-y-6 text-[18px] leading-8 text-gray-800">
              <p>
                Just because our students are small doesn’t mean they don’t
                possess mighty intellects. In these formative early years, we
                challenge students to stretch their minds, develop a love of
                language and take on new obstacles with gusto.
              </p>
              <p>
                A kindergarten visit to a city green market inspires multimodal
                work on sustainability and healthy eating, while all students in
                Class III receive their own instruments for the first time as
                part of our robust music program. Class IV students perform
                plays, explore coding and design in our Idea Kitchen, and make
                connections across disciplines through hands-on projects.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full h-[360px] md:h-[520px]">
              <img
                src={l6}
                alt="Small school big program"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Building Character, Building Community (L7) ===== */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 leading-[1.1]">
              Building Character,
              <br /> Building Community
            </h2>
            <div className="mt-5 h-[3px] w-40 bg-red-600" />

            <div className="mt-8 space-y-6 text-[18px] leading-8 text-gray-800">
              <p>
                With the guidance of our faculty, our students begin their
                journey to becoming strong, kind, confident women who respect
                one another and are committed to improving the world around
                them.
              </p>
              <p>
                Our community is diverse and inclusive, where all our students,
                including the youngest, are taught to regulate emotions, promote
                empathy and make others feel valued. This social and emotional
                learning is a critical component of our Lower School curriculum.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full h-[360px] md:h-[520px]">
              <img
                src={l7}
                alt="Building character"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Kindergarten Curriculum grid ===== */}
      <section className="w-full bg-[#f7f7f7] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-5xl text-gray-900">
            Kindergarten Curriculum
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {/* Left col sections */}
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Language Arts
                </h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Phonemic awareness, phonics and sight word reading; reading
                  aloud from several genres; listening and reading
                  comprehension; handwriting; self-expression through creative
                  writing.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Social Studies
                </h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Identity and community; changemakers; introduction and
                  application of Marefat’s core values.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Work and Play
                </h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Time to play, learn, explore and build; board games, puzzles,
                  block building and self-initiated projects.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Health Education
                </h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Safety, healthy boundaries and caring for our bodies and
                  minds; understanding appropriate vs. inappropriate contact;
                  expressing feelings and seeking help.
                </p>
              </div>
            </div>

            {/* Right col sections */}
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Mathematics
                </h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Sorting and classifying; shapes; measurement; number bonds;
                  addition and subtraction; numbers to 100; time to the hour;
                  recognizing coins.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gray-900">Science</h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Scientific method across biology, physics and chemistry;
                  structures of insects; motion and forces; sinking, floating
                  and simple dissolving.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Respect and Responsibility
                </h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Character development, social-emotional learning, making
                  friends and resolving conflicts through discussions and
                  team-building activities.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gray-900">Library</h3>
                <div className="mt-2 h-[3px] w-8 bg-red-600" />
                <p className="mt-4 text-[17px] leading-8 text-gray-800">
                  Storytime; caring for books; learning the parts of the
                  library; author/illustrator studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Feature Cards (L8–L11) ===== */}
      <section className="w-full bg-[#f7f7f7] py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 — Libraries */}
          <article className="bg-white border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[260px]">
                <img
                  src={l8}
                  alt="Lower School Library"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-7 md:p-9">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900">
                  Marefat Libraries
                </h3>
                <div className="mt-3 h-[3px] w-10 bg-red-600" />
                <p className="mt-5 text-[17px] leading-8 text-gray-800">
                  The Lower School Library is a friendly, inviting space for
                  storytelling time, classes with librarians and browsing for
                  books to take home.
                </p>
                <button
                  type="button"
                  className="mt-5 text-red-700 font-semibold hover:underline"
                >
                  Explore our libraries <span aria-hidden>›</span>
                </button>
              </div>
            </div>
          </article>

          {/* Card 2 — Arts */}
          <article className="bg-white border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[260px]">
                <img
                  src={l9}
                  alt="Lower School Arts"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-7 md:p-9">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900">
                  Arts
                </h3>
                <div className="mt-3 h-[3px] w-10 bg-red-600" />
                <p className="mt-5 text-[17px] leading-8 text-gray-800">
                  The visual and performing arts play an integral role in the
                  curriculum and life of Marefat students.
                </p>
                <ul className="mt-5 space-y-2 text-red-700 font-semibold">
                  <li className="hover:underline cursor-pointer">
                    Dance <span aria-hidden>›</span>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    Drama <span aria-hidden>›</span>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    Music <span aria-hidden>›</span>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    Visual Arts <span aria-hidden>›</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Card 3 — Afterschool */}
          <article className="bg-white border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-7 md:p-9">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900">
                  Afterschool Activities
                </h3>
                <div className="mt-3 h-[3px] w-10 bg-red-600" />
                <p className="mt-5 text-[17px] leading-8 text-gray-800">
                  Beaver Den is the after-school program for Lower School
                  students in Classes K–IV.
                </p>
                <button
                  type="button"
                  className="mt-5 text-red-700 font-semibold hover:underline"
                >
                  Read more about Beaver Den <span aria-hidden>›</span>
                </button>
              </div>
              <div className="relative min-h-[260px]">
                <img
                  src={l10}
                  alt="Afterschool Activities"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </article>

          {/* Card 4 — Service Learning */}
          <article className="bg-white border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-7 md:p-9">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900">
                  Service Learning
                </h3>
                <div className="mt-3 h-[3px] w-10 bg-red-600" />
                <p className="mt-5 text-[17px] leading-8 text-gray-800">
                  Service begins in the Lower School with projects and trips
                  that develop a sense of agency and responsibility to society
                  in our students.
                </p>
                <button
                  type="button"
                  className="mt-5 text-red-700 font-semibold hover:underline"
                >
                  See how we serve <span aria-hidden>›</span>
                </button>
              </div>
              <div className="relative min-h-[260px]">
                <img
                  src={l11}
                  alt="Service Learning"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
