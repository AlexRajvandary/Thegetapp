import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface CarouselProps {
  items: React.ReactNode[]; // список карточек
  visibleSlides?: number;   // сколько видно сразу
}

export default function Carousel({ items, visibleSlides = 3 }: CarouselProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: visibleSlides,
      spacing: 10,
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, idx) => (
          <div className="keen-slider__slide" key={idx}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
