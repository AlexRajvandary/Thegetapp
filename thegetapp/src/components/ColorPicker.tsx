import clsx from "clsx";

type ColorPickerProps = {
  colors: string[];               // список всех доступных цветов (hex или названия)
  selectedColors: string[];       // текущие выбранные
  onChange: (selected: string[]) => void;
};

export default function ColorPicker({ colors, selectedColors, onChange }: ColorPickerProps) {
  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      onChange(selectedColors.filter(c => c !== color));
    } else {
      onChange([...selectedColors, color]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => toggleColor(color)}
          className={clsx(
            "w-8 h-8 rounded-full border-2 transition",
            selectedColors.includes(color) ? "border-blue-600 scale-110" : "border-gray-300",
          )}
          style={{ backgroundColor: color }}
          aria-label={`Color ${color}`}
        />
      ))}
    </div>
  );
}
