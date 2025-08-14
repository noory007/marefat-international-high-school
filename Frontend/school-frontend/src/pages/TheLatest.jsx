// src/pages/TheLatest.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import latestImage from "../assets/images/Latest.png";

export default function TheLatest() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const items = [
    "Marefat News",
    "Marefat Bulletin",
    "Academic Calendar",
    "Admission Events",
    "Alumnae Events",
  ];

  return (
    <section className="flex flex-col md:flex-row bg-red-700 h-screen">
      {/* Left: hero image with overlay and title */}
      <div className="relative w-full md:w-2/3 h-full">
        <img
          src={latestImage}
          alt="The Latest - Marefat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Title (same as About page) */}
        <div className="absolute top-10 md:top-12 left-8">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            THE <br /> LATEST
          </h1>
          <div className="mt-3 h-1 w-44 bg-red-700"></div>
        </div>
      </div>

      {/* Right: links list */}
      <aside className="w-full md:w-1/3 bg-white p-8 relative">
        {/* Close button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl leading-none hover:text-red-700"
          aria-label="Close"
        >
          ×
        </button>

        <ul className="space-y-3 text-lg">
          {items.map((label, idx) => {
            const isActive = active === idx;
            return (
              <li
                key={label}
                onClick={() => setActive(idx)}
                className={`cursor-pointer select-none transition-colors no-underline ${
                  isActive
                    ? "text-red-700 font-semibold"
                    : "text-gray-800 hover:text-red-400"
                }`}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
}
