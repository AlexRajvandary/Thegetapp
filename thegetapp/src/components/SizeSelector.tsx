import { Button } from "@heroui/react";
import React from "react";

type Props = {
  sizes: string[];
  selectedSizes: string[];
  toggleSelection: (
    size: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => void;
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  columns?: number; // по умолчанию 4
};

export default function SizeGridMultiSelect({
  sizes,
  selectedSizes,
  toggleSelection,
  setSelectedSizes,
  columns = 4,
}: Props) {
  return (
    <div
      className={`grid gap-2 mx-auto mb-[30px]`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {sizes.map((size) => {
        const selected = selectedSizes.includes(size);

        return (
          <Button
            key={size}
            size="sm"
            type="button"
            onPress={() =>
              toggleSelection(size, selectedSizes, setSelectedSizes)
            }
            className={`h-8 w-10 text-s border transition font-black ${
                 selected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400"
                }`}
          >
            {size}
          </Button>
        );
      })}
    </div>
  );
}
