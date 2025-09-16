// src/pages/Alumni/Stories.jsx
import heroImage from "../../assets/images/Alumni-Stories-01.png";
import featuredImg from "../../assets/images/Alumni-Stories-02.png";

import img03 from "../../assets/images/Alumni-Stories-03.png";
import img04 from "../../assets/images/Alumni-Stories-04.png";
import img05 from "../../assets/images/Alumni-Stories-05.png";
import img06 from "../../assets/images/Alumni-Stories-06.png";
import img07 from "../../assets/images/Alumni-Stories-07.png";
import img08 from "../../assets/images/Alumni-Stories-08.png";
import img09 from "../../assets/images/Alumni-Stories-09.png";
import img10 from "../../assets/images/Alumni-Stories-10.png";
import img11 from "../../assets/images/Alumni-Stories-11.png";
import img12 from "../../assets/images/Alumni-Stories-12.png";
import img13 from "../../assets/images/Alumni-Stories-13.png";
import img14 from "../../assets/images/Alumni-Stories-14.png";
import img15 from "../../assets/images/Alumni-Stories-15.png";
import img16 from "../../assets/images/Alumni-Stories-16.png";
import img17 from "../../assets/images/Alumni-Stories-17.png";

export default function Stories() {
  // Featured story (big banner card)
  const featured = {
    category: "ACTIVISM",
    date: "AUGUST 14, 2024",
    title: "One Brave Alum Inspiring Others",
    author: "Rozella “Rozie” Kennedy ’11",
    summary:
      "Ask Rozie how her 18-year-old self would feel about the path ahead and she laughs: “I never imagined this!” " +
      "Today she manages philanthropic relationships at a cleantech accelerator—and still makes time for her passion project, " +
      "bringing clean-energy stories to the Marefat community.",
    cta: "Read the Story",
    img: featuredImg,
  };

  // Cards grid (03 → 17)
  const stories = [
    {
      img: img03,
      category: "FINANCE",
      date: "DECEMBER 12, 2023",
      title: "Not Afraid of Taking Risks",
      author: "Joelle Kayden ’12",
      role: "Founder and CEO, Accolade Partners",
    },
    {
      img: img04,
      category: "FINANCE",
      date: "DECEMBER 12, 2023",
      title: "An Unexpected Career in Finance",
      author: "Nancy Goldsmith Mistretta ’12",
      role: "Investor & Board Director",
    },
    {
      img: img05,
      category: "FINANCE",
      date: "DECEMBER 12, 2023",
      title: "Paving a New Path",
      author: "Carol Mathews ’14",
      role: "Financial Journalist",
    },
    {
      img: img06,
      category: "FINANCE",
      date: "DECEMBER 12, 2023",
      title: "Finance and Philanthropy",
      author: "Cynthia Oakes ’14",
      role: "Venture Philanthropist",
    },
    {
      img: img07,
      category: "FOOD",
      date: "JUNE 6, 2024",
      title: "Prepped for Anything",
      author: "Sara Moulton ’10",
      role: "Author and Chef",
    },
    {
      img: img08,
      category: "FOOD",
      date: "JUNE 6, 2024",
      title: "Limitless Possibilities",
      author: "Sabrina Sexton ’08",
      role: "Director of Culinary Education, ICE",
    },
    {
      img: img09,
      category: "FOOD",
      date: "JUNE 6, 2024",
      title: "Taught to Exceed Expectations",
      author: "Leticia Skai Young ’15",
      role: "Co-owner, LoLo’s Seafood Shack",
    },
    {
      img: img10,
      category: "FOOD",
      date: "JUNE 6, 2024",
      title: "Keeping It in the Family",
      author: "Laura Maioglio Blobel ’50",
      role: "Owner, Barbetta Restaurant",
    },
    {
      img: img11,
      category: "THE ARTS",
      date: "JUNE 6, 2024",
      title: "A Literary Legacy",
      author: "Judith Jones ’11",
      role: "Editor & Author",
    },
    {
      img: img12,
      category: "FOOD",
      date: "JUNE 6, 2024",
      title: "The Art of Cooking",
      author: "Amelia Hall ’13",
      role: "Sous Chef",
    },
    {
      img: img13,
      category: "THE ARTS",
      date: "JUNE 6, 2024",
      title: "A Marefat Girl Returns",
      author: "Elizabeth Stainton ’07",
      role: "Curator",
    },
    {
      img: img14,
      category: "THE ARTS",
      date: "JUNE 6, 2024",
      title: "Artists Inspiring Artists",
      author: "Meghan Boody ’12",
      role: "Artist",
    },
    {
      img: img15,
      category: "THE ARTS",
      date: "JUNE 6, 2024",
      title: "A Lifetime of Music",
      author: "Mary Rodgers Guettel ’08",
      role: "Composer & Lyricist",
    },
    {
      img: img16,
      category: "THE ARTS",
      date: "JUNE 6, 2024",
      title: "A Dancer, Choreographer and Director’s Marefat Roots",
      author: "Lucinda Childs ’06",
      role: "Choreographer & Director",
    },
    {
      img: img17,
      category: "THE ARTS",
      date: "JUNE 6, 2024",
      title: "From Winning a Tony to a Magazine Cover",
      author: "Diane Paulus ’04",
      role: "Artistic Director",
    },
  ];

  return (
    <main className="w-full">
      {/* ===== HERO ===== */}
      <section className="relative w-full h-[calc(100vh-72px)] overflow-hidden">
        <img
          src={heroImage}
          alt="Marefat alumni at a stories gathering"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 border-[6px] border-white" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide">
              ALUMNI STORIES
            </h1>
            <div className="mt-6 flex flex-col items-center">
              <div className="h-[3px] w-80 max-w-[70vw] bg-white" />
              <span className="block w-3 h-3 bg-white rotate-45 -mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED STORY ===== */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-[1180px] px-4 md:px-8 py-14">
          <article className="grid lg:grid-cols-2 bg-neutral-900 text-white rounded-md overflow-hidden">
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <img
                src={featured.img}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10 lg:p-12">
              <p className="uppercase tracking-widest text-sm text-red-400">
                {featured.category}
                <span className="mx-3 text-white/50">|</span>
                {featured.date}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 leading-tight">
                {featured.title}
              </h2>
              <p className="mt-3 text-red-200 tracking-wide">
                {featured.author}
              </p>
              <div className="mt-6 text-white/80 leading-7">
                {featured.summary}
              </div>
              <button className="mt-8 inline-block border border-white/30 px-5 py-2 rounded hover:bg-white hover:text-neutral-900 transition">
                {featured.cta}
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* ===== STORIES GRID ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-4 md:px-8 pb-20">
          <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, idx) => (
              <article key={idx} className="group">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <p className="mt-4 uppercase tracking-widest text-xs text-red-600">
                  {s.category}
                  <span className="mx-3 text-gray-400">|</span>
                  {s.date}
                </p>

                <h3 className="font-serif text-2xl mt-2 leading-snug text-gray-900">
                  {s.title}
                </h3>

                <p className="mt-2 text-gray-700">{s.author}</p>
                {s.role && (
                  <p className="text-gray-500 text-sm italic">{s.role}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
