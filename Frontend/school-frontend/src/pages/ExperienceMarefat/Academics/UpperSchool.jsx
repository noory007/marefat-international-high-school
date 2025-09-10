// src/pages/ExperienceMarefat/Academics/UpperSchool.jsx
import u1 from "../../../assets/images/Experience-Marefat-U1.png";
import u2 from "../../../assets/images/Experience-Marefat-U2.png";
import u3 from "../../../assets/images/Experience-Marefat-U3.png";
import u4 from "../../../assets/images/Experience-Marefat-U4.png";

import u5 from "../../../assets/images/Experience-Marefat-U5.png";
import u6 from "../../../assets/images/Experience-Marefat-U6.png";
import u7 from "../../../assets/images/Experience-Marefat-U7.png";
import u8 from "../../../assets/images/Experience-Marefat-U8.png";

import u9 from "../../../assets/images/Experience-Marefat-U9.png";
import u10 from "../../../assets/images/Experience-Marefat-U10.png";
import u11 from "../../../assets/images/Experience-Marefat-U11.png";
import u12 from "../../../assets/images/Experience-Marefat-U12.png";
import u13 from "../../../assets/images/Experience-Marefat-U13.png";
import u14 from "../../../assets/images/Experience-Marefat-U14.png";

export default function UpperSchool() {
  return (
    <main className="w-full bg-white">
      {/* ==================== Collage hero ==================== */}
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

        {/* Centered white title banner (placed up a bit) */}
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

      {/* ==================== Joy in Learning ==================== */}
      <SplitImageBlock
        image={u5}
        imageAlt="Joy in learning"
        title="Joy in Learning"
        side="text-left"
      >
        Whether academic or extracurricular, our students do not shy away from
        challenges; rather they love to grapple with and overcome them. Class
        schedules are customized and tailored each year to meet individual
        needs, helping students balance curricular and co-curricular demands.
        Students also have greater choices in their coursework each year. This
        culminates in Senior Spring when each student immerses herself in a
        curriculum of her own making. For example, students can take
        minicourses, participate in internships or volunteer with an
        organization whose mission resonates with her. These projects capture
        the intellectual vibrancy that runs through the school.
      </SplitImageBlock>

      {/* ==================== Faculty mentors ==================== */}
      <SplitImageBlock
        image={u6}
        imageAlt="Faculty mentors and advisors"
        title="Faculty Mentors and Advisors"
        side="image-left"
      >
        Our Upper School students benefit from a cadre of dedicated faculty who
        guide them to stretch themselves intellectually, emotionally and
        socially. Highly accomplished in their fields, they are attuned to each
        student’s aspirations and pace of development, her personality and
        talents. By asking much, and by serving as role models, our teachers
        inspire students to push beyond their perceived limits. They are an
        integral part of the Marefat experience and help shape our students into
        independent, confident women who are committed to the greater good.
      </SplitImageBlock>

      {/* ==================== No One Brearley Girl ==================== */}
      <SplitImageBlock
        image={u7}
        imageAlt="No one Brearley girl"
        title="No One Brearley Girl"
        side="text-left"
      >
        Brearley students are multidimensional; we like to say there is no ONE
        Brearley girl. Upper School students are involved in a myriad of
        activities, both in and outside of the classroom, that allow them to
        pursue their passions. Everyone can find something they love to do at
        Brearley. If you are unsure where your interests lie but are curious and
        want to explore your opportunities—then you belong here.
      </SplitImageBlock>

      {/* ==================== Belonging & Community ==================== */}
      <SplitImageBlock
        image={u8}
        imageAlt="Respectful community"
        title="Belonging and Building a Respectful Community"
        side="image-left"
      >
        Our students have multiple opportunities to develop their individual
        voices, learn how to have difficult yet respectful conversations and
        assume responsibility for themselves and for others. They learn how to
        lead and how to encourage others to succeed. Through student-run
        affinity groups, clubs and self-government, they develop a true sense of
        belonging, knowing they are valued and celebrated for who they are.
        Belonging is more than a buzzword here; it is an inherent part of who we
        are as a school.
      </SplitImageBlock>

      {/* ==================== Class IX Curriculum (brief) ==================== */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="font-serif text-[34px] md:text-[48px] text-gray-900">
            Class IX Curriculum
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {/* LEFT */}
            <div className="space-y-12">
              <CurriculumBlock
                title="English"
                text={
                  <>
                    Personal essays; grammar; creative writing; and selected
                    literature including <em>Macbeth</em>,{" "}
                    <em>Pride and Prejudice</em> and{" "}
                    <em>Their Eyes Were Watching God</em>. Practice in close
                    reading and analytical writing; creative assignments.
                  </>
                }
              />
              <CurriculumBlock
                title="Twentieth-Century World History"
                text="Global history from c. 1880 to the present with close reading of primary sources, writing and discussion; Class IX typically visits the U.S. Holocaust Memorial Museum."
              />
              <CurriculumBlock
                title="Latin"
                text="Introduction to vocabulary and syntax using the Suburani series; readings from Fabulae Faciles and adapted Roman authors."
              />
              <CurriculumBlock
                title="Drama"
                text="Physical comedy, scene work and commedia dell’arte, culminating in short comedic plays (half credit; throughout the year)."
              />
              <CurriculumBlock
                title="Studio Art"
                text="Observation drawing, collage and fundamentals of oil painting; critique and museum study (half credit; throughout the year)."
              />
              <CurriculumBlock
                title="Health"
                text="Social-emotional learning integrated into a solid health curriculum; topics include mindfulness, relationships, sexuality and wellness; small-group discussion and student-designed projects."
              />
            </div>
            {/* RIGHT */}
            <div className="space-y-12">
              <CurriculumBlock
                title="Mathematics"
                text="Geometry in Class IX with two tracks based on placement in consultation with math faculty."
                linkLabel="Class IX Math Section Descriptions"
              />
              <CurriculumBlock
                title="Biology"
                text="Life processes; genetics; evolution; animal physiology; projects in plant development and genetics; units on physiology and ecology."
              />
              <CurriculumBlock
                title="Modern Languages"
                text="Continuation of modern language study (French, Spanish or Mandarin)."
                linkLabel="Class IX Modern Language Course Descriptions"
              />
              <CurriculumBlock
                title="Music"
                text="Vocal work, orchestra or instrumental techniques (half credit; throughout the year)."
                linkLabel="Class IX Music Course Descriptions"
              />
              <CurriculumBlock
                title="Physical Education"
                text="Trimester offerings in fitness, dance, sports and wellness; First Aid/CPR certification before graduation."
              />
              <CurriculumBlock
                title="Co-Curricular Activities"
                text="Opportunities in the arts, design, research seminars, debate, robotics and more, including interschool advanced math options for juniors and seniors."
                linkLabel="Class IX Co-Curricular Activities"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== Beyond the Classroom ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="font-serif text-[34px] md:text-[48px] text-gray-900">
            Beyond the Classroom
          </h2>

          <div className="mt-10 space-y-10">
            {/* Row 1 */}
            <SplitPanel
              image={u9}
              imageAlt="Athletics"
              title="Athletics"
              text="The Marefat Athletics Program offers students in Classes V–XII the opportunity to participate in a competitive athletic environment."
              cta="LEARN MORE ABOUT ATHLETICS"
            />
            <SplitPanel
              image={u10}
              imageAlt="Arts performance"
              title="Arts"
              text="The visual and performing arts play an integral role in the curriculum and life of Marefat students."
              linkList={["Dance", "Drama", "Music", "Visual Arts"]}
              reverse
            />

            {/* Row 2 */}
            <SplitPanel
              image={u11}
              imageAlt="College advising"
              title="College Advising"
              text="The college search and application process is an opportunity for students to exercise decision-making skills and independence."
              cta="LEARN MORE ABOUT OUR COLLEGE ADVISING"
            />
            <SplitPanel
              image={u12}
              imageAlt="Off-campus learning"
              title="Off-Campus Learning"
              text="Upper School students have many opportunities to pursue their interests beyond the regular curriculum, with a wide range of programs and exchanges."
              cta="EXPLORE OFF-CAMPUS LEARNING"
              reverse
            />

            {/* Row 3 */}
            <SplitPanel
              image={u13}
              imageAlt="Clubs and activities fair"
              title="Clubs and Activities"
              text="Upper School students have numerous opportunities to pursue their interests outside of the classroom."
              cta="LEARN MORE ABOUT OUR CLUBS AND ACTIVITIES"
              textFirst
            />
            <SplitPanel
              image={u14}
              imageAlt="Service learning"
              title="Service Learning"
              text="Marefat’s long-standing commitment to community service complements and supports our academic program."
              cta="SEE HOW WE SERVE"
              reverse
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small helpers ---------- */

function CurriculumBlock({ title, text, linkLabel }) {
  return (
    <div>
      <h3 className="font-serif text-[26px] text-gray-900">{title}</h3>
      <div className="mt-2 h-[3px] w-12 bg-red-600" />
      <p className="mt-4 text-[17px] leading-8 text-gray-800">{text}</p>
      {linkLabel ? (
        <div className="mt-3">
          <a
            href="#"
            className="text-red-700 text-[15px] hover:underline inline-flex items-center gap-2"
          >
            {linkLabel} <span aria-hidden>›</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}

/**
 * Block with image + text, reusable for the long-form sections.
 * side: "image-left" or "text-left"
 */
function SplitImageBlock({
  image,
  imageAlt,
  title,
  children,
  side = "image-left",
}) {
  const imageFirst = side === "image-left";
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {imageFirst && (
          <div className="lg:col-span-6">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
        )}
        <div className="lg:col-span-6">
          <h2 className="font-serif text-[34px] md:text-[44px] leading-tight text-gray-900">
            {title}
          </h2>
          <div className="mt-4 h-[3px] w-44 bg-red-600" />
          <p className="mt-8 text-[18px] leading-8 text-gray-800">{children}</p>
        </div>
        {!imageFirst && (
          <div className="lg:col-span-6">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Card-like split panel used in "Beyond the Classroom"
 * - reverse: image on left, text on right reversed from default
 * - textFirst: text column first, image second (used for Clubs card)
 * - cta: single CTA button-style link
 * - linkList: list of simple links for items (Dance, Drama, etc.)
 */
function SplitPanel({
  image,
  imageAlt,
  title,
  text,
  cta,
  linkList,
  reverse = false,
  textFirst = false,
}) {
  const leftIsImage = (!reverse && !textFirst) || (reverse && textFirst);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-md border border-gray-200 overflow-hidden">
      {leftIsImage ? (
        <div className="lg:col-span-6">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover min-h-[320px]"
          />
        </div>
      ) : null}

      <div className="lg:col-span-6 p-8 md:p-10 flex items-center">
        <div>
          <h3 className="font-serif text-[28px] md:text-[32px] text-gray-900">
            {title}
          </h3>
          <div className="mt-3 h-[3px] w-14 bg-red-600" />
          <p className="mt-6 text-[17px] leading-8 text-gray-800">{text}</p>

          {cta ? (
            <div className="mt-6">
              <a
                href="#"
                className="text-red-700 font-medium tracking-wide inline-flex items-center gap-2"
                title={cta}
              >
                {cta} <span aria-hidden>›</span>
              </a>
            </div>
          ) : null}

          {linkList ? (
            <ul className="mt-6 space-y-3">
              {linkList.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-red-700 hover:text-red-800"
                  >
                    {l.toUpperCase()} <span aria-hidden>›</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {!leftIsImage ? (
        <div className="lg:col-span-6">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover min-h-[320px]"
          />
        </div>
      ) : null}
    </div>
  );
}
