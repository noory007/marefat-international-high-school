// src/pages/Alumnae.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/Alumnae.png";

export default function Alumnae() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const items = [
    "Alumnae Association",
    "Alumnae Stories",
    "Alumnae Events",
    "Alumnae Awards",
    "Directory & Networking",
  ];

  return (
    <section className="flex flex-col md:flex-row bg-red-700 min-h-screen">
      {/* Left: hero image (fills the column) */}
      <div className="relative w-full md:w-2/3 min-h-[78vh]">
        {/* Make the image fill the entire column */}
        <img
          src={heroImage}
          alt="Alumnae"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Title */}
        <div className="absolute top-10 md:top-12 left-8">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            ALUMNAE
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
          {items.map((label, i) => (
            <li
              key={label}
              onClick={() => setActive(i)}
              className={`cursor-pointer select-none transition-colors ${
                active === i
                  ? "text-red-700 font-semibold"
                  : "text-gray-800 hover:text-red-400"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
