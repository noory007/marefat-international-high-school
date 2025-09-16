// src/pages/About/About.jsx
import { useMemo, useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import heroImage from "../../assets/images/About-Hero.png";

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    "Welcome to Marefat",
    "Our People",
    "Our Mission",
    // "History & Traditions",
    // "Virtual Tour",
    // "Faculty & Staff Directory",
    // "Strategic Vision",
    // "Marefat at a Glance",
    // "Diversity, Equity, Inclusion & Antiracism",
  ];

  // Map each menu item to a slug if it has a real route; otherwise null.
  // Order MUST match menuItems.
  const itemSlugs = [
    "welcome", // Welcome to Marefat
    "people", // Our People
    "mission", // Our Mission
    null, // History & Traditions (no route)
    null, // Virtual Tour (no route)
    null, // Faculty & Staff Directory (no route)
    null, // Strategic Vision (no route)
    null, // Marefat at a Glance (no route)
    null, // DEI (no route)
  ];

  // Local selection for non-routed items
  const [localActive, setLocalActive] = useState(null);

  // If the URL moves to a real nested route, clear the local highlight
  useEffect(() => {
    const onARealRoute = itemSlugs.some(
      (slug) => slug && location.pathname.startsWith(`/about/${slug}`)
    );
    if (onARealRoute) setLocalActive(null);
  }, [location.pathname]);

  // Only used to decide if hero is shown on the left
  const isOnAboutRoot = location.pathname === "/about";

  const handleClick = (index) => {
    const slug = itemSlugs[index];
    if (slug) {
      // Navigate to the real nested page
      navigate(`/about/${slug}`);
    } else {
      // Just highlight locally without navigating
      setLocalActive(index);
    }
  };

  return (
    <section className="flex flex-col md:flex-row bg-red-700">
      <div className="relative w-full md:w-2/3">
        {isOnAboutRoot ? (
          <>
            <img
              src={heroImage}
              alt="About Marefat"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="absolute top-10 md:top-12 left-8">
              <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                ABOUT <br /> MAREFAT
              </h1>
              <div className="mt-3 h-1 w-44 bg-red-700" />
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </div>

      <aside className="w-full md:w-1/3 bg-white p-8 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl leading-none hover:text-red-700"
          aria-label="Close"
        >
          ×
        </button>

        <ul className="space-y-3 text-lg">
          {menuItems.map((item, index) => {
            const slug = itemSlugs[index];
            const isActive = slug
              ? location.pathname.startsWith(`/about/${slug}`)
              : localActive === index;

            return (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={`cursor-pointer select-none transition-colors ${
                  isActive
                    ? "text-red-700 font-semibold"
                    : "text-gray-800 hover:text-red-400"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
}
