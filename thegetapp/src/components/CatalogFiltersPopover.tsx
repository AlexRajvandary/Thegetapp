import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  RadioGroup,
  Radio,
  Slider,
} from "@heroui/react";

import SearchInput from "./SearchInput";
import TagSelector from "./TagSelector";

type Filters = {
  section: string;
  brand: string;
  priceRange: [number, number];
  condition: string;
  location: string;
};

type CatalogFiltersProps = {
  filters: Filters;
  onChange: (value: Partial<Filters>) => void;
};

export default function CatalogFiltersPopover({ filters, onChange }: CatalogFiltersProps) {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center">
      {/* Section */}
      <Popover placement="bottom" radius="none" className="shadow-md">
        <PopoverTrigger>
          <Button variant="ghost" className="border text-sm rounded-none">
            Section
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-64">
          <RadioGroup
            value={filters.section}
            onChange={(e) => onChange({ section: e.target.value })}
            size="sm"
            className="text-sm"
          >
            <Radio value="all">All</Radio>
            <Radio value="mens">Mens</Radio>
            <Radio value="womens">Womenswear</Radio>
            <Radio value="kids">Kids</Radio>
            <Radio value="sales">Sales</Radio>
          </RadioGroup>
        </PopoverContent>
      </Popover>

      {/* Brand */}
      <Popover placement="bottom" radius="none" className="shadow-md">
        <PopoverTrigger>
          <Button variant="ghost" className="border text-sm rounded-none">
            Brand
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-72 max-h-[300px] overflow-y-auto">
          <SearchInput />
          <RadioGroup
            value={filters.brand}
            onChange={(e) => onChange({ brand: e.target.value })}
            size="sm"
            className="text-sm mt-2"
          >
            {[
              "All", "Nike", "Jordan Brand", "Adidas", "Balenciaga", "Vintage", "Streetwear",
              "Vans", "New Balance", "Puma", "Gucci", "Valentino", "Christian Louboutin",
              "Asics", "Maison Margiela", "Saint Laurent Paris",
            ].map((brand) => (
              <Radio key={brand} value={brand}>{brand}</Radio>
            ))}
          </RadioGroup>
        </PopoverContent>
      </Popover>

      {/* Price */}
      <Popover placement="bottom" radius="none" className="shadow-md">
        <PopoverTrigger>
          <Button variant="ghost" className="border text-sm rounded-none">
            Price
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-64">
          <Slider
            label="Price Range"
            value={filters.priceRange}
            onChange={(value) => onChange({ priceRange: value as [number, number] })}
            maxValue={10000}
            minValue={0}
            step={10}
            formatOptions={{ style: "currency", currency: "USD" }}
          />
        </PopoverContent>
      </Popover>

      {/* Condition */}
      <Popover placement="bottom" radius="none" className="shadow-md">
        <PopoverTrigger>
          <Button variant="ghost" className="border text-sm rounded-none">
            Condition
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-56">
          <RadioGroup
            value={filters.condition}
            onChange={(e) => onChange({ condition: e.target.value })}
            size="sm"
            className="text-sm"
          >
            <Radio value="All">All</Radio>
            <Radio value="New">New/Never Worn</Radio>
            <Radio value="Used">Gently Used</Radio>
            <Radio value="Very">Very Worn</Radio>
          </RadioGroup>
        </PopoverContent>
      </Popover>

      {/* Location */}
      <Popover placement="bottom" radius="none" className="shadow-md">
        <PopoverTrigger>
          <Button variant="ghost" className="border text-sm rounded-none">
            Location
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-60">
          <RadioGroup
            value={filters.location}
            onChange={(e) => onChange({ location: e.target.value })}
            size="sm"
            className="text-sm"
          >
            <Radio value="All">All</Radio>
            <Radio value="Asia">Asia</Radio>
            <Radio value="US">United States</Radio>
            <Radio value="Europe">Europe</Radio>
            <Radio value="Canada">Canada</Radio>
            <Radio value="Australia/NZ">Australia</Radio>
            <Radio value="UK">United Kingdom</Radio>
            <Radio value="Other">Other</Radio>
          </RadioGroup>
        </PopoverContent>
      </Popover>

      {/* Tags */}
      <Popover placement="bottom" radius="none" className="shadow-md">
        <PopoverTrigger>
          <Button variant="ghost" className="border text-sm rounded-none">
            Tags
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-72">
          <TagSelector allowCustomTags={false} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
