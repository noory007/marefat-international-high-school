// src/pages/TheLatest/Bulletin.jsx
import { useNavigate } from "react-router-dom";

// Hero banner + issue art (make sure these files exist in your images folder)
import heroImg from "../../assets/images/Latest-BolitPoint-01.png";
import latestIssueImg from "../../assets/images/Latest-BolitPoint-02.png";

export default function Bulletin() {
  const navigate = useNavigate();

  // Sample "latest issue" data (swap with real content/CMS later)
  const latestIssue = {
    season: "Spring 2025",
    tagline: "The Era of Jane Foley Fried",
    features: [
      "Last Day 2025",
      "Academic Spotlight",
      "2025 PA Benefit: Beyond the Beaver Den",
      "The Era of Jane Foley Fried",
      "Alumni Weekend and Reunion",
    ],
    ctaLabel: "Read Now",
  };

  // Optional archive teaser (dummy data)
  const archive = [
    {
      id: 1,
      season: "Fall 2024",
      summary: "STEAM, service learning, and the arts.",
    },
    {
      id: 2,
      season: "Spring 2024",
      summary: "Global studies and field research.",
    },
    {
      id: 3,
      season: "Fall 2023",
      summary: "Athletics, wellness, and community.",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* HERO */}
      <div className="relative h-[46vh] md:h-[60vh] w-full">
        <img
          src={heroImg}
          alt="School Bulletin hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Close/back */}
        <button
          onClick={() => navigate("/latest")}
          aria-label="Back to The Latest"
          className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-90"
          title="Close"
        >
          ×
        </button>

        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white font-serif text-4xl md:text-6xl tracking-wide text-center">
            BREARLEY BULLETIN
          </h1>
          <div className="mt-4 h-[3px] w-40 bg-white/80" />
        </div>
      </div>

      {/* LATEST ISSUE */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Issue cover */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-200">
              <img
                src={latestIssueImg}
                alt={`${latestIssue.season} issue cover`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Issue details */}
          <div className="w-full">
            <p className="uppercase tracking-widest text-xs md:text-sm text-gray-500">
              Latest Issue
            </p>

            <h2 className="mt-2 font-serif text-3xl md:text-5xl text-gray-900">
              {latestIssue.season}
            </h2>

            <p className="mt-4 text-gray-800 text-lg">{latestIssue.tagline}</p>

            <h3 className="mt-8 font-semibold text-gray-900">Features:</h3>

            <ul className="mt-3 space-y-3">
              {latestIssue.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gray-900" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => alert("Open the latest issue PDF / detail page")}
              className="mt-8 inline-flex items-center justify-center rounded-lg border border-red-700 text-red-700 px-5 py-2.5 font-medium hover:bg-red-700 hover:text-white transition-colors"
            >
              {latestIssue.ctaLabel} →
            </button>
          </div>
        </div>
      </div>

      {/* ARCHIVE (teaser) */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Bulletin Archive
          </h3>
          <button
            type="button"
            onClick={() => alert("Go to full archive")}
            className="text-sm font-medium text-red-700 hover:text-red-800"
          >
            View all →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {archive.map((item) => (
            <article
              key={item.id}
              className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold text-gray-900">{item.season}</h4>
              <p className="mt-2 text-gray-600">{item.summary}</p>
              <button
                type="button"
                onClick={() => alert(`Open ${item.season} issue`)}
                className="mt-4 text-red-700 hover:text-red-800 font-medium"
              >
                Read →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
