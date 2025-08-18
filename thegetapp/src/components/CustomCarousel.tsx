import React, { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
  visibleSlides?: number;
  rows?: number;
}

export default function CustomCarousel({
  items,
  visibleSlides = 3,
  rows = 1,
}: CarouselProps) {
  const slidesPerPage = visibleSlides * rows;
  const totalPages = Math.ceil(items.length / slidesPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  // Группируем элементы на страницы
  const groupedItems: React.ReactNode[][] = [];
  for (let i = 0; i < items.length; i += slidesPerPage) {
    groupedItems.push(items.slice(i, i + slidesPerPage));
  }

  return (
    <div className="w-full max-w-screen-md mx-auto">
      {/* Слайды */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentPage * 100}%)`, width: `${totalPages * 100}%` }}
        >
          {groupedItems.map((group, idx) => (
            <div
              key={idx}
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${visibleSlides}, minmax(0, 1fr))`,
                gridAutoRows: "150px",
                width: `${100 / totalPages}%`,
                boxSizing: "border-box",
              }}
            >
              {group.map((item, i) => (
                <div key={i} className="flex items-center justify-center overflow-hidden">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Точки */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentPage ? "bg-gray-900" : "bg-gray-400"
            }`}
            aria-label={`Перейти к странице ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
