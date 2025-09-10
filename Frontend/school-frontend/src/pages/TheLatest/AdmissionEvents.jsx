// src/pages/TheLatest/AdmissionEvents.jsx
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/Latest-Admission Event-01.png"; // ensure this filename (with space) matches exactly

export default function AdmissionEvents() {
  const navigate = useNavigate();

  // ------------ DATA (Marefat) ------------
  const months = [
    {
      name: "OCTOBER",
      events: [
        {
          day: "17",
          title: "Kindergarten Fireside Chat",
          time: "12am",
          location: "610 Common Room",
          description:
            "Please join us at our 610 schoolhouse to hear from the leadership of Marefat School. Our Lower School team will share the values and vision of Marefat and take questions from the audience.",
        },
        {
          day: "21",
          title: "Middle & Upper School Open House",
          time: "11pm",
          location: "590 and 610 Schoolhouses",
          description:
            "Learn all about Marefat’s Middle and Upper School programs. Meet administrators, talk with current students, and engage with members of our faculty. Prospective students and parents are encouraged to attend.",
        },
        {
          day: "29",
          title: "Kindergarten Fireside Chat",
          time: "11pm",
          location: "610 Common Room",
          description:
            "Join us at our 610 schoolhouse to hear from Marefat’s leadership about our approach to joyful learning, character, and community. Q&A to follow.",
        },
      ],
    },
    {
      name: "NOVEMBER",
      events: [
        {
          day: "14",
          title: "Kindergarten Fireside Chat",
          time: "12am",
          location: "610 Common Room",
          description:
            "An intimate conversation with Marefat School leaders about our Lower School experience, curriculum, and family partnership.",
        },
        {
          day: "21",
          title: "Kindergarten Open House",
          time: "12am",
          location: "590 Schoolhouse",
          description:
            "Come learn more about Marefat’s kindergarten program and Lower School.",
        },
      ],
    },
    {
      name: "DECEMBER",
      events: [
        {
          day: "12",
          title: "Kindergarten Fireside Chat",
          time: "12am",
          location: "610 Common Room",
          description:
            "Join Marefat School leaders for a conversational overview of our K program and admissions process, followed by Q&A.",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* HERO */}
      <div className="relative h-[46vh] md:h-[60vh] w-full">
        <img
          src={heroImg}
          alt="Admission Events - Marefat"
          className="w-full h-full object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <button
          onClick={() => navigate("/latest")}
          aria-label="Back to The Latest"
          className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-90"
        >
          ×
        </button>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white font-serif text-4xl md:text-6xl tracking-wide text-center">
            ADMISSION EVENTS
          </h1>
          <div className="mt-4 h-[3px] w-40 bg-white/85" />
        </div>
      </div>

      {/* EVENTS */}
      <div className="max-w-6xl mx-auto w-full px-6 md:px-8 py-10 md:py-14">
        {months.map((month) => (
          <section key={month.name} className="mb-8 md:mb-10">
            {/* Month heading */}
            <div className="flex items-center gap-4">
              <h2 className="text-xs md:text-sm tracking-widest font-semibold text-gray-700">
                {month.name}
              </h2>
              <div className="flex-1 h-[2px] bg-red-600/80" />
            </div>

            {/* Month card */}
            <ul className="mt-3 rounded-2xl border border-gray-200 overflow-hidden">
              {month.events.map((ev, idx) => (
                <li
                  key={`${month.name}-${idx}`}
                  className={`${
                    idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                  } p-5 md:p-8 flex gap-6`}
                >
                  {/* Date (no letters below the number) */}
                  <div className="w-20 md:w-24 text-center shrink-0">
                    <div className="text-4xl md:text-5xl font-serif text-gray-900 leading-none">
                      {ev.day}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl text-gray-900">
                      {ev.title}
                    </h3>

                    {(ev.time || ev.location) && (
                      <p className="mt-2 text-sm md:text-base text-gray-600">
                        {ev.time && <span>{ev.time}</span>}
                        {ev.time && ev.location && (
                          <span className="mx-2">|</span>
                        )}
                        {ev.location}
                      </p>
                    )}

                    {ev.description && (
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        {ev.description}
                      </p>
                    )}

                    <p className="mt-4 text-sm text-gray-700">
                      Registration for this event via{" "}
                      <a
                        href="https://www.ravenna-hub.com/"
                        className="text-red-700 hover:text-red-800 underline underline-offset-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ravenna
                      </a>{" "}
                      is required.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
