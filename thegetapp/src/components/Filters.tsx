import React from "react";
import { Accordion, AccordionItem, Checkbox, CheckboxGroup, Tab, Tabs } from "@heroui/react";
import ColorPicker from "./ColorPicker";
import PriceRangeSlider from "./SliderHistogram";
import SizeGridMultiSelect from "./SizeSelector";

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

const shoesCategories = ["Кеды", "Кроссовки", "Спортивная обувь", "Тапки", "Туфли", "Сапоги"];
const clothsCategories = ["Футболки", "Верхняя одежда", "Свитшоты", "Худи", "Кепки и шапки", "Штаны и джинсы", "Для спорта"];
const accessoriesCategories = ["Сумки и рюкзаки", "Часы", "Кошельки и портмоне", "Ремни", "Очки", "Шарфы", "Украшения", "Другое"];
const brands = ["Adidas", "Nike" , "Rebook"];
const availableColors = [
    "black",
    "white",
    "gray",
    "#006FEE",
    "#17C964",
    "#F5A524",
    "#8b5cf6", // фиолетовый
    "#F31260", // розовый
  ];
const sizes = ["XXXS","XXS","XS","S", "M", "L", "XL", "XXL", "XXXL"];
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
    <Accordion variant="shadow" selectionMode="multiple" defaultExpandedKeys={["1", "2", "3"]}>
        <AccordionItem title="Цена" key="1" className="pl-[10px]">
        <div>
        <PriceRangeSlider/>
        </div>
      </AccordionItem>
      <AccordionItem title="Категория" key="2" className="pl-[10px]">
        <div className="flex flex-col justify-center space-y-2 mt-2">
          <Tabs className="flex justify-center">
            <Tab title="Обувь">
                <CheckboxGroup className="ml-[30px] mb-[10px]">
                 {shoesCategories.map((cat) => (
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
            </Tab>
            <Tab title="Одежда">
                <CheckboxGroup className="ml-[30px] mb-[30px]">
                 {clothsCategories.map((cat) => (
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
            </Tab>
            <Tab title="Аксессуары">
                <CheckboxGroup className="ml-[30px] mb-[30px]">
                 {accessoriesCategories.map((cat) => (
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
            </Tab>
            
          </Tabs>
        </div>
      </AccordionItem>

      <AccordionItem title="Цвет" key="3" className="pl-[10px]">
        <div className="flex flex-col space-y-2 px-[30px] mb-[30px]">
            <ColorPicker colors={availableColors} selectedColors={selectedColors} onChange={setSelectedColors}/>
       
        </div>
      </AccordionItem>

       <AccordionItem title="Бренд" key="4" className="pl-[10px]">
        <div className="flex flex-col space-y-2 mt-2">
            <CheckboxGroup className="ml-[30px] mb-[30px]">
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

      

      <AccordionItem title="Размер" key="5" className="pl-[10px]">
        <div className="flex flex-col space-y-2">
            
            <SizeGridMultiSelect
              sizes={sizes}
              selectedSizes={selectedSizes}
              toggleSelection={toggleSelection}
              setSelectedSizes={setSelectedSizes}
            />
         
        </div>
      </AccordionItem>

      <AccordionItem title="Пол" key="6" className="pl-[10px]">
        <div className="flex flex-col space-y-2 mx-[30px] mb-[30px]">
            <CheckboxGroup>
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
