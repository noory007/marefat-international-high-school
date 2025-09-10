// src/pages/Admission/Welcome.jsx
import { useNavigate } from "react-router-dom";

// ----- hero + section images -----
import heroImg from "../../assets/images/Admission-Welcome-1.png";
import lowerImg from "../../assets/images/Admission-Welcome-2.png";
import middleImg from "../../assets/images/Admission-Welcome-3.png";
import upperImg from "../../assets/images/Admission-Welcome-4.png";

// ----- team photos (using available headshots from your assets) -----
import ChristinaClemente from "../../assets/images/Christina-Clemente.png";
import MariaAnnaZimmermann from "../../assets/images/Maria-Anna-Zimmermann.png";
import StephanieWright from "../../assets/images/Stephanie-Wright.png";
import TimBrownell from "../../assets/images/Tim-Brownell.png";
import CoyDailey from "../../assets/images/Coy-Dailey.png";

export default function AdmissionWelcome() {
  const navigate = useNavigate();

  const team = [
    {
      name: "Christina Clemente",
      title: "Director of Enrollment Management",
      img: ChristinaClemente,
    },
    {
      name: "Carla Isley",
      title:
        "Director of Financial Assistance and Associate Director of Admission",
      img: MariaAnnaZimmermann, // using an available photo
    },
    {
      name: "Mia Campbell ’06",
      title: "Assistant Director of Admission",
      img: TimBrownell, // using an available photo
    },
    {
      name: "Melissa Leo",
      title: "Admission and Financial Assistance Coordinator",
      img: StephanieWright, // using an available photo
    },
    {
      name: "Karine Blemur-Chapman",
      title: "Admission Interviewer",
      img: CoyDailey, // using an available photo
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* ===== HERO ===== */}
      <section className="relative w-full h-[58vh] md:h-[70vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Admission — Marefat International High School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 border-[6px] border-white pointer-events-none" />
        <div className="relative h-full z-10 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-white tracking-wide leading-tight text-4xl md:text-6xl">
              MAREFAT ADMISSION
            </h1>
            <div className="mt-5 mx-auto h-[3px] w-64 bg-red-700" />
          </div>
        </div>
      </section>

      {/* ===== INTRO COPY ===== */}
      <section className="w-full bg-gray-100">
        <div className="mx-auto max-w-[1050px] bg-white px-6 md:px-12 py-16 md:py-20">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-[56px] leading-tight text-gray-900">
            Thank you for your interest in applying to Marefat!
          </h2>
          <div className="mt-6 h-[3px] w-24 bg-red-600" />

          <div className="mt-8 space-y-6 max-w-[760px] text-gray-800 leading-8">
            <p className="font-semibold">
              People say they know a Marefat student when they meet one.
            </p>
            <p>
              Confident and kind. Curious and joyful. Our students embrace high
              expectations, believe in themselves and one another, and dare to
              try hard things.
            </p>
            <p>
              They learn to lead and to collaborate, they value friendship and
              good judgment, and they approach the world with generosity and a
              desire to help—on campus and beyond.
            </p>
            <p>
              What shapes these traits? A learning community where each student
              is known, challenged and supported—becoming ever more herself
              while belonging to something bigger.
            </p>
            <p className="font-semibold">
              Welcome to Marefat. We’re glad you’re here.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ADMISSION TEAM ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1050px] px-6 md:px-12 py-8 md:py-10">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {team.map((m) => (
              <div key={m.name} className="flex items-center gap-5">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-28 h-28 rounded-full object-cover ring-1 ring-gray-200"
                />
                <div>
                  <h4 className="font-serif text-xl text-gray-900">{m.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{m.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLYING TO MAREFAT (3 hover-zoom cards) ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1260px] px-6 md:px-10 py-16 md:py-20">
          <div className="text-center">
            <h3 className="font-serif text-4xl md:text-6xl tracking-wide text-gray-900">
              APPLYING TO MAREFAT
            </h3>
            <div className="mx-auto mt-4 h-[3px] w-28 bg-red-600" />
            <p className="mt-4 text-sm md:text-base text-gray-600">
              A Marefat Education Unfolds over a Lifetime
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                label: "Lower School",
                img: lowerImg,
                to: "/admission/apply/lower",
              },
              {
                label: "Middle School",
                img: middleImg,
                to: "/admission/apply/middle",
              },
              {
                label: "Upper School",
                img: upperImg,
                to: "/admission/apply/upper",
              },
            ].map((c) => (
              <button
                key={c.label}
                onClick={() => navigate(c.to)}
                className="group relative block w-full aspect-[4/3] overflow-hidden rounded-lg"
                aria-label={c.label}
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-white text-3xl md:text-4xl drop-shadow">
                    {c.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT BAND ===== */}
      <section className="w-full bg-red-700 text-white">
        <div className="mx-auto max-w-[1260px] px-6 md:px-10 py-12 md:py-16 grid gap-10 md:grid-cols-2 items-start">
          <h4 className="font-serif text-4xl md:text-5xl leading-tight">
            Questions? <br className="hidden md:block" />
            Contact Us
          </h4>

          <div>
            <div className="h-[2px] w-full bg-white/60 mb-6" />
            <p className="text-white/90 font-semibold mb-2">
              By email or by phone:
            </p>
            <p className="underline underline-offset-2">
              <a href="mailto:admissions@marefat.edu">admissions@marefat.edu</a>
            </p>
            <p className="mt-2 underline underline-offset-2">
              <a href="tel:+10000000000">(000) 000-0000</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
