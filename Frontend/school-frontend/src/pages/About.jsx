// src/pages/About.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/About-Hero.png";

export default function About() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    "Welcome to Marefat",
    "Our People",
    "Our Mission",
    "History & Traditions",
    "Virtual Tour",
    "Faculty & Staff Directory",
    "Strategic Vision",
    "Marefat at a Glance",
    "Diversity, Equity, Inclusion & Antiracism",
  ];

  return (
    <section className="flex flex-col md:flex-row bg-red-700">
      {/* Left side: hero image with overlay text */}
      <div className="relative w-full md:w-2/3">
        <img
          src={heroImage}
          alt="About Marefat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Title moved slightly down - now two lines */}
        <div className="absolute top-10 md:top-12 left-8">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            ABOUT <br /> MAREFAT
          </h1>
          <div className="mt-3 h-1 w-44 bg-red-700" />
        </div>
      </div>

      {/* Right side: list */}
      <aside className="w-full md:w-1/3 bg-white p-8 relative">
        {/* Close icon */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl leading-none hover:text-red-700"
        >
          ×
        </button>

        <ul className="space-y-3 text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveItem(index)}
              className={`cursor-pointer select-none transition-colors no-underline 
                ${
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
