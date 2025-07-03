import { useState, useEffect, type MutableRefObject } from "react";
import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderPlugin, KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";

type Props = {
  images: string[];
};

const ThumbnailPlugin = (
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin => {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide: HTMLElement) => {
        slide.classList.remove("active");
      });
    }

    function addActive(idx: number) {
      slider.slides[idx]?.classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide: HTMLElement, idx: number) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) {
            mainRef.current.moveToIdx(idx);
          }
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();

      mainRef.current.on("animationStarted", (main: KeenSliderInstance) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
};

export default function ImageGallery({ images }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 0,
      origin: "center",
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 10,
        spacing: 0,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center justify-center w-full">
        <div ref={sliderRef} className="keen-slider overflow-hidden w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center"
            >
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="max-w-full max-h-[700px] object-contain cursor-zoom-in"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div ref={thumbnailRef} className="keen-slider thumbnail max-w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide cursor-pointer transition border-2 opacity-[50%] [&.active]:opacity-[100%]"
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-[40px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
