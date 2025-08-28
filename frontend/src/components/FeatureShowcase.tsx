import { useState, useEffect } from "react";
import { features } from "../data/features.ts";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);

  // Auto-update on scroll
  useEffect(() => {
    const handleScroll = () => {
     const section = document.getElementById("feature");
     if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = section.offsetTop;
     const scrollY = window.scrollY - sectionTop;

      if (rect.top <= 0 && rect.bottom >= 0) {
       const slice = section.offsetHeight / features.length;
       const index = Math.min(
       Math.floor(scrollY / slice),
      features.length - 1
        );
        setActive(index);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextFeature = () => {
    setActive((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActive((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div id="feature" className="relative h-[500vh]">
      {/* Sticky section */}
      <section
        id="feature-section"
        className="sticky top-0 flex flex-col md:flex-row items-center justify-between min-h-screen bg-white"
      >
        {/* Left Section */}
        <div className="flex-1 p-16">
          <h3 className="text-blue-500 font-semibold text-2xl text-center">
            {features[active].title}
          </h3>
          <h2 className="px-6 py-3 text-center rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold transition-all duration-300 ease-in-out mt-2 text-xl">
            {features[active].heading}
          </h2>
          <ul className="mt-4 text-gray-600 list-disc pl-6 space-y-2">
            {features[active].description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="flex gap-6 mt-8 text-2xl">
            <button
              className="cursor-pointer px-3 rounded-xl bg-gradient-to-r from-blue-100 via-blue-200 to-blue-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={prevFeature}
            >
              <ArrowLeft />
            </button>
            <button
              className="cursor-pointer px-3 rounded-xl bg-gradient-to-r from-blue-500 via-blue-200 to-blue-100 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={nextFeature}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Middle (Phone Image) */}
        <div className="flex-1 flex justify-center transition-all duration-300 ease-in-out cursor-pointer">
          <img
            src={features[active].image}
            alt="feature"
            className="max-h-[800px] rounded-xl"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6">
          <h3 className="text-lg font-semibold mb-4">Feature Showcase</h3>
          <ul className="space-y-4">
            {features.map((f, i) => (
              <li
                key={f.id}
                className={`cursor-pointer transition-all w-[250px] ${
                  i === active
                    ? "px-3 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-200 to-blue-100 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                }`}
                onClick={() => setActive(i)}
              >
                Feature {i + 1}: {f.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
