import "../styles.css";
import type { JSX } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel"
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel"
import Footer from '../components/Footer';
import CategorySection from "../components/CategorySection";
import React, { useEffect, useState } from "react";
import LogoTheGetBalloons from "../components/Logo";
import ProductGrid from "../components/ProductGrid";
import { Pagination, Select, SelectItem } from "@heroui/react";
import CatalogFiltersPopover from "../components/CatalogFiltersPopover";
import { useLocation, useNavigate } from "react-router-dom";

type SearchIconProps = {
  size?: number;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
  [key: string]: unknown;  // для остальных props (если нужны)
};

export const SearchIcon: React.FC<SearchIconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

type Filters = {
  section: string;
  category: string;
  brand: string;
  priceRange: [number, number];
  condition: string;
  location: string;
};

function normalizeFilterValue(value: string | null, defaultValue: string) {
  if (!value) return defaultValue;
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export default function App() {

 const products = [
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    title: "Dior",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/7091b3adf6b0496795fe9bf0af550a9d?w=800",
    title: "Enfants Riches Deprimes",
    label: "New",
    category: "T-Shirt",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/e1fb8280f2a645b9b7735ba29be88bdd?w=800",
    title: "Dior Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/48549855/b40a8af8b5ec4e3295dd5cda53501b1f?w=800",
    title: "Ballenciaga",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/df113a4515bf442295a74f9199c93020?w=800",
    title: "Monclere",
    label: "Bestseller",
    category: "Moncler Maya Jacket",
    price: "549.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
  // другие карточки...
];
const imageUrls = [
  "https://images.ctfassets.net/bdvz0u6oqffk/14JslSfkm5ns5KNHTBzUrv/551583ef6795a046e688ab01b5a0349a/Best-of-Jerseys-desktop.jpg",
  "https://images.ctfassets.net/bdvz0u6oqffk/6noZNgqPbLeLihFEt7StGR/2154838cdf55d45699364791f4b3c76b/Emerging-desktop.jpg",
  "https://images.ctfassets.net/bdvz0u6oqffk/MK894FrtGC9Evdpi7OweG/1452248bd227e07506de000f28c70e1c/Trompe-loeil-desktop.jpg"
]



 const location = useLocation();
  const navigate = useNavigate();
 
  console.log(location.search);

  const [filters, setFilters] = useState<Filters>({
    section: "All",
    category: "All",
    brand: "Nike",
    priceRange: [100, 5000],
    condition: "All",
    location: "All",
  });

  useEffect(() => {
    
   const params = new URLSearchParams(location.search);
    setFilters({
      section: normalizeFilterValue(params.get("section") , "All"),
      category: normalizeFilterValue(params.get("category") , "All"),
      brand: normalizeFilterValue(params.get("brand") , "All"),
      priceRange: [
        Number(params.get("priceMin")) || 100,
        Number(params.get("priceMax")) || 5000,
      ],
      condition: normalizeFilterValue(params.get("condition") , "All"),
      location: normalizeFilterValue(params.get("location") , "All"),
    });
  }, [location.search]);

  const onFiltersChange = (changedFilters: Partial<Filters>) => {
    const newFilters = { ...filters, ...changedFilters };
    setFilters(newFilters);

    const params = new URLSearchParams();

    if (newFilters.section !== "All") params.set("section", newFilters.section);
    if (newFilters.brand !== "Nike") params.set("brand", newFilters.brand);
    if (newFilters.priceRange[0] !== 100) params.set("priceMin", String(newFilters.priceRange[0]));
    if (newFilters.priceRange[1] !== 5000) params.set("priceMax", String(newFilters.priceRange[1]));
    if (newFilters.condition !== "All") params.set("condition", newFilters.condition);
    if (newFilters.location !== "All") params.set("location", newFilters.location);

    navigate(`/catalog?${params.toString()}`, { replace: true });
  };

  return (
    <div>
     <div className="w-full flex pl-[35px] py-[30px] bg-transparent mx-4 sm:mx-0 sm:justify-center">
  <LogoTheGetBalloons />
</div>      
    
        <div className="grid grid-cols-2 gap-2.5 px-2">
  {products.map(product => (
   <div
  key={product.href}
  className="bg-white rounded flex flex-col p-1"
>
  
  <img
    src={product.imageSrc}
    alt={product.title}
    className="w-full h-32 object-cover rounded"
  />
  <div className="flex flex-col mb-2">
    <span className="font-bold text-left text-lg text-black">{product.price}</span>
    <span className="text-sm text-gray-500">{product.title}</span>
  </div>
</div>

  ))}
</div>

   
      </div>
    
  );
}