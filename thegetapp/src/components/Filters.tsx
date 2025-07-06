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
const sizes = [
  {
    title: "Верх",
    values: ["XXS / 40", "XS / 42", "S / 44–46", "M / 48–50", "L / 52–54", "XL / 56", "XXL / 58"]
  },
  {
    title: "Низ",
    values: ["26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44"]
  },
  {
    title: "Верхняя одежда",
    values: ["XXS / 40", "XS / 42", "S / 44–46", "M / 48–50", "L / 52–54", "XL / 56", "XXL / 58"]
  },
  {
    title: "Обувь",
    values: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14", "15"]
  },
  {
    title: "Костюмы и пиджаки",
    values: [
      "34S", "34R", "36S", "36R", "38S", "38R", "38L",
      "40S", "40R", "40L", "42S", "42R", "42L", "44S",
      "44R", "44L", "46S", "46R", "46L", "48S", "48R",
      "48L", "50S", "50R", "50L", "52S", "52R", "52L", "54R", "54L"
    ]
  },
  {
    title: "Аксессуары",
    values: ["OS", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46"]
  }
];

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

      

      <AccordionItem title="Размер" key="5" className="pl-[10px] pb-[20px]">
        <div className="flex flex-col space-y-2">
            {sizes.map(({ title, values }) => (
      <SizeGridMultiSelect
        key={title}
        header={title}
        sizes={values}
        selectedSizes={selectedSizes}
        toggleSelection={toggleSelection}
        setSelectedSizes={setSelectedSizes}
      />
    ))}
         
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
