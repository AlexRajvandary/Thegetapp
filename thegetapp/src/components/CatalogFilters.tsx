import { Accordion, AccordionItem, Radio, RadioGroup, Slider } from "@heroui/react";
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

export default function CatalogFilters({ filters, onChange }: CatalogFiltersProps) {
  return (
    <aside className="w-[200px] bg-white shadow p-4 h-fit sticky top-[100px] self-start">
      <Accordion defaultExpandedKeys={["2"]} selectionMode="multiple">
        {/* Section */}
        <AccordionItem
          key="1"
          aria-label="Section"
          title="Section"
          classNames={{ title: "text-sm font-semibold" }}
        >
          <RadioGroup
            className="text-sm mb-2"
            size="sm"
            value={filters.section}
            onChange={(e) => onChange({ section: e.target.value })}
          >
            <Radio value="all" size="sm">All</Radio>
            <Radio value="mens" size="sm">Mens</Radio>
            <Radio value="womens" size="sm">Womenswear</Radio>
            <Radio value="kids" size="sm">Kids</Radio>
            <Radio value="sales" size="sm">Sales</Radio>
          </RadioGroup>
        </AccordionItem>

        {/* Brand */}
        <AccordionItem
          key="2"
          aria-label="Brand"
          title="Brand"
          classNames={{ title: "text-sm font-semibold" }}
        >
          <RadioGroup
            label={<SearchInput />}
            className="text-sm mb-2"
            size="sm"
            value={filters.brand}
            onChange={(e) => onChange({ brand: e.target.value })}
          >
            {[
              "All","Nike", "Jordan Brand", "Adidas", "Balenciaga", "Vintage", "Streetwear",
              "Vans", "New Balance", "Puma", "Gucci", "Valentino", "Christian Louboutin",
              "Asics", "Maison Margiela", "Saint Laurent Paris"
            ].map((brand) => (
              <Radio key={brand} value={brand} size="sm">{brand}</Radio>
            ))}
          </RadioGroup>
        </AccordionItem>

        {/* Price */}
        <AccordionItem
          key="5"
          aria-label="Price"
          title="Price"
          classNames={{ title: "text-sm font-semibold" }}
        >
          <Slider
            className="max-w-md"
            value={filters.priceRange}
            onChange={(value) =>
              onChange({ priceRange: value as [number, number] })
            }
            formatOptions={{ style: "currency", currency: "USD" }}
            label="Price Range"
            maxValue={10000}
            minValue={0}
            step={1}
            size="sm"
          />
        </AccordionItem>

        {/* Condition */}
        <AccordionItem
          key="6"
          aria-label="Condition"
          title="Condition"
          classNames={{ title: "text-sm font-semibold" }}
        >
          <RadioGroup
            className="text-sm mb-2"
            size="sm"
            value={filters.condition}
              onChange={(e) => onChange({ condition: e.target.value })}
          >
            <Radio value="All" size="sm">All</Radio>
            <Radio value="New" size="sm">New/Never Worn</Radio>
            <Radio value="Used" size="sm">Gently Used</Radio>
            <Radio value="Very" size="sm">Very Worn</Radio>
          </RadioGroup>
        </AccordionItem>

        {/* Location */}
        <AccordionItem
          key="8"
          aria-label="Location"
          title="Location"
          classNames={{ title: "text-sm font-semibold" }}
        >
          <RadioGroup
            className="text-sm mb-2"
            size="sm"
            value={filters.location}
              onChange={(e) => onChange({ location: e.target.value })}
          >
            <Radio value="All" size="sm">All</Radio>
            <Radio value="Asia" size="sm">Asia</Radio>
            <Radio value="US" size="sm">United States</Radio>
            <Radio value="Europe" size="sm">Europe</Radio>
            <Radio value="Canada" size="sm">Canada</Radio>
            <Radio value="Australia/NZ" size="sm">Australia</Radio>
            <Radio value="UK" size="sm">United Kingdom</Radio>
            <Radio value="Other" size="sm">Other</Radio>
          </RadioGroup>
        </AccordionItem>

          <AccordionItem
          key="9"
          aria-label="Tags"
          title="Tags"
          classNames={{ title: "text-sm font-semibold" }}
        >
         <TagSelector allowCustomTags={false}/>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
