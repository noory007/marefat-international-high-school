// src/pages/Admission/ApplyMiddle.jsx
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/Admission-ApplyMiddle-1.png";

export default function ApplyMiddle() {
  const navigate = useNavigate();

  const timeline = [
    { step: "Submit Application Part I", deadline: "December 1, 2025" },
    { step: "Register for an Interview", deadline: "December 5, 2025" },
    {
      step: "Complete Financial Assistance Application (if applicable)",
      deadline: "December 15, 2025",
    },
    { step: "Submit Application Part II", deadline: "January 8, 2026" },
    { step: "Complete Admission File", deadline: "January 8, 2026" },
    { step: "Admission Decision Notification", deadline: "February 9, 2026" },
    {
      step: "Enrollment Deadline for Admitted Families",
      deadline: "12:00 pm (ET) on February 27, 2026",
    },
  ];

  const process = [
    {
      title: "Application Part I and Fee",
      body: (
        <>
          <p className="mb-4">
            The application fee is <strong>$85</strong>. Families applying for
            financial assistance may request a fee waiver during the application
            process. Apply{" "}
            <a href="#apply" className="text-red-700 underline">
              here
            </a>
            .
          </p>
        </>
      ),
    },
    {
      title: "Campus Tour",
      body: (
        <p>
          Campus tours are not required but are available for any applicant
          family that would like to visit Marefat. Choose a{" "}
          <em>small group tour</em> or an <em>individualized tour</em> that can
          take place before your admission interview. All tours last{" "}
          <strong>45 minutes</strong>.
        </p>
      ),
    },
    {
      title: "Admission Interview",
      body: (
        <p>
          Families can schedule their in-person interview once Application Part
          I has been submitted. Interviews must include the student and at least
          one parent/guardian. You may register for an appointment that includes
          a 45-minute campus tour, or just the interview. Interviews are
          required; a tour is not.
        </p>
      ),
    },
    {
      title: "Assessments and Standardized Testing",
      body: (
        <>
          <p className="mb-4">
            Applicants complete Marefat’s math and English assessments. The math
            assessment is administered at the time of the family tour and
            interview; English assessment dates are posted on our portal.
          </p>
          <p className="mb-2">
            Applicants also take the ISEE or SSAT. We suggest registering for a
            test date <strong>no later than December 2025</strong> so the file
            is complete by January 2026. Register for the ISEE{" "}
            <a href="#isee" className="text-red-700 underline">
              here
            </a>{" "}
            or the SSAT{" "}
            <a href="#ssat" className="text-red-700 underline">
              here
            </a>
            .
          </p>
          <p>Please list Marefat so results are sent directly to us.</p>
        </>
      ),
    },
    {
      title:
        "Supplemental materials: Application Part II, Official Transcripts, Teacher References and Graded Essay",
      body: (
        <>
          <p className="mb-4">
            Application Part II is completed by the applicant and includes short
            answer questions to help us learn more about them.
          </p>
          <p className="mb-4">
            Transcript links are available in your portal. Parents/guardians
            should delegate links to the appropriate school personnel to upload
            transcripts.
          </p>
          <p>
            Starting on <strong>November 3</strong>, links to required English
            and Math teacher reference forms will be available in the portal.
            Parents/guardians should delegate the links to their child’s
            teachers.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* ===== HERO (image shifted DOWN via object-position) ===== */}
      <section className="relative w-full h-[60vh] md:h-[78vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Apply to Middle School — Marefat International High School"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 35%" }} // tweak 30–50% as needed
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-white tracking-wide leading-tight text-4xl md:text-6xl lg:text-7xl">
              APPLY TO MIDDLE SCHOOL
            </h1>
            <div className="mt-3 mx-auto h-[2px] w-60 bg-white/80" />
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
              We review each application with attention to character,
              intellectual curiosity and a desire to grow—both individually and
              as part of a diverse community of students, families, alumni,
              faculty, staff and administrators. We seek academically motivated
              students who will contribute positively to our community, and
              parents/guardians who will partner with us as we foster an
              inclusive program.
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

      {/* ===== ADMISSION TIMELINE (2 columns) ===== */}
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
                    Admission Step
                  </th>
                  <th className="bg-white sticky top-0 z-10 py-4 px-5 font-semibold border-b-2 border-red-600">
                    Deadline
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
                      {row.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== ADMISSION PROCESS (5 items) ===== */}
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
                  {p.body}
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
              onClick={() => navigate("/admission/apply/middle")}
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
