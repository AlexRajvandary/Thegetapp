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
      spacing: 200,
      origin: "center",
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const nextImage = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + images.length) % images.length);
    }
  };

  // Закрытие по Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Main gallery with buttons */}
      <div className="relative flex items-center justify-center w-full">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 ml-2 hover:scale-110 transition-transform"
          aria-label="Previous slide"
        >
          <svg
            width="10px"
            height="18px"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.75 8.31066L0.969673 1.53033L2.03033 0.469666L9.25 7.68934V10.3107L2.03033 17.5303L0.969673 16.4697L7.75 9.68934V8.31066Z"
              fill="black"
            />
          </svg>
        </button>

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
                onClick={() => openModal(index)}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 mr-2 hover:scale-110 transition-transform"
          aria-label="Next slide"
        >
          <svg
            width="10px"
            height="18px"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.75 8.31066L0.969673 1.53033L2.03033 0.469666L9.25 7.68934V10.3107L2.03033 17.5303L0.969673 16.4697L7.75 9.68934V8.31066Z"
              fill="black"
            />
          </svg>
        </button>
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
              className="w-full h-[90px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
     {modalIndex !== null && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
    onClick={closeModal}
  >
    <div
      className="relative w-full max-w-screen-md px-8"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Крестик */}
  <button
    onClick={closeModal}
    className="absolute top-[-25px] right-[-20px] text-white text-[40px] z-50 hover:scale-110 transition-transform"
    aria-label="Close modal"
  >
    &times;
  </button>
      {/* Стрелка "Назад" */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-50 p-4 text-white hover:scale-110 transition-transform"
        aria-label="Previous image"
      >
        <svg
          width="10px"
          height="18px"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.75 8.31066L0.969673 1.53033L2.03033 0.469666L9.25 7.68934V10.3107L2.03033 17.5303L0.969673 16.4697L7.75 9.68934V8.31066Z"
            fill="white"
          />
        </svg>
      </button>

      {/* Картинка */}
      <img
        src={images[modalIndex]}
        alt="Full view"
        className="max-h-[90vh] mx-auto object-contain"
      />

      {/* Стрелка "Вперёд" */}
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-50 p-4 text-white hover:scale-110 transition-transform"
        aria-label="Next image"
      >
        <svg
          width="10px"
          height="18px"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.75 8.31066L0.969673 1.53033L2.03033 0.469666L9.25 7.68934V10.3107L2.03033 17.5303L0.969673 16.4697L7.75 9.68934V8.31066Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
)}

    </div>
  );
}
