import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../index.css" // Для точек и оформления

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel( {images} : ImageCarouselProps ) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
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
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, index) => (
            <div className="keen-slider__slide" key={index}>
              <img src={src} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
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
  )
}
