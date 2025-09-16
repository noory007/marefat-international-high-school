// src/pages/Admission/Admission.jsx
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import admissionImage from "../../assets/images/Admission.png";

export default function Admission() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // item -> route map
  const menu = useMemo(
    () => [
      { label: "Welcome", to: "/admission/welcome" },
      { label: "Apply to Lower School", to: "/admission/apply/lower" },
      { label: "Apply to Middle School", to: "/admission/apply/middle" },
      { label: "Apply to Upper School", to: "/admission/apply/upper" },
      // { label: "Tuition and Financial Assistance", to: "/admission/tuition" },
      // { label: "Admission Events", to: "/admission/events" },
      // { label: "Admission FAQ", to: "/admission/faq" },
    ],
    []
  );

  const isActive = (to) => pathname === to;

  return (
    <section className="flex flex-col md:flex-row bg-red-700">
      {/* Left: hero */}
      <div className="relative w-full md:w-2/3">
        <img
          src={admissionImage}
          alt="Admission — Marefat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-10 md:top-12 left-8">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            ADMISSION
          </h1>
          <div className="mt-3 h-1 w-44 bg-red-700" />
        </div>
      </div>

      {/* Right: list */}
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
          {menu.map((item) => (
            <li
              key={item.to}
              onClick={() => navigate(item.to)}
              className={`cursor-pointer select-none transition-colors ${
                isActive(item.to)
                  ? "text-red-700 font-semibold"
                  : "text-gray-800 hover:text-red-400"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
