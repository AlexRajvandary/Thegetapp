import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react"
import "../index.css" // Для точек и оформления

interface CarouselProps {
  items: React.ReactNode[]; // список карточек
  visibleSlides?: number;   // сколько видно сразу
}

export default function Carousel({ items, visibleSlides = 3 }: CarouselProps) {
   const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
       mode: "free",
    slides: {
      perView: visibleSlides,
      spacing: 10,
    },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })

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
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`dot ${currentSlide === idx ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </>
   
  );
}
