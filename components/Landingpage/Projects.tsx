'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

const projects = {
  title: "Our Projects",
  subtitle: "See how our precision LED installations elevate retail, corporate, and outdoor spaces nationwide",
  featured: [
    { title: "Fauji Fertilizer Company", subtitle: "P-2.5 SMD LED Video Wall", image: "/images/FFC.jpeg" },
    { title: "Air Weapons Complex", subtitle: "P-3.9 Portable SMD LED Video Wall", image: "/images/AVC.jpeg" },
  ]
};

export default function Projects() {
  const TOTAL_PAGES = 5;
  const SLIDE_INTERVAL = 4000;

  // 4 per page — repeat the 2 base projects to fill
  const allProjects = useMemo(() => {
    const base = projects.featured;
    const page = [...base, ...base]; // 4 items per page
    return Array(TOTAL_PAGES).fill(page).flat();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold text-[#00AEEF] mb-2 sm:mb-3">
            {projects.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-outfit font-normal text-[#7a7f8e]">
            {projects.subtitle}
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto mb-8 sm:mb-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => (
              <div key={pageIndex} className="flex-shrink-0 w-full flex flex-row gap-4 md:gap-6">
                {allProjects.slice(pageIndex * 4, pageIndex * 4 + 4).map((project, i) => (
                  <div key={`${pageIndex}-${i}`} className="group flex-1 min-w-0">
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="eager"
                        className="w-full h-36 sm:h-40 md:h-44 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xs sm:text-sm md:text-base font-outfit font-medium text-[#0f141e] mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-outfit font-normal text-[#7a7f8e]">
                      {project.subtitle}
                    </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 sm:gap-4">
          {Array.from({ length: TOTAL_PAGES }).map((_, dot) => (
            <button
              key={dot}
              onClick={() => setCurrentPage(dot)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 ${
                dot === currentPage ? 'bg-[#14a4e9] border-[#14a4e9]' : 'bg-white border-gray-300'
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}