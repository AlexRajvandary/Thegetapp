import React, { useState } from "react";
import clsx from "clsx";
import { Input, Slider } from "@heroui/react";
import { RussianRuble } from "lucide-react";

const histogramData = [
  30, 50, 57, 48, 30, 33, 69, 86, 76, 68, 81, 56, 44, 30, 50, 30,
  30, 55, 79, 76, 85, 86, 66, 68, 50, 90, 30, 53, 30, 82, 56, 35,
];

export default function FancyHistogramSlider() {
  const [range, setRange] = useState<[number, number]>([5, 25]);

  const [min, max] = range;
  const maxIndex = histogramData.length - 1;

    const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    if (isNaN(val)) return;
    if (val < 0) val = 0;
    if (val > max) val = max; // мин не может быть больше макс
    setRange([val, max]);
  };

  const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    if (isNaN(val)) return;
    if (val > maxIndex) val = maxIndex;
    if (val < min) val = min; // макс не может быть меньше мин
    setRange([min, val]);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      {/* Histogram */}
      <div className="flex h-24 items-end justify-between gap-[1px] mb-2">
        {histogramData.map((value, i) => {
          const inRange = i >= min && i <= max;
          return (
            <span
              key={i}
              data-in-range={inRange}
              className={clsx(
                "relative w-[3px] h-full rounded-full bg-gray-200 after:absolute after:bottom-0 after:h-0 after:w-full after:rounded-full after:bg-blue-500 after:transition-all after:duration-500 after:content-['']",
                inRange && "after:h-full"
              )}
              style={{ height: `${value}%` }}
            />
          );
        })}
      </div>

  
      {/* Slider */}
      <Slider
        className="max-w-md"
        value={range}
        onChange={(val) => setRange(val as [number, number])}
        formatOptions={{style: "currency", currency: "USD"}}
        minValue={0}
        maxValue={maxIndex}
        step={1}
        size="sm"
      />

      {/* Inputs */}
      <div className="flex justify-between mt-2 text-sm text-gray-600 max-w-md">
        <Input
          type="number"
          startContent={<RussianRuble/>}
          value={min.toString()}  
          onChange={onMinChange}
          min={0}
          max={max}
          className="w-100 p-1"
        />
        <Input
          type="number"
          startContent={<RussianRuble />}
          value={max.toString()}
          onChange={onMaxChange}
          min={min}
          max={maxIndex}
          className="w-100 p-1"
        />
      </div>
    </div>
  );
}
