// src/pages/About/Welcome.jsx
import heroImage from "../../assets/images/WelcometoMarefat.png";
import headshot from "../../assets/images/AZIZULLAH-ROYESH.png";
import Footer from "../../components/Footer"; // <-- added

export default function Welcome() {
  return (
    <main className="w-full">
      {/* ===== HERO with edge frame ===== */}
      <section className="relative w-full h-[calc(100vh-72px)] overflow-hidden">
        <img
          src={heroImage}
          alt="Welcome to Marefat"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/35 z-10" />
        <div className="pointer-events-none absolute inset-0 z-20 border-[6px] border-white" />

        <div className="relative z-30 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-white leading-tight tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              WELCOME TO MAREFAT
            </h1>
            <div className="mt-6 flex flex-col items-center">
              <div className="h-[3px] w-72 max-w-[60vw] bg-white/90" />
              <span className="block w-3 h-3 bg-white rotate-45 -mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LETTER SECTION ===== */}
      <section className="w-full bg-gray-100">
        {/* Centered white column so text never touches the gray sides */}
        <div className="mx-auto max-w-[1050px] bg-white px-6 md:px-12 py-16 md:py-20">
          {/* Header row: image + big headline aligned on the same top edge */}
          <div className="md:flex md:items-start md:gap-12">
            {/* Circular headshot */}
            <div className="flex md:block justify-center md:justify-start shrink-0 md:-ml-[6rem] lg:-ml-[8rem] xl:-ml-[10rem] 2xl:-ml-[12rem]">
              <div className="inline-block rounded-full bg-white p-2 shadow-md outline outline-1 outline-gray-200">
                <img
                  src={headshot}
                  alt="Azizullah Royesh, Head of School"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Big heading (lowered a bit as requested) */}
            <div className="mt-8 md:mt-4 lg:mt-6">
              <h2 className="font-serif text-gray-900 tracking-tight leading-[1.05] text-3xl sm:text-5xl md:text-[64px]">
                Welcome from Azizullah Royesh,{" "}
                <span className="whitespace-nowrap">Head of School!</span>
              </h2>
              <div className="mt-6 h-[3px] w-40 bg-red-600" />
            </div>
          </div>

          {/* Body copy — CENTERED so left/right spacing to gray borders is equal */}
          <div className="mt-10 mx-auto max-w-[920px] space-y-6 text-[18px] leading-8 text-gray-800">
            <p>
              As the Head of Marefat International School, I am honored to
              invite you to learn more about this community where the love of
              learning and a commitment to excellence are woven into the fabric
              of our school experience. Education has been my personal and
              professional calling for many years, and I know it to be singular
              in its ability to help young people find their voice and purpose.
            </p>

            <p>
              At Marefat International School, we believe in the power and
              promise of students of adventurous intellect and diverse
              backgrounds. For years, the school has empowered students to
              discover the strength of their mind and spirit. Our students are
              steadfast in their love of learning and undaunted by hard work.
              They are originals—authentically themselves in their academic
              work, pursuits outside of the classroom, and in their deep and
              joyful friendships, which will serve them over a lifetime.
            </p>

            <p>
              We invite you to explore what makes Marefat International School
              extraordinary and unique.
            </p>

            <div className="pt-4">
              <p>I look forward to meeting you,</p>
              <p className="mt-6 font-semibold">Azizullah Royesh</p>
              <p>Head of School</p>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER (added, no other code touched) === */}
      <Footer />
    </main>
  );
}
