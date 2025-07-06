import { Chip } from "@heroui/react";

type ChipGroupProps = {
  categories: string[];
  brands: string[];
  colors: string[];
  sizes: string[];
  genders: string[];
  priceRange: [number, number];
  onRemove: (type: string, value: string) => void;
};

export default function FilterChips({
  categories,
  brands,
  colors,
  sizes,
  genders,
  priceRange,
  onRemove,
}: ChipGroupProps) {
  const chips = [
    ...categories.map((c) => ({ type: "category", label: c })),
    ...brands.map((b) => ({ type: "brand", label: b })),
    ...colors.map((c) => ({ type: "color", label: c })),
    ...sizes.map((s) => ({ type: "size", label: s })),
    ...genders.map((g) => ({ type: "gender", label: g })),
    ...(priceRange[0] !== 0 || priceRange[1] !== 1000
      ? [{ type: "price", label: `$${priceRange[0]} - $${priceRange[1]}` }]
      : []),
  ];

  return (
    <div className="flex flex-wrap gap-2 px-1 pb-3">
      {chips.map((chip, idx) => {
        const isColor = chip.type === "color";
        return (
          <Chip
            key={`${chip.type}-${chip.label}-${idx}`}
            onClose={() => onRemove(chip.type, chip.label)}
            className="bg-gray-200 text-sm font-mono"
          >
            <div className="flex items-center gap-1">
              {isColor && (
                <span
                  className="w-3 h-3 rounded-full border"
                  style={{ backgroundColor: chip.label }}
                />
              )}
              {!isColor && <span>{chip.label}</span>}
              {isColor && (
                <span className="capitalize">
                  {chip.label}
                </span>
              )}
            </div>
          </Chip>
        );
      })}
    </div>
  );
}
