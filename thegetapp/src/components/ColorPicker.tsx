import { Avatar } from "@heroui/react";
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
      
        {colors.map((color) => {
   
    return (
      <Avatar
      isBordered
      fallback={<div className="w-full h-full bg-red-500 rounded-full" />} 
      key={color}
      onClick={() => toggleColor(color)}
      color = {selectedColors.includes(color)  ? "primary" : "default"}
      style={{ backgroundColor: color }}
      aria-label={`Color ${color}`}
      className={clsx(
            "w-8 h-8 rounded-full border-2 transition",
            selectedColors.includes(color) ? "scale-110" : "",
          )}
          
      />
    );
  })}
    </div>
  );
}
