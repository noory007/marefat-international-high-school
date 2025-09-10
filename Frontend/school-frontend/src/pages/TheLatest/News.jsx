// src/pages/TheLatest/News.jsx
import { useNavigate } from "react-router-dom";
import newsHero from "../../assets/images/Latest-New-01.png"; // make sure this file exists

export default function News() {
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      date: "Sept 3, 2025",
      title: "New Humanities Seminar Launches for Upper School",
      blurb:
        "An interdisciplinary seminar invites students to explore primary sources, art, and literature through inquiry-based learning.",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "Marefat Welcomes the Class of 2029",
      blurb:
        "Orientation week brought our newest students together through advisory meetups, campus tours, and community building.",
    },
    {
      id: 3,
      date: "Aug 12, 2025",
      title: "Summer Research Fellows Share Findings",
      blurb:
        "From environmental chemistry to inclusive design, students presented capstone posters to families and faculty.",
    },
    {
      id: 4,
      date: "Jun 18, 2025",
      title: "Varsity Robotics Qualifies for Nationals",
      blurb:
        "Team Marefat secured a top-5 finish at regionals with an original autonomous scoring routine.",
    },
    {
      id: 5,
      date: "May 30, 2025",
      title: "Lower School Garden Program Expands",
      blurb:
        "New raised beds and a pollinator habitat connect science standards with hands-on stewardship.",
    },
    {
      id: 6,
      date: "Apr 21, 2025",
      title: "Annual Arts Night Celebrates Student Creativity",
      blurb:
        "Performances, installations, and portfolio showcases filled the campus with music and color.",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[55vh] md:h-[70vh] w-full">
        <img
          src={newsHero}
          alt="News - Marefat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Back button */}
        <button
          onClick={() => navigate("/latest")}
          aria-label="Back to The Latest"
          className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-90"
        >
          ×
        </button>

        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white font-serif text-5xl md:text-6xl tracking-wide">
            NEWS
          </h1>
          <div className="mt-4 h-1 w-40 bg-red-700" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500">
                {item.date}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.blurb}</p>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-medium"
                onClick={() => alert("This would open the full story.")}
              >
                Read more <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
