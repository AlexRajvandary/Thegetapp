import React, { useState } from "react";

export type StepDetails = {
  title: string;
  datetime: string;
  extra?: React.ReactNode;
};

type Props = {
  steps: StepDetails[];
};

export const OrderTimeline: React.FC<Props> = ({ steps }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 relative">
      {/* Вертикальная линия */}
      <div className="absolute left-[7.4px] top-0 bottom-0 w-0.5 bg-gray-300 z-0" />

      {/* Таймлайн */}
      <div className="space-y-6 relative z-10">
        {steps.map((step, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div key={step.title} className="pl-6 relative">
              {/* Кольцо с дыркой */}
              <div className="absolute left-0 top-1.5 w-4 h-4 border-4 border-black rounded-full bg-white z-10" />

              <div
                className="cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-thin text-black">{step.title}</h3>
                  <span className="text-sm text-black">{step.datetime}</span>
                </div>
              </div>

              {isOpen && step.extra && (
                <div className="mt-3 ml-2 p-3 bg-gray-50 border rounded-lg text-sm text-gray-500">
                  {step.extra}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
