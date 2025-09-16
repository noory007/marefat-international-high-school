// src/components/Footer.jsx

const SCHOOL = {
  name: "Marefat International High School",
  address: ["Karte 4, Kabul", "Kabul, Afghanistan"],
  phone: "T: (+93) 000 000 000",
  fax: "F: (+93) 000 000 001",
  email: "info@marefat.edu.af",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Youtube", href: "#" },
    { label: "Twitter", href: "#" },
  ],
  links: [
    { label: "Contact and Directions", href: "/contact" },
    { label: "Academic Calendar", href: "/latest/calendar" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] text-gray-200">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-14">
        {/* Two-column layout (logo removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column: school info + socials */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              {SCHOOL.name}
            </h3>

            <div className="mt-6 space-y-1 text-[15px] leading-7">
              {SCHOOL.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div className="mt-2">{SCHOOL.phone}</div>
              <div>{SCHOOL.fax}</div>
              <a
                className="text-gray-200 underline underline-offset-4 decoration-gray-500 hover:text-white"
                href={`mailto:${SCHOOL.email}`}
              >
                {SCHOOL.email}
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-[15px]">
              {SCHOOL.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column: quick links */}
          <div className="md:pl-10">
            <ul className="space-y-4 text-[15px]">
              {SCHOOL.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="uppercase tracking-wide hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* small bottom line (optional) */}
        <div className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
