// src/pages/TheLatest/Calendar.jsx
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/Latest-AcademicCallender-01.png";

export default function Calendar() {
  const navigate = useNavigate();

  // --- DATA --------------------------------------------------------------
  const months = [
    {
      name: "AUGUST",
      events: [
        {
          day: "18",
          title: "Athletics Preseason Begins",
          note: "Mandatory team practices and tryouts for Upper School sports",
        },
      ],
    },
    {
      name: "SEPTEMBER",
      events: [
        { day: "1", title: "Labor Day", note: "School closed" },
        {
          day: "4",
          title: "LS Opening Day",
          note: "School starts for Classes I–IV; special schedule for Class K",
        },
        {
          day: "8",
          title: "MS/US Opening Day",
          note: "Opening Day for Classes VI–XII",
        },
        { day: "16", title: "Lower School Curriculum Night" },
        { day: "23", title: "Rosh Hashanah", note: "School closed" },
        { day: "25", title: "Middle School Curriculum Night" },
        { day: "29", title: "Upper School Curriculum Night" },
      ],
    },
    {
      name: "OCTOBER",
      events: [
        { day: "2", title: "Yom Kippur", note: "School closed" },
        {
          day: "13",
          title: "Fall Weekend/Indigenous Peoples' Day",
          note: "School closed",
        },
        { day: "20", title: "Diwali" },
      ],
    },
    {
      name: "NOVEMBER",
      events: [
        {
          day: "7",
          title: "Lower School, Classes VI–VIII and IX Parent Conferences",
          note: "No classes in Lower, Middle or Upper School",
        },
        { day: "26–28", title: "Thanksgiving Recess", note: "School closed" },
      ],
    },
    {
      name: "DECEMBER",
      events: [
        { day: "18", title: "Last Day Before Winter Break for Classes V–XII" },
        {
          day: "19",
          title: "Last Day Before Winter Break for Classes K–IV",
          note: "Early dismissal",
        },
      ],
    },
    {
      name: "JANUARY",
      events: [
        { day: "5", title: "School Reopens" },
        {
          day: "19",
          title: "Martin Luther King Jr. Day",
          note: "School closed",
        },
        {
          day: "20",
          title: "Professional Development Day",
          note: "School closed",
        },
      ],
    },
    {
      name: "FEBRUARY",
      events: [
        {
          day: "6",
          title: "VI and IX–XII Conferences",
          note: "No classes V–XII",
        },
        { day: "16", title: "Presidents' Day", note: "School closed" },
        { day: "17", title: "Lunar New Year", note: "School closed" },
      ],
    },
    {
      name: "MARCH",
      events: [
        { day: "19", title: "Last Day Before Spring Break", note: "K–XII" },
        { day: "20", title: "Eid al-Fitr", note: "School closed" },
      ],
    },
    {
      name: "APRIL",
      events: [
        { day: "6", title: "School Reopens" },
        {
          day: "23",
          title: "Lower School Parent-Teacher Conferences",
          note: "No classes K–IV",
        },
      ],
    },
    {
      name: "MAY",
      events: [{ day: "25", title: "Memorial Day", note: "School closed" }],
    },
    {
      name: "JUNE",
      events: [
        { day: "10", title: "Lower School Last Day", note: "Early Dismissal" },
        { day: "11", title: "Middle School Last Day", note: "Early Dismissal" },
        {
          day: "12",
          title: "Upper School Last Day",
          note: "Congratulations to the Class of 2025!",
        },
      ],
    },
  ];

  // --- RENDER ------------------------------------------------------------
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* HERO */}
      <div className="relative h-[46vh] md:h-[60vh] w-full">
        <img
          src={heroImg}
          alt="Academic Calendar"
          className="w-full h-full object-cover object-[50%_60%]"
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
            ACADEMIC CALENDAR
          </h1>
          <div className="mt-4 h-[3px] w-40 bg-white/85" />
        </div>
      </div>

      {/* CALENDAR LIST */}
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

            {/* Events list */}
            <ul className="mt-3 border border-gray-200 rounded-xl overflow-hidden">
              {month.events.map((ev, idx) => (
                <li
                  key={`${month.name}-${idx}`}
                  className={`${
                    idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                  } p-5 md:p-6 flex items-center`}
                >
                  {/* Date box (no day-of-week letters; keep ranges on one line) */}
                  <div className="w-28 md:w-32 shrink-0 text-center">
                    <div className="text-3xl md:text-4xl font-serif text-gray-900 leading-none whitespace-nowrap">
                      {ev.day}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <p className="text-gray-900 text-base md:text-lg">
                      {ev.title}
                    </p>
                  </div>

                  {/* Note (right) */}
                  {ev.note && (
                    <div className="ml-4 text-sm md:text-base italic text-gray-600 text-right">
                      {ev.note}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
