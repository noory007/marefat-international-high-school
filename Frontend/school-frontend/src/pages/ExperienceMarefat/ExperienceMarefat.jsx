// src/pages/ExperienceMarefat/ExperienceMarefat.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/Experience-Marefat.png";

export default function ExperienceMarefat() {
  const navigate = useNavigate();
  const [active, setActive] = useState({ cat: null, item: null });

  const categories = [
    {
      // title: "Academics",
      items: ["Lower School", "Middle School", "Upper School"],
    },
    // {
    //   title: "Student Life",
    //   items: [
    //     "Library",
    //     "Middle School Clubs & Activities",
    //     "Upper School Clubs & Activities",
    //     "Counseling & Health Services",
    //     "College Advising",
    //   ],
    // },
    // {
    //   title: "Arts",
    //   items: ["Drama", "Music", "Visual Arts", "Dance"],
    // },
    // {
    //   title: "Athletics",
    //   items: [
    //     "Overview",
    //     "Teams & Schedules",
    //     "Facilities",
    //     "Athletic Training, Strength, & Conditioning",
    //   ],
    // },
  ];

  // Map labels to routes we’ve already wired up in App.jsx
  const routeMap = {
    "Lower School": "/experience/academics/lower-school",
    "Middle School": "/experience/academics/middle-school",
    "Upper School": "/experience/academics/upper-school",
  };

  const handleClick = (cIdx, iIdx, label) => {
    // Always set active so non-linked items turn bold red
    setActive({ cat: cIdx, item: iIdx });

    // If we have a route for this label, navigate there
    const to = routeMap[label];
    if (to) navigate(to);
  };

  return (
    <section className="flex flex-col md:flex-row bg-red-700">
      {/* Left side — hero */}
      <div className="relative w-full md:w-2/3">
        <img
          src={heroImage}
          alt="Experience Marefat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-10 md:top-12 left-8">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            EXPERIENCE
            <br />
            MAREFAT
          </h1>
          <div className="mt-3 h-1 w-44 bg-red-700" />
        </div>
      </div>

      {/* Right side — menu */}
      <aside className="w-full md:w-1/3 bg-white p-8 relative overflow-y-auto">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl leading-none hover:text-red-700"
          aria-label="Close"
          title="Close"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {categories.map((cat, cIdx) => (
            <div key={cat.title}>
              <h3 className="text-sm tracking-wide text-red-700 font-semibold uppercase">
                {cat.title}
              </h3>
              <ul className="mt-3 space-y-3 text-lg">
                {cat.items.map((label, iIdx) => {
                  const isActive = active.cat === cIdx && active.item === iIdx;
                  return (
                    <li
                      key={label}
                      onClick={() => handleClick(cIdx, iIdx, label)}
                      className={`cursor-pointer select-none transition-colors ${
                        isActive
                          ? "text-red-700 font-semibold"
                          : "text-gray-900 hover:text-red-400"
                      }`}
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
