import { useEffect, useState } from "react";

const messages = [
  "We believe in the power of every young mind.",
  "We believe Marefat learning lasts a lifetime.",
  "We believe in shaping a world for the greater good.",
  "We believe academic excellence is the first step.",
  "We believe character is the heart of true success.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-red-700 py-8 md:py-12 px-4">
      {/* White window with white border holding video and text */}
      <div className="max-w-8xl mx-auto border-8 border-white bg-white flex flex-col md:flex-row overflow-hidden">
        {/* Video: roughly 3/4 of the width on larger screens */}
        <div className="w-full md:w-3/4">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="/src/assets/videos/Marefat-International-High-School.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text: roughly 1/4 of the width */}
        <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
          <p className="text-4xl md:text-5xl font-serif leading-snug text-gray-900 text-center transition-opacity duration-500 ease-in-out">
            <span className="text-red-700 font-semibold">
              {messages[index].split(" ")[0] +
                " " +
                messages[index].split(" ")[1]}
            </span>
            {" " + messages[index].split(" ").slice(2).join(" ")}
          </p>
        </div>
      </div>
    </section>
  );
}
