// src/pages/Admission.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import admissionImage from "../assets/images/Admission.png"; // <- rename if needed

export default function Admission() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    "Welcome",
    "Apply to Lower School",
    "Apply to Middle School",
    "Apply to Upper School",
    "Tuition and Financial Assistance",
    "Admission Events",
    "Admission FAQ",
  ];

  return (
    <section className="flex flex-col md:flex-row bg-red-700">
      {/* Left: hero image with overlay and heading */}
      <div className="relative w-full md:w-2/3">
        <img
          src={admissionImage}
          alt="Admission — Marefat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Title position + red underline (matches About page) */}
        <div className="absolute top-10 md:top-12 left-8">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            ADMISSION
          </h1>
          <div className="mt-3 h-1 w-44 bg-red-700" />
        </div>
      </div>

      {/* Right: list */}
      <aside className="w-full md:w-1/3 bg-white p-8 relative">
        {/* Close (go back to hero/landing) */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl leading-none hover:text-red-700"
          aria-label="Close"
          title="Close"
        >
          ×
        </button>

        <ul className="space-y-3 text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveItem(index)}
              className={`cursor-pointer select-none transition-colors no-underline ${
                activeItem === index
                  ? "text-red-700 font-semibold"
                  : "text-gray-800 hover:text-red-400"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
