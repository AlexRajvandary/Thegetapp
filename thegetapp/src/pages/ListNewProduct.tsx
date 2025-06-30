import Header from '../components/Header';
import Footer from '../components/Footer';
import {
Autocomplete,
AutocompleteItem, 
Input,
Textarea,
Button
} from "@heroui/react";
import PhotoGrid from '../components/PhotoGrid';
import CurrencyWithFlags from '../components/CurrencyAutocomplete';
import TagSelector from '../components/TagSelector';


const clothingCategories = [
  { label: "T-Shirts", key: "tshirts", description: "Casual short-sleeved shirts" },
  { label: "Shirts", key: "shirts", description: "Formal or semi-formal tops" },
  { label: "Sweatshirts", key: "sweatshirts", description: "Warm casual tops" },
  { label: "Jackets", key: "jackets", description: "Outerwear for warmth and style" },
  { label: "Jeans", key: "jeans", description: "Denim pants for casual wear" },
  { label: "Trousers", key: "trousers", description: "Formal or casual long pants" },
  { label: "Shorts", key: "shorts", description: "Short pants for warm weather" },
  { label: "Dresses", key: "dresses", description: "One-piece garments for women" },
  { label: "Skirts", key: "skirts", description: "Lower-body garments" },
  { label: "Shoes", key: "shoes", description: "Footwear of all kinds" },
  { label: "Accessories", key: "accessories", description: "Bags, hats, belts, etc." },
];

const clothingSubcategories = [
  { label: "Basic", key: "basic", description: "Simple everyday style" },
  { label: "Sport", key: "sport", description: "Activewear and gym gear" },
  { label: "Business", key: "business", description: "Formal office wear" },
  { label: "Casual", key: "casual", description: "Relaxed, everyday look" },
  { label: "Evening", key: "evening", description: "Elegant, for going out" },
  { label: "Vintage", key: "vintage", description: "Retro and old-school style" },
  { label: "Streetwear", key: "streetwear", description: "Urban fashion style" },
  { label: "Outerwear", key: "outerwear", description: "Coats and jackets" },
  { label: "Underwear", key: "underwear", description: "Lingerie and base layers" },
];

const brands = [
  { label: "Nike", key: "nike", description: "Popular sportswear brand" },
  { label: "Adidas", key: "adidas", description: "Another big sportswear brand" },
  { label: "Zara", key: "zara", description: "Fast fashion brand" },
  { label: "H&M", key: "hm", description: "Affordable fashion" },
  { label: "Gucci", key: "gucci", description: "Luxury fashion house" },
  { label: "Levi's", key: "levis", description: "Famous for jeans" },
  { label: "Uniqlo", key: "uniqlo", description: "Casual and basics" },
];

const sizes = [
  { label: "XS", key: "xs", description: "Extra Small" },
  { label: "S", key: "s", description: "Small" },
  { label: "M", key: "m", description: "Medium" },
  { label: "L", key: "l", description: "Large" },
  { label: "XL", key: "xl", description: "Extra Large" },
  { label: "XXL", key: "xxl", description: "Double Extra Large" },
];

export default function ListNewProduct() {
    const itemClass =
    "!bg-transparent rounded-none hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white aria-selected:!bg-black aria-selected:!text-white";

  return (
    <>
      <Header />
      <div className="mx-[300px] my-[40px]">
        <div className="font-bold text-[30px]">Add a new listing</div>

        <form className="mt-[40px] space-y-8">
             <div>
    <h2 className="text-[24px] font-semibold mb-6">Details</h2>
    
    <div className="grid grid-cols-2 gap-6">
      {/* Category */}
      <div>
         <Autocomplete
              className="w-full"
              defaultItems={clothingCategories}
              placeholder="Category"
              variant="bordered"
              radius='none'
              classNames={{
                popoverContent: "rounded-none",
                listbox: "rounded-none",
              }}
            >
              {(item) => <AutocompleteItem key={item.key} className={itemClass}>{item.label}</AutocompleteItem>}
            </Autocomplete>
      </div>

      {/* Subcategory */}
      <div>
      <Autocomplete
              className="w-full"
              defaultItems={clothingSubcategories}
              placeholder="Subcategory"
              variant="bordered"
              radius='none'
              classNames={{
                popoverContent: "rounded-none",
                listbox: "rounded-none",
              }}
            >
              {(item) => <AutocompleteItem key={item.key} className={itemClass}>{item.label}</AutocompleteItem>}
            </Autocomplete>
      </div>

      {/* Brand */}
      <div>
         <Autocomplete
              className="w-full"
              defaultItems={brands}
              placeholder="Brand"
              variant="bordered"
              radius='none'
              classNames={{
                popoverContent: "rounded-none",
                listbox: "rounded-none",
              }}
            >
              {(item) => <AutocompleteItem key={item.key} className={itemClass}>{item.label}</AutocompleteItem>}
            </Autocomplete>
      </div>

      {/* Size */}
      <div>
        <Autocomplete
              className="w-full"
              defaultItems={sizes}
              placeholder="Size"
              variant="bordered"
              radius='none'
              classNames={{
                popoverContent: "rounded-none",
                listbox: "rounded-none",
              }}
            >
              {(item) => <AutocompleteItem key={item.key} className={itemClass}>{item.label}</AutocompleteItem>}
            </Autocomplete>
      </div>

        <div>
        <Autocomplete
              className="w-full"
              defaultItems={sizes}
              placeholder="Condition"
              variant="bordered"
              radius='none'
              classNames={{
                popoverContent: "rounded-none",
                listbox: "rounded-none",
              }}
            >
              {(item) => <AutocompleteItem key={item.key} className={itemClass}>{item.label}</AutocompleteItem>}
            </Autocomplete>
      </div>

      <div>
        <Autocomplete
              className="w-full"
              defaultItems={sizes}
              placeholder="Country of origin"
              variant="bordered"
              radius='none'
              classNames={{
                popoverContent: "rounded-none",
                listbox: "rounded-none",
              }}
            >
              {(item) => <AutocompleteItem key={item.key} className={itemClass}>{item.label}</AutocompleteItem>}
            </Autocomplete>
      </div>
    </div>
  </div>
          {/* Название */}
          <div className="w-1/2">
            <Input label="Title" type="string" radius='none'/>
          </div>
          {/* Цена*/}
          
          <div className="w-1/2">
  <div className="flex gap-2 items-end">
    <div className="w-[65%]">
      <Input label="Price" type="number" radius='none' />
    </div>
    <div className="w-[35%]">
      <CurrencyWithFlags />
    </div>
  </div>
</div>

  <div className="w-1/2">
            <Input label="Shipping from" type="string"  radius='none' />
          </div>
        <div className="w-1/2">
          <TagSelector/>
        </div>
          {/* Описание */}
          <div className="w-2/3">
            <Textarea label="Description" radius='none' placeholder="Add details about condition, how the garment fits, additional measurements, shipping policies, retail price, link to retail page, etc." />
          </div>

          {/* Картинка */}
          <div>
           <PhotoGrid/>
          </div>

       
        </form>
       
      </div>
       <div className="sticky bottom-0 bg-white z-50 w-full border-t flex gap-x-4 p-4 justify-end pr-[290px]">
  <Button className='bg-black text-white' radius='none'>
    Add Product
  </Button>

  <Button color="default" radius='none'>
    Save as draft
  </Button>
</div>
      <Footer />
    </>
  );
}
