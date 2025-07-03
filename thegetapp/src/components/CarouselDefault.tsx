import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../index.css"; // Для точек и оформления

interface CarouselProps {
  items: React.ReactNode[]; // список карточек
  visibleSlides?: number;   // сколько видно сразу
}

export default function CarouselDefault({ items, visibleSlides = 3 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: visibleSlides,
      spacing: 0,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Количество слайдов-групп по visibleSlides
  const totalGroups = instanceRef.current
    ? Math.ceil(instanceRef.current.track.details.slides.length / visibleSlides)
    : 0;

  // Текущая группа для подсветки точки
  const currentGroup = Math.floor(currentSlide / visibleSlides);

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {items.map((item, idx) => (
            <div className="keen-slider__slide" key={idx}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(totalGroups).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx * visibleSlides)}
              className={`dot ${currentGroup === idx ? "active" : ""}`}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
