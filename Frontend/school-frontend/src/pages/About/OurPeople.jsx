// src/pages/About/OurPeople.jsx
import heroImage from "../../assets/images/OurPeople.png";

// ---- leadership images from your assets folder ----
import LydiaBarovero from "../../assets/images/Lydia-Barovero.png";
import AhmedNajm from "../../assets/images/Ahmed-Najm.png";
import RahulTripathi from "../../assets/images/Rahul-Tripathi.png";

import MariaAnnaZimmermann from "../../assets/images/Maria-Anna-Zimmermann.png";
import TimBrownell from "../../assets/images/Tim-Brownell.png";
import StephanieWright from "../../assets/images/Stephanie-Wright.png";

import CoyDailey from "../../assets/images/Coy-Dailey.png";
import ChristinaClemente from "../../assets/images/Christina-Clemente.png";
import ColinSamuel from "../../assets/images/Colin-Samuel.png";

import CarolynClark from "../../assets/images/Carolyn-Clark.png";
import PhoebeGeer from "../../assets/images/Phoebe-Geer.png";
import JenniferStewart from "../../assets/images/Jennifer-Stewart.png";

export default function OurPeople() {
  const leaders = [
    { name: "Lydia Barovero", title: "Academic Dean", img: LydiaBarovero },
    { name: "Ahmed Najm", title: "Dean of Faculty", img: AhmedNajm },
    {
      name: "Rahul Tripathi",
      title: "Chief Financial Officer/Chief Operating Officer",
      img: RahulTripathi,
    },

    {
      name: "Maria-Anna Zimmermann",
      title: "Head of Lower School",
      img: MariaAnnaZimmermann,
    },
    {
      name: "Tim Brownell",
      title: "Head of Middle School Student Life",
      img: TimBrownell,
    },
    {
      name: "Stephanie Wright",
      title: "Head of Upper School Student Life",
      img: StephanieWright,
    },

    {
      name: "Coy Dailey",
      title: "Director of Equity and Community Engagement",
      img: CoyDailey,
    },
    {
      name: "Christina Clemente",
      title: "Director of Enrollment Management",
      img: ChristinaClemente,
    },
    {
      name: "Colin Samuel",
      title: "Chief Technology Officer",
      img: ColinSamuel,
    },

    {
      name: "Carolyn Clark",
      title: "Director of College Advising",
      img: CarolynClark,
    },
    {
      name: "Phoebe Geer",
      title: "Director of Advancement",
      img: PhoebeGeer,
    },
    {
      name: "Jennifer Stewart",
      title: "Director of Communications",
      img: JenniferStewart,
    },
  ];

  return (
    <main className="w-full">
      {/* ===== HERO with edge frame (same as Welcome) ===== */}
      <section className="relative w-full h-[calc(100vh-72px)] overflow-hidden">
        <img
          src={heroImage}
          alt="Our People - Marefat International School"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/35 z-10" />
        <div className="pointer-events-none absolute inset-0 z-20 border-[6px] border-white" />

        <div className="relative z-30 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-white leading-tight tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              OUR PEOPLE
            </h1>
            <div className="mt-6 flex flex-col items-center">
              <div className="h-[3px] w-72 max-w-[60vw] bg-white/90" />
              <span className="block w-3 h-3 bg-white rotate-45 -mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT + LEADERS ===== */}
      <section className="w-full bg-gray-100">
        <div className="mx-auto max-w-[1050px] bg-white px-6 md:px-12 py-16 md:py-20">
          {/* Heading + underline (no circle image) */}
          <div className="mt-2">
            <h2 className="font-serif text-gray-900 tracking-tight leading-[1.05] text-3xl sm:text-5xl md:text-[64px]">
              Our People
            </h2>
            <div className="mt-6 h-[3px] w-40 bg-red-600" />
          </div>

          {/* Body text centered so left/right gray gutters are equal */}
          <div className="mt-10 mx-auto max-w-[920px] space-y-6 text-[18px] leading-8 text-gray-800">
            <p>
              At Marefat International School, people come first. Our faculty,
              staff and administrators are united by a love of learning and a
              commitment to nurturing each student’s potential. They bring deep
              expertise, warm mentorship and a collaborative spirit to the
              classroom and beyond.
            </p>

            <p>
              We believe great schools are built on great teams. From the
              teachers who design engaging lessons to the counselors, librarians
              and operations staff who keep our community thriving, every person
              plays a vital role in our students’ growth and well-being.
            </p>

            <p>
              Get to know the people who make Marefat extraordinary — the
              educators and professionals who inspire curiosity, build character
              and champion every learner’s success.
            </p>
          </div>

          {/* ===== Leadership grid (LAST SECTION) ===== */}
          <div className="mt-16">
            <h3 className="font-serif text-gray-900 tracking-tight text-2xl sm:text-3xl">
              Marefat Leadership
            </h3>
            <div className="mt-3 h-[3px] w-28 bg-red-600" />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 place-items-center">
              {leaders.map((p) => (
                <figure key={p.name} className="text-center">
                  <div className="inline-block rounded-full bg-white p-2 shadow-md outline outline-1 outline-gray-200">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-60 h-60 md:w-64 md:h-64 rounded-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-6">
                    <h4 className="font-serif text-2xl text-gray-900">
                      {p.name}
                    </h4>
                    <p className="mt-2 text-gray-600 text-lg max-w-[22ch] mx-auto">
                      {p.title}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          {/* ===== end leadership grid ===== */}
        </div>
      </section>
    </main>
  );
}
