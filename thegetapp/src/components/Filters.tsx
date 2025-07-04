import React from "react";
import { Accordion, AccordionItem, Checkbox, CheckboxGroup } from "@heroui/react";
import ColorPicker from "./ColorPicker";
import PriceRangeSlider from "./SliderHistogram";

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
    <Accordion variant="shadow" selectionMode="multiple" defaultExpandedKeys={["1", "2"]}>
        <AccordionItem title="Цена" key="1">
        <div>
        <PriceRangeSlider/>
        </div>
      </AccordionItem>
      <AccordionItem title="Категория" key="2">
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

       <AccordionItem title="Бренд" key="3">
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

      <AccordionItem title="Цвет" key="4">
        <div className="flex flex-col space-y-2 mt-2">
            <ColorPicker colors={availableColors} selectedColors={selectedColors} onChange={setSelectedColors}/>
       
        </div>
      </AccordionItem>

      <AccordionItem title="Размер" key="5">
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

      <AccordionItem title="Пол" key="6">
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
