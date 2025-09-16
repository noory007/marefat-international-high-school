// src/pages/Alumni/Association.jsx
import heroImage from "../../assets/images/Alumni-Association-01.png";

// use existing female portraits from your assets
import ChristinaClemente from "../../assets/images/Christina-Clemente.png";
import JenniferStewart from "../../assets/images/Jennifer-Stewart.png";
import CarolynClark from "../../assets/images/Carolyn-Clark.png";

export default function Association() {
  // officers: mapped to existing portraits
  const officers = [
    { name: "Megan Lui ’10", title: "President", img: CarolynClark },
    {
      name: "Christina Morales ’09",
      title: "Vice President",
      img: ChristinaClemente,
    },
    { name: "Nichole Davis ’06", title: "Secretary", img: JenniferStewart },
  ];

  const members = [
    {
      heading: "TO SERVE UNTIL 2026",
      people: [
        "Leslie Armstrong — Class of 1958",
        "Antonia Bryan — Class of 1963",
        "Cherise Fisher — Class of 1990",
        "Felicia Lugo Grant — Class of 1994",
        "Laura Habian — Class of 2016",
        "Yeou-Cheng Ma — Class of 1969",
        "Mina Mahmood — Class of 2015",
        "Sophie Waskow Rifkin — Class of 2003",
      ],
    },
    {
      heading: "TO SERVE UNTIL 2027",
      people: [
        "Penelope August — Class of 2000",
        "Nichole Davis — Class of 2006",
        "Vasavi Devireddy — Class of 2004",
        "Chelsea Douglas — Class of 2013",
        "Christina Morales — Class of 2009",
      ],
    },
    {
      heading: "TO SERVE UNTIL 2028",
      people: [
        "Lucie Aidinoff — Class of 1974",
        "Alison Anthoine — Class of 1970",
        "Eleana Chang — Class of 1992",
        "Victoria Rowan — Class of 1987",
        "Sarvi Shahbazi — Class of 2012",
        "Hannah Waxman — Class of 2015",
        "Ella Wickham — Class of 2020",
      ],
    },
  ];

  const committees = [
    {
      title: "Alumni Weekend & Reunion",
      chairs: "Mina Mahmood ’15, Leontine Narcisse-Ogera ’91",
    },
    {
      title: "Arts",
      chairs: "Julie Satow ’92, Hannah McGovern Gross ’09, Nix LoPinto ’14",
    },
    {
      title: "Elder Committee",
      chairs: "Alison Anthoine ’70, Lale Armstrong ’58",
    },
    {
      title: "Frances Riker Davis Award",
      chairs: "Lucy Mayer Harrop ’70, Cherise Fisher ’90, Vasavi Devireddy ’04",
    },
    {
      title: "Life After Marefat (LAM)",
      chairs:
        "Felicia Lugo Grant ’94, Laura Habian ’16, Sophie Waskow Rifkin ’03",
    },
    { title: "Lois Kahn Wallace Award", chairs: "Margot Herrera ’80" },
    { title: "Miller Society", chairs: "Andréa Matos ’88, Michelle Webb ’85" },
    { title: "Nominations", chairs: "Nichole Davis ’06, Jaqueline Worth ’82" },
    {
      title: "Parents’ Association",
      chairs: "Eleana Cheng ’92, Sayuri Kaczynski ’96",
    },
    {
      title: "Queerly Marefat",
      chairs: "Sara Chaganti ’91, Taylor Hosking ’13, Alexa Jordan ’13",
    },
    { title: "Truth and Toil Committee", chairs: "Megan Lui ’10" },
    {
      title: "Young Alumni: Classes 2011–2025",
      chairs: "Chelsea Douglas ’13, Mina Mahmood ’15",
    },
  ];

  return (
    <main className="w-full">
      {/* ===== HERO ===== */}
      <section className="relative w-full h-[calc(100vh-72px)] overflow-hidden">
        <img
          src={heroImage}
          alt="Alumni Association banquet"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="pointer-events-none absolute inset-0 border-[6px] border-white" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide">
              ALUMNI ASSOCIATION
            </h1>
            <div className="mt-6 flex flex-col items-center">
              <div className="h-[3px] w-80 max-w-[70vw] bg-white" />
              <span className="block w-3 h-3 bg-white rotate-45 -mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WELCOME / LETTER ===== */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-[1050px] bg-white px-6 md:px-12 py-16 md:py-20">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-[64px] tracking-tight text-gray-900">
            Welcome Back to Marefat
          </h2>
          <div className="mt-6 h-[3px] w-44 bg-red-600" />

          <div className="mt-10 grid md:grid-cols-12 gap-8 text-[18px] leading-8 text-gray-800">
            <div className="md:col-span-5">
              <p className="font-serif text-2xl">Dear Alums,</p>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p>
                As we began this academic year, the Alumni Board toured the new
                library. Alongside a little nostalgia for the old spaces, we
                felt real excitement at the sunny windows, cozy nooks and
                refreshed rooms—a reminder that progress brings many feelings,
                and that’s okay.
              </p>
              <p>
                In parallel with campus renovations, the school continues a
                renewal of purpose—reflected in our Diversity, Equity and
                Inclusion and Antiracism commitments and strategic vision. We
                invite you to read more and join us as <strong>Marefat</strong>{" "}
                evolves.
              </p>
              <p>
                This year, our priority is to make space for dialogue and
                vulnerability through programs we organize. Wherever you are in
                life, we hope you’ll find empathy, guidance and community here.
                Stay up-to-date through official school emails, the{" "}
                <em>Bulletin</em>, social media, and by attending Alumni Board
                events.
              </p>
              <p className="mt-6">
                Thank you,
                <br />
                <strong>Megan Lui ’10</strong>
              </p>
            </div>
          </div>

          {/* ===== OFFICERS ===== */}
          <div className="mt-20">
            <h3 className="font-serif text-2xl sm:text-3xl text-gray-900">
              Officers
            </h3>
            <div className="mt-3 h-[3px] w-24 bg-red-600" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((o) => (
                <div
                  key={o.name}
                  className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white"
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    {o.img ? (
                      <img
                        src={o.img}
                        alt={o.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl font-semibold text-gray-600">
                        {o.name
                          .replace(/[’']/g, "")
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((s) => s[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-serif text-xl text-gray-900">{o.name}</p>
                    <p className="text-gray-600 mt-1">{o.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== MEMBERS ===== */}
          <div className="mt-20">
            <h3 className="font-serif text-2xl sm:text-3xl text-gray-900">
              Members
            </h3>
            <div className="mt-3 h-[3px] w-24 bg-red-600" />

            <div className="mt-10 grid gap-12 md:grid-cols-3">
              {members.map((group) => (
                <div key={group.heading}>
                  <h4 className="font-semibold tracking-wide text-gray-900">
                    {group.heading}
                  </h4>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    {group.people.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ===== COMMITTEES ===== */}
          <div className="mt-20">
            <h3 className="font-serif text-2xl sm:text-3xl text-gray-900">
              Committees
            </h3>
            <div className="mt-3 h-[3px] w-28 bg-red-600" />

            <div className="mt-8 divide-y">
              {committees.map((c) => (
                <div
                  key={c.title}
                  className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="font-serif text-xl text-gray-900">{c.title}</p>
                  <p className="text-gray-600 mt-2 sm:mt-0">
                    <span className="italic">Chairs:&nbsp;</span>
                    {c.chairs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
