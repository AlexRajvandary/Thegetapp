import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
  visibleSlides?: number;
  rows?: number;
}

export default function MultiRowsKeenSlider({
  items,
  visibleSlides = 3,
  rows = 1,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const slidesPerGroup = visibleSlides * rows;

  // Разбиваем на группы
  const groupedItems: React.ReactNode[][] = [];
  for (let i = 0; i < items.length; i += slidesPerGroup) {
    groupedItems.push(items.slice(i, i + slidesPerGroup));
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: 1, // показываем по одному «большому» слайду-группе
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const totalGroups = groupedItems.length;
  const currentGroup = currentSlide;

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {groupedItems.map((group, idx) => (
          <div
            key={idx}
            className="keen-slider__slide"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${visibleSlides}, minmax(0, 1fr))`,
              gridAutoRows: "100px",
              gap: "10px",
            }}
          >
            {group.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(totalGroups).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full ${
              idx === currentGroup ? "bg-gray-900" : "bg-gray-400"
            }`}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
