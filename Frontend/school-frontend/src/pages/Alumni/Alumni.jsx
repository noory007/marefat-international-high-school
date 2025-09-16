// src/pages/Alumni/Alumni.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/Alumni.png";

export default function Alumni() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  // label + route path for each item (plain JS)
  const items = [
    { label: "Alumni Association", path: "/alumni/association" },
    { label: "Alumni Stories", path: "/alumni/stories" },
    { label: "Alumni Events", path: "/alumni/events" },
    // { label: "Alumni Awards", path: "/alumni/awards" },
    // { label: "Directory & Networking", path: "/alumni/directory" },
  ];

  const go = (i, path) => {
    setActive(i);
    navigate(path);
  };

  return (
    <section className="flex flex-col md:flex-row bg-red-700 min-h-screen">
      {/* Left: hero image (fills the column) */}
      <div className="relative w-full md:w-2/3 min-h-[78vh]">
        <img
          src={heroImage}
          alt="Alumni"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Title */}
        <div className="absolute top-10 md:top-12 left-8">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            ALUMNI
          </h1>
          <div className="mt-3 h-1 w-44 bg-red-700" />
        </div>
      </div>

      {/* Right: links list */}
      <aside className="w-full md:w-1/3 bg-white p-8 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl leading-none hover:text-red-700"
          aria-label="Close"
          title="Close"
        >
          ×
        </button>

        <ul className="space-y-3 text-lg">
          {items.map(({ label, path }, i) => (
            <li key={label}>
              <button
                onClick={() => go(i, path)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") go(i, path);
                }}
                className={`w-full text-left transition-colors ${
                  active === i
                    ? "text-red-700 font-semibold"
                    : "text-gray-800 hover:text-red-400"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
