import { useMemo } from "react";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import heroImage from "../../assets/images/About-Hero.png";

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const slugs = ["welcome", "people", "mission"];

  const activeIndex = useMemo(() => {
    const idx = slugs.findIndex((s) =>
      s === "welcome" ? false : location.pathname.startsWith(`/about/${s}`)
    );
    return idx === -1 ? null : idx;
  }, [location.pathname]);

  const isOnAboutRoot = location.pathname === "/about";

  const handleClick = (index) => {
    if (slugs[index] === "welcome") navigate("/about/welcome");
    else navigate(slugs[index]);
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
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer select-none transition-colors
                ${
                  activeIndex === index
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
