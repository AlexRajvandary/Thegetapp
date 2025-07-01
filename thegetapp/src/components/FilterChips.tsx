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
    <div className="flex flex-wrap gap-2 p-2">
      {chips.map((chip, idx) => (
        <Chip
          key={`${chip.type}-${chip.label}-${idx}`}
          onClose={() => onRemove(chip.type, chip.label)}
          className="bg-gray-200 text-sm"
        >
          {chip.label}
        </Chip>
      ))}
    </div>
  );
}
