import { useState, useEffect } from "react";
import { features } from "../data/features.ts";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);

  // Auto-update on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const section = document.getElementById("feature");
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              const slice = sectionHeight / features.length;
              const index = Math.min(
                Math.floor((scrollY - sectionTop) / slice),
                features.length - 1
              );
              setActive(index);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextFeature = () => setActive((prev) => (prev + 1) % features.length);
  const prevFeature = () =>
    setActive((prev) => (prev - 1 + features.length) % features.length);

  return (
    <div id="feature" className="relative h-[500vh]">
      {/* Sticky section */}
      <section
        id="feature-section"
        className="sticky top-0 flex flex-col md:flex-row md:items-center justify-between min-h-screen bg-white"
      >
        {/* Left Section (desktop) */}
        <div className="flex-1 p-16 hidden md:block transition-all duration-500 ease-in-out">
          <h3 className="text-blue-500 font-semibold text-2xl text-center">
            {features[active].title}
          </h3>
          <h2 className="px-6 py-3 text-center rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold transition-all duration-500 ease-in-out mt-2 text-xl">
            {features[active].heading}
          </h2>
          <ul className="mt-4 text-gray-600 list-disc pl-6 space-y-2">
            {features[active].description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="flex gap-6 mt-8 text-2xl justify-center">
            <button
              className="cursor-pointer px-3 rounded-xl bg-gradient-to-r from-blue-100 via-blue-200 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              onClick={prevFeature}
            >
              <ArrowLeft />
            </button>
            <button
              className="cursor-pointer px-3 rounded-xl bg-gradient-to-r from-blue-500 via-blue-200 to-blue-100 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              onClick={nextFeature}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Middle (Phone Image) */}
        <div className="flex-1 flex justify-center transition-all duration-700 ease-in-out cursor-pointer">
          <img
            src={features[active].image}
            alt="feature"
            className="md:max-h-[800px] max-h-[400px] opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Mobile view */}
          <div className="flex-1 px-4 mt-[-70px] py-10 md:hidden block text-center">
            <h3 className="text-blue-500 font-semibold text-lg">
              {features[active].title}
            </h3>
            <h2 className="text-sm py-2 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold transition-all duration-300 ease-in-out mt-2">
              {features[active].heading}
            </h2>
            <ul className="mt-4 text-gray-600 list-disc pl-6 space-y-2 text-xs text-left">
              {features[active].description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <div className="flex gap-6 mt-8 text-xl justify-center">
              <button
                className="cursor-pointer px-3 rounded-xl bg-gradient-to-r from-blue-100 via-blue-200 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                onClick={prevFeature}
              >
                <ArrowLeft />
              </button>
              <button
                className="cursor-pointer px-3 rounded-xl bg-gradient-to-r from-blue-500 via-blue-200 to-blue-100 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                onClick={nextFeature}
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Feature List (desktop right) */}
          <div className="flex-1 p-12 hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Feature Showcase</h3>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li
                  key={f.id}
                  className={`cursor-pointer transition-all w-[250px] ${
                    i === active
                      ? "px-3 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-200 to-blue-100 text-white font-semibold shadow-lg scale-105"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActive(i)}
                >
                  Feature {i + 1}: {f.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
