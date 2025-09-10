// src/pages/Admission/ApplyLower.jsx
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/Admission-ApplyLower-1.png";

export default function ApplyLower() {
  const navigate = useNavigate();

  const timeline = [
    {
      step: "Submit Application",
      general: "December 1, 2025",
      early: "October 1, 2025",
    },
    {
      step: "Schedule Applicant/Parent Visits",
      general: "December 9, 2025",
      early: "October 6, 2025",
    },
    {
      step: "Complete Financial Assistance Application (if applicable)",
      general: "December 15, 2025",
      early: "November 3, 2025",
    },
    {
      step: "Complete Admission File",
      general: "January 8, 2026",
      early: "November 25, 2025",
    },
    {
      step: "Admission Decision Notification",
      general: "February 5, 2026",
      early: "December 5, 2025",
    },
    {
      step: "Enrollment Deadline for Admitted Families",
      general: "12:00 pm (ET) on February 12, 2026",
      early: "12:00 pm (ET) on December 12, 2025",
    },
  ];

  const process = [
    {
      title: "Application and Fee",
      text: (
        <>
          <p className="mb-4">
            The application deadline for kindergarten is{" "}
            <strong>4:00 pm on December 1, 2025</strong>. The application fee is
            $85. Families applying for financial assistance may request a fee
            waiver during the application.
          </p>
          <p className="mb-4">
            Applicants to kindergarten must turn <strong>five years old</strong>{" "}
            by September 1 of the year they enter kindergarten.
          </p>
          <p>
            For the 2026–2027 academic year, we do not anticipate openings in
            grades 1–4. You may complete an{" "}
            <a href="#interest" className="text-red-700 underline">
              Application of Interest
            </a>
            . If spaces become available, we will contact you.
          </p>
        </>
      ),
    },
    {
      title: "Parent/Guardian Visit, Tour and Interview",
      text: (
        <p>
          After your application has been submitted, you may schedule your
          parent/guardian tour and interview;{" "}
          <strong>
            the interview immediately follows the tour. Please allow 90 minutes
            for the entire visit.
          </strong>
        </p>
      ),
    },
    {
      title: "Applicant Visit",
      text: (
        <p>
          We look forward to meeting your child! Along with a small group of
          applicants, your child will enjoy familiar classroom activities during
          a 45-minute visit.{" "}
          <strong>
            The Office of Admission schedules the visit on a rolling basis as
            applications are processed.
          </strong>{" "}
          A caregiver or family member may bring the applicant; no parent
          programming is required.
        </p>
      ),
    },
    {
      title: "Permission to Release Records",
      text: (
        <p>
          Please submit the{" "}
          <strong>Permission to Release Confidential School Report</strong> form
          to your child’s current school via our online portal. The school will
          send us a confidential report; either our form or the ISAAGNY form is
          accepted.
        </p>
      ),
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* ===== HERO (image shifted DOWN via object-position) ===== */}
      <section className="relative w-full h-[60vh] md:h-[78vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Apply to Lower School — Marefat International High School"
          className="absolute inset-0 w-full h-full object-cover"
          // ↓ Increase the second number (e.g., 'center 40%') to push the image further down
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-white tracking-wide leading-tight text-4xl md:text-6xl lg:text-7xl">
              APPLY TO LOWER SCHOOL
            </h1>
            <div className="mt-4 mx-auto h-[2px] w-64 bg-white/80" />
          </div>
        </div>
      </section>

      {/* ===== INTRO (two columns) ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-14 lg:py-20 grid gap-10 lg:grid-cols-2 items-start">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-gray-900">
            Your Marefat Journey
            <br /> Starts Here.
          </h2>

          <div className="text-gray-700 text-[17px] leading-8">
            <p className="mb-6">
              The primary entry point for Lower School is Kindergarten, with
              spaces opening up infrequently in other grades. Find a detailed
              timeline of key dates below.
            </p>
            <p className="mb-8">
              The admission application for the <strong>2026–2027</strong>{" "}
              school year is now available.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-2 px-5 py-3 border border-red-700 text-red-700 rounded hover:bg-red-50 transition"
              aria-label="Apply Now"
            >
              APPLY NOW <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== ADMISSION TIMELINE ===== */}
      <section className="w-full bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-14 lg:py-20">
          <div className="text-center">
            <h3 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-wide">
              ADMISSION TIMELINE
            </h3>
            <div className="mx-auto mt-4 h-[3px] w-28 bg-red-600" />
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="text-sm text-gray-600">
                  <th className="bg-white sticky top-0 z-10 py-4 px-5 font-semibold border-b-2 border-red-600">
                    Application Step
                  </th>
                  <th className="bg-white sticky top-0 z-10 py-4 px-5 font-semibold border-b-2 border-red-600">
                    Deadline for General Applicants
                  </th>
                  <th className="bg-white sticky top-0 z-10 py-4 px-5 font-semibold border-b-2 border-red-600">
                    Deadline for Early Notification Applicants
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {timeline.map((row) => (
                  <tr key={row.step} className="align-top">
                    <td className="py-6 px-5 border-b border-gray-200">
                      {row.step}
                    </td>
                    <td className="py-6 px-5 border-b border-gray-200 bg-gray-50/70">
                      {row.general}
                    </td>
                    <td className="py-6 px-5 border-b border-gray-200">
                      {row.early}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== ADMISSION PROCESS ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 lg:py-24">
          <div className="text-center">
            <h3 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-wide">
              ADMISSION PROCESS
            </h3>
            <div className="mx-auto mt-3 h-[3px] w-24 bg-red-600" />
            <span className="block mx-auto w-2 h-2 bg-red-600 rotate-45 -mt-1.5" />
          </div>

          <div className="mt-12 space-y-16">
            {process.map((p, idx) => (
              <div
                key={p.title}
                className="grid gap-8 lg:grid-cols-2 items-start"
              >
                <div>
                  <div className="border-t-2 border-red-200 w-4/5 mb-6" />
                  <h4 className="font-serif text-3xl md:text-[42px] leading-[1.15] text-gray-900">
                    {idx + 1}. {p.title}
                  </h4>
                </div>
                <div className="text-gray-700 leading-8 text-[17px]">
                  {p.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="w-full bg-red-700 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 lg:py-14 text-center">
          <p className="font-serif text-3xl md:text-5xl leading-tight">
            Ready to Apply?{" "}
            <button
              onClick={() => navigate("/admission/apply/lower")}
              className="underline underline-offset-4 decoration-2 hover:opacity-90"
            >
              Apply Now
            </button>{" "}
            Questions?{" "}
            <a
              href="mailto:admissions@marefat.edu"
              className="underline underline-offset-4 decoration-2 hover:opacity-90"
            >
              Reach Out
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
