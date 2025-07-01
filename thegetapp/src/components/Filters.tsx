import React from "react";
import { Accordion, AccordionItem, Checkbox, Slider, CheckboxGroup } from "@heroui/react";
import ColorPicker from "./ColorPicker";

type FiltersProps = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedGenders: string[];
  setSelectedGenders: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
};

const categories = ["Футболки", "Куртки", "Обувь", "Аксессуары"];
const brands = ["Adidas", "Nike" , "Rebook"];
const availableColors = [
    "black",
    "white",
    "gray",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "#8b5cf6", // фиолетовый
    "#ec4899", // розовый
  ];
const sizes = ["S", "M", "L", "XL"];
const genders = ["Мужской", "Женский", "Унисекс"];

export default function Filters({
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  selectedGenders,
  setSelectedGenders,
  priceRange
}: FiltersProps) {
  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <Accordion variant="shadow">
      <AccordionItem title="Категория">
        <div className="flex flex-col space-y-2 mt-2">
            <CheckboxGroup label="Категория">
                 {categories.map((cat) => (
            <Checkbox
              key={cat}
              checked={selectedCategories.includes(cat)}
              onChange={() =>
                toggleSelection(cat, selectedCategories, setSelectedCategories)
              }
             value={cat}
            >{cat}</Checkbox>
          ))}
            </CheckboxGroup>
         
        </div>
      </AccordionItem>

       <AccordionItem title="Бренд">
        <div className="flex flex-col space-y-2 mt-2">
            <CheckboxGroup label="Бренд">
                 {brands.map((cat) => (
            <Checkbox
              key={cat}
              checked={selectedBrands.includes(cat)}
              onChange={() =>
                toggleSelection(cat, selectedBrands, setSelectedBrands)
              }
             value={cat}
            >{cat}</Checkbox>
          ))}
            </CheckboxGroup>
         
        </div>
      </AccordionItem>

      <AccordionItem title="Цвет">
        <div className="flex flex-col space-y-2 mt-2">
            <ColorPicker colors={availableColors} selectedColors={selectedColors} onChange={setSelectedColors}/>
       
        </div>
      </AccordionItem>

      <AccordionItem title="Цена, $">
        <div className="mt-4 px-2">
          <Slider
      className="max-w-md"
      defaultValue={[100, 500]}
      formatOptions={{style: "currency", currency: "USD"}}
      label="Price Range"
      maxValue={1000}
      minValue={0}
      step={50}
    />
          <div className="flex justify-between mt-2 text-sm">
            <span>{priceRange[0]}</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Размер">
        <div className="flex flex-col space-y-2 mt-2">
            <CheckboxGroup>
                 {sizes.map((size) => (
            <Checkbox
              key={size}
              checked={selectedSizes.includes(size)}
              onChange={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
              value={size}
            >{size}</Checkbox>
          ))}
            </CheckboxGroup>
         
        </div>
      </AccordionItem>

      <AccordionItem title="Пол">
        <div className="flex flex-col space-y-2 mt-2">
            <CheckboxGroup label="Пол">
                 {genders.map((gender) => (
            <Checkbox
              key={gender}
              checked={selectedGenders.includes(gender)}
              onChange={() => toggleSelection(gender, selectedGenders, setSelectedGenders)}
              value={gender}
            >{gender}</Checkbox>
          ))}
            </CheckboxGroup>
         
        </div>
      </AccordionItem>
    </Accordion>
  );
}
